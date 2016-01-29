var User        = require('../models/user.js');
var passport    = require('passport');
var gmailKey    = require('../config/key.js');
var H_GMAIL_KEY = process.env.H_GMAIL_KEY || gmailKey

// GET /signup
function getSignup(request, response) {
  response.render('mentors/signup.ejs', { message: request.flash('signupMessage') });
};

// POST /signup
function postSignup(request, response) {
  var signUpStrategy = passport.authenticate('local-signup', {
    successRedirect : '/', 
    failureRedirect : '/signup', 
    failureFlash : true 
  });

  return signUpStrategy(request, response)
};

// GET /login
function getLogin(request, response) { 
  response.render('mentors/login.ejs', { message: request.flash('loginMessage') }); 
};

// POST /login 
function postLogin(request, response) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/', 
    failureRedirect : '/login', 
    failureFlash : true 
  });

  return loginProperty(request, response);
};

// GET /mentors/logout
function getLogout(request, response) {
  request.logout();
  response.redirect('/');
};

// GET /mentors
function getIndex(request, response) {
  User.find({}, function (error, users) {
    if(error) console.log(error);
    response.render('mentors/index.ejs', {users: users})
  });
};

// GET /mentors/:id
function getProfile(request, response) {
  var id = request.params.id;

  User.findById({_id: id }, function (error, user_profile){
    if(error) {
      console.log( "There is an error on this page because:" + error );
      response.redirect('/');
    } else {
      response.render('mentors/profile.ejs', {user_profile: user_profile});
    };
  });
  
};

// GET /mentors/:id/edit
function getEdit(request, response) {
  console.log(user.avatar_url)
  var id = request.params.id;

  User.findById({_id: id}, function (error, user){
    if(error) console.log( "There is an error on this page because:" + error );
    response.render('mentors/edit.ejs', {user: user});
    console.log(user.avatar_url)
  });
};

// PUT /mentors/:id
function putProfile(request, response) {
  console.log(user.avatar_url)
  var id = request.params.id;

  User.findById({ _id: id }, function (error, user){
    if(error) console.log( "There is an error on this page becuase:" + error );

    if(request.body.first_name) user.first_name         = request.body.first_name;
    if(request.body.last_name) user.last_name           = request.body.last_name;
    if(request.body.headline) user.headline             = request.body.headline;
    if(request.body.avatar_url) user.avatar_url         = request.body.avatar_url;
    if(request.body.location) user.location             = request.body.location;
    if(request.body.focus) user.focus                   = request.body.focus;
    if(request.body.intro) user.intro                   = request.body.intro;
    if(request.body.company) user.company               = request.body.company;
    if(request.body.company_link) user.company_link     = request.body.company_link;
    if(request.body.education) user.education           = request.body.education;
    if(request.body.personal_link) user.personal_link   = request.body.personal_link;
    if(request.body.experience) user.experience         = request.body.experience;
    if(request.body.skills) user.skills                 = request.body.skills;
    if(request.body.availibility) user.availibility     = request.body.availibility;
    if(request.body.time_zone) user.time_zone           = request.body.time_zone;
    if(request.body.status) user.status                 = request.body.status;

    console.log(request.body.avatar_url)
    console.log(user.avatar_url)
    user.save( function (error){
      if(error) console.log( "Could not save user becuase:" + error );  
      response.redirect('/mentors/' + id);
    })
    
  })
}

// DELETE mentors/:id
function deleteProfile(request, response) {
  var id = request.params.id;

  User.remove({_id: id}, function (error) {
    if(error) console.log( "User has not been deleted due to the following error:" + error );
    response.redirect('/mentors');
  })
}

// GET mentors/:id/message
function getMessage(request, response) {
  var id = request.params.id;

  User.findById({_id: id}, function (error, message_user){
    if(error) console.log( "There is an error on this page because:" + error );
    response.render('mentors/message.ejs', {message_user: message_user})
  });
};

// POST mentors/:id/message
function postMessage(request, response) {
  var id = request.params.id;

  var recipient             = request.body.recipient;
  var email                 = request.body.email;
  var subject               = request.body.subject;
  var message               = request.body.message;

  User.findById({_id: id}, function (error, message_user){
    if(error) console.log( "There is an error sending your message because:" + error );
    console.log(message_user.local.email)

    var nodemailer  = require('nodemailer');

    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport(H_GMAIL_KEY);

    var mailOptions = {
        from: 'WDI_20_LA Project Three',
        to: [recipient, email],
        subject: subject,
        text: message,
        html: message
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
  });
  response.redirect('/confirmation')
};

module.exports = {
  getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  getIndex: getIndex,
  getProfile: getProfile,
  getEdit: getEdit,
  putProfile: putProfile,
  deleteProfile: deleteProfile,
  getMessage: getMessage,
  postMessage: postMessage
};
