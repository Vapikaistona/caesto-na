var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();
var bCrypt = require('bcrypt-nodejs');
var config = require('../config');
var jwt    = require('jsonwebtoken');
var isAuthenticated = function (req, res, next) {
	if (req.isAuthenticated())
		return next();
	res.redirect('/');

}
var isTokenValid = function(req, res, next) {
	var token;
	if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer'){
		 token = req.headers.authorization.split(' ')[1];
	}
  if (token) {
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        req.decoded = decoded;
        return  next();
      }
    });
  } else {
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });

  }
};

router.get('/users',isAuthenticated,isTokenValid, (req, res) => {
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

router.get('/users/:id',isAuthenticated,isTokenValid, (req, res) => {
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

router.put('/users/:id',isAuthenticated,isTokenValid, (req, res) => {
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

router.get('/users/:id',isAuthenticated,isTokenValid, (req, res) => {
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

router.delete('/users/:id',isAuthenticated,isTokenValid, (req, res) => {
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

router.get('/cards',isAuthenticated,isTokenValid, (req, res) => {
  res.send('api cards called');
});

router.post('/login', passport.authenticate('login'), function(req, res) {
  User.findOne({ 'username' :  req.body.username },
      function(err, user) {
          // In case of any error, return using the done method
          if (err){
            res.send(err);
          }
					// User and password both match, return user from done method
					// which will be treated like success
					var token = jwt.sign(user,config.secret, {
						expiresIn: 60
					});
					var r = user.toObject();
					r.token = token;
          res.send(r)
      }
  );
});

router.post('/logout', function(req, res) {
    req.logout();
    res.send('logout ok');
});

module.exports = router;
