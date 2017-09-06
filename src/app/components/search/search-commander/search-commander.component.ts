import { Component, OnInit, Input } from '@angular/core';
import {CommanderService} from '../../../shared/commander.service'
import {RacesService} from '../../../shared/races.service'
@Component({
  selector: 'search-commander',
  templateUrl: './search-commander.component.html',
  styleUrls: ['./search-commander.component.css']
})
export class SearchCommanderComponent implements OnInit {
  private advancedSearch:boolean=false;
  @Input () deckEdition:boolean;
  constructor(private commanderService: CommanderService,private racesService: RacesService) { }

  ngOnInit() {
  }
  toggleAvancedSearch(){
    this.advancedSearch = !(this.advancedSearch || this.commanderService.commanderFilter.race!='');
    if (!this.advancedSearch){
      var race = this.commanderService.commanderFilter.race;
      this.commanderService.clearFilter();
      if (this.deckEdition){
        this.commanderService.commanderFilter.race=race;
      }
    }
  }
}
