var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//var passport = require("passport");
var mentorsController = require('./controllers/mentors');

router.route('/')
	.get(mentorsController.getIndex)
	.post(mentorsController.postProfile)

router.route('/:id')
	.get(mentorsController.getShow)
	.patch(mentorsController.patchProfile)
	.delete(mentorsController.deleteProfile)

