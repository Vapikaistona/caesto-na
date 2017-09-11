import { Component, OnInit } from '@angular/core';
import {GameService} from '../../../shared/game.service'
import {DecksService} from '../../../shared/decks.service'
@Component({
  selector: 'game-users',
  templateUrl: './game-users.component.html',
  styleUrls: ['./game-users.component.css']
})
export class GameUsersComponent implements OnInit {

  constructor(private game:GameService, private decks:DecksService) { }

  ngOnInit() {
  }
  sendChallenge(user){
    this.game.sendChallenge(user);
  }
  cancelChallenge(user){
    this.game.cancelChallenge(user);
  }
}
