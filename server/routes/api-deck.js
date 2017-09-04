
var express = require('express');
var router = express.Router();
var decks = require('../api.logic/decks');
var users = require('../api.logic/users');


router.get('/decks', users.isAuthenticated, users.isTokenValid, decks.getAllDecks);
router.get('/decks/:id', users.isAuthenticated, users.isTokenValid, decks.getOwnedDecks);
router.get('/deck/:id', users.isAuthenticated, users.isTokenValid, decks.getDeckById);
router.post('/deck', users.isAuthenticated, users.isTokenValid, decks.insertDeck);
router.put('/deck/:id', users.isAuthenticated, users.isTokenValid, decks.updateDeck);
router.delete('/deck/:id', users.isAuthenticated, users.isTokenValid, decks.deleteDeck);


module.exports = router;
