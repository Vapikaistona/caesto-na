import { Component, OnInit } from '@angular/core';
import {User} from '../../classes/user'
import {Router, ActivatedRoute } from '@angular/router';
import{UserService} from '../../shared/user.service'
import  {CurrentUserService} from '../../shared/current-user.service';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user:User;
  constructor(private currentUser:CurrentUserService,
              private userService:UserService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (!id) id = this.currentUser.getUser()._id
       this.userService.getById(id).subscribe(user =>{
         this.user = user;
       })
    });
  }
  submitForm(form: any): void{
    this.userService.update(this.user).subscribe(
      user=>{
        this.user = user;
        this.router.navigate(['users']);
      },error =>{
        console.log("Error Updating User "+error)
      });
  }
}
