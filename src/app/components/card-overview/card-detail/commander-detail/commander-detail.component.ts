import { Component, OnInit,Input } from '@angular/core';
import {Commander} from '../../../../classes/commander';
import {CardsService} from '../../../../shared/card/cards.service';
import {RacesService} from '../../../../shared/card/races.service';
import {CommanderService} from '../../../../shared/card/commander.service';
@Component({
  selector: 'commander-detail',
  templateUrl: './commander-detail.component.html',
  styleUrls: ['./commander-detail.component.css']
})
export class CommanderDetailComponent implements OnInit {
  @Input() edit:boolean;
  constructor(private cards:CardsService, private commanderService:CommanderService, private racesService:RacesService) { }

  ngOnInit() {
    this.racesService.getRacesList();
  }

  submitFormCommander(form:any){
    this.cards.createCommander(this.commanderService.commander).subscribe(data =>{
      this.cards.edit=false;
      this.commanderService.getCommanderList();
    },error =>{
      console.log(error);
    });
  }
  cancelEdition(){
    this.cards.edit=false;
    this.commanderService.clearCommander();
  }
}
