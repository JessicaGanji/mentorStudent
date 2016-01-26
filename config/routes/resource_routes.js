var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var resourceController = require('../../controllers/resources.js');

router.route('/resources')
	.get(resourceController.getIndex)

router.route('/resources/:id/new')
	.get(resourceController.getNew)
	.post(resourceController.postResource)

router.route('/resources/:id')
	.get(resourceController.getResource)
	.delete(resourceController.deleteResource)

router.route('/resources/:id/edit')
	.get(resourceController.getEdit)
	.put(resourceController.putResource)

module.exports = router