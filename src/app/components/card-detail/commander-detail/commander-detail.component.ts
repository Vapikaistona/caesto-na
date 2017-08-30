import { Component, OnInit,Input } from '@angular/core';
import {Commander} from '../../../classes/commander';
import {CardsService} from '../../../shared/cards.service';
import {CommanderService} from '../../../shared/commander.service';
@Component({
  selector: 'commander-detail',
  templateUrl: './commander-detail.component.html',
  styleUrls: ['./commander-detail.component.css']
})
export class CommanderDetailComponent implements OnInit {
  @Input () commander:Commander;
  @Input () races:any;

  constructor(private cards:CardsService, private commanderService:CommanderService) { }

  ngOnInit() {
    this.commander = {cardname: "",race:"", habilities:"",resources:0, life: 1, movement: 1}
  }

  submitFormCommander(form:any){
    this.cards.createCommander(this.commander).subscribe(data =>{
      this.commanderService.getCommanderList();
    },error =>{
      console.log(error);
    });
  }
}
