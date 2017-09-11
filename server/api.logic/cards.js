var passport = require('passport');
var Troop = require('../models/troop');
var Commander = require('../models/commander');
var Race = require('../models/race');
var CardType = require('../models/cardType');
var dateFormat = require('dateformat');

var cards={};
var troops= [];
var commanders =[];
var races = [];
var types = [];

cards.getAllTroops =  (req, res) => {
  if (troops.length==0) {
    Troop.find({},(err,trooplist)=>{
      if (err){
        console.log("error "+ err);
        res.send(JSON.err)
      }
      else {
        troops = trooplist;
        res.send(trooplist);
      }
    });
  }else {
    res.send(troops);
  }
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
          Troop.findOneAndUpdate({_id:troop.id},troop,{new: true},(err,troopUpdated)=>{
            if (err){
              console.log("error "+ err);
              res.send(JSON.err)
            }
            else {
              troops[troops.findIndex(x=>x._id+"" === troopUpdated._id+"")] =troopUpdated;
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
              troops.push(troop);
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
      troops.splice(troops.findIndex(x=>x._id == req.params.id),1);
      res.send(troop);
    }
  });
};

cards.getAllCommanders =  (req, res) => {
  if (commanders.length==0) {
    Commander.find({},(err,commanderList)=>{
      if (err){
        console.log("error "+ err);
        res.send(JSON.err)
      }
      else {
        commanders = commanderList;
        res.send(commanderList);
      }
    });
  }else {
    res.send(commanders)
  }
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
        Commander.findOneAndUpdate({_id:commander.id},commander,{new:true},(err,commanderUpdated)=>{
          if (err){
            console.log("error "+ err);
            res.send(JSON.err)
          }
          else {
            commanders[commanders.findIndex(x=>x._id+"" === commanderUpdated._id+"")] =commanderUpdated;
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
            commanders.push(commander);
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
      commanders.splice(commanders.findIndex(x=>x._id == req.params.id),1);
      res.send(commander);
    }
  });
};

cards.getAllRaces =  (req, res) => {
  if (races.length ==0) {
    Race.find({},(err,raceslist)=>{
      if (err){
        console.log("error "+ err);
        res.send(JSON.err)
      }
      else {
        races = raceslist;
        res.send(raceslist);
      }
    });
  }else {
    res.send(races)
  }
};

cards.getCardTypes =  (req, res) => {
  if (types.length ==0) {
    CardType.find({},(err,cardTypeList)=>{
      if (err){
        console.log("error "+ err);
        res.send(JSON.err)
      }
      else {
        types = cardTypeList;
        res.send(cardTypeList);
      }
    });
  }else {
    res.send(types);
  }
};

module.exports = cards;
