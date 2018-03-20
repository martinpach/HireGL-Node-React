const express = require('express');
const router = express.Router();
const passportService = require('../services/passport');
const passport = require('passport');
const requireLogin = passport.authenticate('local', { session: false });
const authService = require('../services/auth');

router.post('/login', requireLogin, (req, res) => authService.login(req, res));

router.post('/register', (req, res, next) => authService.register(req, res, next));

module.exports = router;