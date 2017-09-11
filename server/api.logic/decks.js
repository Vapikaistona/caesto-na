var passport = require('passport');
var Deck = require('../models/deck');
var Race = require('../models/race');
var User = require('../models/user');
var dateFormat = require('dateformat');
var deckCache =[];
var decks={};


decks.getAllDecks =  (req, res) => {
  if (deckCache.length ==0) {
    Deck.find({},(err,decklist)=>{
      if (err){
        console.log("error "+ err);
        res.send(JSON.err)
      }
      else {
        deckCache = decklist;
        res.send(decklist);
      }
    });
  }else {
    res.send(deckCache);
  }
};
decks.getOwnedDecks =  (req, res) => {
    User.findById(req.params.id,(err,user)=>{
      if (err){
        console.log("error "+ err);
        res.send(JSON.err)
      }
      else {
        var deckList;
        for (deck of user.decks) {
          Deck.findById(deck._id,(err,deck)=>{
            if (err){
              console.log("error "+ err);
              res.send(JSON.err)
            }
            else {
              deckList.push(deck);
            }
          })
        }
        res.send(deckList);
      }
    });
};

decks.getDeckById =  (req, res) => {
  Deck.findById(req.params.id,(err,deck)=>{
    if (err){
      console.log("error "+ err);
      res.send(JSON.err)
    }
    else {
      res.send(deck);
    }
  });
};

decks.insertDeck =  (req, res) => {
    var deck = new Deck(req.body);
    var now = new Date();
    Deck.findById(deck._id,(err,deckF)=>{
      if (err){
        console.log("error "+ err);
        res.send(JSON.err)
      }
      else {
        if (deckF){
          if (req.decoded._doc.username == deckF.created_by || req.decoded._doc.lvl == 3) {
            deck.modified_by =req.decoded._doc.username;
            deck.modified =  dateFormat(now,"dd/mm/yyyy, HH:MM:ss");
            Deck.findOneAndUpdate({_id:deck.id},deck,{new:true},(err,deckUpdated)=>{
              if (err){
                console.log("error "+ err);
                res.send(JSON.err)
              }
              else {
                deckCache[deckCache.findIndex(x=>x._id+"" === deckUpdated._id+"")] =deckUpdated;
                res.send({ok:true});
              }
            });
          }
        }
        else{
          deck.created_by = req.decoded._doc.username;
          deck.created = dateFormat(now,"dd/mm/yyyy, HH:MM:ss");
          deck.save(function (err, deck) {
            if (err) {
              console.log("error "+ err);
              res.send(JSON.err);
            }
            else {
              deckCache.push(deck);
              res.send({ok:true});
            }
          });
        }
      }
    });
};

decks.updateDeck =  (req, res) => {
    Deck.findOneAndUpdate({_id:req.body.id},req.body,(err,deck)=>{
      if (err){
        console.log("error "+ err);
        res.send(JSON.err)
      }
      else {
        res.send({ok:true});
      }
    });
};


decks.deleteDeck = (req, res) => {
  Deck.findByIdAndRemove(req.params.id,(err,deck)=>{
    if (err){
      console.log("error "+ err);
      res.send(JSON.err)
    }
    else {
      deckCache.splice(deckCache.findIndex(x=>x._id == req.params.id),1);
      res.send(deck);
    }
  });
};


module.exports = decks;
