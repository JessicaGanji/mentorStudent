var Mentor    = require('../models/user.js')
var passport  = require('passport')

// GET mentors/signup
function getSignup(request, response) {
  response.render('mentors/signup.ejs', { message: request.flash('signupMessage') });
}

// POST mentors/signup
function postSignup(request, response) {
  console.log(request.params)

  var signUpStrategy = passport.authenticate('local-signup', {
    successRedirect : '/', 
    failureRedirect : '/signup', 
    failureFlash : true 
  });

  return signUpStrategy(request, response) 
}

// GET mentors/login
function getLogin(request, response) { 
  response.render('mentors/login.ejs', { message: request.flash('loginMessage') }); 
}

// POST mentors/login 
function postLogin(request, response) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/', 
    failureRedirect : '/login', 
    failureFlash : true 
  });

  return loginProperty(request, response);
}

// GET mentors/logout
function getLogout(request, response) {
  request.logout();
  response.redirect('/');
}

// GET /mentors
function getIndex(request, response) {

}

// GET /mentors/:id
function getProfile(request, response) {

}

// GET /mentors/edit
function getEdit(request, response) {

}

// PATCH
function patchProfile(request, response) {

}

// DELETE
function deleteProfile(request, response) {

}

module.exports = {
  getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  getIndex: getIndex,
  getProfile: getProfile,
  getEdit: getEdit,
  patchProfile: patchProfile,
  deleteProfile: deleteProfile,
}