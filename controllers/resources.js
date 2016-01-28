var Resource  = require('../models/resource.js');
var passport  = require('passport');

// GET /resources
function getIndex (request, response){
  Resource.find({}, function (error, resources) {
    if(error) console.log(error);
    response.render('resources/index.ejs', {resources: resources});
  })
};

// GET /resources/new
function getNew (request, response){
  console.log(user._id)
  console.log(user)
  response.render('resources/new.ejs')
};

// POST /resources/new
function postResource (request, response){
  var resource = new Resource()

  resource.photo       = request.body.photo;
  resource.name        = request.body.name;
  resource.format      = request.body.format;
  resource.description = request.body.description;
  resource.link        = request.body.link;
  resource.pros        = request.body.pros;
  resource.cons        = request.body.cons;

  resource.save(function (error) {
    if (error) console.log("Could not save resource because:" + error )
  })

  user.resources.push(resource)
  response.redirect('/resources')
};

// GET /resources/:id/edit
function getEdit (request, response){
  console.log('getEdit RESOURCE')

  var id = request.params.id;

  Resource.findById({_id: id}, function (error, resource){
    if(error) console.log( "There is an error on this page because:" + error );
    response.render('resources/edit.ejs', {resource: resource});
  });
};


// PUT /resources/:id
function putResource (request, response){
  var id = request.params.id;

  Resource.findById({ _id: id }, function (error, resource){
    if(error) console.log( "There is an error on this page becuase:" + error );

    if(request.body.photo) resource.photo               = request.body.photo;
    if(request.body.name) resource.name                 = request.body.name;
    if(request.body.format) resource.format             = request.body.format;
    if(request.body.description) resource.description   = request.body.description;
    if(request.body.link) resource.link                 = request.body.link;
    if(request.body.pros) resource.pros                 = request.body.pros;
    if(request.body.cons) resource.cons                 = request.body.cons;

    resource.save( function (error){
      if(error) console.log( "Could not save resource becuase:" + error );  
      response.redirect('/resources');
    })
  })
};

// DELETE /resources/:id
function deleteResource (request, response){
  var id = request.params.id;

  Resource.remove({_id: id}, function (error) {
    if(error) console.log( "Resource has not been deleted due to the following error:" + error );
    //response.redirect('/resources');
  })
};

module.exports = {
	getIndex: getIndex,
	getNew: getNew,
	postResource: postResource,
	getEdit: getEdit,
	putResource: putResource,
	deleteResource: deleteResource
};
