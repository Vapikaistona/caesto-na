import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Troop} from '../../../classes/troop';
import {CardsService} from '../../../shared/cards.service'
import {RacesService} from '../../../shared/races.service'
import {TypesService} from '../../../shared/types.service'
import {TroopService} from '../../../shared/troop.service'

@Component({
  selector: 'troop-list',
  templateUrl: './troop-list.component.html',
  styleUrls: ['./troop-list.component.css']
})
export class TroopListComponent implements OnInit {
  private currentTroopActive:string;
  private troopList:Array<Troop>;
  private raceList:Array<any>;
  constructor(private cards:CardsService, private races:RacesService, private types:TypesService, private troopService:TroopService) { }

  ngOnInit() {
    this.troopService.getTroopList();
  }
  troopDetails(troop:Troop){
    this.troopService.setTroop(troop);
    this.currentTroopActive = troop._id;
  }
  delete(id:string){
    this.cards.deleteTroop(id).subscribe((troop) =>{
      this.troopService.getTroopList();
      this.troopService.clearTroop();
    });
  }
  getBgColor(race){
    return this.races.getRaceColor(race);
  }

    newCard(){
      this.troopService.troop = {cardname: "",race:"", habilities:"",cost: 0, attack:0, life: 0, movement: 0}
    }
}
