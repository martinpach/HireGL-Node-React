const express = require('express');
const router = express.Router();
const passportService = require('../services/passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const interviewsController = require('../controllers/interviews');

router.get('/', requireAuth, (req, res) => interviewsController.getInterviews(req, res));

router.post('/', requireAuth, (req, res) => interviewsController.createInterview(req, res));

module.exports = router;