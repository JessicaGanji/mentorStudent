var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var User = mongoose.Schema({
	local: {
		email        : String,
		password     : String,
	},
	role: String,
	first_name: { type: String, required: true },
	last_name: { type: String, required: true },
	location: String,
	area_of_focus: { type: String, required: true },
	bio: String,
	school: String,
	company: String,
	personal_website: String,
	company_website: String,
	experiences: String,
	skills: String,
	availibility: String,
	status: { type: Boolean, required: true },
	terms: { type: Boolean, required: true }
});

User.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', User);