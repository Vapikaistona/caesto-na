import { Component, OnInit } from '@angular/core';
import {DecksService} from '../../../shared/decks.service'
import {RacesService} from '../../../shared/races.service'

@Component({
  selector: 'search-deck',
  templateUrl: './search-deck.component.html',
  styleUrls: ['./search-deck.component.css']
})
export class SearchDeckComponent implements OnInit {
  private advancedSearch:boolean=false;
  constructor(private decks:DecksService,private racesService: RacesService) { }

  ngOnInit() {
    this.decks.getAllDecks();
  }

  toggleAvancedSearch(){
    this.advancedSearch = !(this.advancedSearch);
    if (!this.advancedSearch){
      this.decks.clearFilter();
    }
  }
}
