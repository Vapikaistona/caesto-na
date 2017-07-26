import { Component, OnInit } from '@angular/core';

import {User} from '../../classes/user'
import {UserService} from '../../shared/user.service'

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user:User;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user={id:"",nick:"",name:"",lastname:"",lastname2:"",gender:"",age:0,lvl:1,email:""};
  }
  submitForm(form:any){
    this.userService.create(this.user).subscribe((response)=>{
      //TODO: redirect to login
    });
  }

}
