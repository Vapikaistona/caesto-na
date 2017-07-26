import { Injectable } from '@angular/core';
import {User} from '../classes/user'


@Injectable()
export class CurrentUserService {
  private currentUser:User;

  constructor() { }
  getDecks(){

  }
  setUser(user:User){
      this.currentUser = user;
  }
  getUser(){
    return this.currentUser;
  }
  isAdmin(){
    return true;
  }
}
