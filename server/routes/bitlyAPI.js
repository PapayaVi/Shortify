const express = require('express'),
router = express.Router(),
_bitly = require('../controller/bitlyAPI')


router.get('/',_bitly.shortenLink);

module.exports = router;