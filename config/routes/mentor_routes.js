var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var mentorsController = require('../../controllers/users.js');

router.route('/')
	.get(mentorsController.getMentorIndex)

router.route('/signup')
	.get(mentorsController.getMentorSignup)
	.post(mentorsController.postMentorSignup)

router.route('/login')
	.get(mentorsController.getMentorLogin)
	.post(mentorsController.postMentorLogin)

router.route('/logout')
	.get(mentorsController.getMentorLogout)

router.route('/:id')
	.get(mentorsController.getMentorProfile)
	.patch(mentorsController.patchMentorProfile)
	.delete(mentorsController.deleteMentorProfile)

router.route('/:id/edit')
	.get(mentorsController.getMentorEdit)

module.exports = router