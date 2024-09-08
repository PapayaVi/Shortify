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
                console.log("error :" + error);
        }
}

exports.shortenLink = (req, res) => {
        var url = req.query.url
        shorten(process.env.BITLYAPITOKEN, url).then(result => {
                console.log(result)
        }).catch(err => {
                console.log(err);
                res.sendStatus(501);
        });
};
// res.send(result.link)