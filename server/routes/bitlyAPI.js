const express = require('express'),
router = express.Router(),
_bitly = require('../controller/bitlyAPI')

require('dotenv').config()


router.get('/',_bitly.shortenLink);
// router.post('/new-data',_bitly.postData_new);

module.exports = router;