import { Injectable } from '@angular/core';
import {Commander} from '../classes/commander'
import {CardsService} from './cards.service'
@Injectable()
export class CommanderService {
  public commander:Commander;
  public commanderList:Array<Commander>;

  constructor(private cards:CardsService) { }

  setCommander(commander:Commander){
      this.commander = commander;
  }
  getCommanderList(){
    this.cards.getAllCommanders().subscribe((list:Array<Commander>) =>{
      this.commanderList = list;
    });
  }
}
