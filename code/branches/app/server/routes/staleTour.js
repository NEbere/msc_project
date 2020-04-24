const express = require('express');
const router = express.Router();
const passport = require('passport');
const request = require('request-promise');
const promisify = require('util').promisify
const _ = require('lodash')

const requestPromise = promisify(request);
const {
    FOURSQUARE_API_URL,
    FOURSQUARE_API_CONFIG,
} = require('../config/apiConfig')
const User = require('../models').user
/**
 * Because the response from fourSquare API is always in arrays mostly
 * to avoid use of magic number zero throughout the code,
 * it will be declared here as arrayIndexZero.
 */
const arrayIndexZero = 0;

// get user profile
router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const city = req.body.city;
    const tourPreferences = req.body.interests;
    const tourPreferences2 = req.body.interests.join(',');

    const promises = tourPreferences.map(preference => {
        return requestPromise({
            url: `${FOURSQUARE_API_URL}/venues/explore`,
            method: 'GET',
            qs: {
                client_id: FOURSQUARE_API_CONFIG.clientId,
                client_secret: FOURSQUARE_API_CONFIG.clientSecret,
                categoryId: preference,
                near: city,
                limit: 2,
                sortByPopularity: 1,
                v: FOURSQUARE_API_CONFIG.version
            }
        })
    })

    const results = await Promise.all(promises).catch(error => console.log(error, 'error getting tour preference'));
    const resultObject = results.map(result => (JSON.parse(result.body)).response.groups[0].items)
    //    const items = (JSON.parse(result.body)).response.groups[0].items
    //    return (...items)


    //    return (JSON.parse(result.body)).response.groups
    // return items
    // })

    // const response = await promisify(request.get)({
    //     url: `${FOURSQUARE_API_URL}/explore`,
    //     method: 'GET',
    //     qs: {
    //         client_id: FOURSQUARE_API_CONFIG.clientId,
    //         client_secret: FOURSQUARE_API_CONFIG.clientSecret,
    //         categoryId: tourPreferences2,
    //         near: city,
    //         limit: tourPreferences.length,
    //         sortByPopularity: 1,
    //         v: FOURSQUARE_API_CONFIG.version
    //     }
    // })

    // const responseObject = JSON.parse(response.body)
    // res.send({ result: resultObject, status: response.statusCode, response: responseObject.response.groups });
    res.send({ response: _.concat(...resultObject) });
})











const sampleTourPreference = {
    tourCity: 'Berlin',
    breakfast: { query: 'pancakes' }, // or {}
    lunch: { query: 'pasta' }, // or {}
    diner: { query: 'ribs' }, // or {}
    clubbing: true, // or false
    clubbingCategoryId: '',
    interests: [
        "4bf58dd8d48988d18f941735",
        "4bf58dd8d48988d142941735",
        "4bf58dd8d48988d161941735",
        "4bf58dd8d48988d11f941735"
    ],
    tourStartTime: '09:00'
}

/**
 * takes brekfast query or '' if none and returns a place for breakfast
 * and an itenary item or two itenary items
 * @param {*} query 
 * @param {*} city 
 */
const getMealRecommendation = (query, city) => {
    
    return requestPromise({
        url: `${FOURSQUARE_API_URL}/search/recommendations`,
        method: 'GET',
        qs: {
            client_id: FOURSQUARE_API_CONFIG.clientId,
            client_secret: FOURSQUARE_API_CONFIG.clientSecret,
            near: city,
            limit: 1,
            query: query,
            intent: 'breakfast',
            v: FOURSQUARE_API_CONFIG.version
        }
    })
}


const getVenueByCategoryId = (categoryId, city, limit) => {
    return requestPromise({
        url: `${FOURSQUARE_API_URL}/venues/explore`,
        method: 'GET',
        qs: {
            client_id: FOURSQUARE_API_CONFIG.clientId,
            client_secret: FOURSQUARE_API_CONFIG.clientSecret,
            categoryId: categoryId,
            near: city,
            limit: limit,
            sortByPopularity: 1,
            v: FOURSQUARE_API_CONFIG.version
        }
    })
}




