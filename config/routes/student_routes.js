var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//var passport = require("passport");
var studentsController = require('../../controllers/students')
	
router.route('/signup')
	.get(studentsController.getSignup)
	.post(studentsController.postSignup)

router.route('/login')
	.get(studentsController.getLogin)
	.post(studentsController.postLogin)

router.route('/logout')
	.get(studentsController.getLogout)

router.route('/:id')
	.get(studentsController.getProfile)
	.patch(studentsController.patchProfile)
	.delete(studentsController.deleteProfile)

router.route('/:id/edit')
	.get(studentsController.getEdit)

module.exports = router