import { Injectable } from '@angular/core';
import { Http,Headers,  RequestOptions, Response } from '@angular/http';
import { Deck } from '../../classes/deck';
import { Commander } from '../../classes/commander';
import { Troop } from '../../classes/troop';
import {CurrentUserService} from '../user/current-user.service'
import {CommanderService} from '../card/commander.service'
import {TroopService} from '../card/troop.service'
@Injectable()
export class DecksService {
  public deckList:Array<any>=[];
  public deck:Deck={name:"",race:"",commander:{cardname:"",race:""},troops:[]};
  public deckFilter:Deck={name:"",race:""};
  public edit:boolean=false;
  constructor(private http: Http, private currentUser:CurrentUserService, private troopService:TroopService, private commanderService:CommanderService) { }

  getAllDecks() {
    this.http.get('/api/decks/decks', this.jwt()).map((response: Response) => response.json()).subscribe(data=>{
        this.deckList = data;
    },error =>{
      console.log(error);
    });
  }
  getOwnedDecks(id: string) {
    this.http.get('/api/decks/decks/'+ id, this.jwt()).map((response: Response) => response.json()).subscribe(data=>{
        this.deckList = data;
    },error =>{
      console.log(error);
    });
  }
  getDeckById(id: string){
    this.http.get('/api/decks/deck/' + id, this.jwt()).map((response: Response) => response.json()).subscribe(data=>{
        this.deck = data;
    },error =>{
      console.log(error);
    });
  }
  setDeck(deck:Deck){
    this.deck = deck;
  }
  clearCommander(){
    if(this.edit){
      this.deck.commander={cardname:"", race:""}
      this.deck.race = "";
      this.commanderService.commanderFilter.race = "";
      this.troopService.troopFilter.race = "";
    }
  }
  setCommander(commander:Commander){
    this.deck.commander = commander;
    this.deck.race = commander.race;
    this.commanderService.commanderFilter.race = commander.race;
    this.troopService.troopFilter.race = commander.race;
  }
  addTroop(troop:Troop){
    let index=this.deck.troops.findIndex(x=> x._id ==troop._id)
    if (index>=0){
      if(this.deck.troops[index].number!=4){
        this.deck.troops[index].number++;
      }
    }else{
      var newTroop = {...troop, number:1};
      this.deck.troops.push(newTroop);
    }
  }
  removeTroop(troop:Troop){
    if(this.edit){
      let index=this.deck.troops.findIndex(x=> x._id ==troop._id)
      if (index>=0){
        this.deck.troops[index].number--;
        if(this.deck.troops[index].number<=0){
          this.deck.troops.splice(index, 1);
        }
      }
    }
  }
  clearDeck(){
    this.deck={name:"",race:"",commander:{cardname:"",race:""},troops:[]};
    this.commanderService.commanderFilter.race = "";
    this.troopService.troopFilter.race = "";
  }
  editDeck(){
    this.edit=true;
    this.commanderService.commanderFilter.race = this.deck.race;
    this.troopService.troopFilter.race = this.deck.race;
  }
  clearFilter(){
    this.deckFilter = {name:"",race:""}
  }
  insertDeck() {
    this.http.post('/api/decks/deck', this.deck, this.jwt()).map((response: Response) => response.json()).subscribe(data=>{
        this.getAllDecks();
    },error =>{
      console.log(error);
    });
  }

  updateDeck() {
    this.http.put('/api/decks/deck/' + this.deck._id, this.deck, this.jwt()).map((response: Response) => response.json()).subscribe(data=>{
        this.getAllDecks();
    },error =>{
      console.log(error);
    });
  }

  deleteDeck(id: string) {
    this.http.delete('/api/decks/deck/' + id, this.jwt()).map((response: Response) => response.json()).subscribe(data=>{
        this.getAllDecks();
    },error =>{
      console.log(error);
    });
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
