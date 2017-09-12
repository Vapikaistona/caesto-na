import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {
  public alertMsg:string = "";
  public alertActive:boolean=false;

  constructor() { }

  clearAlert(){
    this.alertMsg = "";
    this.alertActive = false;
  }
  setAlert(txt){
    this.alertMsg=txt;
    this.alertActive =true;
  }
}
