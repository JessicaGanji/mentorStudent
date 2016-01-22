// GET '/index'
function getIndex(request, response) {
  response.render('statics/index.ejs');
}

// GET '/about'
function getAbout(request, response) {
  response.render('statics/about.ejs');
}

// GET '/resources'
function getResources(request, response) {
  response.render('statics/resources.ejs');
}

// GET '/quiz'
function getQuiz(request, response) {
  response.render('statics/quiz.ejs');
}

module.exports = {
	getIndex: getIndex,
	getAbout: getAbout, 
	getResources: getResources,
	getQuiz: getQuiz
}