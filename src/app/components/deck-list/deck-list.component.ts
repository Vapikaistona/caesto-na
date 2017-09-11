import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DecksService} from '../../shared/decks.service'
import {RacesService} from '../../shared/races.service'
import {CurrentUserService} from '../../shared/current-user.service'
import {SearchDeckComponent} from '../search/search-deck/search-deck.component'

@Component({
  selector: 'deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.css']
})
export class DeckListComponent implements OnInit {
  private showAll:boolean=true;
  private fieldSorted:string='name';
  @Output() newDeckEdition = new EventEmitter();
  constructor(private decksService:DecksService, private races:RacesService, private user:CurrentUserService) { }

  ngOnInit() {
    this.decksService.getAllDecks();
  }
  deckClicked(deck){
    this.decksService.setDeck(deck);
  }
  delete(id){
    this.decksService.deleteDeck(id);
  }
  newDeck(){
    this.decksService.clearDeck();
    this.decksService.edit=true;
    this.newDeckEdition.emit(true);
  }
  getBgColor(race){
    return this.races.getRaceColor(race);
  }
  showOwnDecks(){
    this.decksService.deckFilter.created_by = this.user.getUser().username;
    this.showAll = false;
  }
  showAllDecks(){
    this.showAll = true;
    this.decksService.deckFilter.created_by = "";
  }
  changeSort(field){
    this.fieldSorted = field;
  }
}
