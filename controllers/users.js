var Student   = require('../models/user.js')
var passport  = require('passport')

// Mentors
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
  response.render('mentors/index.ejs');
}

// GET /mentors/:id
function getProfile(request, response) {
  response.render('mentors/profile.ejs');
}

// GET /mentors/edit
function getEdit(request, response) {
  response.render('mentors/edit.ejs');
}

// PATCH mentors
function patchProfile(request, response) {
  response.redirect('/');
}

// DELETE mentors
function deleteProfile(request, response) {
  response.redirect('/');
}

// Students
// GET students/signup
function getStudentSignup(request, response) {
  response.render('mentors/signup.ejs', { message: request.flash('signupMessage') });
}

// POST students/signup
function postStudentSignup(request, response) {
  console.log(request.params)

  var signUpStrategy = passport.authenticate('local-signup', {
    successRedirect : '/', 
    failureRedirect : '/signup', 
    failureFlash : true 
  });

  return signUpStrategy(request, response) 
}

// GET students/login
function getStudentLogin(request, response) { 
  response.render('mentors/login.ejs', { message: request.flash('loginMessage') }); 
}

// POST students/login 
function postStudentLogin(request, response) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/', 
    failureRedirect : '/login', 
    failureFlash : true 
  });

  return loginProperty(request, response);
}

// GET students/logout
function getStudentLogout(request, response) {
  request.logout();
  response.redirect('/');
}

// GET /students/:id
function getStudentProfile(request, response) {
  response.render('students/profile.ejs');
}

// GET /students/edit
function getStudentEdit(request, response) {
  response.render('students/edit.ejs');
}

// PATCH student
function patchStudentProfile(request, response) {
  response.redirect('/');
}

// DELETE student
function deleteStudentProfile(request, response) {
  response.redirect('/');
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