const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('./models/User');

const authController = require('./controllers/auth');

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use('/auth', authController);

app.listen(5000);