import { Component, OnInit } from '@angular/core';
import {Deck} from '../../../classes/deck'
import {DecksService} from '../../../shared/deck/decks.service'
import {RacesService} from '../../../shared/card/races.service'
import {TypesService} from '../../../shared/card/types.service'
import {CurrentUserService} from '../../../shared/user/current-user.service';

@Component({
  selector: 'deck-detail',
  templateUrl: './deck-detail.component.html',
  styleUrls: ['./deck-detail.component.css']
})
export class DeckDetailComponent implements OnInit {
  private msg:string="";
  constructor(private decks:DecksService, private racesService:RacesService, private types:TypesService, private currentUser:CurrentUserService) { }

  ngOnInit() {
    this.racesService.getRacesList();
    this.decks.getAllDecks();
  }
  editDeck(){
    this.decks.editDeck();
  }
  cancelDeckEdition(){
    this.decks.edit=false;
    this.msg="";
    this.decks.clearDeck();
  }
  getBgColor(race){
    return this.racesService.getRaceColor(race);
  }
  nothing(){
  }
  submitFormDeck(){
    this.msg="You must choose a commander for your deck"
    if(this.decks.deck.commander._id){
      this.msg="";
      this.decks.insertDeck();
      this.decks.edit=false;
    }
  }
}
