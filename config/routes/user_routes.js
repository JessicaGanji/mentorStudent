var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var userController = require('../../controllers/users.js');

router.route('/')
	.get(userController.getIndex)

router.route('/signup')
	.get(userController.getSignup)
	.post(userController.postSignup)

router.route('/login')
	.get(userController.getLogin)
	.post(userController.postLogin)

router.route('/logout')
	.get(userController.getLogout)

router.route('/:id')
	.get(userController.getProfile)
	.patch(userController.patchProfile)
	.delete(userController.deleteProfile)

router.route('/:id/edit')
	.get(userController.getEdit)

module.exports = router