const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const axios = require('axios');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use(express.static('views'));

app.set("view engine", "ejs",);

//////////////////////////////////////////////////////////////////////  HOME
app.get('/', (req, res) => {
        res.render("home");
})
//////////////////////////////////////////////////////////////////////  BITLY
// const bitly = require('../routes/bitlyAPI')
const shorten = async (token, link) => {
        try{
                const resp = await axios.post(`https://api-ssl.bitly.com/v4/bitlinks`,
                        {"long_url":link},
                        {headers:{'Authorization':`Bearer ${token}`}
                });
                return resp.data;
        }catch(error){
                console.log("error :" + error);
        }
}


app.get('/bitly', (req, res) => {
        var url = req.query.url
        shorten(process.env.BITLYAPITOKEN, url).then(result => {
                res.send(result.link)
        }).catch(err => {
                console.log(err);
                res.sendStatus(501);
        });
})
module.exports = app;