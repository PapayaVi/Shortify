const express = require('express');
const app = express();

const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.set("view engine", "ejs",);
app.engine('ejs', require('ejs').__express);

app.set("views", [path.join(__dirname, 'views')]);
app.use(express.static(__dirname + "/public"));
//////////////////////////////////////////////////////////////////////  HOME
app.get('/', (req, res) => {
        res.render("home");
})
//////////////////////////////////////////////////////////////////////  BITLY
const bitly = require('../routes/bitlyAPI')
app.use('/bitly', bitly)

module.exports = app;