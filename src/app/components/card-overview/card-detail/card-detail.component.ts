import { Component, OnInit, Input } from '@angular/core';
import {CardsService} from '../../../shared/card/cards.service';
import {RacesService} from '../../../shared/card/races.service';
import {CurrentUserService} from '../../../shared/user/current-user.service';

declare var $:any;

@Component({
  selector: 'card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  @Input () isCommander:boolean;
  private op={msg:"", send:false, success:false};

  constructor(private cards:CardsService, private racesService:RacesService, private currentUser:CurrentUserService) { }

  ngOnInit() {
  }

}
