const express = require('express');
const app = express();

//////////////////////////////////////////////////////////////////////  HOME
const home = require('../routes/home')
app.use('/', home)
//////////////////////////////////////////////////////////////////////  BITLY
const bitly = require('../routes/bitlyAPI')
app.use('/bitly', bitly)

module.exports = app;