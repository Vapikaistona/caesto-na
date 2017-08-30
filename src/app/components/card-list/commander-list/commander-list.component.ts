import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {Commander} from '../../../classes/commander';
import {CardsService} from '../../../shared/cards.service'
import {CommanderService} from '../../../shared/commander.service'

@Component({
  selector: 'commander-list',
  templateUrl: './commander-list.component.html',
  styleUrls: ['./commander-list.component.css']
})
export class CommanderListComponent implements OnInit {
  private currentCommanderActive:string;
  private commanderList:Array<Commander>;
  @Output() commanderCliked = new EventEmitter();

  constructor(private cards:CardsService, private commanderService:CommanderService) {
  }

  ngOnInit() {
    this.commanderService.getCommanderList();
  }
  commanderDetails(commander:Commander){
    this.currentCommanderActive = commander._id;
    this.commanderCliked.emit(commander);
  }
  delete(id:string){
    this.cards.deleteCommander(id).subscribe((commander) =>{
      this.commanderService.getCommanderList();
    });
  }
}
