import { Injectable } from '@angular/core';
import {Troop} from '../classes/troop'
import {CardsService} from './cards.service'

@Injectable()
export class TroopService {
  public troop:Troop;
  public troopList:Array<Troop>;
  public troopFilter:Troop;

  constructor(private cards:CardsService) {
    this.troop = {cardname: "",race:"", habilities:"",cost: 0, attack:0, life: 1, movement: 1}
    this.troopFilter = {cardname: ""}
    this.troopList = [];
  }

  setTroop(troop:Troop){
      this.troop = troop;
  }
  clearTroop(){
    this.troop = {cardname: "",race:"", habilities:"",cost: 0, attack:0, life: 1, movement: 1}
  }
  clearFilter(){
    this.troopFilter = {cardname: ""}
  }
  getTroopList(){
    this.cards.getAllTroops().subscribe((list:Array<Troop>) =>{
      this.troopList = list;
    });
  }
}
