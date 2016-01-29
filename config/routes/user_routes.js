var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var usersController = require('../../controllers/users.js');

router.route('/mentors')
	.get(usersController.getIndex)

router.route('/signup')
	.get(usersController.getSignup)
	.post(usersController.postSignup)
	
router.route('/login')
	.get(usersController.getLogin)
	.post(usersController.postLogin)

router.route('/logout')
	.get(usersController.getLogout)

router.route('/mentors/:id/edit')
	.get(usersController.getEdit)

router.route('/mentors/:id/message')
	.get(usersController.getMessage)
	.post(usersController.postMessage)

router.route('/mentors/:id')
	.get(usersController.getProfile)
	.put(usersController.putProfile)
	.delete(usersController.deleteProfile)

module.exports = router