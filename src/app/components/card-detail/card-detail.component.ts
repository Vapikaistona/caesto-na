import { Component, OnInit, Input } from '@angular/core';


import {TroopDetailComponent} from './troop-detail/troop-detail.component';
import {CommanderDetailComponent} from './commander-detail/commander-detail.component'

import {CardsService} from '../../shared/cards.service';
declare var $:any;

@Component({
  selector: 'card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  private races:any;
  @Input () isCommander:boolean;
  @Input () cardToShow:any;
  private op={msg:"", send:false, success:false};
  constructor(private cards:CardsService) { }

  ngOnInit() {
    this.cards.getRaces().subscribe(races =>{
      this.races = races;
    },error =>{
      console.log("Error getting races: "+ error)
    });
  }

}
