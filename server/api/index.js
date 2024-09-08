
const express = require('express');
const app  = express()
require('dotenv').config()
const path = require("path");
const axios = require('axios');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));
// app.use(express.static('views'));


app.set("view engine", "ejs",);
app.set("views", path.join(__dirname,'/../views'));

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/test", (req, res) => {
  res.send("hello")
})
app.get("/test2", (req, res) => {
        res.render("home")
})
//////////////////////////////////////////////////////////////////////  HOME
const home = require('../routes/home')
app.use('/home', home)
//////////////////////////////////////////////////////////////////////  BITLY
const bitly = require('../routes/bitlyAPI')
app.use('/bitly', bitly)

const port = process.env.PORT;
app.listen(3000 || port, ()=>{
        // console.log('Server is now live at --- %chttp://localhost:'+port, 'background: #222; color: #bada55'); //chrome
        console.log('Server is now live at --- \u001b[1;32m http://localhost:'+port)
})
