var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var User = mongoose.Schema({
	local: {
		email        : String,
		password     : String,
	},
	password_confirmation: String,
	first_name: String,
	last_name: String,
	headline: String,
	photo: String,
	location: String,
	focus: String,
	intro: String,
	company: String,
	company_link: String,
	education: String,
	personal_link: String,
	experiences: String,
	skills: String,
	availibility: String,
	status: Boolean,
	terms: Boolean
});

User.methods.encrypt = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', User);