
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

//COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//SERVICES
import  {CurrentUserService} from './shared/current-user.service';

//ROUTING
import { RouterModule, Routes } from '@angular/router';
import{appRoutes} from './routes/routing';
import { RegisterComponent } from './register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    UserListComponent,
    UserDetailComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    // other imports here
  ]
  ,
  providers: [CurrentUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
