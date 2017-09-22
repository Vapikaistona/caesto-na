import { Injectable } from '@angular/core';
import * as createjs from 'createjs-module';
import {ActionService} from './action.service'

@Injectable()
export class BoardService {
  private stage;
  private boardHeightSize = 7;
  private mapStartX = 195;
  private mapStartY = 63;
  private mapHexSize = 55;
  private mapHexWidth = Math.sqrt(3)/2 * 2 * this.mapHexSize;
  private mapHexHeight = 3/4 * 2 * this.mapHexSize;
  private offsetImg = 4;
  private offsetTriangleHShort = 15;
  private offsetTriangleHLong = 30;
  private offsetTriangleV = 26;
  private queue = new createjs.LoadQueue(true);
  private startingPos:any = {x:0,y:0,initial:true};
  private witness:boolean = false;
  public myTurn;
  public user;
  public board;

  constructor(private action:ActionService) { }

  getManifest (){
    var server = "."
    var manifest = [
      {src:server+"/assets/images/circle/commanderAt.png", id:"commanderA"},
      {src:server+"/assets/images/circle/commanderBt.png", id:"commanderB"},
      {src:server+"/assets/images/circle/structureA.png", id:"structureA"},
      {src:server+"/assets/images/circle/structureB.png", id:"structureB"},
      {src:server+"/assets/images/circle/troopAt.png", id:"troopA"},
      {src:server+"/assets/images/circle/troopBt.png", id:"troopB"},
    ];
    return manifest;
  }