const createMorningItinerary = async () => {
    const breakfast = await getMealRecommendation(
        sampleTourPreference.breakfast.query, sampleTourPreference.tourCity
    )

    const morningiItems = await requestPromise({
        url: `${FOURSQUARE_API_URL}/venues/explore`,
        method: 'GET',
        qs: {
            client_id: FOURSQUARE_API_CONFIG.clientId,
            client_secret: FOURSQUARE_API_CONFIG.clientSecret,
            categoryId: sampleTourPreference.interests[0],
            near: sampleTourPreference.tourCity,
            limit: 1,
            sortByPopularity: 1,
            v: FOURSQUARE_API_CONFIG.version
        }
    })

    return {
        beakfast: (JSON.parse(breakfast.body)).response.group.results[0],
        items: (JSON.parse(morningiItems.body)).response.groups[0].items
    }
}

// use latlng of venues from breakfast for ll
const createAfternoonItinerary = async () => {
    const lunch = await getMealRecommendation(
        sampleTourPreference.lunch.query, sampleTourPreference.tourCity
    )
    const categories = sampleTourPreference.interests.slice(1, 3)

    console.log(categories, 'categories for createAfternoonItinerary')
    console.log(arrayIndexZero, 'arrayIndexZero=>');

    // const ll = `${lat},${lng}`
    const afternooniItemsPromises = await Promise.all(categories.map(preference => {
        return requestPromise({
            url: `${FOURSQUARE_API_URL}/venues/explore`,
            method: 'GET',
            qs: {
                client_id: FOURSQUARE_API_CONFIG.clientId,
                client_secret: FOURSQUARE_API_CONFIG.clientSecret,
                categoryId: preference,
                near: sampleTourPreference.tourCity,
                // ll,
                limit: 1,
                sortByPopularity: 1,
                v: FOURSQUARE_API_CONFIG.version
            }
        })
    }))

    const afternooniItems = afternooniItemsPromises.map(item => (
        JSON.parse(item.body).response.groups[arrayIndexZero].items[arrayIndexZero]
    ))

    return {
        lunch: JSON.parse(lunch.body),
        items: afternooniItems
    }
}

// use latlng of venues from breakfast for ll
const createEveningItinerary = async () => {
    const categories = sampleTourPreference.interests.slice(3, 4)

    const dinner = await getMealRecommendation(
        sampleTourPreference.diner.query, sampleTourPreference.tourCity
    )

    const eveningiItemsPromises = await Promise.all(categories.map(preference => {
        return requestPromise({
            url: `${FOURSQUARE_API_URL}/venues/explore`,
            method: 'GET',
            qs: {
                client_id: FOURSQUARE_API_CONFIG.clientId,
                client_secret: FOURSQUARE_API_CONFIG.clientSecret,
                categoryId: preference,
                near: sampleTourPreference.tourCity,
                // ll,
                limit: 1,
                sortByPopularity: 1,
                v: FOURSQUARE_API_CONFIG.version
            }
        })
    }))

    const eveningiItems = eveningiItemsPromises.map(item => (
        JSON.parse(item.body).response.groups[arrayIndexZero].items[arrayIndexZero]
    ))

    return {
        dinner: (JSON.parse(dinner.body)).response.group.results[arrayIndexZero],
        items: eveningiItems
    }
}

// Generate tour itenary for the day
router.post('/create', async (req, res) => {
    const requestBody = req.body
    console.log(requestBody, 'requestBody')

    const mornrningItinerary = await createMorningItinerary()
    const afternoonItinerary = await createAfternoonItinerary()
    const eveningItinerary = await createEveningItinerary()

    // res.send({ mornrningItinerary, afternoonItinerary, status: res.statusCode })
    // res.send({ afternoonItinerary, mornrningItinerary, status: res.statusCode })
    res.send({ mornrningItinerary, afternoonItinerary, eveningItinerary, status: res.statusCode })
})























// Create new user
router.post('/', async (req, res) => {
    const requestBody = req.body
    console.log(requestBody, 'requestBody')
    const response = await User.create(requestBody)
    res.send({ response: response, status: res.statusCode })
})

// get user profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.send({ user: req.user });
})

module.exports = router
