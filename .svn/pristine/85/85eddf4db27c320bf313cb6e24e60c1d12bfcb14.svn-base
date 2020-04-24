var express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport');
const responseTime = require('response-time')
const { healthRoute, userRoute, tourRoute } = require('./routes')


const app = express();
app.use(cors())
app.options('*', cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(responseTime())

// Use passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/', healthRoute)
app.use('/users', userRoute)
app.use('/tour', tourRoute)

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Start the server...
const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening on port ${server.address().port}`)
})

module.exports = server
