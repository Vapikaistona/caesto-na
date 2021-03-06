import { Component, OnInit, Input } from '@angular/core';
import {Troop} from '../../../../classes/troop';
import {CardsService} from '../../../../shared/card/cards.service'
import {RacesService} from '../../../../shared/card/races.service'
import {TypesService} from '../../../../shared/card/types.service'
import {TroopService} from '../../../../shared/card/troop.service'
import {DecksService} from '../../../../shared/deck/decks.service'
import {CurrentUserService} from '../../../../shared/user/current-user.service';
@Component({
  selector: 'troop-list',
  templateUrl: './troop-list.component.html',
  styleUrls: ['./troop-list.component.css']
})
export class TroopListComponent implements OnInit {
  private currentTroopActive:string;
  private troopList:Array<Troop>;
  private raceList:Array<any>;
  private fieldSorted:string="cardname";
  @Input() deckEdition:boolean;
  constructor(private cards:CardsService,
              private races:RacesService,
              private types:TypesService,
              private troopService:TroopService,
              private decks:DecksService,
              private currentUser:CurrentUserService) { }

  ngOnInit() {
    this.troopService.getTroopList();
  }
  troopClicked(troop:Troop){
    if(this.deckEdition){
      this.decks.addTroop(troop);
    }else{
      this.troopService.setTroop(troop);
      this.currentTroopActive = troop._id;
    }
  }
  delete(id:string){
    this.cards.deleteTroop(id).subscribe((troop) =>{
      this.troopService.getTroopList();
      this.troopService.clearTroop();
    });
  }
  getBgColor(race){
    return this.races.getRaceColor(race);
  }
  changeSort(field){
    this.fieldSorted = field;
  }
  newCard(){
    this.cards.edit=true;
    this.troopService.troop = {cardname: "",race:"", habilities:"",cost: 0, attack:0, life: 0, movement: 0}
  }
}
