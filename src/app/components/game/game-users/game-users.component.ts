import { Component, OnInit } from '@angular/core';
import {GameService} from '../../../shared/game.service'
import {DecksService} from '../../../shared/decks.service'
import {CurrentUserService} from '../../../shared/current-user.service'
@Component({
  selector: 'game-users',
  templateUrl: './game-users.component.html',
  styleUrls: ['./game-users.component.css']
})
export class GameUsersComponent implements OnInit {
  private userChallenged:any ="";
  constructor(private game:GameService, private decks:DecksService, private currentUser:CurrentUserService) { }

  ngOnInit() {
  }
  sendChallenge(user){
    this.userChallenged = user.username;
    this.game.sendChallenge(user);

  }
  cancelChallenge(user){
    this.userChallenged = "";
    this.game.cancelChallenge(user);
  }
}
