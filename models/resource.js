var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var Resource = mongoose.Schema({	
	photo: String,
	name: String,
	spin: String,
	description: String,
	link: String,
	pros: String,
	cons: String 
});

module.exports = mongoose.model('Resource', Resource);