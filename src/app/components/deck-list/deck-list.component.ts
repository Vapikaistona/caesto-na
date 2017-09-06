import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DecksService} from '../../shared/decks.service'
import {RacesService} from '../../shared/races.service'
import {SearchDeckComponent} from '../search/search-deck/search-deck.component'
@Component({
  selector: 'deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.css']
})
export class DeckListComponent implements OnInit {
  private showAll:boolean=true;
  @Output() newDeckEdition = new EventEmitter();
  constructor(private decksService:DecksService, private races:RacesService) { }

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
}
