const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");


// const { shorten }= require('./js/bitly-API')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use(express.static('views'));

app.set("view engine", "ejs",);
app.set("views", ['views', 'views/login-system']);


console.log(__dirname)
//////////////////////////////////////////////////////////////////////  HOME
app.get('/home', (req, res) => {
        res.render("home");
})
//////////////////////////////////////////////////////////////////////  BITLY
const bitly = require('../routes/bitlyAPI')
app.use('/bitly', bitly);

module.exports = app;