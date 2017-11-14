import { Injectable } from '@angular/core';
import * as createjs from 'createjs-module';
import {ActionService} from './action.service'

@Injectable()
export class BoardService {
  private stage;
  private boardFromSize = 3;
  private boardToSize = 5;
  private mapStartX = 245;
  private mapStartY = 143;
  private mapHexSize = 55;
  private mapHexWidth = Math.sqrt(3)/2 * 2 * this.mapHexSize;
  private mapHexHeight = 3/4 * 2 * this.mapHexSize;
  private offsetImg = 4;
  private offsetTriangleHShort = 15;
  private offsetTriangleHLong = 30;
  private offsetTriangleV = 26;
  private queue = new createjs.LoadQueue(true);
  private cardToBePlayed;
  private creatureToMove;
  private cardUsingHability;
  private startingTile;
  private targetNeigbors=[];
  private targetNeigborsTiles=[];
  private moveNeigbors=[];
  private moveNeigborsTiles =[];
  private cardOptions;
  private actionCardToPlay;
  public myTurn;
  public user;
  public board;
  public resourcesSpent=0;
  public cardSelected;
  public posibleTilesToPlay = [];
  constructor(private action:ActionService) { }

  getManifest (){
    var server = "."
    var manifest = [
      {src:server+"/assets/images/circle/commanderAt.png", id:"commanderA"},
      {src:server+"/assets/images/circle/commanderBt.png", id:"commanderB"},
      {src:server+"/assets/images/circle/structureAt.png", id:"structureA"},
      {src:server+"/assets/images/circle/structureBt.png", id:"structureB"},
      {src:server+"/assets/images/circle/troopAt.png", id:"troopA"},
      {src:server+"/assets/images/circle/troopBt.png", id:"troopB"},
    ];
    return manifest;
  }
  init(stage) {
    this.queue.on("complete",(evt)=>{
      this.updateBoard()
    },this);
    var manifest = this.getManifest();
    this.queue.loadManifest(manifest);
    this.stage = stage;
    //this.stage.enableMouseOver();
    createjs.Touch.enable(this.stage);
    this.createMap();
    this.stage.update();
  }

