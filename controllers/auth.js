const jwt = require('jwt-simple');
const config = require('../services/config');
const mongoose = require('mongoose');

const User = mongoose.model('User');



const tokenForUser = user => jwt.encode({ sub: user.id, iat: new Date().getTime() }, config.jwtSecret);

module.exports = {
    login(req, res) {
        const { user } = req;

        const response = {
            token: tokenForUser(user)
        }
        res.send(response);
    },
    async register(req, res, next) {
        const { username, password, email, firstName, lastName } = req.body;
        try {
            const existingUser = await User.findOne({ username });
            if (existingUser) {
                return res.status(422).send({ error: 'Email is in use' });
            }
            const user = new User({
                username,
                password,
                email,
                firstName,
                lastName
            });

            await user.save();
            res.status(200).send();

        } catch (error) {
            return next(err);
        }
    },
    getUser(req, res, next) {
        res.send(req.user);
    }
}