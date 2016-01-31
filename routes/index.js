var express = require('express');
var api = require('./api.js');

var router = express.Router();

router.use('/api', api);

module.exports = router;