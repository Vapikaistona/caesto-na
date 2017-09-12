import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {GameService} from '../game/game.service'
import {ChatService} from '../game/chat.service'
import {SocketService} from '../game/socket.service'
import {CurrentUserService} from '../user/current-user.service'

@Injectable()
export class AuthenticationService {
    isLogged:boolean =false;

    constructor(private http: Http, private currentUser:CurrentUserService, private game:GameService, private chat:ChatService, private socket:SocketService) { }
    login(username: string, password: string) {
        return this.http.post('/api/user/login', { username: username, password: password })
            .map((response: Response) => {
              let data = response.json();
                if (data.username) {
                    this.currentUser.setUser(data);
                    this.setLogged(true);
                    this.socket.connect();
                    this.game.init();
                    this.chat.init();
                }
                return data;
              }
          );
    }

    logout() {
        return this.http.post('/api/user/logout',{})
            .subscribe((response: Response) => {
                this.currentUser.removeUser();
                this.setLogged(false);
                this.socket.disconnect();
            });
    }

    setLogged(isLogged:boolean){
      this.isLogged = isLogged;
    }
    getLogged(){
      return this.isLogged;
    }
    isAdmin(){
      if (this.currentUser.isLogged()){ return this.currentUser.getUser().lvl == 3; }
      return false;
    }

}
