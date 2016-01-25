var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var User = mongoose.Schema({
	local: {
		email        : String,
		password     : String,
	},
	first_name: { type: String, required: true },
	last_name: { type: String, required: true },
	headline: { type: String, required: true },
	location: String,
	focus: { type: String, required: true },
	intro: String,
	company: String,
	company_link: String,
	education: String,
	personal_link: String,
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