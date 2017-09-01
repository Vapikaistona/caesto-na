import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {Commander} from '../../../classes/commander';
import {CardsService} from '../../../shared/cards.service';
import {RacesService} from '../../../shared/races.service'
import {CommanderService} from '../../../shared/commander.service'

@Component({
  selector: 'commander-list',
  templateUrl: './commander-list.component.html',
  styleUrls: ['./commander-list.component.css']
})
export class CommanderListComponent implements OnInit {
  private currentCommanderActive:string;
  private commanderList:Array<Commander>;

  constructor(private cards:CardsService, private races:RacesService, private commanderService:CommanderService) {
  }

  ngOnInit() {
    this.commanderService.getCommanderList();
  }

  commanderDetails(commander:Commander){
    this.commanderService.setCommander(commander);
  }

  delete(id:string){
    this.cards.deleteCommander(id).subscribe((commander) =>{
      this.commanderService.getCommanderList();
      this.commanderService.clearCommander();
    });
  }
  getBgColor(race){
    return this.races.getRaceColor(race);
  }
}
