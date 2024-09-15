
const express = require('express');
const app  = express()
require('dotenv').config()
const path = require("path");
const axios = require('axios');
const bodyParser = require("body-parser");
const rateLimit = require('express-rate-limit');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.set("view engine", "ejs",);
app.set("views", path.join(__dirname,'/../views'));

const limiter = rateLimit({
        windowMs: 3 * 24 * 60 * 60 * 1000, // 1 request per 3 days
        max: 10,
        delayMs: 0
});


//////////////////////////////////////////////////////////////////////  HOME
const home = require('../routes/home')
app.use('/', home)
//////////////////////////////////////////////////////////////////////  BITLY
const bitly = require('../routes/bitlyAPI')
app.use('/bitly', bitly)

const port = process.env.PORT;
app.listen(3000 || port, ()=>{
        // console.log('Server is now live at --- %chttp://localhost:'+port, 'background: #222; color: #bada55'); //chrome
        console.log('Server is now live at --- \u001b[1;32m http://localhost:'+port)
})
