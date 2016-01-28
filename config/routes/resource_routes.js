var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var resourcesController = require('../../controllers/resources.js');

router.route('/resources')
	.get(resourcesController.getIndex)

router.route('/resources/new')
	.get(resourcesController.getNew)
	.post(resourcesController.postResource)

router.route('/resources/:id')
	.delete(resourcesController.deleteResource)
	.put(resourcesController.putResource)

router.route('/resources/:id/edit')
	.get(resourcesController.getEdit)

module.exports = router