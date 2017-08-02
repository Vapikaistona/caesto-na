var express = require('express');
var router = express.Router();
var cards = require('../api.logic/cards');
var users = require('../api.logic/users');


router.get('/troops', users.isAuthenticated, users.isTokenValid, cards.getAllTroops);
router.get('/races', users.isAuthenticated, users.isTokenValid, cards.getAllRaces);
router.get('/',users.isAuthenticated,users.isTokenValid, (req, res) => {
  res.send('api cards called');
});


module.exports = router;
