import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as createjs from 'createjs-module';

@Component({
  selector: 'game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    var stage = new createjs.Stage("demoCanvas");
    var circle = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 25;
    circle.y = 25;
    stage.addChild(circle);

    stage.update();

    createjs.Tween.get(circle, { loop: true })
    .to({ x: 475 }, 1000, createjs.Ease.getPowInOut(4))
    .to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
    .to({ alpha: 0, y: 225 }, 100)
    .to({ alpha: 1, y: 475 }, 500, createjs.Ease.getPowInOut(2))
    .to({ x: 25 }, 800, createjs.Ease.getPowInOut(2));

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
  }

}
