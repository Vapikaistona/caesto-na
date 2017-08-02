import { Injectable } from '@angular/core';
import { Http,Headers,  RequestOptions, Response } from '@angular/http';
import { Troop } from '../classes/troop';
import { Commander } from '../classes/commander';

import {CurrentUserService} from './current-user.service'

@Injectable()
export class CardsService {

  constructor(private http: Http, private currentUser:CurrentUserService) { }

  getRaces(){
    return this.http.get('/api/cards/races', this.jwt()).map((response: Response) => response.json());
  }

  getAllTroops() {
      return this.http.get('/api/cards/troops', this.jwt()).map((response: Response) => response.json());
  }
  getAllCommanders() {
      return this.http.get('/api/cards/commanders', this.jwt()).map((response: Response) => response.json());
  }
  getTroopById(id: string){
    return this.http.get('/api/cards/troops/' + id, this.jwt()).map((response: Response) => response.json());
  }
  getCommanderById(id: string){
    return this.http.get('/api/cards/commanders/' + id, this.jwt()).map((response: Response) => response.json());
  }

  createTroop(troop: Troop) {
      return this.http.post('/api/cards/troops', troop, this.jwt()).map((response: Response) => response.json());
  }
  createCommander(commander: Commander) {
      return this.http.post('/api/cards/commanders', commander, this.jwt()).map((response: Response) => response.json());
  }

  updateTroop(troop: Troop) {
      return this.http.put('/api/cards/troops/' + troop._id, troop, this.jwt()).map((response: Response) => response.json());
  }
  updateCommander(commander: Commander) {
      return this.http.put('/api/cards/commanders/' + commander._id, commander, this.jwt()).map((response: Response) => response.json());
  }

  deleteTroop(id: string) {
      return this.http.delete('/api/cards/troops/' + id, this.jwt()).map((response: Response) => response.json());
  }

  deleteCommander(id: string) {
      return this.http.delete('/api/cards/commanders/' + id, this.jwt()).map((response: Response) => response.json());
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
