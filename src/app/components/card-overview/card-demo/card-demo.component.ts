import { Component, OnInit, Input } from '@angular/core';
import {TypesService} from '../../../shared/card/types.service'
import {RacesService} from '../../../shared/card/races.service'

@Component({
  selector: 'card-demo',
  templateUrl: './card-demo.component.html',
  styleUrls: ['./card-demo.component.css']
})
export class CardDemoComponent implements OnInit {
  @Input() card;
  constructor(private types:TypesService, private races:RacesService) { }

  ngOnInit() {
  }
  getBgColor(race){
    return this.races.getRaceColor(race);
  }
}
