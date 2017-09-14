import { Injectable } from '@angular/core';
import {CurrentUserService} from '../user/current-user.service'
import * as io from 'socket.io-client';
@Injectable()
export class SocketService {
  private url = '/';
  private socket;
  public userList:Array<any> = [];
  constructor(private currentUser:CurrentUserService) { }

  getSocket(){
    return this.socket;
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
    this.socket.on('disconnect-cient',()=>{
      this.socket.disconnect();
    })

  }  disconnect(){
    if (this.socket){
      this.socket.disconnect();
    }
  }
}
