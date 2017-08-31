import { Component, OnInit, Input } from '@angular/core';
import {Troop} from '../../../classes/troop';
import {CardsService} from '../../../shared/cards.service';
import {TroopService} from '../../../shared/troop.service';
@Component({
  selector: 'troop-detail',
  templateUrl: './troop-detail.component.html',
  styleUrls: ['./troop-detail.component.css']
})
export class TroopDetailComponent implements OnInit {
  @Input () races:any;
  constructor(private cards:CardsService, private troopService:TroopService) { }

  ngOnInit() {
  }
  
  submitFormTroop(form:any){
    this.cards.createTroop(this.troopService.troop).subscribe(data =>{
      this.troopService.getTroopList();
    },error =>{
      console.log(error);
    });
  }
}
