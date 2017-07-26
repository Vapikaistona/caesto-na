import { Component, OnInit } from '@angular/core';
import {User} from '../../classes/user'

import { ActivatedRoute } from '@angular/router';


import{UserService} from '../../shared/user.service'
import  {CurrentUserService} from '../../shared/current-user.service';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user:User;
  d:any;
  constructor(private currentUser:CurrentUserService, private userService:UserService, private route:ActivatedRoute) { }

  ngOnInit() {
    //TODO: utilizar servicio de fetch user data.
    this.d = this.route.params.subscribe(params => {
       this.userService.getById(params['id']).subscribe(user =>{
         this.user = user;
       })
    });
  }
  submitForm(form: any): void{

  }
}
