
import { Injectable } from '@angular/core';
import { Http,Headers,  RequestOptions, Response } from '@angular/http';
import { User } from '../classes/user';
import {CurrentUserService} from './current-user.service'

@Injectable()
export class UserService {
    constructor(private http: Http, private currentUser:CurrentUserService) { }

    getAll() {
        return this.http.get('/api/user/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: string) {
        return this.http.get('/api/user/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/api/user/users', user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User,pws:boolean) {
        return this.http.put('/api/user/users/' + user._id +'/'+pws, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: string) {
        return this.http.delete('/api/user/users/' + id, this.jwt()).map((response: Response) => response.json());
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
