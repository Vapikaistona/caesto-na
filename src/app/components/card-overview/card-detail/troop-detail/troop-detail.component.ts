import { Component, OnInit, Input } from '@angular/core';
import {Troop} from '../../../../classes/troop';
import {CardsService} from '../../../../shared/card/cards.service';
import {RacesService} from '../../../../shared/card/races.service';
import {TypesService} from '../../../../shared/card/types.service';
import {TroopService} from '../../../../shared/card/troop.service';
@Component({
  selector: 'troop-detail',
  templateUrl: './troop-detail.component.html',
  styleUrls: ['./troop-detail.component.css']
})
export class TroopDetailComponent implements OnInit {
  @Input() edit:boolean;
  constructor(private cards:CardsService, private troopService:TroopService, private racesService:RacesService, private typesService:TypesService) { }

  ngOnInit() {
    this.racesService.getRacesList();
    this.typesService.getTypesList();
  }

  submitFormTroop(form:any){
    this.cards.createTroop(this.troopService.troop).subscribe(data =>{
      this.cards.edit=false;
      this.troopService.getTroopList();
    },error =>{
      console.log(error);
    });
  }
  cancelEdition(){
    this.cards.edit=false;
    this.troopService.clearTroop();
  }
}
