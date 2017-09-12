import { Component, OnInit } from '@angular/core';
import {GameService} from '../../../shared/game/game.service'
import {DecksService} from '../../../shared/deck/decks.service'
@Component({
  selector: 'game-msg',
  templateUrl: './game-msg.component.html',
  styleUrls: ['./game-msg.component.css']
})
export class GameMsgComponent implements OnInit {
  private msg:string;
  constructor(private game:GameService, private decks:DecksService) { }

  ngOnInit() {
  }
  acceptChallenge(){
    if(!!this.decks.deck._id){
      this.msg = ""
      this.game.acceptChallenge();
    }else{
      this.msg = "You must choose a deck before joining a game"
    }
  }
  declineChallenge(){
    this.game.declineChallenge();
    this.msg = ""
  }
}
