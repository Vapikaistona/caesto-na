import { Component, OnInit, Input } from '@angular/core';
import {TroopService} from '../../../shared/card/troop.service'
import {RacesService} from '../../../shared/card/races.service'
import {TypesService} from '../../../shared/card/types.service'

@Component({
  selector: 'search-troop',
  templateUrl: './search-troop.component.html',
  styleUrls: ['./search-troop.component.css']
})
export class SearchTroopComponent implements OnInit {
  private advancedSearch:boolean=false;
   @Input () deckEdition:boolean;
  constructor(private troopService: TroopService,private racesService: RacesService, private typesService: TypesService) { }

  ngOnInit() {
    this.troopService.getTroopList();
  }
  toggleAvancedSearch(){
    this.advancedSearch = !(this.advancedSearch || this.troopService.troopFilter.race!='');
    if (!this.advancedSearch){
      var race = this.troopService.troopFilter.race;
      this.troopService.clearFilter();
      if (this.deckEdition){
        this.troopService.troopFilter.race=race;
      }
    }
  }
}
