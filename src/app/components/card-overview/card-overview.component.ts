import { Component, OnInit } from '@angular/core';
import {CommanderService} from '../../shared/commander.service';
import {TroopService} from '../../shared/troop.service';
import {RacesService} from '../../shared/races.service';
import {TypesService} from '../../shared/types.service';

@Component({
  selector: 'app-card-overview',
  templateUrl: './card-overview.component.html',
  styleUrls: ['./card-overview.component.css']
})
export class CardOverviewComponent implements OnInit {
  private showCommanders:boolean=false;
  private card:any;
  constructor(private commanderService:CommanderService, private troopService:TroopService, private racesService:RacesService, private typesService:TypesService) { }

  ngOnInit() {
    this.racesService.getRacesList();
    this.typesService.getTypesList();
  }

  setCardView(showCommanders:boolean){
    this.showCommanders = showCommanders;
  }

}
