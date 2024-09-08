const express = require('express'),
router = express.Router(),
_home = require('../controller/home')


router.get('/',_home.main);

module.exports = router;