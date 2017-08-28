import { Component, OnInit, Input } from '@angular/core';
import {Troop} from '../../../classes/troop';

@Component({
  selector: 'troop-detail',
  templateUrl: './troop-detail.component.html',
  styleUrls: ['./troop-detail.component.css']
})
export class TroopDetailComponent implements OnInit {
  private troop:Troop;
  @Input () races:any;
  constructor() { }

  ngOnInit() {
    this.troop = {cardname: "",race:"", habilities:"",cost: 0, attack:0, life: 1, movement: 1}
  }
  submitFormTroop(form:any){

  }
}
