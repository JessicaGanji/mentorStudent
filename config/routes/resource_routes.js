var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var resourceController = require('../../controllers/resources.js');

router.route('/resources')
	.get(userController.getIndex)

router.route('/resources/:id/new')
	.get(userController.getNew)
	.post(userController.postResource)

router.route('/resources/:id/edit')
	.get(userController.getEdit)

router.route('/resources/:id')
	.get(userController.getResource)
	.put(userController.putResource)
	.delete(userController.deleteResource)

module.exports = router