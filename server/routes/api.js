var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();
var bCrypt = require('bcrypt-nodejs');

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');

}

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/users', (req, res) => {
    User.find({},(err,userlist)=>{
      if (err){
        console.log("error "+ err);
        res.send(JSON.err)
      }
      else {
        res.send(userlist);
      }
    });
});

router.get('/users/:id', (req, res) => {
  User.findById(req.params.id,(err,user)=>{
    if (err){
      console.log("error "+ err);
      res.send(JSON.err)
    }
    else {
      res.send(user);
    }
  });
});

router.put('/users/:id', (req, res) => {
  User.findOne({_id: req.params.id}, function(err, user){
  if (err) { return next(err); }
    let dummy = req.body;
    user.username = dummy.username;
    user.password = createHash(dummy.password);
    user.email = dummy.email;
    user.firstname = dummy.firstname;
    user.lastname = dummy.lastname;
    user.lastname2 = dummy.lastname2;
    user.gender = dummy.gender;
    user.age = dummy.age;
    user.lvl = dummy.lvl;
    user.save(function(err) {
      if (err) {
        console.log("Error "+err);
        res.send(JSON.err)
      }
      else {
        res.send(user);
      }
    });
  });
});

var createHash = function(password){
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}

router.get('/users/:id', (req, res) => {
  User.findById(req.params.id,(err,user)=>{
    if (err){
      console.log("error "+ err);
      res.send(JSON.err)
    }
    else {
      res.send(user);
    }
  });
});

router.delete('/users/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id,(err,user)=>{
    if (err){
      console.log("error "+ err);
      res.send(JSON.err)
    }
    else {
      res.send(user);
    }
  });
});

router.post('/users', passport.authenticate('signup'), passport.authenticate('login'), function(req, res) {
  User.findOne({ 'username' :  req.body.username },
      function(err, user) {
          // In case of any error, return using the done method
          if (err){
            res.send(err);
          }
          res.send(user)
      }
  );
});

router.get('/cards', (req, res) => {
  res.send('api cards called');
});

router.post('/login', passport.authenticate('login'), function(req, res) {
  User.findOne({ 'username' :  req.body.username },
      function(err, user) {
          // In case of any error, return using the done method
          if (err){
            res.send(err);
          }
          res.send(user)
      }
  );
});

router.post('/logout', function(req, res) {
    req.logout();
    res.send('logout ok');
});


module.exports = router;
