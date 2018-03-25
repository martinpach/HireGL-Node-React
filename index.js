const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hiregl');
require('./models/User');
require('./models/Interview');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const authController = require('./routes/auth');
const interviewsController = require('./routes/interviews');


app.use(morgan('combined'));
app.use(bodyParser.json());
app.use('/api/auth', authController);
app.use('/api/interviews', interviewsController);

app.listen(5000);