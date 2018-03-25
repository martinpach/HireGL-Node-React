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
    register(req, res, next) {
        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;

        User.findOne({ username }, (err, existingUser) => {
            if (err) { return next(err); }

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

            user.save(err => {
                if (err) { return next(err); }

                res.status(200).send();
            });
        });
    },
    getUser(req, res, next) {
        res.send(req.user);
    }
}