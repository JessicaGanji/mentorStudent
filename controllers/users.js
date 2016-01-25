var User      = require('../models/user.js')
var passport  = require('passport')



// GET /mentors/signup
function getSignup(request, response) {
  response.render('mentors/signup.ejs', { message: request.flash('signupMessage') });
}

// POST /mentors/signup
function postSignup(request, response) {
  console.log(request.params)

  var signUpStrategy = passport.authenticate('local-signup', {
    successRedirect : '/', 
    failureRedirect : '/signup', 
    failureFlash : true 
  });

  return signUpStrategy(request, response) 
}

// GET /mentors/login
function getLogin(request, response) { 
  response.render('mentors/login.ejs', { message: request.flash('loginMessage') }); 
}

// POST /mentors/login 
function postLogin(request, response) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/', 
    failureRedirect : '/login', 
    failureFlash : true 
  });

  return loginProperty(request, response);
}

// GET /mentors/logout
function getLogout(request, response) {
  request.logout();
  response.redirect('/');
}



// GET /mentors
function getIndex(request, response) {
  User.find({}, function (error, users) {
    if(error) console.log(error);
    response.render('mentors/index.ejs', {users: users})
  })
}

// GET /mentors/:id
function getProfile(request, response) {
  var id = request.params.id;

  User.findById({_id: id}, function (error, user){
    if(error) console.log( "There is an error on this page because:" + error );
    response.render('mentors/profile.ejs', {user: user})
  }
}

// GET /mentors/:id/edit
function getEdit(request, response) {
  response.render('mentors/edit.ejs');
}

// PATCH mentors/:id
function patchProfile(request, response) {
  var id = request.params.id;

  User.findById({ _id: id }, function (error, user){
    if(error) console.log( "There is an error on this page becuase:" + error );

    if(request.body.first_name) user.first_name         = request.body.first_name;
    if(request.body.last_name) user.last_name           = request.body.last_name;
    if(request.body.headline) user.headline             = request.body.headline;
    if(request.body.location) user.location             = request.body.location;
    if(request.body.focus) user.focus                   = request.body.focus;
    if(request.body.intro) user.intro                   = request.body.intro;
    if(request.body.company) user.company               = request.body.company;
    if(request.body.company_link) user.company_link     = request.body.company_link;
    if(request.body.education) user.experiences         = request.body.experiences;
    if(request.body.personal_link) user.personal_link   = request.body.personal_link;
    if(request.body.experiences) user.experiences       = request.body.experiences;
    if(request.body.skills) user.skills                 = request.body.skills;
    if(request.body.availibility) user.availibility     = request.body.availibility;
    if(request.body.status) user.status                 = request.body.status;
    if(request.body.terms) user.terms                   = request.body.terms;

    user.save( function (error){
      if(error) console.log( "Could not save user becuase:" + error );
      response.json({ message: "User has been updated!" });
      response.redirect('mentors/profile.ejs');
    })
  })
}

// DELETE mentors/:id
function deleteProfile(request, response) {
  var id = request.params.id;

  User.remove({_id: id}, function (error) {
    if(error) console.log( "User has not been deleted due to the following error:" + error );
    console.log( "User has been successfully deleted." )
    response.redirect('/');
  })
}



module.exports = {
  getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  getMentorIndex: getIndex,
  getProfile: getProfile,
  getEdit: getEdit,
  patchProfile: patchProfile,
  deleteProfile: deleteProfile,
}


