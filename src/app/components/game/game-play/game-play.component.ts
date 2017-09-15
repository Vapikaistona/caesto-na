import { Component, OnInit, AfterViewInit } from '@angular/core';
import {GameService} from '../../../shared/game/game.service'
import {BoardService} from '../../../shared/game/board.service'
import * as createjs from 'createjs-module';

@Component({
  selector: 'game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements AfterViewInit {


  constructor(private game:GameService, private board:BoardService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.board.init(new createjs.Stage("demoCanvas"));
  }

  endTurn(){
    this.game.endTurn();
  }
  endGame(){
    this.game.endGame();
  }
}
