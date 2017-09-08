import { Component, OnInit } from '@angular/core';
import {GameService} from '../../../shared/game.service'
@Component({
  selector: 'game-users',
  templateUrl: './game-users.component.html',
  styleUrls: ['./game-users.component.css']
})
export class GameUsersComponent implements OnInit {

  constructor(private game:GameService) { }

  ngOnInit() {
  }

}
