var LocalStrategy   = require('passport-local').Strategy;
var Student         = require('../models/student.js');
var Mentor         = require('../models/mentor.js');

passport.serializeUser(function(user, done){
  if (isStudent(user)) {
    done(null, user.id)
  } else if( isMentor(user)) {
    done(null, user.id)
  }
});

passport.deserializeUser(function(id, callback){
  if (isStudent(user)){
    Student.findById(id,function(err, user){
      callback(err,user);
    });
  } else if (isMentor(user)) {
    Mentor.findById(id,function(err, user){
      callback(err,user);    
  }
});

passport.use('student-local-signup',new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, email, password, callback) {
  process.nextTick(function(){
    Student.findOne({'student-local.email': email}, function(err,user){
      if (err) return callback(err);
      if (user) {
        return callback(null, false, req.flash('signupMessage', 'This email is already used'));
      } else {
        var newStudent = new Student();
        newStudent.student-local.email = email
        newStudent.student-local.password = newStudent.encrypt(password);

        newStudent.save(function(err){
          if (err) throw err;
          return callback(null, newStudent);
        });
      };
    });
  });
}));

} else if (isMentor(user)) {










}
});
