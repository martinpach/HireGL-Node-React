const express = require('express');
const router = express.Router();
const passportService = require('../services/passport');
const passport = require('passport');
const requireLogin = passport.authenticate('local', { session: false });
const authService = require('../controllers/auth');
const requireAuth = passport.authenticate('jwt', { session: false });

router.post('/login', requireLogin, (req, res) => authService.login(req, res));

router.get('/logout', requireAuth, (req, res) => res.status(200).send());

router.post('/register', (req, res, next) => authService.register(req, res, next));

module.exports = router;