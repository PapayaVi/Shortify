const express = require('express');
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require('uuid');
const path = require("path");
require('dotenv').config()

// const { shorten }= require('./js/bitly-API')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.set("view engine", "ejs",);
app.set("views", [path.join(__dirname, 'views'), path.join(__dirname, 'views/login-system')]);
app.use(express.static(__dirname + "/public"));

const port = process.env.PORT;
app.listen(port, ()=>{
        // console.log('Server is now live at --- %chttp://localhost:'+port, 'background: #222; color: #bada55'); //chrome
        console.log('Server is now live at --- \u001b[1;32m http://localhost:'+port)
})

//////////////////////////////////////////////////////////////////////  HOME
app.get('/home', (req, res) => {
        res.render("home");
})
//////////////////////////////////////////////////////////////////////  BITLY
const bitly = require('./routes/bitlyAPI')
app.use('/bitly', bitly);