import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

import {TroopListComponent} from './troop-list/troop-list.component';
import {SearchTroopComponent} from '../search/search-troop/search-troop.component'
import {SearchCommanderComponent} from '../search/search-commander/search-commander.component'
import {CommanderListComponent} from './commander-list/commander-list.component';
import {Commander} from '../../classes/commander';
import {Troop} from '../../classes/troop';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  @Input () isCommander:boolean;
  @Input () deckEdition:boolean=false;

  constructor() { }

  ngOnInit() {
  }

}
