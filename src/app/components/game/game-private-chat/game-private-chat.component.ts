import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../../shared/game/chat.service'
@Component({
  selector: 'game-private-chat',
  templateUrl: './game-private-chat.component.html',
  styleUrls: ['./game-private-chat.component.css']
})
export class GamePrivateChatComponent implements OnInit {
  private model: any = {textToSend:""};

  constructor(private chat:ChatService) { }

  ngOnInit() {
  }
  sendMessage(){
    this.chat.sendPrivateMsg(this.model.textToSend);
    this.model.textToSend = "";
  }

}
