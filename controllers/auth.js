const express = require('express');
const router = express.Router();
const passportService = require('../services/passport');
const passport = require('passport');
const requireLogin = passport.authenticate('local', { session: false });
const jwt = require('jwt-simple');
const config = require('../services/config');

const tokenForUser = user => jwt.encode({ sub: user.id, iat: new Date().getTime() }, config.jwtSecret);

router.post('/login', requireLogin, (req, res) => {
    const { user } = req;

    const response = {
        user: {
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            email: user.email
        },
        token: tokenForUser(user)
    }

    res.send();
});

module.exports = router;