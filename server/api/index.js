
const express = require('express');
const app  = express()
require('dotenv').config()
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use(express.static('views'));


app.set("view engine", "ejs",);
app.set("views", 'views');

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/test", (req, res) => {
  res.render("home")
})
//////////////////////////////////////////////////////////////////////  HOME
const home = require('../routes/home')
app.use('/home', home)
//////////////////////////////////////////////////////////////////////  BITLY
const bitly = require('../routes/bitlyAPI')
app.use('/bitly', bitly)

const port = process.env.PORT;
app.listen(port, ()=>{
        // console.log('Server is now live at --- %chttp://localhost:'+port, 'background: #222; color: #bada55'); //chrome
        console.log('Server is now live at --- \u001b[1;32m http://localhost:'+port)
})
