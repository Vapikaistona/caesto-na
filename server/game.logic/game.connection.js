var UUID = require('uuid');
const io = require('socket.io');
var User = require('../models/user');
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
        var privateGame = {userA:userA, deckA:deckA, userB:userB,deckB:{}}
        client.once('challengeCanceled',() =>{
          sio.sockets.to(toUser.id).emit('challengeCanceled');
        });
        toUser.once('challengeDeclined',() =>{
          sio.sockets.to(fromUser.id).emit('challengeDeclined');
        });
        toUser.once('challengeAccepted',  (deckB) => {
          privateGame.deckB = deckB;
          privateGame.id = UUID();
          sio.sockets.to(fromUser.id).emit('challengeAccepted');
          fromUser.join(privateGame.id);
          toUser.join(privateGame.id);
          sio.sockets.to(privateGame.id).emit("game-join",privateGame);
        })
      }
    })
    // DISCONNECT
    client.on('disconnect', function () {
        var userIndex = users.findIndex(x=>x.clientId === client.userid);
        if(userIndex>=0){
          var clientIndex = clients.findIndex(x=>x.id === users[userIndex].clientId);
          clients.splice(clientIndex,1);
          users[userIndex].clientId="";
          users[userIndex].active=false;
          sio.sockets.emit('userList', users);
        }
    });
}
module.exports = game;
