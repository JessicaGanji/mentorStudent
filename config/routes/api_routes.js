var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var apisController = require('../../controllers/api.js');

router.route('/api')
	.get(apisController.getIndex)

router.route('/api/new')
	.post(apiController.postAPI)

router.route('/api/:id')
	.get(apisController.getAPI)
	.delete(apisController.deleteAPI)

router.route('/api/:id/edit')
	.put(apisController.putAPI)

module.exports = router