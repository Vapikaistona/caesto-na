import { Component, OnInit } from '@angular/core';
import {GameService} from '../../../shared/game/game.service'
import {AlertService} from '../../../shared/alert/alert.service'
import {DecksService} from '../../../shared/deck/decks.service'
@Component({
  selector: 'game-msg',
  templateUrl: './game-msg.component.html',
  styleUrls: ['./game-msg.component.css']
})
export class GameMsgComponent implements OnInit {
  private msg:string;
  constructor(private game:GameService, private decks:DecksService, private alert:AlertService) { }

  ngOnInit() {
  }
  acceptChallenge(){
    if(!!this.decks.deck._id){
      this.msg = ""
      this.game.acceptChallenge();
      this.alert.clearAlert();
    }
  }
  declineChallenge(){
    this.game.declineChallenge();
    this.msg = ""
  }
}
