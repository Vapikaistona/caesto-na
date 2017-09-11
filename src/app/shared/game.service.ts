import { Injectable } from '@angular/core';
import {CurrentUserService} from './current-user.service'
import {DecksService} from './decks.service'
import * as io from 'socket.io-client';
@Injectable()
export class GameService {
  private url = '/';
  private socket;
  public userList:Array<any> = [];
  public challenge:boolean = false;
  public waitForChallenge:boolean=false;
  private challengeDetails:any;
  private game:any={};
  constructor(private currentUser:CurrentUserService, private decks: DecksService) { }

  init(){

  }
  getChallengeDetails(){
    return this.challengeDetails;
  }
  connect(){
    if (this.socket){
      this.socket.disconnect();
    }
    this.socket = io(this.url);
    this.socket.emit("user", this.currentUser.getUser());
    this.socket.on("userList",list=>{
      this.userList = list;
    })
    this.socket.on("challenge",details =>{
      this.challengeDetails = details;
      this.challenge = true;
      this.socket.once("challengeCanceled", data =>{
        this.challengeDetails = "Challenge Request Canceled";
        this.challenge = false;
      });
    })
    this.socket.on("game-join", game=>{
      this.game = game;
      console.log(game);
    })
  }
  disconnect(){
    if (this.socket){
      this.socket.disconnect();
    }
  }
  sendChallenge(user){
    this.socket.emit("challenge", this.currentUser.getUser().username, this.decks.deck, user.username);
    this.waitForChallenge = true;
    this.challengeDetails = "Waiting for "+user.username+" to accept the challenge";
    this.socket.once("challengeAccepted", data =>{
      this.socket.off("challengeDeclined");
      this.challengeDetails = "Challenge Accepted";
      this.waitForChallenge = false;
      this.challenge = false;
    })
    this.socket.once("challengeDeclined", data =>{
      this.socket.off("challengeAccepted");
      this.challengeDetails = "Challenge Declined";
      this.waitForChallenge = false;
      this.challenge = false;
    })
  }
  cancelChallenge(user){
    this.socket.emit("challengeCanceled", user);
    this.socket.off("challengeDeclined");
    this.socket.off("challengeAccepted");
    this.challengeDetails = "Challenge Canceled";
    this.waitForChallenge = false;
    this.challenge = false;
  }
  acceptChallenge(){
    this.socket.emit("challengeAccepted", this.decks.deck);
    this.socket.off("challengeDeclined");
    this.socket.off("challengeAccepted");
    this.challengeDetails = "Challenge Accepted";
    this.waitForChallenge = false;
    this.challenge = false;
  }
  declineChallenge(){
    this.socket.emit("challengeDeclined");
    this.socket.off("challengeDeclined");
    this.socket.off("challengeAccepted");
    this.challengeDetails = "Challenge Declined";
    this.waitForChallenge = false;
    this.challenge = false;
  }


}
