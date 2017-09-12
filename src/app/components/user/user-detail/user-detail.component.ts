import { Component, OnInit } from '@angular/core';
import {User} from '../../../classes/user'
import {Router, ActivatedRoute } from '@angular/router';
import{UserService} from '../../../shared/user/user.service'
import  {CurrentUserService} from '../../../shared/user/current-user.service';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user:User;
  update= {send:false,msg:"",success:false};
  constructor(private currentUser:CurrentUserService,
              private userService:UserService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (this.currentUser.getUser()){
        if (!id) id = this.currentUser.getUser()._id;
        this.userService.getById(id).subscribe(user =>{
          this.user = user;
        })
      }else{
        this.router.navigate(['login']);
      }

    });
  }
  submitForm(form: any): void{
    this.userService.update(this.user,form.form.controls.password.dirty).subscribe(
      user=>{
        this.update= {send:true,msg:"User updated successfully",success:true};
        if (this.currentUser.isAdmin()){
          this.router.navigate(['users']);
        }else{
          this.user = user;
        }
      },error =>{
        this.update= {send:true,msg:"There has been an error updating the user",success:false};
        console.log("Error Updating User "+error)
      });
  }
}
