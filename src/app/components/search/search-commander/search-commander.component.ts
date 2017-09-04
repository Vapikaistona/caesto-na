import { Component, OnInit } from '@angular/core';
import {CommanderService} from '../../../shared/commander.service'
import {RacesService} from '../../../shared/races.service'
@Component({
  selector: 'search-commander',
  templateUrl: './search-commander.component.html',
  styleUrls: ['./search-commander.component.css']
})
export class SearchCommanderComponent implements OnInit {
  private advancedSearch:boolean=false;
  constructor(private commanderService: CommanderService,private racesService: RacesService) { }

  ngOnInit() {
  }
  toggleAvancedSearch(){
    this.advancedSearch = !this.advancedSearch;
    if (!this.advancedSearch){
      this.commanderService.clearFilter();
    }
  }
}
