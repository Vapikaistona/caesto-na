import { Injectable } from '@angular/core';
import {CardsService} from './cards.service'

@Injectable()
export class RacesService {
  public races:Array<any> = [];
  constructor(private cards:CardsService) {
  }

  getRacesList(){
    if(this.races.length ==0){
      this.cards.getRaces().subscribe(races =>{
        this.races = races;
      },error =>{
        console.log("Error getting races: "+ error)
      });
    }
  }
  getRace(id){
    if (id){
      if(this.races.length ==0){
        this.cards.getRaces().subscribe(races =>{
          this.races = races;
          return this.races.find(x => x._id ===id).name
        },error =>{
          console.log("Error getting races: "+ error)
        });
      }
      else return this.races.find(x => x._id ===id).name;
    }
    else return '';
  }
  getRaceColor(race){
    let aux = this.getRace(race);
    switch(aux){
      case "Salvajes": return "light-green accent-2";
      case "Arcanos": return "purple lighten-3";
      case "Tecnópatas": return "orange lighten-3";
      case "Eruditos": return "blue lighten-3";
      case "Engendros": return "grey lighten-1";
      case "Humanos": return "pink lighten-4";
    }
  }
}
