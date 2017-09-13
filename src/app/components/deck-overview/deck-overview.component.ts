import { Component, OnInit } from '@angular/core';
import {DecksService} from '../../shared/deck/decks.service';
@Component({
  selector: 'deck-overview',
  templateUrl: './deck-overview.component.html',
  styleUrls: ['./deck-overview.component.css']
})
export class DeckOverviewComponent implements OnInit {
  private showCommanders:boolean=true;

  constructor(private decks:DecksService) { }

  ngOnInit() {
    this.decks.edit=false;
  }
  newDeckEdition(flag){
    this.showCommanders = flag;
  }
}
