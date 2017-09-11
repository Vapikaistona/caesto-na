var express = require('express');
var router = express.Router();
var cards = require('../api.logic/cards');
var users = require('../api.logic/users');


 router.get('/troops', users.isAuthenticated, users.isTokenValid, cards.getAllTroops);
 router.get('/troops/:id', users.isAuthenticated, users.isTokenValid, cards.getTroopById);
 router.post('/troops', users.isAuthenticated, users.isAdmin, cards.insertTroop);
 router.put('/troops/:id', users.isAuthenticated, users.isAdmin, cards.updateTroop);
 router.delete('/troops/:id', users.isAuthenticated, users.isAdmin, cards.deleteTroop);

router.get('/commanders', users.isAuthenticated, users.isTokenValid, cards.getAllCommanders);
router.get('/commanders/:id', users.isAuthenticated, users.isTokenValid, cards.getCommanderById);
router.post('/commanders', users.isAuthenticated, users.isAdmin, cards.insertCommander);
router.put('/commanders/:id', users.isAuthenticated, users.isAdmin, cards.updateCommander);
router.delete('/commanders/:id', users.isAuthenticated, users.isAdmin, cards.deleteCommander);

router.get('/races', users.isAuthenticated, users.isTokenValid, cards.getAllRaces);
router.get('/types', users.isAuthenticated, users.isTokenValid, cards.getCardTypes);

module.exports = router;
