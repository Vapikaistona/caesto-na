import { Component, OnInit, Input } from '@angular/core';

import {TroopListComponent} from './troop-list/troop-list.component';
import {CommanderListComponent} from './commander-list/commander-list.component';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  @Input () isCommander:boolean=false;
  constructor() { }

  ngOnInit() {
  }
}
