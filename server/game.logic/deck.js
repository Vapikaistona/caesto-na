var Deck = require('../models/deck');

var deck = {}

deck.shuffle = function (array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

deck.initBoard = function (game) {
  // game.board = {"11":{commander:game.deckA.commander,user:"userA"},
  //               "21":{},"22":{},
  //               "31":{},"32":{},"33":{},
  //               "41":{},"42":{},"43":{},"44":{},
  //               "51":{},"52":{},"53":{},
  //               "61":{},"62":{},
  //               "71":{commander:game.deckB.commander, user:"userB"}
  //             }
  game.deckA.commander.habs = deck.parseHabilities(game.deckA.commander.habilities)
  game.deckB.commander.habs = deck.parseHabilities(game.deckB.commander.habilities)
  game.deckA.commander.modifiers= {life:0,attack:0,shield:0}
  game.deckB.commander.modifiers= {life:0,attack:0,shield:0}
  game.board = {"11":{},"12":{commander:game.deckA.commander,user:"userA"},"13":{},
                "21":{},"22":{},"23":{},"24":{},
                "31":{},"32":{},"33":{},"34":{},"35":{},
                "41":{},"42":{},"43":{},"44":{},
                "51":{},"52":{commander:game.deckB.commander, user:"userB"},"53":{}
              }
}

deck.draw = function (number, pileOfCards){
  if (number >= pileOfCards.cards.length){ number = pileOfCards.cards.length}
  var newCards = pileOfCards.cards.splice(pileOfCards.cards.length-number,number)
  for (var i = 0; i < newCards.length; i++) {
    newCards[i].habs = deck.parseHabilities(newCards[i].habilities);
  }
   return pileOfCards.hand.concat(newCards) ;
}

deck.returnCard = function (card,deck,randomPos){
  deck.cards.push(card);
  if (randomPos){
    return shuffle(deck.cards)
  }else {
    return deck.cards;
  }
}

deck.parseHabilities = function(habilities){
  var parsed = {range:1,fast:false,slow:false,assassin:false,saboteur:false,hard:false,solid:false,shoot:0,
                explode:0, cost:0, attack:0,heal:0,shield:0,incapacitate:false,flyes:false,gigant:false,
                spawnPoint:false,actionPoint:false,augmentedRange:0,draw:0,discard:0,resource:0};
  var textSplited = habilities.split(";")
  for (var i = 0; i < textSplited.length; i++) {
    var n;
    //range
    if(n=textSplited[i].search("Range:")>=0){
      parsed.range = parseInt(textSplited[i].substr(n+6-1,1));
    }
    //fast
    if(n=textSplited[i].search("Fast")>=0){
      parsed.fast = true;
    }
    //slow
    if(n=textSplited[i].search("Slow")>=0){
      parsed.slow = true;
    }
    //assassin
    if(n=textSplited[i].search("Assassin")>=0){
      parsed.assassin = true;
    }
    //saboteur
    if(n=textSplited[i].search("Saboteur")>=0){
      parsed.saboteur = true;
    }
    //hard
    if(n=textSplited[i].search("Hard")>=0){
      parsed.hard = true;
    }
    //solid
    if(n=textSplited[i].search("Solid")>=0){
      parsed.solid = true;
    }
    //shoot
    if(n=textSplited[i].search("Shoot:")>=0){
      parsed.shoot = textSplited[i].substr(n+6-1,1);
    }
    //explode
    if(n=textSplited[i].search("Explode:")>=0){
      parsed.explode = textSplited[i].substr(n+8-1,1);
    }
    //cost
    if(n=textSplited[i].search("Cost:")>=0){
      var sign = textSplited[i].substr(n+5-1,1)
      if (sing=="+") {
        parsed.cost = parseInt(textSplited[i].substr(n+5-1,1));
      }else {
        parse.cost = -parseInt(textSplited[i].substr(n+5-1,1))
      }
    }
    //attack
    if(n=textSplited[i].search("Attack:")>=0){
      var sign = textSplited[i].substr(n+7-1,1)
      if (sing=="+") {
        parsed.attack = parseInt(textSplited[i].substr(n+7-1,1));
      }else {
        parse.attack = -parseInt(textSplited[i].substr(n+7-1,1))
      }
    }
    //heal
    if(n=textSplited[i].search("Heal:")>=0){
      parsed.heal = textSplited[i].substr(n+5-1,1);
    }
    //shield
    if(n=textSplited[i].search("Shield:")>=0){
      parsed.shield = textSplited[i].substr(n+7-1,1);
    }
    //incapacitate
    if(n=textSplited[i].search("Incapacitate")>=0){
      parsed.incapacitate = true;
    }
    //flyes
    if(n=textSplited[i].search("Flyes")>=0){
      parsed.flyes = true;
    }
    //gigant
    if(n=textSplited[i].search("Gigant")>=0){
      parsed.gigant = true;
    }
    //spawnPoint
    if(n=textSplited[i].search("Spawn point")>=0){
      parsed.spawnPoint = true;
    }
    //actionPoint
    if(n=textSplited[i].search("Action point")>=0){
      parsed.actionPoint = true;
    }
    //augmentedRange
    if(n=textSplited[i].search("Ranged modified:")>=0){
      var sign = textSplited[i].substr(n+15-1,1)
      if (sing=="+") {
        parsed.augmentedRange = parseInt(textSplited[i].substr(n+15-1,1));
      }else {
        parse.augmentedRange = -parseInt(textSplited[i].substr(n+15-1,1))
      }
    }
    //draw
    if(n=textSplited[i].search("Draw:")>=0){
      parsed.draw = textSplited[i].substr(n+5-1,1);
    }
    //discard
    if(n=textSplited[i].search("Discard:")>=0){
      parsed.discard = textSplited[i].substr(n+8-1,1);
    }
    //resource
    if(n=textSplited[i].search("Resource:")>=0){
      parsed.resource = textSplited[i].substr(n+10-1,1);
    }
  }
  return parsed;
}


module.exports = deck;
