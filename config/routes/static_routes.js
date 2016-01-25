var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var staticsController = require('../../controllers/statics.js');

router.route('/')
	.get(staticsController.getIndex)

router.route('/login')
	.get(staticsController.getLogIn)

router.route('/signup')
	.get(staticsController.getSignUp)

router.route('/about')
	.get(staticsController.getAbout)

router.route('/resources')
	.get(staticsController.getResources)

router.route('/quiz')
	.get(staticsController.getQuiz)

module.exports = router