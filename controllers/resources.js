var Resource  = require('../models/user.js')
var passport  = require('passport')

// GET /resources
function getIndex (request, response){
  Resource.find({}, function (error, resources) {
    if(error) console.log(error);
    response.render('mentors/index.ejs', {resources: resources})
  })
}

// GET /resources/:id/new
function getNew (request, response){

}

// POST /resources/:id/new
function postResource (request, response){

}

// GET /resources/:id/edit
function getEdit (request, response){

}

// GET /resources/:id
function getResource (request, response){

}

// PATCH /resources/:id
function putResource (request, response){

}

// DELETE /resources/:id
function deleteResource (request, response){

}

module.exports = {
	getIndex, getIndex
	getNew, getNew
	postResource, postResource
	getEdit, getEdit
	getResource, getResource
	putResource, putResource
	deleteResource, deleteResource
}
