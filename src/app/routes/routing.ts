/*USUARIOS*/
import { UserListComponent } from '../user-list/user-list.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';

import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';


export const appRoutes: Routes = [
  {
    path: 'users/:id',
    component: UserDetailComponent
  },
  {
    path: 'users',
    component: UserDetailComponent,
    data: { title: 'Users List' }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
