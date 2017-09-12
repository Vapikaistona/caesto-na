import { Injectable } from '@angular/core';
import {User} from '../../classes/user'


@Injectable()
export class CurrentUserService {
  private currentUser:User;
  private logged:boolean=false;
  constructor() {
  }

  getDecks(){

  }
  setUser(user:User){
      this.currentUser = user;
      this.logged = true;
  }
  getUser():User{
    return this.currentUser;
  }
  removeUser(){
    this.currentUser = {username:"",firstname:"",lastname:"",lastname2:"",gender:"",age:0,lvl:1,email:""};
    this.logged = false;
  }
  isAdmin(){
    return this.currentUser.lvl == 3;
  }
  isLogged(){
    return this.logged;
  }
}
