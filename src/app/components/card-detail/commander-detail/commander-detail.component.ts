import { Component, OnInit,Input } from '@angular/core';
import {Commander} from '../../../classes/commander';
import {CardsService} from '../../../shared/cards.service';
@Component({
  selector: 'commander-detail',
  templateUrl: './commander-detail.component.html',
  styleUrls: ['./commander-detail.component.css']
})
export class CommanderDetailComponent implements OnInit {
  private commander:Commander;
  @Input () races:any;

  constructor(private cards:CardsService) { }

  ngOnInit() {
    this.commander = {cardname: "",race:"", habilities:"",resources:0, life: 1, movement: 1}
  }

  submitFormCommander(form:any){
    this.cards.createCommander(this.commander).subscribe(data =>{

    },error =>{
      console.log(error);
    });
  }
}
