import { Injectable } from '@angular/core';
import {CurrentUserService} from './current-user.service'
import * as io from 'socket.io-client';
@Injectable()
export class GameService {
  private url = '/';
  private socket;
  public userList:Array<any> = [];
  constructor(private currentUser:CurrentUserService) { }

  init(){

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
  }
  disconnect(){
    if (this.socket){
      this.socket.disconnect();
    }
  }
}
