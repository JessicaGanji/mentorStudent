// GET '/index'
function getIndex(request, response) {
  response.render('index.ejs');
}

// GET '/about'
function getAbout(request, response) {
  response.render('about.ejs');
}

// GET '/resources'
function getResources(request, response) {
  response.render('resources.ejs');
}

// GET '/quiz'
function getQuiz(request, response) {
  response.render('quiz.ejs');
}

module.exports = {
getIndex: getIndex,
getAbout: getAbout, 
getResources: getResources,
getQuiz: getQuiz
}