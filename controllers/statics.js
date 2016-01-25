// GET /index
function getIndex(request, response) {
  response.render('statics/index.ejs');
}

// GET /signup
function getSignUp(request, response) {
  response.render('statics/signup.ejs');
}

// GET /login
function getLogIn(request, response) {
  response.render('statics/login.ejs');
}

// GET /about
function getAbout(request, response) {
  response.render('statics/about.ejs');
}

// GET /resources
function getResources(request, response) {
  response.render('statics/resources.ejs');
}

// GET /quiz
function getQuiz(request, response) {
  response.render('statics/quiz.ejs');
}

module.exports = {
	getIndex: getIndex,
	getSignUp: getSignUp,
	getLogIn: getLogIn,
	getAbout: getAbout, 
	getResources: getResources,
	getQuiz: getQuiz
}