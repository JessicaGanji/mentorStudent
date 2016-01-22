var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var ejsLayouts   = require("express-ejs-layouts");
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var port 		 = process.env.PORT || 3000;
var mongoUri   	 = process.env.MONGOLAB_URI || 'mongodb://localhost/project_three';

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

