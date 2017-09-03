import { Component, OnInit } from '@angular/core';
import { DeckDetailComponent } from "../deck-detail/deck-detail.component";
import { DeckListComponent } from "../deck-list/deck-list.component";

@Component({
  selector: 'deck-overview',
  templateUrl: './deck-overview.component.html',
  styleUrls: ['./deck-overview.component.css']
})
export class DeckOverviewComponent implements OnInit {
  private showAll:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  newDeck(){
    console.log("new deck");
    
  }

}
