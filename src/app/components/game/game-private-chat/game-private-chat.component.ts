import { Component, OnInit,ViewChild,ElementRef, AfterViewChecked } from '@angular/core';
import {ChatService} from '../../../shared/game/chat.service'
@Component({
  selector: 'game-private-chat',
  templateUrl: './game-private-chat.component.html',
  styleUrls: ['./game-private-chat.component.css']
})
export class GamePrivateChatComponent implements OnInit, AfterViewChecked {
  private model: any = {textToSend:""};
  @ViewChild('scrollChat') private myScrollContainer: ElementRef;

  constructor(private chat:ChatService) { }

  ngOnInit() {
  }
  ngAfterViewChecked() {
        this.scrollToBottom();
    }

  scrollToBottom(): void {
      try {
          this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      } catch(err) { }
  }

  sendMessage(){
    this.chat.sendPrivateMsg(this.model.textToSend);
    this.model.textToSend = "";
  }

}
