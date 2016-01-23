var Student   = require('../models/student.js')
var passport  = require('passport')

// GET /signup
function getSignup(request, response) {
  response.render('students/signup.ejs', { message: request.flash('signupMessage') });
}

// POST /signup
function postSignup(request, response) {
  console.log(request.params)

  var signUpStrategy = passport.authenticate('local-signup', {
    successRedirect : '/', 
    failureRedirect : '/signup', 
    failureFlash : true 
  });

  return signUpStrategy(request, response) 
}

// GET /login
function getLogin(request, response) { 
  response.render('students/login.ejs', { message: request.flash('loginMessage') }); 
}

// POST /login 
function postLogin(request, response) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/', 
    failureRedirect : '/login', 
    failureFlash : true 
  });

  return loginProperty(request, response);
}

// GET /logout
function getLogout(request, response) {
  request.logout();
  response.redirect('/');
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
  getProfile: getProfile,
  getEdit: getEdit,
  patchProfile: patchProfile,
  deleteProfile: deleteProfile,
}