import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../../shared/game/chat.service'
@Component({
  selector: 'game-global-chat',
  templateUrl: './game-global-chat.component.html',
  styleUrls: ['./game-global-chat.component.css']
})
export class GameGlobalChatComponent implements OnInit {
  private model: any = {textToSend:""};

  constructor(private chat:ChatService) { }

  ngOnInit() {
  }
  sendMessage(){
    this.chat.sendGlobalMsg(this.model.textToSend);
    this.model.textToSend = "";
  }

}
