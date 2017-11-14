var UUID = require('uuid');
const io = require('socket.io');
var User = require('../models/user');
var deck = require('./deck');
var Deck = require('../models/deck');
var game = {};
var users = [];
var clients = [];
var sio;

function getClient(user) {
  if (clients.findIndex(x=>x.id === users[users.findIndex(x=>x.username === user)].clientId) >=0) {
    return clients[clients.findIndex(x=>x.id === users[users.findIndex(x=>x.username === user)].clientId)].client;
  }else {
    return {};
  }
}

function getUser(user) {
  return users[users.findIndex(x=>x.username === user)];
}

game.init = function (server){
  sio = io.listen(server);
  sio.sockets.on('connection', game.onConnect);
  game.initGameUsers();
}

game.initGameUsers = function (){
  User.find({},(err,userlist)=>{
    if (err){
      console.log("error "+ err);
    }
    else {
      for (user of userlist) {
        users.push({clientId:"",username:user.username,active:false})
      }
    }
  });
}


function endGame(game) {
  if (game) {
    sio.sockets.to(game.id).emit("end-game");
    var toUser = getClient(game.userB);
    var fromUser = getClient(game.userA);
    if (fromUser) {
      fromUser.removeAllListeners('creature-move');
      fromUser.removeAllListeners('next-turn');
      fromUser.removeAllListeners('end-game');
      fromUser.removeAllListeners('challengeAccepted');
      fromUser.leave(game.id);
    }
    if (toUser) {
      toUser.removeAllListeners('creature-move');
      toUser.removeAllListeners('next-turn');
      toUser.removeAllListeners('end-game');
      toUser.removeAllListeners('challengeAccepted');
      toUser.leave(game.id);
    }
  }
}
game.onConnect = function (client) {
    client.userid = UUID();
    // USER CONNECTED
    client.on('user', function (user) {
        var userClient = {clientId:client.userid,username:user.username,active:true};
        clients.push({client:client, id:client.userid});
        var index = users.findIndex(x=>x.username === user.username);
        if (index <0){
          users.push(userClient);
        }else {
          users[index]=userClient;
        }
        sio.sockets.emit('userList', users);
    });
    // CHATS
    // GLOBAL
    client.on('global-msg', (msg) =>{
      sio.sockets.emit('global-msg',msg);
    })
    //PRIVATE
    client.on('private-msg', ( userA, userB, msg) =>{
      var toUser = getClient(userB)
      if (toUser) {
        sio.sockets.to(toUser.id).emit('private-msg',userA, msg);
      }
    })
    //CHALLENGE USER TO A GAME
    client.on ('challenge', (userA, deckA, userB) =>{
      var toUser = getClient(userB);
      var fromUser = getClient(userA);
      if (toUser) {
        sio.sockets.to(toUser.id).emit('challenge',userA+" has challenge you");
        var privateGame = {userA:userA, deckA:{}, userB:userB,deckB:{},userTurn:userA};

        function playCardA(card, pos, index) {
          privateGame.deckA.hand.splice(index,1)
          if (card.troop) {
            card.troop.modifiers= {life:0,attack:0,shield:0}
            privateGame.board[pos]=card;
          }else if (card.structure){
            card.structure.modifiers= {life:0,attack:0,shield:0}
            privateGame.board[pos]=card;
          }
          sio.sockets.to(privateGame.id).emit("play-card",card,pos,"userA");
          sio.sockets.to(fromUser.id).emit('game-hand', privateGame.deckA.hand);
        }
        function playCardB(card, pos, index) {
          privateGame.deckB.hand.splice(index,1)
          if (card.troop) {
            card.troop.modifiers= {life:0,attack:0,shield:0}
            privateGame.board[pos]=card;
          }else if (card.structure){
            card.structure.modifiers= {life:0,attack:0,shield:0}
            privateGame.board[pos]=card;
          }
          sio.sockets.to(privateGame.id).emit("play-card",card,pos,"userB");
          sio.sockets.to(toUser.id).emit('game-hand', privateGame.deckB.hand)
        }
        function moveCreature(from, to) {
          let target = privateGame.board[from];
          if (!target.structure) {
            privateGame.board[to] = target;
            privateGame.board[from] = {};
            sio.sockets.to(privateGame.id).emit("creature-move",from,to);
          }
        }
        function attack(origin,target) {
          //get the attacker
          privateGame.board[origin].active = false;
          let attacker = privateGame.board[origin].troop||privateGame.board[origin].commander;
          let attackerDmg = attacker.attack||0;
          let attackerShield = attacker.modifiers["shield"]||0;
          let attackerLife = attacker.life;
          if (attacker.modifiers["attack"]!=0){
            attackerDmg +=attacker.modifiers["attack"];
          }
          if (attacker.modifiers["life"]!=0){
            attackerLife +=attacker.modifiers["life"];
          }
          //and get the defender
          let defender = privateGame.board[target].troop||privateGame.board[target].commander||privateGame.board[target].structure;
          let defenderDmg = defender.attack||0;
          let defenderLife = defender.life;
          let defenderShield = defender.modifiers["shield"]||0;
          if (defender.modifiers["attack"]!=0){
            defenderDmg +=defender.modifiers["attack"];
          }
          if (defender.modifiers["life"]!=0){
            defenderLife +=defender.modifiers["life"];
          }
          //both deal damage
          if(attackerDmg >=defenderShield){
            attackerDmg -= defenderShield;
            defenderShield = 0;
          }else{
            defenderShield -=attackerDmg;
          }
          if(defenderDmg >=attackerShield){
            defenderDmg -= attackerShield;
            attackerShield = 0;
          }else{
            attackerShield -=defenderDmg;
          }
          defenderLife -= attackerDmg<0?0:attackerDmg;
          attackerLife -= defenderDmg<0?0:defenderDmg;
          //check the results
          if (attackerLife<=0) {
            privateGame.board[origin] ={}
          }else{
            if (privateGame.board[origin].commander){
              privateGame.board[origin].commander.life = attackerLife;
              privateGame.board[origin].commander.modifiers.shield = attackerShield;
              privateGame.board[origin].commander.active = false;
            }else{
              privateGame.board[origin].troop.life = attackerLife;
              privateGame.board[origin].troop.modifiers.shield = attackerShield;
              privateGame.board[origin].troop.active = false;
            }
          }
          if(defenderLife <=0){
              privateGame.board[target] ={}
            }
          else{
            let def = privateGame.board[target]
            if (def.commander){
              privateGame.board[target].commander.life = defenderLife;
              privateGame.board[target].commander.modifiers.shield = defenderShield;
            }else if(def.troop){
              privateGame.board[target].troop.life = defenderLife;
              privateGame.board[target].troop.modifiers.shield = defenderShield;
            }else{
                privateGame.board[target].structure.life = defenderLife;
                privateGame.board[target].structure.modifiers.shield = defenderShield;
            }
          }
          if (!privateGame.board[target].user){
            if (privateGame.board[origin].user){
              privateGame.board[target] = privateGame.board[origin];
              privateGame.board[origin] = {}
            }
          }
          sio.sockets.to(privateGame.id).emit("attack",privateGame.board);
        }
        function nextTurn(game) {
          //clear temporalValues
          let cardOwner =game.userTurn == game.userA? "userA":"userB"
          for (let element in privateGame.board) {
              if (privateGame.board[element].user == cardOwner){
                privateGame.board[element].active = true;
              }
          }
          privateGame.userTurn = game.userTurn == game.userA? game.userB:game.userA;
          if(privateGame.userTurn == game.userA){
            privateGame.deckA.hand = deck.draw (1,privateGame.deckA);
            privateGame.deckA.commander.resources ++
            sio.sockets.to(fromUser.id).emit('game-hand', privateGame.deckA.hand);
          }else {
            privateGame.deckB.hand = deck.draw (1,privateGame.deckB);
            privateGame.deckB.commander.resources ++
            sio.sockets.to(toUser.id).emit('game-hand', privateGame.deckB.hand);
          }
          //privateGame.board = game.board;
          sio.sockets.to(game.id).emit("next-turn",gameInfo(privateGame));
        }

        function gameInfo(game){
          var formattedGame ={}
          formattedGame.id = game.id;
          formattedGame.userTurn = game.userTurn;
          formattedGame.board = game.board;
          formattedGame.userA = game.userA;
          formattedGame.userB = game.userB;
          formattedGame.handA = game.deckA.hand.length;
          formattedGame.handB = game.deckB.hand.length;
          formattedGame.deckA = game.deckA.cards.length;
          formattedGame.deckB = game.deckB.cards.length;
          formattedGame.commanderA = game.deckA.commander;
          formattedGame.commanderB = game.deckB.commander;
          formattedGame.cementeryA = game.deckA.cementery;
          formattedGame.cementeryB = game.deckB.cementery;
          return formattedGame;
        }
        Deck.findById(deckA,(err,deckItem)=>{
          if (err){
            console.log("error "+ err);
          }
          else {
            var pileOfCards= [];
            for (card of deckItem.troops) {
              var number = card.number;
              delete card.number;
              for(var i =1;i<=number;i++){
                pileOfCards.push(card)
              }
            }
            var completeDeck = {commander:deckItem.commander,cementery:[],hand:[]}
            completeDeck.cards = deck.shuffle(pileOfCards);
            privateGame.deckA =  completeDeck;
          }
        });

        client.once('challengeCanceled',() =>{
          sio.sockets.to(toUser.id).emit('challengeCanceled');
        });
        toUser.once('challengeDeclined',() =>{
          sio.sockets.to(fromUser.id).emit('challengeDeclined');
        });
        toUser.on('challengeAccepted',  (deckB) => {

          Deck.findById(deckB,(err,deckItem)=>{
            if (err){
              console.log("error "+ err);
            }
            else {
              var pileOfCards= [];
              for (var card of deckItem.troops) {
                var number = card.number;
                delete card.number;
                for(var i =1;i<=number;i++){
                  pileOfCards.push(card)
                }
              }
              var completeDeck = {commander:deckItem.commander,cementery:[],hand:[]}
              completeDeck.cards = deck.shuffle(pileOfCards);
              privateGame.deckB =  completeDeck;
              privateGame.deckA.hand = deck.draw (2,privateGame.deckA);
              privateGame.deckB.hand = deck.draw (2,privateGame.deckB)
              privateGame.id = UUID();
              sio.sockets.to(fromUser.id).emit('challengeAccepted');
              client.join(privateGame.id);
              toUser.join(privateGame.id);
              deck.initBoard(privateGame);
              sio.sockets.to(privateGame.id).emit("game-join",gameInfo(privateGame));
              sio.sockets.to(fromUser.id).emit('game-hand', privateGame.deckA.hand);
              sio.sockets.to(toUser.id).emit('game-hand', privateGame.deckB.hand);
              client.on('play-card',playCardA);
              toUser.on('play-card',playCardB);
              client.on('creature-move',moveCreature);
              toUser.on('creature-move',moveCreature);
              client.on('attack',attack);
              toUser.on('attack',attack);
              client.on('next-turn',nextTurn);
              toUser.on('next-turn',nextTurn);
              client.on('end-game',endGame);
              toUser.on('end-game',endGame);
            }
          });
        })
      }
    })
    // DISCONNECT
    client.on('disconnect-client', function (game) {
        var userIndex = users.findIndex(x=>x.clientId === client.userid);
        if(userIndex>=0){
          endGame(game);
          sio.sockets.to(clients.find(x=>x.id === users[userIndex].clientId).id).emit('disconnect-client');
          var clientIndex = clients.findIndex(x=>x.id === users[userIndex].clientId);
          clients.splice(clientIndex,1);
          users[userIndex].clientId="";
          users[userIndex].active=false;
          sio.sockets.emit('userList', users);
        }

    });
    client.on('disconnect', function () {
        var userIndex = users.findIndex(x=>x.clientId === client.userid);
        if(userIndex>=0){
          var clientIndex = clients.findIndex(x=>x.id === users[userIndex].clientId);
          clients.splice(clientIndex,1);
          users[userIndex].clientId="";
          users[userIndex].active=false;
          sio.sockets.emit('userList', users);
          sio.sockets.emit('user-disconnected', users[userIndex].username);
        }

    });

}
module.exports = game;
