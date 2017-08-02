var passport = require('passport');
var Troop = require('../models/troop');
var Commander = require('../models/commander');
var Race = require('../models/race');

var cards={};


cards.getAllTroops =  (req, res) => {
    Troop.find({},(err,trooplist)=>{
      if (err){
        console.log("error "+ err);
        res.send(JSON.err)
      }
      else {
        console.log(trooplist);
        res.send(trooplist);
      }
    });
};
cards.getAllRaces =  (req, res) => {
    Race.find({},(err,raceslist)=>{
      if (err){
        console.log("error "+ err);
        res.send(JSON.err)
      }
      else {
        res.send(raceslist);
      }
    });
};
cards.upsertCommander =  (req, res) => {
    Commander.findOneAndUpdate({_id:req.body.id},req.body,{upsert:true,new:true,runValidators:true},(err,commander)=>{
      if (err){
        console.log("error "+ err);
        res.send(JSON.err)
      }
      else {
        res.send({ok:true});
      }
    });
};

module.exports = cards;
