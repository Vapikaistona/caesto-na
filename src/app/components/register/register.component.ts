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
  private registerError:string ="";
  constructor(private userService:UserService,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
) { }

  ngOnInit() {
     this.user={username:"",firstname:"",lastname:"",lastname2:"",gender:"",age:0,lvl:1,email:""};
  }
  submitForm(form:any){
    console.log(this.user);
    this.userService.create(this.user)
      .subscribe(() =>
        this.authenticationService.login(this.user.username, this.user.password).subscribe(
          data => {
            console.log("register success, redirecting to /");
              this.router.navigate(["/"]);
          },
          error => {
            console.log(error)
              this.registerError = error;
          }
    ));
  }

}
