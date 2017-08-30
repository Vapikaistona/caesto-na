import { Injectable } from '@angular/core';
import {Troop} from '../classes/troop'
import {CardsService} from './cards.service'

@Injectable()
export class TroopService {
  public troop:Troop;
  public troopList:Array<Troop>;

  constructor(private cards:CardsService) { }

  setTroop(troop:Troop){
      this.troop = troop;
  }
  getTroopList(){
    this.cards.getAllTroops().subscribe((list:Array<Troop>) =>{
      this.troopList = list;
    });
  }
}
