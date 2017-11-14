import { Injectable } from '@angular/core';
import {SocketService} from './socket.service'

@Injectable()
export class ActionService {
  public showGlobal:boolean = true;
  public globalChat:Array<any>=[];
  public privateChat: Array<any>=[];
  public userPrivateChat: string="";
  public currentPrivateChat:Array<any>=[];
  public pendingMsg:Array<any>=[];

  constructor( private socket:SocketService) { }

  moveCreature(from, to){
    this.socket.getSocket().emit('creature-move',from,to);
  }
  playCard(card,pos,index){
    this.socket.getSocket().emit('play-card',card,pos,index);
  }
  useActionCard(card,pos){
    this.socket.getSocket().emit('play-card',card,pos);
  }
  attack(attacker,defender){
    this.socket.getSocket().emit('attack',attacker,defender);
  }
}
