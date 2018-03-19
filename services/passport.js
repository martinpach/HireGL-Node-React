const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('./config');
const mongoose = require('mongoose');

const User = mongoose.model('users');

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authentication'),
    secretOrKey: config.jwtSecret
};

const localOptions = {
    usernameField: 'username',
    passwordField: 'password'
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
    User.findById(payload.sub, (err, user) => {
        if (err) { return done(err, false); }

        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

const localLogin = new LocalStrategy(localOptions, (username, password, done) => {
    User.findOne({ username }, (err, user) => {
        if (err) { return done(err); }
        if (!user) {return done(null, false); }
        
        user.comparePassword(password, (err, isMatch) => {
            if (err) { return done(err); }
            if (!isMatch) return done(null, false);

            return done(null, user);
        })
    });
});

passport.use(jwtLogin);
passport.use(localLogin);