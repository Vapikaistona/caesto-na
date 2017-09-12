import { Component, OnInit } from '@angular/core';
import {CommanderService} from '../../shared/card/commander.service';
import {TroopService} from '../../shared/card/troop.service';
import {RacesService} from '../../shared/card/races.service';
import {TypesService} from '../../shared/card/types.service';

@Component({
  selector: 'card-overview',
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
}
