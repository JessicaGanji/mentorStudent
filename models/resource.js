var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var Resource = mongoose.Schema({	
	avatar_url: String,
	name: String,
	format: String,
	description: String,
	link: String,
	pros: String,
	cons: String 
});

module.exports = mongoose.model('Resource', Resource);