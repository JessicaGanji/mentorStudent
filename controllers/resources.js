var Resource  = require('../models/resource.js');
var passport  = require('passport');

// GET /resources
function getIndex (request, response){
  Resource.find({}, function (error, resources) {
    if(error) console.log(error);
    response.render('resources/index.ejs', {resources: resources})
  })
};

// GET /resources/new
function getNew (request, response){
  User.resource = new Resource
  response.render('resources/index.ejs');
};

// POST /resources/new
function postResource (request, response){
  response.render('resources/index.ejs');
};

// GET /resources/:id
function getResource (request, response){
  response.render('resources/index.ejs');
};

// GET /resources/:id/edit
function getEdit (request, response){
  response.render('resources/index.ejs');
};

// PATCH /resources/:id/edit
function putResource (request, response){
  response.render('resources/index.ejs');
};

// DELETE /resources/:id
function deleteResource (request, response){
  response.render('resources/index.ejs');
};

module.exports = {
	getIndex: getIndex,
	getNew: getNew,
	postResource: postResource,
	getEdit: getEdit,
	getResource: getResource,
	putResource: putResource,
	deleteResource: deleteResource
};
