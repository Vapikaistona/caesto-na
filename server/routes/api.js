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
			if(!(req.params.id == decoded._doc._id || decoded._doc.lvl==3)|| err) {
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

router.post('/users', function(req, res, next) {
  passport.authenticate('signup', function(err, user, info) {
    if (err) { return res.json({user:false, message:err}); }
		else if (!user) { return res.json({user:false, message:'User already exists with that username'}); }
		else { return res.json({user:true});}
  })(req, res, next);
});

router.get('/cards',isAuthenticated,isTokenValid, (req, res) => {
  res.send('api cards called');
});

router.post('/login', function(req, res, next) {
  passport.authenticate('login', function(err, user, info) {
    if (err) { return res.json({user:false, message:err}); }
		else if (!user) {
			if (info) {
				return res.json({user:false, message:info});
			}else {
				return res.json({user:false, message:'Username or password invalid'});
			}
		}
		else {
			req.login(user, function(error) {
	      if (error) return next(error);
	      return next();
      });
		}
  })(req, res, next);
}, function(req, res) {
  User.findOne({ 'username' :  req.body.username },
      function(err, user) {
          if (err){
            res.send(err);
          }
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
