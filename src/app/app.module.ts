
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

//COMPONENTES
import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert/alert.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { SingInComponent } from './components/user/sing-in/sing-in.component'
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { CardOverviewComponent } from './components/card-overview/card-overview.component';
import { CardListComponent } from './components/card-overview/card-list/card-list.component';
import { TroopListComponent } from './components/card-overview/card-list/troop-list/troop-list.component';
import { CommanderListComponent } from './components/card-overview/card-list/commander-list/commander-list.component';
import { CardDetailComponent } from './components/card-overview/card-detail/card-detail.component';
import { TroopDetailComponent } from './components/card-overview/card-detail/troop-detail/troop-detail.component';
import { CommanderDetailComponent } from './components/card-overview/card-detail/commander-detail/commander-detail.component';
import { DeckDetailComponent } from './components/deck-overview/deck-detail/deck-detail.component';
import { DeckListComponent } from './components/deck-overview/deck-list/deck-list.component';
import { DeckOverviewComponent } from './components/deck-overview/deck-overview.component';
import { SearchTroopComponent } from './components/search/search-troop/search-troop.component';
import { SearchCommanderComponent } from './components/search/search-commander/search-commander.component';
import { SearchDeckComponent } from './components/search/search-deck/search-deck.component';
import { GameComponent } from './components/game/game.component';
import { GameUsersComponent } from './components/game/game-users/game-users.component';
import { GameMsgComponent } from './components/game/game-msg/game-msg.component';
import { GameGlobalChatComponent } from './components/game/game-global-chat/game-global-chat.component';
import { GamePrivateChatComponent } from './components/game/game-private-chat/game-private-chat.component';
import { GamePlayComponent } from './components/game/game-play/game-play.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//SERVICES
import  {CurrentUserService} from './shared/user/current-user.service';
import { AuthenticationService } from './shared/authentication/authentication.service';
import { UserService } from './shared/user/user.service';
import { TypesService } from './shared/card/types.service';
import { RacesService } from './shared/card/races.service';
import { CardsService } from './shared/card/cards.service';
import { CommanderService } from './shared/card/commander.service';
import { TroopService } from './shared/card/troop.service';
import { DecksService } from './shared/deck/decks.service';
import { GameService } from './shared/game/game.service';
import { BoardService } from './shared/game/board.service';
import { ChatService } from './shared/game/chat.service';
import { ActionService } from './shared/game/action.service';
import { SocketService } from './shared/game/socket.service';
import { AlertService } from './shared/alert/alert.service';
import {AuthGuard,AdminGuard} from './shared/authentication/guard'
//PIPES
import {CommanderFilterPipe} from './shared/pipes/commanderFilter'
import {TroopFilterPipe} from './shared/pipes/troopFilter'
import {DeckFilterPipe} from './shared/pipes/deckFilter'
import {TruncatePipe} from './shared/pipes/truncateFilter'
import {ArraySortPipe} from './shared/pipes/sort'

//ROUTING
import { RouterModule, Routes } from '@angular/router';
import { routing } from './routes/routing';

//SOCKET.IO
//import {socketConfig} from './socket/config'
//CANVAS
import * as createjs from 'createjs-module';

//MOCKS
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
    SingInComponent,
    CardListComponent,
    CardDetailComponent,
    CardOverviewComponent,
    CommanderDetailComponent,
    TroopDetailComponent,
    CommanderListComponent,
    TroopListComponent,
    CommanderFilterPipe,
    TroopFilterPipe,
    DeckFilterPipe,
    TruncatePipe,
    ArraySortPipe,
    DeckDetailComponent,
    DeckOverviewComponent,
    DeckListComponent,
    SearchTroopComponent,
    SearchCommanderComponent,
    SearchDeckComponent,
    GameComponent,
    GameUsersComponent,
    GameMsgComponent,
    AlertComponent,
    GameGlobalChatComponent,
    GamePrivateChatComponent,
    GamePlayComponent
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
    CardsService,
    RacesService,
    CommanderService,
    TroopService,
    DecksService,
    TypesService,
    GameService,
    BoardService,
    SocketService,
    ChatService,
    ActionService,
    AlertService,
    //fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
    AuthGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
