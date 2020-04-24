const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const promisify = require('util').promisify

const dbSecret = '9fa0fa96-7758-11e9-8f9e-2a86e4085a59';

// models
const User = require('../models').user

// Create new user
router.post('/', async (req, res) => {
  const requestBody = req.body;
  const response = await User.create(requestBody);

  res.send({ response: response, status: res.statusCode })
})

// User login
router.post('/login', async (req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({
    where: { email: email },
    raw: true
  }).catch(error => {
    res.send({ error: error, status: res.statusCode })
  })


  const isMatch = await promisify(bcrypt.compare)(password, user.password)

  if (isMatch) {
    const token = jwt.sign(user, dbSecret, {
      expiresIn: 604800 // 1 week
    });

    // Don't include the password in the returned user object
    return res.send({
      success: true,
      token: 'JWT ' + token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      }
    });
  }
  else {
    return res.status(400).json({ success: false, msg: 'Wrong password.' });
  }
});

// get user profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.send({ user: req.user });
})


// update user profile
router.put('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = await User.findByPk(userId)

  const response = await user.update({
    firstName: req.body.firstName ? req.body.firstName : user.firstName,
    lastName: req.body.lastName ? req.body.lastName : user.lastName,
    dateOfBirth: req.body.dateOfBirth ? req.body.dateOfBirth : user.dateOfBirth,
    gender: req.body.gender ? req.body.gender : user.gender,
    email: req.body.email ? req.body.email : user.email
  })

  res.send({ response, status: res.statusCode })
})

module.exports = router
