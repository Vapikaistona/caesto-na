import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

import {TroopListComponent} from './troop-list/troop-list.component';
import {CommanderListComponent} from './commander-list/commander-list.component';
import {Commander} from '../../classes/commander';
import {Troop} from '../../classes/troop';
@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  @Input () isCommander:boolean=false;
  @Output() details = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  commanderCliked (commander:Commander){
      this.details.emit(commander);
  }
  troopCliked (troop:Troop){
      this.details.emit(troop);
  }
}
