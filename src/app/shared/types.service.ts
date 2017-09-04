import { Injectable } from '@angular/core';
import {CardsService} from './cards.service'

@Injectable()
export class TypesService {
  public types:Array<any> = [];
  constructor(private cards:CardsService) {
  }

  getTypesList(){
    if(this.types.length ==0){
      this.cards.getTypes().subscribe(types =>{
        this.types = types;
      },error =>{
        console.log("Error getting types: "+ error)
      });
    }
  }
  getType(id){
    if (id){
      if(this.types.length ==0){
        this.cards.getTypes().subscribe(types =>{
          this.types = types;
          return this.types.find(x => x._id ===id).name
        },error =>{
          console.log("Error getting types: "+ error)
        });
      }
      else return this.types.find(x => x._id ===id).name;
    }
    else return '';
  }
  getTypeColor(type){
    let aux = this.getType(type);
    switch(aux){
      case "Creture": return "";
      case "Structure": return "";
      case "Action": return "";
    }
  }
}
