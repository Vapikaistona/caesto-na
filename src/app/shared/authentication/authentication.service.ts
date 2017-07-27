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
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUser.setUser(user);
                    this.setLogged(true);
                    //console.log(this.currentUser.getUser());
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUser.setUser(null);
        this.setLogged(false);
    }
    setLogged(isLogged:boolean){
      this.isLogged = isLogged;
    }
    getLogged(){
      return this.isLogged;
    }

}
