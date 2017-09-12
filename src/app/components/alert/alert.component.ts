import { Component, OnInit } from '@angular/core';
import {AlertService} from '../../shared/alert/alert.service'
import { Router } from '@angular/router';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(private alert:AlertService, private router:Router) { }

  ngOnInit() {
  }
  goToAlert(){
    this.alert.clearAlert();
    this.router.navigate(["game"]);
  }
  dismissAlert(){
    this.alert.clearAlert();
  }
}
