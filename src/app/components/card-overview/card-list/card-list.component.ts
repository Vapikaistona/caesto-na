import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Commander} from '../../../classes/commander';
import {Troop} from '../../../classes/troop';

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
