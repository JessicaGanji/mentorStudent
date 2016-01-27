var User = require('../models/user.js');

// GET /api
function getIndex(request, response) {
  User.find({}, function (error, users) {
    if( error ) { 
      console.log(error);
    } else {
      response.json( users );
    } 
  });
}

// POST /api/new
function postAPI(request, response) {
  response.json({message: "blank"});
};

// GET /api/:id
function getAPI(request, response) {
  response.json({message: "blank"});
};

// PUT /api/:id/edit
function putAPI(request, response) {
  response.json({message: "blank"});
};

// DELETE /api/:id
function deleteAPI(request, response) {
  response.json({message: "blank"});
};

module.exports = {
  getIndex: getIndex,
  getNew: getNew,
  postAPI: postAPI,
  getAPI: getAPI,
  getEdit: getEdit,
  putAPI: putAPI,
  deleteAPI: deleteAPI
};
