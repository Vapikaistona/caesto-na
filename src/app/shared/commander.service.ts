import { Injectable } from '@angular/core';
import {Commander} from '../classes/commander'
import {CardsService} from './cards.service'
@Injectable()
export class CommanderService {
  public commander:Commander;
  public commanderList:Array<Commander>;
  public commanderFilter:Commander;

  constructor(private cards:CardsService) {
    this.commander = {cardname: "",race:"", habilities:"",resources:0, life: 1, movement: 1}
    this.commanderFilter = {cardname: ""};
    this.commanderList= [];
  }

  setCommander(commander:Commander){
      this.commander = commander;
  }
  clearCommander(){
    this.commander = {cardname: "",race:"", habilities:"",resources:0, life: 1, movement: 1}
  }
  getCommanderList(){
    this.cards.getAllCommanders().subscribe((list:Array<Commander>) =>{
      this.commanderList = list;
    });
  }
}
