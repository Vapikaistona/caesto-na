/*USUARIOS*/
import { UserListComponent } from '../components/user-list/user-list.component';
import { UserDetailComponent } from '../components/user-detail/user-detail.component';
import { SingInComponent } from '../components/sing-in/sing-in.component'
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from '../shared/authentication/guard'

 const appRoutes: Routes = [
  {
    path: 'users/:id',
    component: UserDetailComponent
  },
  {
    path: 'users',
    component: UserListComponent,
    data: { title: 'Users List' },
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: SingInComponent
  },
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
export const routing = RouterModule.forRoot(
  appRoutes,
  { enableTracing: false } // <-- debugging purposes only
)
