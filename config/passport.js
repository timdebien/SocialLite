const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')

module.exports = function(passport) {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
       const newUser = {
        googleId: profile.id,
        displayName: profile.displayName,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        image: profile.photos[0].value
       }
    // console.log(profile)

       try {
            let user = await User.findOne({googleId: profile.id})
            if(user) {
                done(null, user)
            } else {
                user = await User.create(newUser)
                done(null, user)
            }
       }catch (err) {
            console.error(err)
       }
    }
    ))
////**!!**change from call back to async await or wont work
    passport.serializeUser((user,done) => {
        done(null, user.id)
        return user.id
    })

    passport.deserializeUser(async(id, done) => {
        const user = await User.findById(id);
        done(null, user);
        return user
      })
}

