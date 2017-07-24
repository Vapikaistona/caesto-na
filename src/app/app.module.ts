//   materialize-css
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterializeModule } from 'ng2-materialize'
//  end materialize-css
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UsuarioComponent } from './usuario/usuario.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  { path: 'users/:id',      component: UserDetailComponent },
  {
    path: 'users',
    component: UserListComponent,
    data: { title: 'Users List' }
  },
  { path: 'login',
    component: LoginComponent
  },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    PageNotFoundComponent,
    UserListComponent,
    UserDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MaterializeModule.forRoot()
    // other imports here
  ]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
