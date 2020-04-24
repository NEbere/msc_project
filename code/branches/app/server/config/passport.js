const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models').user

const dbSecret =  '9fa0fa96-7758-11e9-8f9e-2a86e4085a59';

module.exports = function (passport) {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = dbSecret;
  
  passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    const user = await User.findOne({where: {id: jwt_payload.id}, raw: true})

    return done(null, user)

  }));
}
