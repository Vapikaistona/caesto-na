import { Component, OnInit } from '@angular/core';

import {Commander} from '../../../classes/commander';
import {CardsService} from '../../../shared/cards.service'

@Component({
  selector: 'commander-list',
  templateUrl: './commander-list.component.html',
  styleUrls: ['./commander-list.component.css']
})
export class CommanderListComponent implements OnInit {
  private currentCommanderActive:string;
  private commanderList:Array<Commander>;
  constructor(private cards:CardsService) { }

  ngOnInit() {
    this.cards.getAllCommanders().subscribe((list:Array<Commander>) =>{
      this.commanderList = list;
    })
  }
  commanderDetails(id:string){
    this.currentCommanderActive = id;
  }
}
