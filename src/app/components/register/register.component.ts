import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../shared/authentication/authentication.service';

import {User} from '../../classes/user'
import {UserService} from '../../shared/user.service'

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user:User;
  private registerMsg:string ="";
  private registerOk:boolean=false;
  constructor(private userService:UserService,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
) { }

  ngOnInit() {
     this.user={username:"",firstname:"",lastname:"",lastname2:"",gender:"",age:0,lvl:1,email:""};
  }
  submitForm(form:any){
    this.userService.create(this.user)
      .subscribe(
        data =>{
          if (data.user){
            this.registerOk = true;
            this.registerMsg ="Registration OK";
          }
          else{
            this.registerOk = false;
            this.registerMsg = data.message;
          }
        },
        error =>{
          this.registerOk = false;
          this.registerMsg = error.message;
        }
      );
  }
}
