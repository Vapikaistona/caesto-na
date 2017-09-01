import { Component, OnInit, Input } from '@angular/core';


import {TroopDetailComponent} from './troop-detail/troop-detail.component';
import {CommanderDetailComponent} from './commander-detail/commander-detail.component'

import {CardsService} from '../../shared/cards.service';
import {RacesService} from '../../shared/races.service'

declare var $:any;

@Component({
  selector: 'card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  @Input () isCommander:boolean;
  private op={msg:"", send:false, success:false};
  constructor(private cards:CardsService, private racesService:RacesService) { }

  ngOnInit() {
  }

}
