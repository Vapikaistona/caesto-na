import { Component,OnInit } from '@angular/core';
import {AuthenticationService} from './shared/authentication/authentication.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private authentication: AuthenticationService,
              private router: Router
             ){}
  ngOnInit(){
  }
  logout(){
      this.authentication.logout();
      this.router.navigate(["login"]);
  }
}
