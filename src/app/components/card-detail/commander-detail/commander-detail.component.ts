import { Component, OnInit,Input } from '@angular/core';
import {Commander} from '../../../classes/commander';
import {CardsService} from '../../../shared/cards.service';
import {RacesService} from '../../../shared/races.service';
import {CommanderService} from '../../../shared/commander.service';
@Component({
  selector: 'commander-detail',
  templateUrl: './commander-detail.component.html',
  styleUrls: ['./commander-detail.component.css']
})
export class CommanderDetailComponent implements OnInit {

  constructor(private cards:CardsService, private commanderService:CommanderService, private racesService:RacesService) { }

  ngOnInit() {
    this.racesService.getRacesList();
  }

  submitFormCommander(form:any){
    this.cards.createCommander(this.commanderService.commander).subscribe(data =>{
      this.commanderService.getCommanderList();
    },error =>{
      console.log(error);
    });
  }
}
