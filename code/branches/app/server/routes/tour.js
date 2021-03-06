const express = require('express');
const router = express.Router();
const passport = require('passport');
const request = require('request-promise');
const promisify = require('util').promisify;

// models
const User = require('../models').user;

const requestPromise = promisify(request);
const {
    FOURSQUARE_API_URL,
    FOURSQUARE_API_CONFIG,
} = require('../config/apiConfig')

const getItenaryDraft = async (city, interests) => {
    return await Promise.all(interests.map(async preference => {
        const res = await requestPromise({
            url: `${FOURSQUARE_API_URL}/search/recommendations`,
            method: 'GET',
            qs: {
                client_id: FOURSQUARE_API_CONFIG.clientId,
                client_secret: FOURSQUARE_API_CONFIG.clientSecret,
                categoryId: preference,
                near: city,
                limit: 5,
                sortByPopularity: 1,
                v: FOURSQUARE_API_CONFIG.version
            }
        })
        return {
            items: JSON.parse(res.body).response.group.results
        }

    }))
}

/**
 * Gets meals recommendation in the city. meal is one of [breakfast, lunch, dinner]
 * @param {*} meal 
 * @param {*} city 
 */
const getMealRecommendation = async (meal, city) => {
    const response = await requestPromise({
        url: `${FOURSQUARE_API_URL}/search/recommendations`,
        method: 'GET',
        qs: {
            client_id: FOURSQUARE_API_CONFIG.clientId,
            client_secret: FOURSQUARE_API_CONFIG.clientSecret,
            near: city,
            limit: 5,
            intent: meal,
            v: FOURSQUARE_API_CONFIG.version
        }
    })
    const responseObject = JSON.parse(response.body).response.group.results
    responseObject.map(item => item.selected = false)

    return responseObject
}

// Generate tour itenary for the day
router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const requestBody = req.body;
    const response = await getItenaryDraft(requestBody.city, requestBody.interests);
    
    const meals = await Promise.all(requestBody.meals.map(async meal => ({ [meal]: await getMealRecommendation(meal, requestBody.city)})));

    const user = await User.findByPk(req.user.id);
    await user.createTour({
        city: requestBody.city,
        preference: requestBody.interests.join(",")
    });

    res.send({ response, meals, status: res.statusCode });
})



module.exports = router
