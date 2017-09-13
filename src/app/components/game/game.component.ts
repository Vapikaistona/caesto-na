import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../shared/game/chat.service'
import {GameService} from '../../shared/game/game.service'

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  constructor(private chat:ChatService, private game:GameService) { }

  ngOnInit() {
  }

}
