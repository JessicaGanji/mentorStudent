var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var apiController = require('../../controllers/apis.js');

router.route('/api')
	.get(staticsController.getIndex)

module.exports = router