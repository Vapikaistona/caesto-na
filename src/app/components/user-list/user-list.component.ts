import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user.service'
import {User} from '../../classes/user'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList:Array<User>;

  constructor(private userService:UserService,private router: Router) { }

  ngOnInit() {
    this.userService.getAll().subscribe((list:Array<User>) =>{
      this.userList = list;
    })
  }
  editUser(id:string){
    this.router.navigate(['/user',id]);
  }
  deleteUser(id:string){
    this.userService.delete(id).subscribe(()=>{
      this.userService.getAll().subscribe((list:Array<User>) =>{
        this.userList = list;
      })
    })
  }
}
