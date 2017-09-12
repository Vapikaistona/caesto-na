import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {CurrentUserService} from '../user/current-user.service'
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private currentUser: CurrentUserService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.currentUser.isLogged()) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router, private currentUser: CurrentUserService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      let user= this.currentUser.getUser();
        if (user) {
            // logged in so return true
            return (user.lvl == 3);
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
