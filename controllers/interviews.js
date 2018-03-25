const mongoose = require('mongoose');
const Interview = mongoose.model('Interview');

module.exports = {
    async getInterviews(req, res, next) {
        let { limit, start } = req.query;
        limit = parseInt(limit);
        start = parseInt(start);

        try {
            const interviews = await Interview.find().skip(start).limit(limit).populate('interview.user');
            res.send(interviews);
        } catch (error) {
            next(error);
        }
    },
    async createInterview(req, res, next) {
        const { candidate, interview } = req.body;
        const { user } = req;

        interview.user = user;

        const newInterview = new Interview({
            candidate,
            interview
        });

        try {
            const savedInterview = await newInterview.save();

            res.send(savedInterview);            
        } catch (error) {
            next(error);
        }
    }
}   