  init(stage) {
    this.queue.on("complete",(evt)=>{
      console.log("all files loaded");
      this.updateBoard()
    },this);
    this.queue.on("fileload",(evt)=>{
      //console.log("fileLoaded: ");
      //console.log(evt)
    },this);
    this.queue.on("error",(evt)=>{
      console.log(evt);
    },this);
    this.queue.on("progress",(evt)=>{
      //console.log(evt);
    },this)
    var manifest = this.getManifest();
    this.queue.loadManifest(manifest);

    this.stage = stage;
    this.stage.enableMouseOver();
    createjs.Touch.enable(this.stage);
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
        hexX = this.mapStartX + (j-1) * this.mapHexWidth + offX;
        hexY = this.mapStartY + (i-1) * this.mapHexHeight;
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

  updateBoard(){
    let childrenLength = this.stage.children.length;
    for (let i =16;i <childrenLength;i++){
      if (this.stage.children[i].id >1){
        this.stage.removeChildAt(i);
        i--;
        childrenLength--;
      }
    }

    let fillColor = "#ffffff"
    let strokeColor ="#000000";
    let user = "";
    for (let element in this.board) {
      if (this.board[element].user){
        var item = this.stage.getChildByName(element);
        var tile;
        if (this.board[element].user=="userA"){
          user = "A";
          fillColor = "#ffffff";
          strokeColor = "#000000";
        }else{
          user = "B";
          fillColor = "#000000";
          strokeColor = "#ffffff";
        }
        var matrix = new createjs.Matrix2D()
        matrix.translate(-this.mapHexWidth/2-this.offsetImg, -this.mapHexHeight/2-this.offsetImg);
        var creature = new createjs.Container();
        creature.id = 2;
        creature.x = item.x;
        creature.y = item.y;
        var background = new createjs.Shape();
        background.graphics.s(strokeColor).f(fillColor).drawPolyStar(0,0,this.mapHexSize,6,0,30);
        creature.addChild(background)
        var life = new createjs.Shape();
        life.graphics.s(strokeColor).f("#4caf50").dp(this.offsetTriangleHShort,this.offsetTriangleV,this.mapHexSize/2,3,0,0);
        creature.addChild(life);
        if(this.board[element].commander){
          var textLife = new createjs.Text(this.board[element].commander.life, "15px Arial", "#ffffff");
          textLife.x = this.offsetTriangleHShort -7;
          textLife.y = this.offsetTriangleV +4;
          textLife.textBaseline = "alphabetic";
          creature.addChild(textLife);
          tile = this.queue.getResult("commander"+user)
          var resources = new createjs.Shape();
          resources.graphics.s(strokeColor).f("#ffc107").dp(this.offsetTriangleHLong,0,this.mapHexSize/2,3,0,60);
          creature.addChild(resources);
          var textResources = new createjs.Text(this.board[element].commander.resources, "15px Arial", "#ffffff");
          textResources.x = this.offsetTriangleHLong -7;
          textResources.y = 0+4;
          textResources.textBaseline = "alphabetic";
          creature.addChild(textResources);
        }else if(this.board[element].structure){
          tile = this.queue.getResult("structure"+user)
        }else if(this.board[element].troop){
          tile = this.queue.getResult("troop"+user)
        }

        var circle = new createjs.Shape();
        circle.graphics.bf(tile,"no-repeat",matrix).drawCircle(0, 0, (this.mapHexSize*Math.sqrt(3)/2));
        creature.addChild(circle);
        creature.on("pressmove",this.pressMove);
        creature.on("pressup", this.pressUp)

        this.stage.addChild(creature);
      }
    }
    this.stage.update();
  }
  pressMove = (event) =>{
      if (this.startingPos.initial){
        this.startingPos.tile = this.getTile(event.currentTarget.x,event.currentTarget.y)
        this.startingPos.initial = false;
        this.startingPos.user = this.board[this.startingPos.tile.name].user;
      }
      if(this.user === this.startingPos.user){
        event.currentTarget.x = event.stageX;
        event.currentTarget.y = event.stageY;
        this.stage.update();
      }
      else {
        this.startingPos.initial = true;
      }

  }
  pressUp = (event) =>{
    if(this.user === this.startingPos.user){
      let endTile =this.getTile(event.stageX,event.stageY);
      let target:any ={};
      if (endTile){
        target = this.board[endTile.name];
      }
      if(endTile && Object.keys(target).length === 0 && this.myTurn){
        this.moveCreature(this.startingPos.tile.name, endTile, event.currentTarget)
      }else{
        event.currentTarget.x = this.startingPos.tile.x;
        event.currentTarget.y = this.startingPos.tile.y;
        this.startingPos.initial = true;
      }
      this.stage.update();
    }

  }
  getTile(x,y){
    for(let i = 0;i<this.stage.children.length;i++){
      let p = this.stage.children[i].globalToLocal(x, y);
      if (this.stage.children[i].hitTest(p.x,p.y)){
        if (this.stage.children[i].id >1){
          return null;
        }
        return this.stage.children[i];
      }
    }
  }
  getCreature(x,y){
    for(let i = 0;i<this.stage.children.length;i++){
      let p = this.stage.children[i].globalToLocal(x, y);
      if (this.stage.children[i].hitTest(p.x,p.y)){
        if (this.stage.children[i].id !=1){
          return this.stage.children[i];
        }
      }
    }
  }
  moveCreature(from, tileTo, creature) {
    let target = this.board[from];
    this.board[tileTo.name] = target;
    this.board[from] = {};
    creature.x = tileTo.x;
    creature.y = tileTo.y;
    this.action.moveCreature(from,tileTo.name);
  }
  updatePosition(from,to){
    let target = this.board[from];
    let newPos = this.stage.getChildByName(to);
    let creatureMoved = this.getCreature(newPos.x,newPos.y);
    if(!creatureMoved){
      let oldPos = this.stage.getChildByName(from);
      let creatureToMove = this.getCreature(oldPos.x,oldPos.y);
      creatureToMove.x = newPos.x;
      creatureToMove.y = newPos.y;
    }else
    if (Object.keys(target).length !== 0){
      let oldPos = this.stage.getChildByName(from);
      let creatureToMove = this.getCreature(oldPos.x,oldPos.y);
      let newPos = this.stage.getChildByName(to);
      creatureToMove.x = newPos.x;
      creatureToMove.y = newPos.y;
      this.board[to] = target;
      this.board[from] = {};
    }
    this.startingPos.initial = true;
    this.stage.update();

  }
}
