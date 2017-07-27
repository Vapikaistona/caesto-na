
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

//COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SingInComponent } from './components/sing-in/sing-in.component'
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//SERVICES
import  {CurrentUserService} from './shared/current-user.service';
import { AuthenticationService } from './shared/authentication/authentication.service';
import { UserService } from './shared/user.service';
import {AuthGuard} from './shared/authentication/guard'
//ROUTING
import { RouterModule, Routes } from '@angular/router';
import{routing} from './routes/routing';

//MOCKS
// used to create fake backend
import { fakeBackendProvider } from './mocks/mocks';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    UserListComponent,
    UserDetailComponent,
    LoginComponent,
    RegisterComponent,
    SingInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ]
  ,
  providers: [
    CurrentUserService,
    AuthenticationService,
    UserService,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
