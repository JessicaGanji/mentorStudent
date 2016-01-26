var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');


// var resourceSchema = mongoose.Schema({	
// 	photo: String,
// 	name: String,
// 	spin: String,
// 	description: String,
// 	link: String,
// 	pros: String,
// 	cons: String 
// });

// var Resource = mongoose.model('Resource', resourceSchema )

//var userSchema = mongoose.Schema({
var User       = mongoose.Schema({
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
	time_zone: String,
	status: Boolean,
	terms: Boolean, 
	//resources: [Resource]
});



User.methods.encrypt = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};

//var User = mongoose.model('User', userSchema )

module.exports = mongoose.model('User', User)

// module.exports = {
// 	User: User,
// 	Resource: Resource
// }





