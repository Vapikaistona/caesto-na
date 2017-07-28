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
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUser.setUser(user);
                    this.setLogged(true);
                    //console.log(this.currentUser.getUser());
                }
            });
    }

    logout() {
        return this.http.post('/api/logout',{})
            .subscribe((response: Response) => {
                localStorage.removeItem('currentUser');
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
