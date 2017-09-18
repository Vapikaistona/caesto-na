import { Injectable } from '@angular/core';
import {GameService} from '../game/game.service'
import * as createjs from 'createjs-module';

@Injectable()
export class BoardService {
  private stage;
  private boardHeightSize = 7;
  private mapStartX = 200;
  private mapStartY = 5;
  private mapHexSize = 55;
  private mapHexWidth = Math.sqrt(3)/2 * 2 * this.mapHexSize;
  private mapHexHeight = 3/4 * 2 * this.mapHexSize;

  constructor(private game:GameService) { }

  init(stage) {
    this.stage = stage;
    this.stage.enableMouseOver();
    this.createMap();
    this.stage.update();
  }

  createMap () {
    var hexX = 0;
    var hexY = 0;
    var hexY = 0;
    var itemsInRow=0;
    for ( var i=1;i<=this.boardHeightSize;i++){
      if (i>(this.boardHeightSize/2 + 1)){
        itemsInRow--;
      }
      else{
        itemsInRow ++;
      }
      for(var j=1;j<=itemsInRow;j++){
        var offX = 0;
        if(i%2!=0){
          offX = 1/2* this.mapHexWidth;
        }
        if (itemsInRow<Math.floor(this.boardHeightSize/2)){
          offX += this.mapHexWidth;
        }
        hexX = this.mapStartX + j * this.mapHexWidth + offX;
        hexY = this.mapStartY + i * this.mapHexHeight;
        this.createHex (hexX, hexY, this.mapHexSize,i,j);
      }
    }
  }

  createHex (x,y,size,i,j) {
    var hex = new createjs.Shape();
    hex.id = i*10+j;
    hex.x = x;
    hex.y = y;
    hex.graphics.beginStroke("#212121").f("#ccff90").drawPolyStar(0,0,size,6,0,30);
    // add events for mouse hover on any hex
    hex.addEventListener("mouseover", this.mouseOverHex);
    hex.addEventListener("mouseout",this.mouseOutHex);
    this.stage.addChild(hex);
  }

   mouseOverHex = (event)=> {
     if(this.game.myTurn){
       event.target.graphics.clear().beginStroke("#f5f5f5").f("#64dd17").drawPolyStar(0,0,this.mapHexSize - 1,6,0,30);
       this.stage.update();
     }
  }

  mouseOutHex = (event) => {
    if(this.game.myTurn){
      event.target.graphics.clear().beginStroke("#212121").f("#ccff90").drawPolyStar(0,0,this.mapHexSize,6,0,30);
      this.stage.update();
    }
  }
}
