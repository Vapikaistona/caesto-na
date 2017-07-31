import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import {CurrentUserService} from '../../shared/current-user.service'

@Injectable()
export class AuthenticationService {
    isLogged:boolean =false;
    constructor(private http: Http, private currentUser:CurrentUserService) { }

    login(username: string, password: string) {
        return this.http.post('/api/login', { username: username, password: password })
            .map((response: Response) => {
                let user = response.json();
                if (user) {
                    this.currentUser.setUser(user);
                    this.setLogged(true);
                }
            }
          );
    }

    logout() {
        return this.http.post('/api/logout',{})
            .subscribe((response: Response) => {
                this.currentUser.removeUser();
                this.setLogged(false);
            });
    }

    setLogged(isLogged:boolean){
      this.isLogged = isLogged;
    }
    getLogged(){
      return this.isLogged;
    }

}
