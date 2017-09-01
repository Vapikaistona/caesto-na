var passport = require('passport');
var Troop = require('../models/troop');
var Commander = require('../models/commander');
var Race = require('../models/race');
var dateFormat = require('dateformat');

var cards={};


cards.getAllTroops =  (req, res) => {
    Troop.find({},(err,trooplist)=>{
      if (err){
        console.log("error "+ err);
        res.send(JSON.err)
      }
      else {
        res.send(trooplist);
      }
    });
};

cards.getTroopById =  (req, res) => {
  Troop.findById(req.params.id,(err,troop)=>{
    if (err){
      console.log("error "+ err);
      res.send(JSON.err)
    }
    else {
      res.send(troop);
    }
  });
};

cards.insertTroop =  (req, res) => {
    var troop = new Troop(req.body);
    var now = new Date();
    Troop.findById(troop._id,(err,troopF)=>{
      if (err){
        console.log("error "+ err);
        res.send(JSON.err)
      }
      else {
        if (troopF){
          troop.modified_by =req.decoded._doc.username;
          troop.modified =  dateFormat(now,"dd/mm/yyyy, HH:MM:ss");
          Troop.findOneAndUpdate({_id:troop.id},troop,(err,troop)=>{
            if (err){
              console.log("error "+ err);
              res.send(JSON.err)
            }
            else {
              res.send({ok:true});
            }
          });
        }
        else{
          troop.created_by = req.decoded._doc.username;
          troop.created = dateFormat(now,"dd/mm/yyyy, HH:MM:ss");
          troop.save(function (err, troop) {
            if (err) {
              console.log("error "+ err);
              res.send(JSON.err);
            }
            else {
              res.send({ok:true});
            }
          });
        }
      }
    });
};

cards.updateTroop =  (req, res) => {
    Troop.findOneAndUpdate({_id:req.body.id},req.body,(err,troop)=>{
      if (err){
        console.log("error "+ err);
        res.send(JSON.err)
      }
      else {
        res.send({ok:true});
      }
    });
};


cards.deleteTroop = (req, res) => {
  Troop.findByIdAndRemove(req.params.id,(err,troop)=>{
    if (err){
      console.log("error "+ err);
      res.send(JSON.err)
    }
    else {
      res.send(troop);
    }
  });
};

cards.getAllCommanders =  (req, res) => {
    Commander.find({},(err,commanders)=>{
      if (err){
        console.log("error "+ err);
        res.send(JSON.err)
      }
      else {
        res.send(commanders);
      }
    });
};

cards.getCommanderById =  (req, res) => {
  Commander.findById(req.params.id,(err,commander)=>{
    if (err){
      console.log("error "+ err);
      res.send(JSON.err)
    }
    else {
      res.send(commander);
    }
  });
};
cards.insertCommander =  (req, res) => {
  var commander = new Commander(req.body);
  var now = new Date();
  Commander.findById(commander._id,(err,commanderF)=>{
    if (err){
      console.log("error "+ err);
      res.send(JSON.err)
    }
    else {
      if (commanderF){
        commander.modified_by =req.decoded._doc.username;
        commander.modified =  dateFormat(now,"dd/mm/yyyy, HH:MM:ss");
        Commander.findOneAndUpdate({_id:commander.id},commander,(err,commander)=>{
          if (err){
            console.log("error "+ err);
            res.send(JSON.err)
          }
          else {
            res.send({ok:true});
          }
        });
      }
      else{
        commander.created_by = req.decoded._doc.username;
        commander.created = dateFormat(now,"dd/mm/yyyy, HH:MM:ss")
        commander.save(function (err, commander) {
          if (err) {
            console.log("error "+ err);
            res.send(JSON.err);
          }
          else {
            res.send({ok:true});
          }
        });
      }
    }
  });
};

cards.updateCommander =  (req, res) => {
    Commander.findOneAndUpdate({_id:req.body.id},req.body,(err,commander)=>{
      if (err){
        console.log("error "+ err);
        res.send(JSON.err)
      }
      else {
        res.send({ok:true});
      }
    });
};

cards.deleteCommander = (req, res) => {
  Commander.findByIdAndRemove(req.params.id,(err,commander)=>{
    if (err){
      console.log("error "+ err);
      res.send(JSON.err)
    }
    else {
      res.send(commander);
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

module.exports = cards;
