import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../shared/authentication/authentication.service';



@Component({
    selector: 'login',
    styleUrls: ['./login.component.css'],
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    failedMessage: string ='';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        ) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                  if (!data.username){
                    this.failedMessage = data.message;
                    this.model.password = '';
                    this.loading = false;
                  }else{
                    this.failedMessage = 'Login Succesful'
                    this.router.navigate([this.returnUrl]);
                  }
                },
                error => {
                  this.model.username = this.model.password = '';
                  this.loading = false;
                });
    }
}
