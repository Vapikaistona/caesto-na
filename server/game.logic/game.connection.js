var UUID = require('uuid');
const io = require('socket.io');
var User = require('../models/user');
var game = {};
var users = [];
var clients = [];
var sio;

function getClient(user) {
  return clients[clients.findIndex(x=>x.id === users[users.findIndex(x=>x.username === user.username)].clientId)].client;
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
    //CHALLENGE USER TO A GAME
    client.on ('challenge', (userA, deckA, userB) =>{
      sio.sockets.to(getClient(userB).id).emit('challenge',userA.username+" has challenge you");
      var privateGame = {userA:getUser(userA), deckA:deckA, userB:userB,deckB:{}}
      client.once('challengeCanceled',() =>{
        sio.sockets.to(getClient(userB).id).emit('challengeCanceled');
      });
      getClient(userB).once('challengeDeclined',() =>{
        sio.sockets.to(getClient(userA).id).emit('challengeDeclined');
      });
      getClient(userB).once('challengeAccepted',  (deckB) => {
        privateGame.deckB = deckB;
        privateGame.id = UUID();
        sio.sockets.to(getClient(userA).id).emit('challengeAccepted');
        getClient(userA).join(privateGame.id);
        getClient(userB).join(privateGame.id);
        sio.sockets.to(privateGame.id).emit("game-join",privateGame);
      })
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
