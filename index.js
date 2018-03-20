const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hiregl');
require('./models/User');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const authController = require('./controllers/auth');


app.use(morgan('combined'));
app.use(bodyParser.json());
app.use('/api/auth', authController);

app.listen(5000);