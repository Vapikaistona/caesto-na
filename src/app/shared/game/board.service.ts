import { Injectable } from '@angular/core';
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
  public myTurn;
  private queue = new createjs.LoadQueue(true);

  constructor() { }

  getManifest (){
    var server = "."
    var manifest = [
      {src:server+"/assets/images/commanderA.png", id:"commanderA"},
      {src:server+"/assets/images/commanderB.png", id:"commanderB"}
    ];
    return manifest;
  }

  init(stage,board) {
    this.queue.on("complete",(evt)=>{
      console.log("all files loaded");
      this.updateBoard(board)
    },this);
    this.queue.on("fileload",(evt)=>{
      console.log("fileLoaded: ");
      console.log(evt)
    },this);
    this.queue.on("error",(evt)=>{
      console.log(evt);
    },this);
    this.queue.on("progress",(evt)=>{
      console.log(evt);
    },this)
    var manifest = this.getManifest();
    //this.queue.loadFile({src:"http://localhost:3000/assets/images/commanderA.png", id:"commanderA"});
    //this.queue.load();
    this.queue.loadManifest(manifest);

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
    hex.id = 1;
    hex.name = i*10+j +"";
    hex.x = x;
    hex.y = y;
    hex.graphics.beginStroke("#212121").f("#ccff90").drawPolyStar(0,0,size,6,0,30);
    // add events for mouse hover on any hex
    hex.addEventListener("mouseover", this.mouseOverHex);
    hex.addEventListener("mouseout",this.mouseOutHex);
    this.stage.addChild(hex);
  }

   mouseOverHex = (event)=> {
     if(this.myTurn){
       event.target.graphics.clear().beginStroke("#f5f5f5").f("#64dd17").drawPolyStar(0,0,this.mapHexSize - 1,6,0,30);
       this.stage.update();
     }
  }

  mouseOutHex = (event) => {
    if(this.myTurn){
      event.target.graphics.clear().beginStroke("#212121").f("#ccff90").drawPolyStar(0,0,this.mapHexSize,6,0,30);
      this.stage.update();
    }
  }
  updateBoard(board){
    for(let i = 16;i<this.stage.children.length;i++){
      this.stage.removeChildAt(i);
    }

    for (let element in board) {
      if (board[element].user){
        var item = this.stage.getChildByName(element);
        var tile;
        if (board[element].user=="userA"){
          tile = this.queue.getResult("commanderA")
        }else{
          tile = this.queue.getResult("commanderB")
        }
        var bitmap = new createjs.Bitmap(tile);
        //hex.graphics.beginBitmapFill(commanderA, "no-repeat").drawPolyStar(0,0,this.mapHexSize,6,0,30
        bitmap.scaleX = 1.6;
        bitmap.scaleY = 1.6;
        bitmap.x = item.x - this.mapHexWidth/2;
        bitmap.y = item.y - this.mapHexHeight/2;
        this.stage.addChild(bitmap);
      }
    }
    this.stage.update();
  }
}
