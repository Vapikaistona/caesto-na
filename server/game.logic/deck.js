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
  game.board = {"11":{commander:game.deckA.commander,user:game.userA},
                "21":{},"22":{},
                "31":{},"32":{},"33":{},
                "41":{},"42":{},"43":{},"44":{},
                "51":{},"52":{},"53":{},
                "61":{},"62":{},
                "71":{commander:game.deckB.commander, user:game.userB}
              }
}

deck.draw = function (number, pileOfCards){
  if (number >= pileOfCards.cards.length){ number = pileOfCards.cards.length}
  var newCards = pileOfCards.cards.splice(pileOfCards.cards.length-number,number)
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


module.exports = deck;