  //PAINT THE BOARD
  createMap () {
    var hexX = 0;
    var hexY = 0;
    var hexY = 0;
    var itemsInRow=this.boardFromSize;
    var offX = 1/2* this.mapHexWidth;
    for ( var i=1;i<=this.boardToSize;i++){
      if (i>(Math.floor(this.boardToSize/2) + 1)){
        offX += 1/2* this.mapHexWidth;
      }else{
        offX -= 1/2* this.mapHexWidth;
      }
      for(var j=1;j<=itemsInRow;j++){
        hexX = this.mapStartX + (j-1) * this.mapHexWidth + offX;
        hexY = this.mapStartY + (i-1) * this.mapHexHeight;
        this.createHex (hexX, hexY, this.mapHexSize,i,j);
      }
      if (i>=(Math.floor(this.boardToSize/2) + 1)){
        itemsInRow--;
      }
      else{
        itemsInRow ++;
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
    this.stage.addChild(hex);
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
          var textLife = new createjs.Text(this.board[element].structure.life, "15px Arial", "#ffffff");
          textLife.x = this.offsetTriangleHShort -7;
          textLife.y = this.offsetTriangleV +4;
          textLife.textBaseline = "alphabetic";
          creature.addChild(textLife);
          tile = this.queue.getResult("structure"+user)
          var attack = new createjs.Shape();
          attack.graphics.s(strokeColor).f("#ff5722").dp(this.offsetTriangleHLong,0,this.mapHexSize/2,3,0,60);
          creature.addChild(attack);
          var textAttack = new createjs.Text(this.board[element].structure.attack, "15px Arial", "#ffffff");
          textAttack.x = this.offsetTriangleHLong -7;
          textAttack.y = 0+4;
          textAttack.textBaseline = "alphabetic";
          creature.addChild(textAttack);
        }else if(this.board[element].troop){
          var textLife = new createjs.Text(this.board[element].troop.life, "15px Arial", "#ffffff");
          textLife.x = this.offsetTriangleHShort -7;
          textLife.y = this.offsetTriangleV +4;
          textLife.textBaseline = "alphabetic";
          creature.addChild(textLife);
          tile = this.queue.getResult("troop"+user)
          var attack = new createjs.Shape();
          attack.graphics.s(strokeColor).f("#ff5722").dp(this.offsetTriangleHLong,0,this.mapHexSize/2,3,0,60);
          creature.addChild(attack);
          var textAttack = new createjs.Text(this.board[element].troop.attack, "15px Arial", "#ffffff");
          textAttack.x = this.offsetTriangleHLong -7;
          textAttack.y = 0+4;
          textAttack.textBaseline = "alphabetic";
          creature.addChild(textAttack);
        }
        var circle = new createjs.Shape();
        circle.graphics.bf(tile,"no-repeat",matrix).drawCircle(0, 0, (this.mapHexSize*Math.sqrt(3)/2));
        creature.addChild(circle);
        creature.on("click",this.creatureClicked)
        this.stage.addChild(creature);
        if(!this.board[element].active){
          this.disableCard(element);
        }
      }
    }
    this.stage.update();
  }

  //PLAY CARDS
  playCard(card,type,index){
    if(type == 'Structure'){
      this.cardToBePlayed = {structure:card, user:this.user,index:index}
      this.showPlayRange();
    }else if(type == 'Creature'){
      this.cardToBePlayed = {troop:card, user:this.user,index:index}
      this.showPlayRange();
    } else {
      this.cardToBePlayed = {action:card, user:this.user,index:index}
      this.showActionRange(null);

    }
  }
  showPlayRange(){
    this.targetNeigbors = [];
    for(let key in this.board){
      let item = this.board[key];
      //TODO ADD structure habilities
      if (item.user == this.user && item.commander){
        let originTile = this.stage.getChildByName(key)
        let posibleTargets = this.getSurroundingTiles(originTile.x,originTile.y,item.commander.habs.range)
        for(let i =0;i<posibleTargets.length;i++){
          if(!this.board[posibleTargets[i]].user){
            this.targetNeigbors.push(posibleTargets[i]);
          }
        }
        this.paintTilesToPlay();
        break;
      }
    }
  }
  showActionRange(card){
    if (card){
      this.targetNeigbors = [];
      let posibleTargets = this.getSurroundingTiles(card.x,card.y,card.habs.range)
      //TODO: Range
      this.cardUsingHability = card;
      this.paintActionTilesToPlay(false);
    }
    else{
      this.targetNeigbors = [];
      for(let key in this.board){
        let item = this.board[key];
        //TODO ADD structure habilities
        if (item.user == this.user && item.commander){
          let originTile = this.stage.getChildByName(key)
          let distance = item.commander.habs.range>=this.cardToBePlayed.action.habs.range?item.commander.habs.range:this.cardToBePlayed.action.habs.range;
          this.targetNeigbors = this.getSurroundingTiles(originTile.x,originTile.y,distance)
          //TODO: Range
          this.paintActionTilesToPlay(true);
          break;
        }
      }
    }
  }
  paintActionTilesToPlay(fromHand){
    this.targetNeigbors.forEach(tile => {
      let target = this.stage.getChildByName(tile)
      var playable = new createjs.Shape();
      playable.id = 4;
      playable.x = target.x;
      playable.y = target.y;
      playable.alpha = 0.25;
      playable.graphics.ss(10,"round").s("#ffeb3b").f("#ccff90").drawPolyStar(0,0,this.mapHexSize,6,0,30);
      if(fromHand){
        playable.on("click",this.playActionCardSelected);
      }else{
        playable.on("click",this.useHabilityCardSelected);
      }
      this.targetNeigborsTiles.push(this.stage.addChild(playable));
      this.stage.update();
    });
    this.stage.update();

  }
  paintTilesToPlay(){
    this.targetNeigbors.forEach(tile => {
      let target = this.stage.getChildByName(tile)
      var playable = new createjs.Shape();
      playable.id = 4;
      playable.x = target.x;
      playable.y = target.y;
      playable.alpha = 0.25;
      playable.graphics.ss(10,"round").s("#76ff03").f("#ccff90").drawPolyStar(0,0,this.mapHexSize,6,0,30);
      playable.on("click",this.playCardSelected);
      this.targetNeigborsTiles.push(this.stage.addChild(playable));
      this.stage.update();
    });
    this.stage.update();

  }
  playActionCardSelected = (event) =>{
    let targetTile = this.getTile(event.currentTarget.x,event.currentTarget.y)
    let index = this.cardToBePlayed.index;
    delete this.cardToBePlayed.index;
    this.action.playCard(this.cardToBePlayed,targetTile.name,index);
    let card = this.cardToBePlayed.structure ||this.cardToBePlayed.troop ||this.cardToBePlayed.action
    this.resourcesSpent += card.cost;
    this.cardToBePlayed = {};
    this.clearTargets();
  }
  useHabilityCardSelected = (event) =>{
    let targetTile = this.getTile(event.currentTarget.x,event.currentTarget.y)
    this.action.useActionCard(this.cardUsingHability,targetTile.name);
    this.cardUsingHability = {};
    this.clearTargets();
  }
  playCardSelected = (event) =>{
    let targetTile = this.getTile(event.currentTarget.x,event.currentTarget.y)
    let index = this.cardToBePlayed.index;
    delete this.cardToBePlayed.index;
    this.action.playCard(this.cardToBePlayed,targetTile.name,index);
    let card = this.cardToBePlayed.structure ||this.cardToBePlayed.troop ||this.cardToBePlayed.action
    this.resourcesSpent += card.cost;
    this.cardToBePlayed = {};
    this.clearTargets();
  }

  //CARD OPTIONS AND DETAILS
  creatureClicked = (event) =>{
    this.clearSelectedCard();
    let tileHitted = this.getTile(event.currentTarget.x,event.currentTarget.y)
    this.setDetails(tileHitted.name)
    if(this.myTurn && this.board[tileHitted.name].user ==this.user && this.board[tileHitted.name].active){
      this.setCardOptions(tileHitted.name,tileHitted.x,tileHitted.y);
    }
  }
  setDetails(pos){
    let card = this.board[pos]
    if (card.troop){
      this.cardSelected = card.troop;
    }else if (card.commander){
      this.cardSelected = card.commander;
    }else if (card.structure){
      this.cardSelected = card.structure;
    }
  }
  setCardOptions(pos,x,y){
    this.cardOptions.pos = pos;
    let targetTile = this.getTile(x,y)
    var cardOptions = new createjs.Container();
    cardOptions.id = 3;
    cardOptions.x = targetTile.x;
    cardOptions.y = targetTile.y;
    var background = new createjs.Shape();
    background.graphics.s("#ffffff").f("#ccff90").drawPolyStar(0,0,this.mapHexSize,6,0,30);
    background.alpha = 0.25;
    cardOptions.addChild(background)
    //MOVE
    if(!this.board[pos].structure){
      var move = new createjs.Shape();
      move.graphics.s("#ffffff").f("#4caf50").dp(this.offsetTriangleHShort,this.offsetTriangleV,this.mapHexSize/2,3,0,0);
      cardOptions.addChild(move);
      move.on("click",this.creatureMoves)
      var moveText = new createjs.Text("move", "15px Arial", "#ffffff");
      moveText.x = this.offsetTriangleHShort -7;
      moveText.y = this.offsetTriangleV +4;
      moveText.textBaseline = "alphabetic";
      cardOptions.addChild(moveText);
    }
    //CANCEL
    var cancel = new createjs.Shape();
    cancel.graphics.s("#ffffff").f("#ff5722").dp(this.offsetTriangleHLong,0,this.mapHexSize/2,3,0,60);
    cardOptions.addChild(cancel);
    cancel.on("click",this.cancelSelection)
    var cancelText = new createjs.Text("cancel", "15px Arial", "#ffffff");
    cancelText.x = this.offsetTriangleHShort -7;
    cancelText.y = 0+4;
    cancelText.textBaseline = "alphabetic";
    cardOptions.addChild(cancelText);
    this.cardOptions.tile = this.stage.addChild(cardOptions);
    this.stage.update();
  }
  deleteCardOptions(){
    if(this.cardOptions && this.cardOptions.tile){
      this.stage.removeChild(this.cardOptions.tile);
      this.stage.update();
    }
    this.cardOptions={};
  }
  cardUsed(cardName){
    this.board[cardName].active = false;
    this.disableCard(cardName);
  }
  disableCard(cardName){
    //Paint disabled cloack
    let tile = this.stage.getChildByName(cardName)
    var disabled = new createjs.Shape();
    disabled.id = 4;
    disabled.x = tile.x;
    disabled.y = tile.y;
    disabled.alpha = 0.50;
    disabled.graphics.s("#ffffff").f("#d50000").drawPolyStar(0,0,this.mapHexSize,6,0,30);
    this.stage.addChild(disabled);
    this.stage.update();
  }

  //MOVEMENT
  creatureMoves = (event) =>{
    this.getMovement(this.cardOptions.tile.x,this.cardOptions.tile.y)
  }
  getMovement(x,y){
    this.creatureToMove = this.getCreature(x,y);
    this.moveNeigbors = this.getSurroundingTiles(x,y,1);
    for(let i =0;i<this.moveNeigbors.length;i++){
      let oc = this.isOccupied(this.moveNeigbors[i]);
      if(oc && oc == this.user){
        this.moveNeigbors.splice(i,1);
        i--;
      }
    }
    this.startingTile = this.getTile(x,y);
    this.showMovementTiles();
  }
  showMovementTiles () {
    this.moveNeigbors.forEach(tile => {
      let target = this.stage.getChildByName(tile)
      var playable = new createjs.Shape();
      playable.id = 4;
      playable.x = target.x;
      playable.y = target.y;
      playable.alpha = 0.25;
      playable.graphics.ss(10,"round").s("#76ff03").f("#ccff90").drawPolyStar(0,0,this.mapHexSize,6,0,30);
      playable.on("click",this.moveCreatureSelected);
      this.moveNeigborsTiles.push(this.stage.addChild(playable));
      this.stage.update();
    });
    this.stage.update();
  }
  moveCreatureSelected = (event) =>{
    let targetTile = this.getTile(event.currentTarget.x,event.currentTarget.y)
    if (!this.isOccupied(targetTile.name)){
      this.creatureToMove.x = targetTile.x;
      this.creatureToMove.y = targetTile.y;
      let target = this.board[this.startingTile.name];
      this.board[targetTile.name] = target;
      this.board[this.startingTile.name] = {};
      this.clearSelectedCard();
      this.creatureToMove = {};
      this.action.moveCreature(this.startingTile.name,targetTile.name);
      this.startingTile ={}
    }else {
      this.action.attack(this.getTile(this.creatureToMove.x,this.creatureToMove.y).name,targetTile.name)
    }
  }

  //CLEAN
  creatureKilled(creaturePos){
    this.board[creaturePos] ={}
    //update stage
  }
  cancelSelection = (event) =>{
    this.clearSelectedCard();
  }
  clearSelectedCard(){
    this.clearMoves();
    this.clearTargets();
    this.deleteCardOptions();
  }
  clearMoves = () => {
    this.moveNeigborsTiles.forEach(tile => {
      this.stage.removeChild(tile);
    });
    this.stage.update();
    this.moveNeigbors = [];
    this.moveNeigborsTiles = [];
  }
  clearTargets = () => {
    this.targetNeigborsTiles.forEach(tile => {
      this.stage.removeChild(tile);
    });
    this.stage.update();
    this.targetNeigbors = [];
  }

  //UTILS
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
  getSurroundingTiles(x,y,distance){
    let tileList = [];
    for (var i = 0; i < distance; i++) {
      let tileListAux =[]
      if (tileList.length==0) {
        tileListAux = this.getNearestTiles(x,y);
      } else {
        for (var i = 0; i < tileList.length; i++) {
          var element = this.stage.getChildByName(tileList[i]);
          let tilesAux = this.getNearestTiles(element.x,element.y);
          tileListAux = this.join(tileListAux,tilesAux);
        }
      }
      tileList = this.join(tileList,tileListAux)
    }
    return tileList;
  }
  join(list1,list2){
    let list3=[]
    list3 = list1;
    list2.forEach(element => {
      if(list3.indexOf(element)<0){
        list3.push(element);
      }
    });
    return list3;
  }
  getNearestTiles(x,y){
    let tileList = [];
    let offsetX = this.mapHexWidth;
    let offsetY = this.mapHexHeight;
    let tryTile;
    //NE
    tryTile = this.getTile(x+offsetX/2,y+offsetY);
    if (tryTile){tileList.push(tryTile.name)}
    //E
    tryTile = this.getTile(x+offsetX,y);
    if (tryTile){tileList.push(tryTile.name)}
    //SE
    tryTile = this.getTile(x+offsetX/2,y-offsetY);
    if (tryTile){tileList.push(tryTile.name)}
    //SW
    tryTile = this.getTile(x-offsetX/2,y-offsetY);
    if (tryTile){tileList.push(tryTile.name)}
    //W
    tryTile = this.getTile(x-offsetX,y);
    if (tryTile){tileList.push(tryTile.name)}
    //NW
    tryTile = this.getTile(x-offsetX/2,y+offsetY);
    if (tryTile){tileList.push(tryTile.name)}
    return tileList;
  }
  isOccupied (pos){
    return this.board[pos].user;
  }

  //BOARD UPDATE ACTIONS
  attack(board){
    this.board = board;
    this.updateBoard();
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
    this.cardUsed(to);
    this.stage.update();
  }
  actionCardPlayed(card,pos){
    this.actionCardToPlay = card;
    let target = this.stage.getChildByName(pos);
    //TODO: apply modifiers
    this.updateBoard();
    var playable = new createjs.Shape();
    playable.id = 4;
    playable.x = target.x;
    playable.y = target.y;
    playable.alpha = 0.25;
    playable.graphics.ss(10,"round").s("#ff9800").f("#ccff90").drawPolyStar(0,0,this.mapHexSize,6,0,30);
    this.stage.addChild(playable);
    this.stage.update();

  }
  cardPlayed(card,pos){
    if(card.action){
      this.actionCardPlayed(card.action,pos)
    }
    else{
      this.board[pos]=card;
      this.updateBoard();
    }
  }
}
