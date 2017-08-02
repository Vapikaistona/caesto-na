var express = require('express');
var router = express.Router();
var users = require('../api.logic/users');



router.get('/users', users.isAuthenticated, users.isTokenValid, users.getAll);
router.get('/users/:id', users.isAuthenticated, users.isTokenValid, users.getOne);
router.put('/users/:id/:psw', users.isAuthenticated, users.isTokenValid, users.update);
router.delete('/users/:id',users.isAuthenticated,users.isTokenValid, users.delete);

router.post('/users', users.signup);
router.post('/login', users.authenticate,users.login);
router.post('/logout', users.logout);

router.get('/cards',users.isAuthenticated,users.isTokenValid, (req, res) => {
  res.send('api cards called');
});


module.exports = router;
