/*USUARIOS*/
import { UserListComponent } from '../components/user/user-list/user-list.component';
import { UserDetailComponent } from '../components/user/user-detail/user-detail.component';
import { CardOverviewComponent } from '../components/card-overview/card-overview.component';
import {DeckOverviewComponent} from '../components/deck-overview/deck-overview.component'
import { LoginComponent } from '../components/user/login/login.component'
import { RegisterComponent } from '../components/user/register/register.component'
import { GameComponent } from '../components/game/game.component'
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard,AdminGuard} from '../shared/authentication/guard'

 const appRoutes: Routes = [
  {
    path: 'user/:id',
    component: UserDetailComponent,
    canActivate: [AuthGuard]
  },{
    path: 'user',
    component: UserDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: UserListComponent,
    canActivate: [AuthGuard,AdminGuard]
  },
  {
    path: 'cards',
    component: CardOverviewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'decks',
    component: DeckOverviewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'game',
    component: GameComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    redirectTo: '/cards',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
export const routing = RouterModule.forRoot(
  appRoutes,
  { enableTracing: false } // <-- debugging purposes only
)
