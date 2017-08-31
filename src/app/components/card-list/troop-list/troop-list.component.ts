import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Troop} from '../../../classes/troop';
import {CardsService} from '../../../shared/cards.service'
import {TroopService} from '../../../shared/troop.service'
@Component({
  selector: 'troop-list',
  templateUrl: './troop-list.component.html',
  styleUrls: ['./troop-list.component.css']
})
export class TroopListComponent implements OnInit {
  private currentTroopActive:string;
  private troopList:Array<Troop>;
  constructor(private cards:CardsService, private troopService:TroopService) { }

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
    });
  }
}
