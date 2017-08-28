var express = require('express');
var router = express.Router();
var cards = require('../api.logic/cards');
var users = require('../api.logic/users');


 router.get('/troops', users.isAuthenticated, users.isTokenValid, cards.getAllTroops);
 router.get('/troops', users.isAuthenticated, users.isTokenValid, cards.getTroopById);
 router.post('/troops', users.isAuthenticated, users.isTokenValid, cards.upsertTroop);
 router.put('/troops', users.isAuthenticated, users.isTokenValid, cards.upsertTroop);
 router.delete('/troops', users.isAuthenticated, users.isTokenValid, cards.deleteTroop);

router.get('/commanders', users.isAuthenticated, users.isTokenValid, cards.getAllCommanders);
router.get('/commanders', users.isAuthenticated, users.isTokenValid, cards.getCommanderById);
router.post('/commanders', users.isAuthenticated, users.isTokenValid, cards.insertCommander);
router.put('/commanders', users.isAuthenticated, users.isTokenValid, cards.updateCommander);
router.delete('/commanders', users.isAuthenticated, users.isTokenValid, cards.deleteCommander);

router.get('/races', users.isAuthenticated, users.isTokenValid, cards.getAllRaces);


module.exports = router;
