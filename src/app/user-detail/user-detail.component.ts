import { Component, OnInit } from '@angular/core';
import {User} from '../classes/user'

import  {CurrentUserService} from '../shared/current-user.service';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user:User;
  constructor(private currentUser:CurrentUserService) { }

  ngOnInit() {
    //TODO: utilizar servicio de fetch user data.
    this.user  = new User ('nombre','apellido','apellido2','f','email',2,1);
  }
  submitForm(form: any): void{

  }
}
