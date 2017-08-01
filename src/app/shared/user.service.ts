
import { Injectable } from '@angular/core';
import { Http,Headers,  RequestOptions, Response } from '@angular/http';
import {HttpHeaders} from '@angular/common/http';
import { User } from '../classes/user';
import {CurrentUserService} from './current-user.service'

@Injectable()
export class UserService {
    constructor(private http: Http, private currentUser:CurrentUserService) { }

    getAll() {
        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: string) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('/api/users/' + user._id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: string) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = this.currentUser.getUser();
        var authHeader = new Headers();
        if(currentUser) {
          authHeader.append('Authorization', 'Bearer ' + currentUser.token);
        }
        return new RequestOptions({ headers: authHeader });
    }
}
