const express = require('express');
const router = require('./router');
var cors = require('cors');
const errorHandler = require('./middlewares/error.handler.mw');
const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', router);

app.use(errorHandler);

module.exports = app;