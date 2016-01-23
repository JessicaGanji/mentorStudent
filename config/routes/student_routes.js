var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var studentsController = require('../../controllers/users.js')
	
router.route('/signup')
	.get(studentsController.getStudentSignup)
	.post(studentsController.postStudentSignup)

router.route('/login')
	.get(studentsController.getStudentLogin)
	.post(studentsController.postStudentLogin)

router.route('/logout')
	.get(studentsController.getStudentLogout)

router.route('/:id')
	.get(studentsController.getStudentProfile)
	.patch(studentsController.patchStudentProfile)
	.delete(studentsController.deleteStudentProfile)

router.route('/:id/edit')
	.get(studentsController.getStudentEdit)

module.exports = router