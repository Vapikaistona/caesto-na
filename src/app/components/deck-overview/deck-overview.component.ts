import { Component, OnInit } from '@angular/core';
import { DeckDetailComponent } from "../deck-detail/deck-detail.component";
import { DeckListComponent } from "../deck-list/deck-list.component";
import {DecksService} from '../../shared/decks.service';
@Component({
  selector: 'deck-overview',
  templateUrl: './deck-overview.component.html',
  styleUrls: ['./deck-overview.component.css']
})
export class DeckOverviewComponent implements OnInit {
  private showCommanders:boolean=true;

  constructor(private decks:DecksService) { }

  ngOnInit() {
  }

  newDeck(){
    this.decks.clearDeck();
    this.decks.edit=true;
  }

}
