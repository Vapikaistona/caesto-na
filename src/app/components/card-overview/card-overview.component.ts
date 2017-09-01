import { Component, OnInit } from '@angular/core';
import {CommanderService} from '../../shared/commander.service';
import {TroopService} from '../../shared/troop.service';
import {RacesService} from '../../shared/races.service';

@Component({
  selector: 'app-card-overview',
  templateUrl: './card-overview.component.html',
  styleUrls: ['./card-overview.component.css']
})
export class CardOverviewComponent implements OnInit {
  private showCommanders:boolean=false;
  private card:any;
  constructor(private commanderService:CommanderService, private troopService:TroopService, private racesService:RacesService) { }

  ngOnInit() {
  }

  setCardView(showCommanders:boolean){
    this.showCommanders = showCommanders;
  }

  newCard(){
    if (this.showCommanders){
      this.commanderService.commander = {cardname: "",race:"", habilities:"",resources:0, life: 1, movement: 1}
    }else{
       this.troopService.troop = {cardname: "",race:"", habilities:"",cost: 0, attack:0, life: 1, movement: 1}
    }
  }

}
