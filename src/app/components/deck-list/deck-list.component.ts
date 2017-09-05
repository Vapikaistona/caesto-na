import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.css']
})
export class DeckListComponent implements OnInit {
  private showAll:boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
