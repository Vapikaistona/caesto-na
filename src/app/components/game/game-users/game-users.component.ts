import { Component, OnInit } from '@angular/core';
import {GameService} from '../../../shared/game/game.service'
import {ChatService} from '../../../shared/game/chat.service'
import {SocketService} from '../../../shared/game/socket.service'
import {DecksService} from '../../../shared/deck/decks.service'
import {CurrentUserService} from '../../../shared/user/current-user.service'
@Component({
  selector: 'game-users',
  templateUrl: './game-users.component.html',
  styleUrls: ['./game-users.component.css']
})
export class GameUsersComponent implements OnInit {
  private userChallenged:any ="";
  constructor(private game:GameService,
              private chat:ChatService,
              private socket:SocketService, private decks:DecksService, private currentUser:CurrentUserService) { }

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
  selectUser(user){
    if(user.username!=this.currentUser.getUser().username && user.active){
      this.chat.userPrivateChat = user.username;
      this.chat.setPrivateChat(user.username);
    }
  }
}
