var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require("passport");
var mentorsController = require('../../controllers/mentors');

router.route('/')
	.get(mentorsController.getIndex)

router.route('/signup')
	.get(mentorsController.getSignup)
	.post(mentorsController.postSignup)

router.route('/login')
	.get(mentorsController.getLogin)
	.post(mentorsController.postLogin)

router.route('/logout')
	.get(mentorsController.getLogout)

router.route('/:id')
	.get(mentorsController.getProfile)
	.patch(mentorsController.patchProfile)
	.delete(mentorsController.deleteProfile)

router.route('/:id/edit')
	.get(mentorsController.getEdit)

module.exports = router