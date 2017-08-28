import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-overview',
  templateUrl: './card-overview.component.html',
  styleUrls: ['./card-overview.component.css']
})
export class CardOverviewComponent implements OnInit {
  private showCommanders:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  setCardView(showCommanders:boolean){
    this.showCommanders = showCommanders;
  }
}
