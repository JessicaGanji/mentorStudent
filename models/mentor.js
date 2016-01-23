var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var Mentor = mongoose.Schema({
	local: {
		email        : String,
		password     : String,
	},
	first_name: { type: String, required: true },
	last_name: { type: String, required: true },
	headline: String,
	location: String,
	area_of_expertise: { type: String, required: true },
	bio: String,
	personal_website: String,
	compary_website: String,
	experiences: String,
	skills: { type: String, required: true },
	availibility: { type: String, required: true },
	status: { type: Boolean, required: true },
	terms: { type: Boolean, required: true }
});

Mentor.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

Mentor.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('Mentor', Mentor);
