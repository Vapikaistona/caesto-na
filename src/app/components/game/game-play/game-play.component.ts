import { Component, OnInit, AfterViewInit } from '@angular/core';
import {GameService} from '../../../shared/game/game.service'
import {BoardService} from '../../../shared/game/board.service'
import {RacesService} from '../../../shared/card/races.service'
import {TypesService} from '../../../shared/card/types.service'
import * as createjs from 'createjs-module';

@Component({
  selector: 'game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements AfterViewInit {
  private cardToPlay;

  constructor(private game:GameService, private board:BoardService, private races:RacesService, private types:TypesService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.board.board = this.game.getGame().board;
    this.board.init(new createjs.Stage("boardCanvas"));
  }

  endTurn(){
    this.cardToPlay = {};
    this.game.endTurn();
    this.board.resourcesSpent = 0;
  }
  endGame(){
    this.game.endGame();
  }
  getBgColor(race){
    return this.races.getRaceColor(race);
  }
  nothing(){}

  setCardSelected(card){
    if(this.board.myTurn){
      this.cardToPlay = card;
    }
      this.board.cardSelected = card;
  }
  playCard(card,index){
    this.board.playCard(card,this.types.getType(card.type),index)
  }
  cancelSelection(){
    this.cardToPlay = {};
    this.board.clearTargets()
  }
}
