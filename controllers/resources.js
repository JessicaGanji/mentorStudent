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
  console.log(user._id)
  console.log(user)
  response.render('resources/new.ejs', {resources: resources})
  
};

// POST /resources/new
function postResource (request, response){
  var resource = new Resource()
  resource.photo       = req.body.photo
  resource.name        = req.body.name
  resource.spin        = req.body.spin
  resource.description = req.body.description
  resource.link        = req.body.link
  resource.pros        = req.body.pros
  resource.cons        = req.body.cons

  resource.save(function (error) {
    if (error) console.log("Could not save resource because:" + error )
  })
  user.resources.push(resource)
  response.redirect('/resources')
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
	putResource: putResource,
	deleteResource: deleteResource
};
