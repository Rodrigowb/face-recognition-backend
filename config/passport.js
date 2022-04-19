// Imorting passport requirements
import passport from "passport"
import passportJWT from "passport-jwt"

// Setting variables
const ExtractJwt = passportJWT.ExtractJwt
const Strategy = passportJWT.Strategy

// Importing config files 
import config from './config.js'

// Import mongoose model
import usersModel from "../models/users.js"
import { authenticate, initialize } from "passport/lib"
const User = usersModel.model('User')

// Importing and defining the keys locally
const params = {
  secretOrKey: config.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

// Function for passport
module.exports = function () {
  let strategy = new Strategy(params, (payload, callback) => {
    let user = User.findById(payload.id) || null
    if (user) {
      return callback(null, { id: user.id })
    } else {
      return callback(new Error('User not found'), null)
    }
  })

  passport.use(strategy)

  return {
    initialize: function () {
      return passport.initialize()
    },
    authenticate: function () {
      return passport.authenticate('jwt', { session: false })
    }
  }
}




