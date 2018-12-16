/*
|--------------------------------------------------------------------------
| auth.js
|--------------------------------------------------------------------------
|
| This module adds login authentication into the express app.
|
*/

module.exports = (app) => {

    const passport = require('passport');
    const LocalStrategy = require('passport-local').Strategy;
    const User = require('./../../models/User');

    passport.use(new LocalStrategy((email, password, done) => {

        User.findOne({ email: email }, function (err, user) {

            if (err) return done(err);

            if (! user) return done(null, false, { message: 'Incorrect username.' });

            if (! user.validPassword(password)) return done(null, false, { message: 'Incorrect password.' });

            return done(null, user);
        });
    }));

}