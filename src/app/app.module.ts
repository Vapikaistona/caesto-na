import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UsuarioComponent } from './usuario/usuario.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'users/:id',      component: UserDetailComponent },
  {
    path: 'users',
    component: UserListComponent,
    data: { title: 'Users List' }
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
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
