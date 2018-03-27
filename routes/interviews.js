const express = require('express');
const router = express.Router();
const passportService = require('../services/passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const interviewsController = require('../controllers/interviews');

router.get('/', requireAuth, (req, res, next) => interviewsController.getInterviews(req, res, next));

router.post('/', requireAuth, (req, res, next) => interviewsController.createInterview(req, res, next));

router.get('/count', requireAuth, (req, res, next) => interviewsController.getNumberOfInterviews(req, res, next));

module.exports = router;