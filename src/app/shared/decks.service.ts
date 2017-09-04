import { Injectable } from '@angular/core';
import { Http,Headers,  RequestOptions, Response } from '@angular/http';
import { Deck } from '../classes/deck';

import {CurrentUserService} from './current-user.service'
@Injectable()
export class DecksService {

  constructor(private http: Http, private currentUser:CurrentUserService) { }



  // router.get('/decks', users.isAuthenticated, users.isTokenValid, decks.getAllDecks);
  // router.get('/decks/:id', users.isAuthenticated, users.isTokenValid, decks.getOwnedDecks);
  // router.get('/deck/:id', users.isAuthenticated, users.isTokenValid, decks.getDeckById);
  // router.post('/deck', users.isAuthenticated, users.isTokenValid, decks.insertDeck);
  // router.put('/deck/:id', users.isAuthenticated, users.isTokenValid, decks.updateDeck);
  // router.delete('/deck/:id', users.isAuthenticated, users.isTokenValid, decks.deleteDeck);

  getAllDecks() {
      return this.http.get('/api/decks/decks', this.jwt()).map((response: Response) => response.json());
  }
  getOwnedDecks(id: string) {
      return this.http.get('/api/decks/decks/'+ id, this.jwt()).map((response: Response) => response.json());
  }
  getDeckById(id: string){
    return this.http.get('/api/decks/deck/' + id, this.jwt()).map((response: Response) => response.json());
  }

  insertDeck(deck: Deck) {
      return this.http.post('/api/decks/deck', deck, this.jwt()).map((response: Response) => response.json());
  }

  updateDeck(deck: Deck) {
      return this.http.put('/api/decks/deck/' + deck._id, deck, this.jwt()).map((response: Response) => response.json());
  }

  deleteDeck(id: string) {
      return this.http.delete('/api/decks/deck/' + id, this.jwt()).map((response: Response) => response.json());
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
