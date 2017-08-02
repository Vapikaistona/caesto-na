import { Component, OnInit } from '@angular/core';

import {Troop} from '../../classes/troop';
import {Commander} from '../../classes/commander';

import {CardsService} from '../../shared/cards.service';
declare var $:any;

@Component({
  selector: 'card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  private troop:Troop;
  private commander:Commander;
  private races:any;
  private isCommander:boolean =false;
  private op={msg:"", send:false, success:false};
  constructor(private cards:CardsService) { }

  ngOnInit() {
    this.cards.getRaces().subscribe(races =>{
      this.races = races;
    },error =>{
      console.log("Error getting races: "+ error)
    });
    this.troop = {cardname: "",race:"", habilities:"",cost: 0, attack:0, life: 1, movement: 1}
    this.commander = {cardname: "",race:"", habilities:"",resources:0, life: 1, movement: 1}
  }
  submitFormCommander(form:any){

  }
  submitFormTroop(form:any){

  }
}
