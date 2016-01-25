var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var userController = require('../../controllers/users.js');

router.route('/mentors')
	.get(userController.getIndex)
	

router.route('/signup')
	.get(userController.getSignup)
	.post(userController.postSignup)
	
router.route('/login')
	.get(userController.getLogin)
	.post(userController.postLogin)

router.route('/logout')
	.get(userController.getLogout)

router.route('/mentors/:id')
	.get(userController.getProfile)
	.patch(userController.patchProfile)
	.delete(userController.deleteProfile)

router.route('/mentors/:id/edit')
	.get(userController.getEdit)

router.route('/mentors/:id/message')
	.get(userController.getMessage)

module.exports = router