const app  = require("./api/index")

const path = require("path");
const express = require('express');

require('dotenv').config()



app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.set("view engine", "ejs",);
app.engine('ejs', require('ejs').__express);

app.set("views", [path.join(__dirname, 'views')]);
const port = process.env.PORT;
app.listen(port, ()=>{
        // console.log('Server is now live at --- %chttp://localhost:'+port, 'background: #222; color: #bada55'); //chrome
        console.log('Server is now live at --- \u001b[1;32m http://localhost:'+port)
})