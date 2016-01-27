var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var apisController = require('../../controllers/apis.js');

router.route('/api')
	.get(apisController.getIndex)
	.post(apisController.postAPI)

router.route('/api/:id')
	.get(apisController.getAPI)
	.delete(apisController.deleteAPI)
	.put(apisController.putAPI)

module.exports = router