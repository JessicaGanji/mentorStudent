var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var apiController = require('../../controllers/api.js');

router.route('/api')
	.get(apiController.getIndex)

router.route('/api/new')
	.get(apiController.getNew)
	.post(apiController.postAPI)

router.route('/api/:id')
	.get(apiController.getAPI)
	.delete(apiController.deleteAPI)

router.route('/api/:id/edit')
	.get(apiController.getEdit)
	.put(apiController.putAPI)

module.exports = router