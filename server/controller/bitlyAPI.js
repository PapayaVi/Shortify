const axios = require('axios');
require('dotenv').config()

const shorten = async (token, link) => {
        try{
                const resp = await axios.post(`https://api-ssl.bitly.com/v4/bitlinks`,
                        {"long_url":link},
                        {headers:{'Authorization':`Bearer ${token}`}
                });
                return resp.data;
        }catch(error){
                console.log("Error : "+error.status);
        }
}

exports.shortenLink = (req, res) => {
        var url = req.query.url
        shorten(process.env.BITLYAPITOKEN, url).then(result => {
               if(typeof result !== "undefined"){
                        res.send(result.link)
               }else{
                        res.sendStatus(429);
               }
        }).catch(err => {
                res.sendStatus(500);
        });
};