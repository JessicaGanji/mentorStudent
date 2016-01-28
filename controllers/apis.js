var Resource = require('../models/resource.js');

// GET /api
function getIndex(request, response) {
 Resource.find({}, function (error, resources) {
    if(error) response.json({ message: "GET ERROR:" + error });
    response.json(resources);
  });
};

// POST /api/new
function postAPI(request, response) {
  var resource = new Resource()

  resource.photo       = request.body.photo;
  resource.name        = request.body.name;
  resource.format      = request.body.format;
  resource.description = request.body.description;
  resource.link        = request.body.link;
  resource.pros        = request.body.pros;
  resource.cons        = request.body.cons;

  resource.save(function (error) {
    if(error) response.json({ message: "POST ERROR:" + error });
    response.json({message: "POST api/new"});
  });
};

// GET /api/:id
function getAPI(request, response) {
  var id = request.params.id;

  Resource.findById({_id: id }, function (error, resource){
    if(error) response.json({ message: "GET ERROR:" + error });
    response.json(resource);
  });
};

// PUT /api/:id/edit
function putAPI(request, response) {
  var id = request.params.id;

  Resource.findById({ _id: id }, function (error, resource){
    if(error) response.json({ message: "PUT ERROR:" + error });

    if(request.body.photo) resource.photo               = request.body.photo;
    if(request.body.name) resource.name                 = request.body.name;
    if(request.body.format) resource.format             = request.body.format;
    if(request.body.description) resource.description   = request.body.description;
    if(request.body.link) resource.link                 = request.body.link;
    if(request.body.pros) resource.pros                 = request.body.pros;
    if(request.body.cons) resource.cons                 = request.body.cons;

    resource.save( function (error, resource){
      if (error) response.json({ message: "PUT SAVE ERROR:" + error });
      response.json({ message: "PUT api/:id" });
    });
  });
};

// DELETE /api/:id
function deleteAPI(request, response) {
  var id = request.params.id;

  Resource.remove({_id: id}, function (error) {
    if(error) response.json({ message: "DELETE ERROR:" + error });
    response.json({ message: "DELETE api" });
  });
};

module.exports = {
  getIndex: getIndex,
  postAPI: postAPI,
  getAPI: getAPI,
  putAPI: putAPI,
  deleteAPI: deleteAPI
};