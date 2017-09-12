import { Injectable } from '@angular/core';
import {CurrentUserService} from '../user/current-user.service'
import {DecksService} from '../deck/decks.service'
import {SocketService} from './socket.service'
import {AlertService} from '../alert/alert.service'

@Injectable()
export class GameService {
  public challenge:boolean = false;
  public waitForChallenge:boolean=false;
  private challengeDetails:any;
  private game:any={};
  constructor(private currentUser:CurrentUserService, private decks: DecksService, private socket:SocketService, private alert:AlertService) { }

  getChallengeDetails(){
    return this.challengeDetails;
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
      this.game = game;
      console.log(game);
    })
  }
  sendChallenge(user){
    this.socket.getSocket().emit("challenge", this.currentUser.getUser().username, this.decks.deck, user.username);
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
    this.socket.getSocket().emit("challengeAccepted", this.decks.deck);
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
}
