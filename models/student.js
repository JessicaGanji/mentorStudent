var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var Student = mongoose.Schema({
	local: {
		email        : String,
		password     : String,
	},
	first_name: { type: String, required: true },
	last_name: { type: String, required: true },
	location: String,
	area_of_focus: String,
	bio: String,
	website: String,
	parental_consent: { type: Boolean, required: true }
});

Student.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

Student.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('Student', Student);