var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var passport       = require('passport');
var flash          = require('connect-flash');
var ejsLayouts     = require("express-ejs-layouts");
var logger         = require('morgan');
var cookieParser   = require('cookie-parser');
var bodyParser     = require('body-parser');
var path		   = require('path');
var session        = require('express-session');
var port 		   = process.env.PORT || 3000;
var mongoUri   	   = process.env.MONGOLAB_URI || 'mongodb://localhost/project_three';
var studentsRouter = require('./config/routes/student_routes.js');
var mentorsRouter  = require('./config/routes/mentor_routes.js')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// app.set('views', path.join(__dirname, 'views'))
// app.engine('ejs', require ('ejs').renderFile)
// app.set('view engine', 'ejs')

// app.use(express.static(__dirname + '/public'))

// app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' })); 
// app.use(passport.initialize());
// app.use(passport.session()); 
// app.use(flash()); 

// require('./config/passport')(passport);

mongoose.connect(mongoUri);

app.use('/students', studentsRouter)

app.use('/mentors', mentorsRouter)

app.listen(port)
console.log('The server is running on port' + port)

