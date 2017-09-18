import { Injectable } from '@angular/core';
import {CurrentUserService} from '../user/current-user.service'
import {DecksService} from '../deck/decks.service'
import {SocketService} from './socket.service'
import {AlertService} from '../alert/alert.service'

@Injectable()
export class GameService {
  public challenge:boolean = false;
  public waitForChallenge:boolean=false;
  public gameStart:boolean=false;
  private challengeDetails:any;
  private game:any={};
  public currentGame:any = {};
  public hand:Array<any>=[];
  public myTurn:boolean=false;

  constructor(private currentUser:CurrentUserService, private decks: DecksService, private socket:SocketService, private alert:AlertService) { }

  getChallengeDetails(){
    return this.challengeDetails;
  }
  updateGame(game){
    if(this.currentUser.getUser().username == this.game.userA){
      this.currentGame.ownHand = game.handA;
      this.currentGame.enemyHand = game.handB;
      this.currentGame.ownDeck = game.deckA;
      this.currentGame.enemyDeck = game.deckB;
      this.currentGame.ownCommander = game.commanderA;
      this.currentGame.enemyCommander = game.commanderB;
    }else{
      this.currentGame.ownHand = game.handB;
      this.currentGame.enemyHand = game.handA;
      this.currentGame.ownDeck = game.deckB;
      this.currentGame.enemyDeck = game.deckA;
      this.currentGame.ownCommander = game.commanderB;
      this.currentGame.enemyCommander = game.commanderA;
    }
  }
  init(){
    this.socket.getSocket().on("challenge",details =>{
      this.challengeDetails = details;
      this.challenge = true;
      this.alert.setAlert("NEW CHALLENGE");
      this.socket.getSocket().once("challengeCanceled", data =>{
        this.challengeDetails = "Challenge Request Canceled";
        this.challenge = false;
      });
    })
    this.socket.getSocket().on("game-join", game=>{
      this.gameStart = true;
      this.game = game;
      this.updateGame(game);
      this.myTurn = this.currentUser.getUser().username == this.game.userTurn;
      this.socket.getSocket().on("next-turn",game =>{
        this.game = game;
        this.updateGame(game);
        this.myTurn = this.currentUser.getUser().username == this.game.userTurn;
      });
      this.socket.getSocket().on("game-hand",hand =>{
        this.hand = hand;
      });
      this.socket.getSocket().on("game-info",game =>{
        this.game = game;
        this.updateGame(game);this.game = game;
      });
      this.socket.getSocket().on("end-game",game =>{
        this.game = {};
        this.updateGame({});
        this.gameStart = false;
      });
      this.socket.getSocket().on("user-disconnected",user =>{
        if(user == this.game.userA || user == this.game.userB){
          this.game = {};
          this.updateGame({});
          this.gameStart = false;
          this.alert.setAlert("User "+user+ "has just disconnected");
        }
      });
    })
  }
  sendChallenge(user){
    this.socket.getSocket().emit("challenge", this.currentUser.getUser().username, this.decks.deck._id, user.username);
    this.waitForChallenge = true;
    this.challengeDetails = "Waiting for "+user.username+" to accept the challenge";
    this.socket.getSocket().once("challengeAccepted", data =>{
      this.socket.getSocket().off("challengeDeclined");
      this.challengeDetails = "Challenge Accepted";
      this.waitForChallenge = false;
      this.challenge = false;
    })
    this.socket.getSocket().once("challengeDeclined", data =>{
      this.socket.getSocket().off("challengeAccepted");
      this.challengeDetails = "Challenge Declined";
      this.waitForChallenge = false;
      this.challenge = false;
    })
  }
  cancelChallenge(user){
    this.socket.getSocket().emit("challengeCanceled", user);
    this.socket.getSocket().off("challengeDeclined");
    this.socket.getSocket().off("challengeAccepted");
    this.challengeDetails = "Challenge Canceled";
    this.waitForChallenge = false;
    this.challenge = false;
  }
  acceptChallenge(){
    this.socket.getSocket().emit("challengeAccepted", this.decks.deck._id);
    this.socket.getSocket().off("challengeDeclined");
    this.socket.getSocket().off("challengeAccepted");
    this.challengeDetails = "Challenge Accepted";
    this.waitForChallenge = false;
    this.challenge = false;
  }
  declineChallenge(){
    this.socket.getSocket().emit("challengeDeclined");
    this.socket.getSocket().off("challengeDeclined");
    this.socket.getSocket().off("challengeAccepted");
    this.challengeDetails = "Challenge Declined";
    this.waitForChallenge = false;
    this.challenge = false;
  }
  endTurn(){
    this.myTurn = this.currentUser.getUser().username == this.game.userTurn
    if(this.myTurn){
      this.socket.getSocket().emit("next-turn",this.game);
    }
  }
  endGame(){
    this.socket.getSocket().emit("end-game",this.game);
  }
  getGame(){
    return this.game;
  }
}
