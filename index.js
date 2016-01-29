var express 				= require('express');
var app							= express();
var mongoose				= require('mongoose');
var passport 				= require('passport');
var flash 					= require('connect-flash');
var ejsLayouts 			= require('express-ejs-layouts');
var logger 					= require('morgan');
var cookieParser 		= require('cookie-parser');
var bodyParser 			= require('body-parser');
var path		   			= require('path');
var session 				= require('express-session');
var port 		   			= process.env.PORT || 3000;
var mongoUri 				= process.env.MONGOLAB_URI || 'mongodb://localhost/project_three';
var methodOverride  = require('method-override');

var staticRouter  	= require('./config/routes/static_routes.js');
var userRouter			= require('./config/routes/user_routes.js');
var userPassport		= require('./config/passport.js');
var userSetUp				= userPassport(passport);
var resourceRouter 	= require('./config/routes/resource_routes.js');
var apiRouter				= require('./config/routes/api_routes.js');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(ejsLayouts);
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require ('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

mongoose.connect(mongoUri);

// This middleware will allow us to use the current user in the layout
app.use(function (req, res, next) {
  global.user = req.user;
  next()
});

app.use('/', staticRouter);
app.use('/', userRouter);
app.use('/', resourceRouter);
app.use('/', apiRouter);

app.listen(port)
console.log('Magic is happening on port' + port)

