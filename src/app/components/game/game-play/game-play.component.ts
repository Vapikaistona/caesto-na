import { Component, OnInit, AfterViewInit } from '@angular/core';
import {GameService} from '../../../shared/game/game.service'
import {BoardService} from '../../../shared/game/board.service'
import {RacesService} from '../../../shared/card/races.service'
import * as createjs from 'createjs-module';

@Component({
  selector: 'game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements AfterViewInit {


  constructor(private game:GameService, private board:BoardService, private races:RacesService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.board.init(new createjs.Stage("boardCanvas"));
  }

  endTurn(){
    this.game.endTurn();
  }
  endGame(){
    this.game.endGame();
  }
  getBgColor(race){
    return this.races.getRaceColor(race);
  }
}
