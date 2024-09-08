const express = require('express');
const app = express();

//////////////////////////////////////////////////////////////////////  HOME
app.get('/', (req, res) => {
        res.render("home");
})
//////////////////////////////////////////////////////////////////////  BITLY
const bitly = require('../routes/bitlyAPI')
app.use('/bitly', bitly)

module.exports = app;