import { Component, OnInit, Input } from '@angular/core';

import {Commander} from '../../../classes/commander';
import {CardsService} from '../../../shared/cards.service';
import {RacesService} from '../../../shared/races.service'
import {CommanderService} from '../../../shared/commander.service'
import {DecksService} from '../../../shared/decks.service'
import {CurrentUserService} from '../../../shared/current-user.service';

@Component({
  selector: 'commander-list',
  templateUrl: './commander-list.component.html',
  styleUrls: ['./commander-list.component.css']
})
export class CommanderListComponent implements OnInit {
  private currentCommanderActive:string;
  private commanderList:Array<Commander>;
  private fieldSorted:string="cardname";

  @Input() deckEdition:boolean;

  constructor(private cards:CardsService,
              private races:RacesService,
              private commanderService:CommanderService,
              private decks:DecksService,
              private currentUser:CurrentUserService) {
  }

  ngOnInit() {
    this.commanderService.getCommanderList();
  }

  commanderClicked(commander:Commander){
    if(this.deckEdition){
      this.decks.setCommander(commander);
    }else{
      this.commanderService.setCommander(commander);
    }
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
  changeSort(field){
    this.fieldSorted = field;
  }
  newCard(){
    this.cards.edit=true;
    this.commanderService.commander = {cardname: "",race:"", habilities:"",resources:0, life: 1, movement: 1}
  }
}
