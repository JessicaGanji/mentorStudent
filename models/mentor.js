var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var Mentor = mongoose.Schema({
	mentor-local: {
		email        : String,
		password     : String,
	},
	first_name: String,
	last_name: String,
	headline: String,
	location: String,
	area_of_expertise: String,
	bio: String,
	personal_website: String,
	compary_website: String,
	experiences: String,
	skills: String,
	availibility: String,
	status: Boolean,
	terms: Boolean
});

Mentor.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

Mentor.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('Mentor', Mentor);
