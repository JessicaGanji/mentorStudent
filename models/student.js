var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var Student = mongoose.Schema({
	local: {
		email        : String,
		password     : String,
	},
	first_name: String,
	last_name: String,
	location: String,
	area_of_focus: String,
	bio: String,
	website: String,
	parental_consent: Boolean
});

Student.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

Student.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('Student', Student);