import { Injectable } from '@angular/core';
import {CurrentUserService} from '../user/current-user.service'
import {DecksService} from '../deck/decks.service'
import {SocketService} from './socket.service'
import {AlertService} from '../alert/alert.service'

@Injectable()
export class ChatService {
  public globalChat:Array<any>=[];
  public privateChat: Array<any>=[];
  public userPrivateChat: string="";
  public currentPrivateChat:Array<any>=[];
  constructor(private currentUser:CurrentUserService, private socket:SocketService, private alert:AlertService) { }

  init(){
    this.socket.getSocket().on("global-msg",msg =>{
      this.globalChat.push(msg);
    })
    this.socket.getSocket().on("private-msg", (user,msg)=>{
      var index = this.privateChat.findIndex(x=>x.username ==user);
      if (index<0){
        this.privateChat.push({username:user,msgList:[{user:user,text:msg}]})
      }else{
        this.privateChat[index].msgList.push({user:user,text:msg});
      }
      if (this.userPrivateChat != user){
        this.alert.setAlert(user.toUpperCase()+" HAS WROTE YOU!");
      }
    })
  }
  setPrivateChat(user){
    if(!this.privateChat[this.privateChat.findIndex(x=>x.username ==user)]){
      this.privateChat.push({username:user,msgList:[]})
    }
    this.currentPrivateChat = this.privateChat[this.privateChat.findIndex(x=>x.username ==user)].msgList;
  }
  sendGlobalMsg(text){
    this.socket.getSocket().emit("global-msg", {user:this.currentUser.getUser().username,text:text});
  }
  sendPrivateMsg(text){
    this.socket.getSocket().emit("private-msg",this.currentUser.getUser().username, this.userPrivateChat, text);
    var index = this.privateChat.findIndex(x=>x.username ==this.userPrivateChat);
    if (index<0){
      this.privateChat.push({username:this.currentUser.getUser().username,msgList:{user:this.userPrivateChat,text:text}})
    }else{
      this.privateChat[index].msgList.push({user:this.currentUser.getUser().username,text:text});
    }
  }

}
