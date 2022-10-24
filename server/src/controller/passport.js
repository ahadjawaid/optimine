const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config');

const User = mongoose.model('user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findOne({ id: id })
        .then(user => {
            done(null, user);
        });
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    scope: ['https://www.googleapis.com/oauth2/v3/userinfo.profile', 
            'https://www.googleapis.com/oauth2/v3/userinfo.email'],
    proxy: true
 }, async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ oAuthID: profile.id })
    if (existingUser) {
        return done(null, existingUser);
    } 
    
    const user = await new User({ 
        oAuthID: profile.id,
        email: profile.emails[0].value,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
    }).save() 
    
    done(null, user)
 }));