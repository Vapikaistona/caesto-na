import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  private showGlobal:boolean=true;
  constructor() { }

  ngOnInit() {
  }
  privateMsg(user){
    this.showGlobal=false;
  }
}
