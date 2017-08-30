import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-overview',
  templateUrl: './card-overview.component.html',
  styleUrls: ['./card-overview.component.css']
})
export class CardOverviewComponent implements OnInit {
  private showCommanders:boolean=false;
  private card:any;
  constructor() { }

  ngOnInit() {
  }
  setCardView(showCommanders:boolean){
    this.showCommanders = showCommanders;
  }
  showDetails(card:any){
    this.card = card;
  }
  newCard(){
    if (this.showCommanders){
      this.card = {cardname: "",race:"", habilities:"",resources:0, life: 1, movement: 1}
    }else{
      this.card = {cardname: "",race:"", habilities:"",cost: 0, attack:0, life: 1, movement: 1}
    }
  }
}
