import { Component, OnInit, AfterViewInit } from '@angular/core';
import {GameService} from '../../../shared/game/game.service'
import * as createjs from 'createjs-module';

@Component({
  selector: 'game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements AfterViewInit {

  constructor(private game:GameService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    var stage = new createjs.Stage("demoCanvas");
    var circle = new createjs.Shape();
    var mapHeightHexNo = 7;            // Number of vertical hexes
    var mapWidthHexNo = 4;             // Number of horizontal hexes
    var hexList = {};
    var mapStartX = 60;
    var mapStartY = 60;
    var mapHexSize = 30;
    var mapHexGap = 2;
    var moveDistance = 3;
    // calculate hex width and height. We will use these values to offset neighbouring hexes
    var mapHexWidth = Math.sqrt(3)/2 * 2 * mapHexSize;
    var mapHexHeight = 3/4 * 2 * mapHexSize;
    stage.enableMouseOver();
    // Call the function to create the hex grid
    createMap(mapWidthHexNo, mapHeightHexNo);
    stage.update();

    function createMap (mapSizeX, mapSizeY) {
        for (var i=0;i<mapHeightHexNo;i++) {                      // iterate over total number of hex rows
            for (var j=0;j<mapWidthHexNo;j++) {                 // iterate over each hex to be created in a single row.
              var hexY = mapStartY + i * mapHexHeight;
              //remember, each alternate row of hexes is offset in the x axis by half the width of the hex
              // so just add an extra half of the width of the hex, to the x axis displacement of rows 1, 3, 5 etc...
              if (i%2 == 0) {
                  var hexX = mapStartX + j * mapHexWidth;
              }
              else {
                  var hexX = mapStartX + j * mapHexWidth + 1/2* mapHexWidth;
              }
              //call the function to create individual hexes
              createHex (hexX, hexY, mapHexSize, i, j);
            }
        }
    }

    function createHex (x,y,size, iterI, iterJ) {
      var hex = new createjs.Shape();
      hex.graphics.beginStroke("#aaa").beginLinearGradientFill(["#eee","#fafafa"], [0, 1], 0, y-20, 0, y+30).drawPolyStar(x,y,size-mapHexGap,6,0,30);
    	// calculate and save the axial coordinates
    	var cX = iterJ - (iterI - (iterI&1)) / 2;
      var cZ = iterI;
      var cY = -1*(cX+cZ);
    	hex.name =  cX + "x" + cY + "y" + cZ + "z";cX*100 + cY*10 + cZ;
      hex.x = x;
      hex.y = y;
      // add the hex to our hexList with the id as identifier
      hexList[hex.name] = hex;
      // add events for mouse hover on any hex
      hex.addEventListener("mouseover", mouseOverHex);
      hex.addEventListener("mouseout", mouseOutHex);
      stage.addChild(hex);
    }

    function mouseOverHex(event) {
    	event.target.graphics.clear().beginStroke("#888").beginLinearGradientFill(["#fafafa","#fafafa"], [0, 1], 0, event.target.y-20, 0, event.target.y+30).drawPolyStar(event.target.x,event.target.y,mapHexSize - mapHexGap - 1,6,0,30);
      stage.update();
    }

    function mouseOutHex(event) {
      event.target.graphics.clear().beginStroke("#aaa").beginLinearGradientFill(["#eee","#fafafa"], [0, 1], 0, event.target.y-20, 0, event.target.y+30).drawPolyStar(event.target.x,event.target.y,mapHexSize - mapHexGap,6,0,30);
      stage.update();
    }
  }
  endTurn(){
    this.game.endTurn();
  }
  endGame(){
    this.game.endGame();
  }
}
