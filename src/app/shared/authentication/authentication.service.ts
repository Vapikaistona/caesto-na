import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {GameService} from '../game.service'
import {CurrentUserService} from '../../shared/current-user.service'

@Injectable()
export class AuthenticationService {
    isLogged:boolean =false;
    constructor(private http: Http, private currentUser:CurrentUserService, private game:GameService) { }

    login(username: string, password: string) {
        return this.http.post('/api/user/login', { username: username, password: password })
            .map((response: Response) => {
              let data = response.json();
                if (data.username) {
                    this.currentUser.setUser(data);
                    this.setLogged(true);
                    this.game.connect();
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
                this.game.disconnect();
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
