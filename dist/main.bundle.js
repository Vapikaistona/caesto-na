webpackJsonp([0],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-title{\r\n  position: absolute;\r\n  color: #fff;\r\n  display: inline-block;\r\n  font-size: 2.1rem;\r\n  padding: 0;\r\n  white-space: nowrap;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n  transform: translateX(-50%);\r\n}\r\n.dropdown-button{\r\n  color:white;\r\n}\r\n.hide-on-med-and-up{\r\n  padding-left: 10px;\r\n}\r\n.dropdown-content li>a{\r\n  color:white;\r\n}\r\n.dropdown-content li.active{\r\n  background-color: #9e9d24;\r\n}\r\n.material-icons{\r\n  line-height:36px;  \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"!game.gameStart\">\r\n  <div class=\"nav-wrapper lime darken-1\">\r\n    <a routerLink=\"/\" class=\"app-title\"> Caesto-Na</a>\r\n    <div class=\"hide-on-med-and-up left\">\r\n      <a class='dropdown-button btn-flat' href='#' data-activates='dropdown1'><i class=\"material-icons\">menu</i></a>\r\n    </div>\r\n    <ul id='dropdown1' class='dropdown-content lime darken-1'>\r\n      <li *ngIf=\"authentication.getLogged()\" routerLinkActive=\"active\"><a routerLink=\"game\" >Game</a></li>\r\n      <li *ngIf=\"authentication.getLogged()\" routerLinkActive=\"active\"><a routerLink=\"decks\" >Decks</a></li>\r\n      <li *ngIf=\"authentication.getLogged()\" routerLinkActive=\"active\"><a routerLink=\"cards\" >Cards</a></li>\r\n      <li *ngIf=\"authentication.getLogged()\" [ngSwitch]=\"authentication.isAdmin()\" routerLinkActive=\"active\">\r\n        <a *ngSwitchCase=\"false\" routerLink=\"user/\">User</a>\r\n        <a *ngSwitchCase=\"true\" routerLink=\"users\" >Users</a>\r\n      </li>\r\n      <li *ngIf=\"!authentication.getLogged()\"><a routerLink=\"register\">Register</a></li>\r\n    </ul>\r\n    <div class=\"hide-on-small-only\">\r\n      <ul id=\"nav-left\" class=\"left\">\r\n        <li *ngIf=\"authentication.getLogged()\" routerLinkActive=\"active\"><a routerLink=\"game\" >Game</a></li>\r\n        <li *ngIf=\"authentication.getLogged()\" routerLinkActive=\"active\"><a routerLink=\"decks\" >Decks</a></li>\r\n        <li *ngIf=\"authentication.getLogged()\" routerLinkActive=\"active\"><a routerLink=\"cards\" >Cards</a></li>\r\n        <li *ngIf=\"authentication.getLogged()\" [ngSwitch]=\"authentication.isAdmin()\" routerLinkActive=\"active\">\r\n          <a *ngSwitchCase=\"false\" routerLink=\"user/\">User</a>\r\n          <a *ngSwitchCase=\"true\" routerLink=\"users\" >Users</a>\r\n        </li>\r\n        <li *ngIf=\"!authentication.getLogged()\"><a routerLink=\"register\">Register</a></li>\r\n      </ul>\r\n    </div>\r\n    <ul id=\"nav-right\" class=\"right\">\r\n      <li [ngSwitch]=\"authentication.getLogged()\" routerLinkActive=\"active\">\r\n        <a *ngSwitchCase=\"false\" routerLink=\"login\">Login</a>\r\n        <a *ngSwitchCase=\"true\" class=\"red\" (click)=\"logout()\">Logout</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<div class=\"\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<alert></alert>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_authentication_authentication_service__ = __webpack_require__("../../../../../src/app/shared/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_game_game_service__ = __webpack_require__("../../../../../src/app/shared/game/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(authentication, router, game) {
        this.authentication = authentication;
        this.router = router;
        this.game = game;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.logout = function () {
        this.authentication.logout();
        this.router.navigate(["login"]);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_game_game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_game_game_service__["a" /* GameService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_alert_alert_component__ = __webpack_require__("../../../../../src/app/components/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_sing_in_sing_in_component__ = __webpack_require__("../../../../../src/app/components/user/sing-in/sing-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_user_list_user_list_component__ = __webpack_require__("../../../../../src/app/components/user/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/components/user/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_card_overview_card_overview_component__ = __webpack_require__("../../../../../src/app/components/card-overview/card-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_card_overview_card_list_card_list_component__ = __webpack_require__("../../../../../src/app/components/card-overview/card-list/card-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_card_overview_card_list_troop_list_troop_list_component__ = __webpack_require__("../../../../../src/app/components/card-overview/card-list/troop-list/troop-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_card_overview_card_list_commander_list_commander_list_component__ = __webpack_require__("../../../../../src/app/components/card-overview/card-list/commander-list/commander-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_card_overview_card_detail_card_detail_component__ = __webpack_require__("../../../../../src/app/components/card-overview/card-detail/card-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_card_overview_card_detail_troop_detail_troop_detail_component__ = __webpack_require__("../../../../../src/app/components/card-overview/card-detail/troop-detail/troop-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_card_overview_card_detail_commander_detail_commander_detail_component__ = __webpack_require__("../../../../../src/app/components/card-overview/card-detail/commander-detail/commander-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_deck_overview_deck_detail_deck_detail_component__ = __webpack_require__("../../../../../src/app/components/deck-overview/deck-detail/deck-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_deck_overview_deck_list_deck_list_component__ = __webpack_require__("../../../../../src/app/components/deck-overview/deck-list/deck-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_deck_overview_deck_overview_component__ = __webpack_require__("../../../../../src/app/components/deck-overview/deck-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_search_search_troop_search_troop_component__ = __webpack_require__("../../../../../src/app/components/search/search-troop/search-troop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_search_search_commander_search_commander_component__ = __webpack_require__("../../../../../src/app/components/search/search-commander/search-commander.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_search_search_deck_search_deck_component__ = __webpack_require__("../../../../../src/app/components/search/search-deck/search-deck.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_game_game_component__ = __webpack_require__("../../../../../src/app/components/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_game_game_users_game_users_component__ = __webpack_require__("../../../../../src/app/components/game/game-users/game-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_game_game_msg_game_msg_component__ = __webpack_require__("../../../../../src/app/components/game/game-msg/game-msg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_game_game_global_chat_game_global_chat_component__ = __webpack_require__("../../../../../src/app/components/game/game-global-chat/game-global-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_game_game_private_chat_game_private_chat_component__ = __webpack_require__("../../../../../src/app/components/game/game-private-chat/game-private-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_game_game_play_game_play_component__ = __webpack_require__("../../../../../src/app/components/game/game-play/game-play.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__shared_user_current_user_service__ = __webpack_require__("../../../../../src/app/shared/user/current-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_authentication_authentication_service__ = __webpack_require__("../../../../../src/app/shared/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__shared_user_user_service__ = __webpack_require__("../../../../../src/app/shared/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__shared_card_types_service__ = __webpack_require__("../../../../../src/app/shared/card/types.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__shared_card_races_service__ = __webpack_require__("../../../../../src/app/shared/card/races.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__shared_card_cards_service__ = __webpack_require__("../../../../../src/app/shared/card/cards.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__shared_card_commander_service__ = __webpack_require__("../../../../../src/app/shared/card/commander.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__shared_card_troop_service__ = __webpack_require__("../../../../../src/app/shared/card/troop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__shared_deck_decks_service__ = __webpack_require__("../../../../../src/app/shared/deck/decks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__shared_game_game_service__ = __webpack_require__("../../../../../src/app/shared/game/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__shared_game_board_service__ = __webpack_require__("../../../../../src/app/shared/game/board.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__shared_game_chat_service__ = __webpack_require__("../../../../../src/app/shared/game/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__shared_game_action_service__ = __webpack_require__("../../../../../src/app/shared/game/action.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__shared_game_socket_service__ = __webpack_require__("../../../../../src/app/shared/game/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__shared_alert_alert_service__ = __webpack_require__("../../../../../src/app/shared/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__shared_authentication_guard__ = __webpack_require__("../../../../../src/app/shared/authentication/guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__shared_pipes_commanderFilter__ = __webpack_require__("../../../../../src/app/shared/pipes/commanderFilter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__shared_pipes_troopFilter__ = __webpack_require__("../../../../../src/app/shared/pipes/troopFilter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__shared_pipes_deckFilter__ = __webpack_require__("../../../../../src/app/shared/pipes/deckFilter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__shared_pipes_truncateFilter__ = __webpack_require__("../../../../../src/app/shared/pipes/truncateFilter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__shared_pipes_sort__ = __webpack_require__("../../../../../src/app/shared/pipes/sort.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__routes_routing__ = __webpack_require__("../../../../../src/app/routes/routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__angular_http_testing__ = __webpack_require__("../../../http/@angular/http/testing.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//COMPONENTES



























//SERVICES
















//PIPES








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_user_list_user_list_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_user_detail_user_detail_component__["a" /* UserDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_user_sing_in_sing_in_component__["a" /* SingInComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_card_overview_card_list_card_list_component__["a" /* CardListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_card_overview_card_detail_card_detail_component__["a" /* CardDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_card_overview_card_overview_component__["a" /* CardOverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_card_overview_card_detail_commander_detail_commander_detail_component__["a" /* CommanderDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_card_overview_card_detail_troop_detail_troop_detail_component__["a" /* TroopDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_card_overview_card_list_commander_list_commander_list_component__["a" /* CommanderListComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_card_overview_card_list_troop_list_troop_list_component__["a" /* TroopListComponent */],
            __WEBPACK_IMPORTED_MODULE_47__shared_pipes_commanderFilter__["a" /* CommanderFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_48__shared_pipes_troopFilter__["a" /* TroopFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_49__shared_pipes_deckFilter__["a" /* DeckFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_50__shared_pipes_truncateFilter__["a" /* TruncatePipe */],
            __WEBPACK_IMPORTED_MODULE_51__shared_pipes_sort__["a" /* ArraySortPipe */],
            __WEBPACK_IMPORTED_MODULE_18__components_deck_overview_deck_detail_deck_detail_component__["a" /* DeckDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_deck_overview_deck_overview_component__["a" /* DeckOverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_deck_overview_deck_list_deck_list_component__["a" /* DeckListComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_search_search_troop_search_troop_component__["a" /* SearchTroopComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_search_search_commander_search_commander_component__["a" /* SearchCommanderComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_search_search_deck_search_deck_component__["a" /* SearchDeckComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_game_game_component__["a" /* GameComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_game_game_users_game_users_component__["a" /* GameUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_game_game_msg_game_msg_component__["a" /* GameMsgComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_alert_alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_game_game_global_chat_game_global_chat_component__["a" /* GameGlobalChatComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_game_game_private_chat_game_private_chat_component__["a" /* GamePrivateChatComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_game_game_play_game_play_component__["a" /* GamePlayComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_52__routes_routing__["a" /* routing */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_31__shared_user_current_user_service__["a" /* CurrentUserService */],
            __WEBPACK_IMPORTED_MODULE_32__shared_authentication_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_33__shared_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_36__shared_card_cards_service__["a" /* CardsService */],
            __WEBPACK_IMPORTED_MODULE_35__shared_card_races_service__["a" /* RacesService */],
            __WEBPACK_IMPORTED_MODULE_37__shared_card_commander_service__["a" /* CommanderService */],
            __WEBPACK_IMPORTED_MODULE_38__shared_card_troop_service__["a" /* TroopService */],
            __WEBPACK_IMPORTED_MODULE_39__shared_deck_decks_service__["a" /* DecksService */],
            __WEBPACK_IMPORTED_MODULE_34__shared_card_types_service__["a" /* TypesService */],
            __WEBPACK_IMPORTED_MODULE_40__shared_game_game_service__["a" /* GameService */],
            __WEBPACK_IMPORTED_MODULE_41__shared_game_board_service__["a" /* BoardService */],
            __WEBPACK_IMPORTED_MODULE_44__shared_game_socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_42__shared_game_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_43__shared_game_action_service__["a" /* ActionService */],
            __WEBPACK_IMPORTED_MODULE_45__shared_alert_alert_service__["a" /* AlertService */],
            //fakeBackendProvider,
            __WEBPACK_IMPORTED_MODULE_53__angular_http_testing__["a" /* MockBackend */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* BaseRequestOptions */],
            __WEBPACK_IMPORTED_MODULE_46__shared_authentication_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_46__shared_authentication_guard__["b" /* AdminGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/alert/alert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#fixed-div {\r\n    position: fixed;\r\n    bottom: 1em;\r\n    right: 1em;\r\n    z-index: 100;\r\n    width: 250px\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grey darken-3 white-text white-board z-depth-1 center\" id=\"fixed-div\" *ngIf=\"alert.alertActive\" >\n  <div class=\"row no-margin-bottom\">\n    <p>{{alert.alertMsg}}</p>\n  </div>\n  <div class=\"\">\n    <button type=\"button\" class=\"btn green waves-effect waves-light\" (click)=\"goToAlert()\"> Go</button>\n    <button type=\"button\" class=\"btn red waves-effect waves-light\" (click)=\"dismissAlert()\"> Dismiss</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_alert_alert_service__ = __webpack_require__("../../../../../src/app/shared/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = (function () {
    function AlertComponent(alert, router) {
        this.alert = alert;
        this.router = router;
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent.prototype.goToAlert = function () {
        this.alert.clearAlert();
        this.router.navigate(["game"]);
    };
    AlertComponent.prototype.dismissAlert = function () {
        this.alert.clearAlert();
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'alert',
        template: __webpack_require__("../../../../../src/app/components/alert/alert.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/alert/alert.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_alert_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_alert_alert_service__["a" /* AlertService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AlertComponent);

var _a, _b;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/card-overview/card-detail/card-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "select {\r\n    display: block;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card-overview/card-detail/card-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n  <p *ngIf=\"op.send\"  [ngClass]=\"{'green-text': op.success, 'red-text': !op.success}\">{{op.msg}}</p>\r\n  <div class=\"\" [ngSwitch]=\"isCommander\">\r\n    <commander-detail *ngSwitchCase=\"true\" [edit]=\"cards.edit\"></commander-detail>\r\n    <troop-detail  *ngSwitchCase=\"false\" [edit]=\"cards.edit\"></troop-detail>\r\n    <a *ngIf=\"!cards.edit && currentUser.isAdmin()\" (click)=\"cards.edit=true\" class=\"btn-floating btn-small waves-effect waves-light right orange\"><i class=\"material-icons\">edit</i></a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/card-overview/card-detail/card-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_card_cards_service__ = __webpack_require__("../../../../../src/app/shared/card/cards.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__ = __webpack_require__("../../../../../src/app/shared/card/races.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user_current_user_service__ = __webpack_require__("../../../../../src/app/shared/user/current-user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardDetailComponent = (function () {
    function CardDetailComponent(cards, racesService, currentUser) {
        this.cards = cards;
        this.racesService = racesService;
        this.currentUser = currentUser;
        this.op = { msg: "", send: false, success: false };
    }
    CardDetailComponent.prototype.ngOnInit = function () {
    };
    return CardDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], CardDetailComponent.prototype, "isCommander", void 0);
CardDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'card-detail',
        template: __webpack_require__("../../../../../src/app/components/card-overview/card-detail/card-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/card-overview/card-detail/card-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_card_cards_service__["a" /* CardsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_card_cards_service__["a" /* CardsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__["a" /* RacesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__["a" /* RacesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_user_current_user_service__["a" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_user_current_user_service__["a" /* CurrentUserService */]) === "function" && _c || Object])
], CardDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=card-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/card-overview/card-detail/commander-detail/commander-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "select {\r\n    display: block;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card-overview/card-detail/commander-detail/commander-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"submitFormCommander(form)\" class=\"col s12\">\r\n  <div class=\"row\">\r\n    <div class=\"form-group col s6\">\r\n      <label for=\"cardname\">Commander Name</label>\r\n      <input  id=\"cardname\" type=\"text\" class=\"validate form-control\" name=\"cardname\" [disabled]=\"!cards.edit\" [(ngModel)]=\"commanderService.commander.cardname\" required>\r\n    </div>\r\n    <div class=\"form-group col s6\">\r\n      <label for=\"race\">Race</label>\r\n      <select id=\"race\" name=\"race\" [(ngModel)]=\"commanderService.commander.race\" [disabled]=\"!cards.edit\">\r\n        <option *ngFor=\"let race of racesService.races\" [ngValue]=\"race._id\">{{race.name}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"form-group col s4\">\r\n      <label>Life: {{commanderService.commander.life}}</label>\r\n      <p class=\"range-field\">\r\n        <input type=\"range\" id=\"life\" min=\"1\" max=\"20\" name=\"life\" [disabled]=\"!cards.edit\" [(ngModel)]=\"commanderService.commander.life\" />\r\n      </p>\r\n    </div>\r\n    <div class=\"form-group col s4\">\r\n      <label>Movement: {{commanderService.commander.movement}}</label>\r\n      <p class=\"range-field\">\r\n        <input type=\"range\" id=\"movement\" min=\"1\" max=\"5\" name=\"movement\" [disabled]=\"!cards.edit\" [(ngModel)]=\"commanderService.commander.movement\" />\r\n      </p>\r\n    </div>\r\n    <div class=\"form-group col s4\">\r\n      <label>Resources: {{commanderService.commander.resources}}</label>\r\n      <p class=\"range-field\">\r\n        <input type=\"range\" id=\"resources\" min=\"1\" max=\"5\" name=\"resources\" [disabled]=\"!cards.edit\" [(ngModel)]=\"commanderService.commander.resources\" />\r\n      </p>\r\n    </div>\r\n  </div>\r\n   <div class=\"row\">\r\n     <div class=\"form-group col s12\">\r\n       <label for=\"habilities\">Habilities</label>\r\n       <textarea id=\"habilities\" class=\"materialize-textarea\" name=\"habilities\" [disabled]=\"!cards.edit\" [(ngModel)]=\"commanderService.commander.habilities\"></textarea>\r\n     </div>\r\n   </div>\r\n   <div class=\"row\" *ngIf=\"commanderService.commander._id\">\r\n     <div class=\"form-group col s6\" *ngIf=\"commanderService.commander.modified_by\">\r\n       <label>Modified {{commanderService.commander.modified}} by {{commanderService.commander.modified_by}}</label>\r\n     </div>\r\n     <div class=\"form-group col s6\">\r\n       <label>Created {{commanderService.commander.created}} by {{commanderService.commander.created_by}}</label>\r\n     </div>\r\n   </div>\r\n   <div class=\"form-group col right\"  *ngIf=\"cards.edit\">\r\n     <button\r\n       class=\"btn btn-default left red\" (click)=\"cancelEdition()\">Cancel</button>\r\n    <button\r\n      [ngClass]=\"{disabled: !form.valid}\" [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-default right s4\" [class.blue]=\"commanderService.commander._id\" [class.green]=\"!commanderService.commander._id\">{{commanderService.commander._id?\"save\":\"new\"}}</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/card-overview/card-detail/commander-detail/commander-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_card_cards_service__ = __webpack_require__("../../../../../src/app/shared/card/cards.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__ = __webpack_require__("../../../../../src/app/shared/card/races.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_card_commander_service__ = __webpack_require__("../../../../../src/app/shared/card/commander.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommanderDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommanderDetailComponent = (function () {
    function CommanderDetailComponent(cards, commanderService, racesService) {
        this.cards = cards;
        this.commanderService = commanderService;
        this.racesService = racesService;
    }
    CommanderDetailComponent.prototype.ngOnInit = function () {
        this.racesService.getRacesList();
    };
    CommanderDetailComponent.prototype.submitFormCommander = function (form) {
        var _this = this;
        this.cards.createCommander(this.commanderService.commander).subscribe(function (data) {
            _this.cards.edit = false;
            _this.commanderService.getCommanderList();
        }, function (error) {
            console.log(error);
        });
    };
    CommanderDetailComponent.prototype.cancelEdition = function () {
        this.cards.edit = false;
        this.commanderService.clearCommander();
    };
    return CommanderDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], CommanderDetailComponent.prototype, "edit", void 0);
CommanderDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'commander-detail',
        template: __webpack_require__("../../../../../src/app/components/card-overview/card-detail/commander-detail/commander-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/card-overview/card-detail/commander-detail/commander-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_card_cards_service__["a" /* CardsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_card_cards_service__["a" /* CardsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_card_commander_service__["a" /* CommanderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_card_commander_service__["a" /* CommanderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__["a" /* RacesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__["a" /* RacesService */]) === "function" && _c || Object])
], CommanderDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=commander-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/card-overview/card-detail/troop-detail/troop-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "select {\r\n    display: block;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card-overview/card-detail/troop-detail/troop-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"submitFormTroop(form)\" class=\"col s12\" >\r\n  <div class=\"row\">\r\n    <div class=\"form-group col s6\">\r\n      <label for=\"cardname\">Troop Name</label>\r\n      <input id=\"cardname\" type=\"text\" class=\"validate form-control\" name=\"cardname\" [disabled]=\"!cards.edit\" [(ngModel)]=\"troopService.troop.cardname\" required>\r\n    </div>\r\n    <div class=\"form-group col s6\">\r\n      <label for=\"race\">Race</label>\r\n      <select id=\"race\" name=\"race\" [(ngModel)]=\"troopService.troop.race\" [disabled]=\"!cards.edit\">\r\n        <option *ngFor=\"let race of racesService.races\" [ngValue]=\"race._id\">{{race.name}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"form-group col s6\">\r\n      <label for=\"race\">Type</label>\r\n      <select id=\"type\" name=\"type\" [(ngModel)]=\"troopService.troop.type\" [disabled]=\"!cards.edit\">\r\n        <option *ngFor=\"let type of typesService.types\" [ngValue]=\"type._id\">{{type.name}}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group col s6\" *ngIf=\"typesService.getType(troopService.troop.type)=='Action'\">\r\n      <label>Cost: {{troopService.troop.cost}}</label>\r\n      <p class=\"range-field\">\r\n        <input type=\"range\" id=\"cost\" min=\"0\" max=\"15\" name=\"cost\" [disabled]=\"!cards.edit\" [(ngModel)]=\"troopService.troop.cost\" />\r\n      </p>\r\n    </div>\r\n    <div class=\"form-group col s6\" *ngIf=\"typesService.getType(troopService.troop.type)!='Action'\">\r\n      <label>Attack: {{troopService.troop.attack}}</label>\r\n      <p class=\"range-field\">\r\n        <input type=\"range\" id=\"attack\" min=\"0\" max=\"8\" name=\"attack\" [disabled]=\"!cards.edit\" [(ngModel)]=\"troopService.troop.attack\" />\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"typesService.getType(troopService.troop.type)!=='Action'\">\r\n    <div class=\"form-group col s4\">\r\n      <label>Life: {{troopService.troop.life}}</label>\r\n      <p class=\"range-field\">\r\n        <input  type=\"range\" id=\"life\" min=\"0\" max=\"10\" name=\"life\" [disabled]=\"!cards.edit\" [(ngModel)]=\"troopService.troop.life\" />\r\n      </p>\r\n    </div>\r\n    <div class=\"form-group col s4\">\r\n      <label>Movement: {{troopService.troop.movement}}</label>\r\n      <p class=\"range-field\">\r\n        <input type=\"range\" id=\"movement\" min=\"0\" max=\"5\" name=\"movement\" [disabled]=\"!cards.edit\" [(ngModel)]=\"troopService.troop.movement\" />\r\n      </p>\r\n    </div>\r\n    <div class=\"form-group col s4\">\r\n      <label>Cost: {{troopService.troop.cost}}</label>\r\n      <p class=\"range-field\">\r\n        <input type=\"range\" id=\"cost\" min=\"0\" max=\"15\" name=\"cost\" [disabled]=\"!cards.edit\" [(ngModel)]=\"troopService.troop.cost\" />\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"form-group col s12\">\r\n      <label for=\"habilities\">Habilities</label>\r\n      <textarea id=\"habilities\" class=\"materialize-textarea\" name=\"habilities\" [disabled]=\"!cards.edit\" [(ngModel)]=\"troopService.troop.habilities\"></textarea>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"troopService.troop._id\">\r\n    <div class=\"form-group col s6\" *ngIf=\"troopService.troop.modified_by\">\r\n      <label>Modified {{troopService.troop.modified}} by {{troopService.troop.modified_by}}</label>\r\n    </div>\r\n    <div class=\"form-group col s6\">\r\n      <label>Created {{troopService.troop.created}} by {{troopService.troop.created_by}}</label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group col right\"  *ngIf=\"cards.edit\">\r\n    <button\r\n      class=\"btn btn-default left red\" (click)=\"cancelEdition()\">Cancel</button>\r\n    <button\r\n      [ngClass]=\"{disabled: !form.valid}\" [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-default right s4\" [class.blue]=\"troopService.troop._id\" [class.green]=\"!troopService.troop._id\">{{troopService.troop._id?\"save\":\"new\"}}</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/card-overview/card-detail/troop-detail/troop-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_card_cards_service__ = __webpack_require__("../../../../../src/app/shared/card/cards.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__ = __webpack_require__("../../../../../src/app/shared/card/races.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_card_types_service__ = __webpack_require__("../../../../../src/app/shared/card/types.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_card_troop_service__ = __webpack_require__("../../../../../src/app/shared/card/troop.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TroopDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TroopDetailComponent = (function () {
    function TroopDetailComponent(cards, troopService, racesService, typesService) {
        this.cards = cards;
        this.troopService = troopService;
        this.racesService = racesService;
        this.typesService = typesService;
    }
    TroopDetailComponent.prototype.ngOnInit = function () {
        this.racesService.getRacesList();
        this.typesService.getTypesList();
    };
    TroopDetailComponent.prototype.submitFormTroop = function (form) {
        var _this = this;
        this.cards.createTroop(this.troopService.troop).subscribe(function (data) {
            _this.cards.edit = false;
            _this.troopService.getTroopList();
        }, function (error) {
            console.log(error);
        });
    };
    TroopDetailComponent.prototype.cancelEdition = function () {
        this.cards.edit = false;
        this.troopService.clearTroop();
    };
    return TroopDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], TroopDetailComponent.prototype, "edit", void 0);
TroopDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'troop-detail',
        template: __webpack_require__("../../../../../src/app/components/card-overview/card-detail/troop-detail/troop-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/card-overview/card-detail/troop-detail/troop-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_card_cards_service__["a" /* CardsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_card_cards_service__["a" /* CardsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_card_troop_service__["a" /* TroopService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_card_troop_service__["a" /* TroopService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__["a" /* RacesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__["a" /* RacesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_card_types_service__["a" /* TypesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_card_types_service__["a" /* TypesService */]) === "function" && _d || Object])
], TroopDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=troop-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/card-overview/card-list/card-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card-overview/card-list/card-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n  <div class=\"\" [ngSwitch]=\"isCommander\">\r\n    <div *ngSwitchCase=\"true\">\r\n      <search-commander [deckEdition]=\"deckEdition\"></search-commander>\r\n      <commander-list [deckEdition]=\"deckEdition\"></commander-list>\r\n    </div>\r\n    <div *ngSwitchCase=\"false\">\r\n      <search-troop [deckEdition]=\"deckEdition\"></search-troop>\r\n      <troop-list [deckEdition]=\"deckEdition\"></troop-list>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/card-overview/card-list/card-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardListComponent = (function () {
    function CardListComponent() {
        this.deckEdition = false;
    }
    CardListComponent.prototype.ngOnInit = function () {
    };
    return CardListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], CardListComponent.prototype, "isCommander", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], CardListComponent.prototype, "deckEdition", void 0);
CardListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'card-list',
        template: __webpack_require__("../../../../../src/app/components/card-overview/card-list/card-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/card-overview/card-list/card-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CardListComponent);

//# sourceMappingURL=card-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/card-overview/card-list/commander-list/commander-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li{\r\n  cursor: pointer;\r\n}\r\n.active{\r\n  color:white !important;\r\n  background-color: #2196F3 !important\r\n}\r\n\r\nul{\r\n  max-height: 400px;\r\n  overflow: auto;\r\n}\r\n\r\nbutton{\r\n  padding-right: 3px;\r\n  padding-left: 3px;\r\n  top: -7px;\r\n  position: relative;\r\n  margin-right: 1px;\r\n}\r\n.btn-floating {\r\n  top: 60px;\r\n  left: -15px;\r\n}\r\nbutton:focus{\r\n  background-color: transparent;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card-overview/card-list/commander-list/commander-list.component.html":
/***/ (function(module, exports) {

module.exports = "<a *ngIf=\"!deckEdition && currentUser.isAdmin()\" (click)=\"newCard()\" class=\"btn-floating btn-small waves-effect waves-light green\"><i class=\"material-icons\">add</i></a>\r\n<div class=\"row sort-filter\">\r\n  <i class=\"material-icons grey-text\">sort</i>\r\n  <button class=\"right waves-effect waves-light btn-flat btn-sm \" type=\"button\" name=\"resources\" (click)=\"changeSort('resources')\">resources</button>\r\n  <button class=\"right waves-effect waves-light btn-flat btn-sm \" type=\"button\" name=\"life\" (click)=\"changeSort('life')\">life</button>\r\n  <button class=\"right waves-effect waves-light btn-flat btn-sm \" type=\"button\" name=\"race\" (click)=\"changeSort('race')\">race</button>\r\n  <button class=\"right waves-effect waves-light btn-flat btn-sm \" type=\"button\" name=\"name\" (click)=\"changeSort('cardname')\">name</button>\r\n</div>\r\n<ul class=\"collection\">\r\n  <li *ngFor=\"let commander of commanderService.commanderList | commanderFilter:commanderService.commanderFilter  | sort : fieldSorted \" (click)=\"commanderClicked(commander)\"  class=\"collection-item\" [class.active]=\"commander._id===commanderService.commander._id\" [ngClass]=\"getBgColor(commander.race)\">\r\n    <div>{{commander.cardname| truncate}}\r\n      <a *ngIf=\"!deckEdition && currentUser.isAdmin()\" (click)=\"delete(commander._id)\" class=\"secondary-content\">\r\n        <i class=\"material-icons red-text\">delete</i>\r\n      </a>\r\n      <button class=\"secondary-content amber btn btn-small right\">\r\n        {{commander.resources}}\r\n      </button>\r\n      <button class=\"secondary-content green btn btn-small right\">\r\n        {{commander.life}}\r\n      </button>\r\n    </div>\r\n  </li>\r\n  <li *ngIf=\"commanderService.commanderList.length==0\" class=\"collection-item blue-text\">\r\n    <div>No element found</div>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/card-overview/card-list/commander-list/commander-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_card_cards_service__ = __webpack_require__("../../../../../src/app/shared/card/cards.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__ = __webpack_require__("../../../../../src/app/shared/card/races.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_card_commander_service__ = __webpack_require__("../../../../../src/app/shared/card/commander.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_deck_decks_service__ = __webpack_require__("../../../../../src/app/shared/deck/decks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_user_current_user_service__ = __webpack_require__("../../../../../src/app/shared/user/current-user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommanderListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommanderListComponent = (function () {
    function CommanderListComponent(cards, races, commanderService, decks, currentUser) {
        this.cards = cards;
        this.races = races;
        this.commanderService = commanderService;
        this.decks = decks;
        this.currentUser = currentUser;
        this.fieldSorted = "cardname";
    }
    CommanderListComponent.prototype.ngOnInit = function () {
        this.commanderService.getCommanderList();
    };
    CommanderListComponent.prototype.commanderClicked = function (commander) {
        if (this.deckEdition) {
            this.decks.setCommander(commander);
        }
        else {
            this.commanderService.setCommander(commander);
        }
    };
    CommanderListComponent.prototype.delete = function (id) {
        var _this = this;
        this.cards.deleteCommander(id).subscribe(function (commander) {
            _this.commanderService.getCommanderList();
            _this.commanderService.clearCommander();
        });
    };
    CommanderListComponent.prototype.getBgColor = function (race) {
        return this.races.getRaceColor(race);
    };
    CommanderListComponent.prototype.changeSort = function (field) {
        this.fieldSorted = field;
    };
    CommanderListComponent.prototype.newCard = function () {
        this.cards.edit = true;
        this.commanderService.commander = { cardname: "", race: "", habilities: "", resources: 0, life: 1, movement: 1 };
    };
    return CommanderListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], CommanderListComponent.prototype, "deckEdition", void 0);
CommanderListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'commander-list',
        template: __webpack_require__("../../../../../src/app/components/card-overview/card-list/commander-list/commander-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/card-overview/card-list/commander-list/commander-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_card_cards_service__["a" /* CardsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_card_cards_service__["a" /* CardsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__["a" /* RacesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__["a" /* RacesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_card_commander_service__["a" /* CommanderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_card_commander_service__["a" /* CommanderService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_deck_decks_service__["a" /* DecksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_deck_decks_service__["a" /* DecksService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_user_current_user_service__["a" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_user_current_user_service__["a" /* CurrentUserService */]) === "function" && _e || Object])
], CommanderListComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=commander-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/card-overview/card-list/troop-list/troop-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li{\r\n  cursor: pointer;\r\n}\r\n.active{\r\n  color:white !important;\r\n  background-color: #2196F3 !important\r\n}\r\n\r\nul{\r\n  max-height: 400px;\r\n  overflow: auto;\r\n}\r\nbutton{\r\n  padding-right: 3px;\r\n  padding-left: 3px;\r\n  top: -7px;\r\n  position: relative;\r\n  margin-right: 1px;\r\n}\r\n.btn-floating {\r\n  top: 60px;\r\n  left: -15px;\r\n}\r\nbutton:focus{\r\n  background-color: transparent;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card-overview/card-list/troop-list/troop-list.component.html":
/***/ (function(module, exports) {

module.exports = "<a *ngIf=\"!deckEdition && currentUser.isAdmin()\" (click)=\"newCard()\" class=\"btn-floating btn-small waves-effect waves-light green\"><i class=\"material-icons\">add</i></a>\r\n<div class=\"row sort-filter\">\r\n  <button class=\"right waves-effect waves-light btn-flat btn-sm \" type=\"button\" name=\"cost\" (click)=\"changeSort('cost')\">cost</button>\r\n  <button class=\"right waves-effect waves-light btn-flat btn-sm \" type=\"button\" name=\"life\" (click)=\"changeSort('life')\">life</button>\r\n  <button class=\"right waves-effect waves-light btn-flat btn-sm \" type=\"button\" name=\"attack\" (click)=\"changeSort('attack')\">attack</button>\r\n  <button class=\"right waves-effect waves-light btn-flat btn-sm \" type=\"button\" name=\"type\" (click)=\"changeSort('type')\">type</button>\r\n  <button class=\"right waves-effect waves-light btn-flat btn-sm \" type=\"button\" name=\"race\" (click)=\"changeSort('race')\">race</button>\r\n  <button class=\"right waves-effect waves-light btn-flat btn-sm \" type=\"button\" name=\"name\" (click)=\"changeSort('cardname')\">name</button>\r\n</div>\r\n<ul class=\"collection\">\r\n  <li *ngFor=\"let troop of troopService.troopList | troopFilter:troopService.troopFilter | sort : fieldSorted \" (click)=\"troopClicked(troop)\"  class=\"collection-item\" [class.active]=\"troop._id===troopService.troop._id\" [ngClass]=\"getBgColor(troop.race)\">\r\n    <div>{{troop.cardname | truncate}}\r\n      <a *ngIf=\"!deckEdition && currentUser.isAdmin()\" (click)=\"delete(troop._id)\" class=\"secondary-content\">\r\n        <i class=\"material-icons red-text\">delete</i>\r\n      </a>\r\n      <button class=\"secondary-content amber btn btn-small right\" >\r\n        {{troop.cost}}\r\n      </button>\r\n      <button class=\"secondary-content green btn btn-small right\" *ngIf=\"types.getType(troop.type)!='Action'\">\r\n        {{troop.life}}\r\n      </button>\r\n      <button class=\"secondary-content  deep-orange darken-1 btn btn-small right\" *ngIf=\"types.getType(troop.type)!='Action'\">\r\n        {{troop.attack}}\r\n      </button>\r\n    </div>\r\n  </li>\r\n\r\n  <li *ngIf=\"troopService.troopList.length==0\" class=\"collection-item blue-text\">\r\n    <div>No element found</div>\r\n  </li>\r\n\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/card-overview/card-list/troop-list/troop-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_card_cards_service__ = __webpack_require__("../../../../../src/app/shared/card/cards.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__ = __webpack_require__("../../../../../src/app/shared/card/races.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_card_types_service__ = __webpack_require__("../../../../../src/app/shared/card/types.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_card_troop_service__ = __webpack_require__("../../../../../src/app/shared/card/troop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_deck_decks_service__ = __webpack_require__("../../../../../src/app/shared/deck/decks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_user_current_user_service__ = __webpack_require__("../../../../../src/app/shared/user/current-user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TroopListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TroopListComponent = (function () {
    function TroopListComponent(cards, races, types, troopService, decks, currentUser) {
        this.cards = cards;
        this.races = races;
        this.types = types;
        this.troopService = troopService;
        this.decks = decks;
        this.currentUser = currentUser;
        this.fieldSorted = "cardname";
    }
    TroopListComponent.prototype.ngOnInit = function () {
        this.troopService.getTroopList();
    };
    TroopListComponent.prototype.troopClicked = function (troop) {
        if (this.deckEdition) {
            this.decks.addTroop(troop);
        }
        else {
            this.troopService.setTroop(troop);
            this.currentTroopActive = troop._id;
        }
    };
    TroopListComponent.prototype.delete = function (id) {
        var _this = this;
        this.cards.deleteTroop(id).subscribe(function (troop) {
            _this.troopService.getTroopList();
            _this.troopService.clearTroop();
        });
    };
    TroopListComponent.prototype.getBgColor = function (race) {
        return this.races.getRaceColor(race);
    };
    TroopListComponent.prototype.changeSort = function (field) {
        this.fieldSorted = field;
    };
    TroopListComponent.prototype.newCard = function () {
        this.cards.edit = true;
        this.troopService.troop = { cardname: "", race: "", habilities: "", cost: 0, attack: 0, life: 0, movement: 0 };
    };
    return TroopListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], TroopListComponent.prototype, "deckEdition", void 0);
TroopListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'troop-list',
        template: __webpack_require__("../../../../../src/app/components/card-overview/card-list/troop-list/troop-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/card-overview/card-list/troop-list/troop-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_card_cards_service__["a" /* CardsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_card_cards_service__["a" /* CardsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__["a" /* RacesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__["a" /* RacesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_card_types_service__["a" /* TypesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_card_types_service__["a" /* TypesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_card_troop_service__["a" /* TroopService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_card_troop_service__["a" /* TroopService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_deck_decks_service__["a" /* DecksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_deck_decks_service__["a" /* DecksService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_user_current_user_service__["a" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_user_current_user_service__["a" /* CurrentUserService */]) === "function" && _f || Object])
], TroopListComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=troop-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/card-overview/card-overview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card-overview/card-overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class = \"col s12 m6\">\r\n    <div class=\"white-board z-depth-1\">\r\n      <div class=\"row\"></div>\r\n      <div class=\"row\">\r\n        <a class=\"waves-effect waves-light btn blue col s6\" [class.darken-3]=\"showCommanders\" (click)=\"showCommanders=true\">Commanders</a>\r\n        <a class=\"waves-effect waves-light btn blue col s6\" [class.darken-3]=\"!showCommanders\" (click)=\"showCommanders=false\">Troops</a>\r\n      </div>\r\n      <div class=\"row\">\r\n        <card-list [deckEdition]=\"false\" [isCommander]=\"showCommanders\"></card-list>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class = \"col s12 m6\">\r\n    <div class=\"white-board z-depth-1\">\r\n      <div class=\"row\"></div>\r\n      <card-detail  [isCommander]=\"showCommanders\"></card-detail>\r\n      <div class=\"row\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/card-overview/card-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_card_commander_service__ = __webpack_require__("../../../../../src/app/shared/card/commander.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_card_troop_service__ = __webpack_require__("../../../../../src/app/shared/card/troop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_card_races_service__ = __webpack_require__("../../../../../src/app/shared/card/races.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_card_types_service__ = __webpack_require__("../../../../../src/app/shared/card/types.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardOverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardOverviewComponent = (function () {
    function CardOverviewComponent(commanderService, troopService, racesService, typesService) {
        this.commanderService = commanderService;
        this.troopService = troopService;
        this.racesService = racesService;
        this.typesService = typesService;
        this.showCommanders = false;
    }
    CardOverviewComponent.prototype.ngOnInit = function () {
        this.racesService.getRacesList();
        this.typesService.getTypesList();
    };
    return CardOverviewComponent;
}());
CardOverviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'card-overview',
        template: __webpack_require__("../../../../../src/app/components/card-overview/card-overview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/card-overview/card-overview.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_card_commander_service__["a" /* CommanderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_card_commander_service__["a" /* CommanderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_card_troop_service__["a" /* TroopService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_card_troop_service__["a" /* TroopService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_card_races_service__["a" /* RacesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_card_races_service__["a" /* RacesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_card_types_service__["a" /* TypesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_card_types_service__["a" /* TypesService */]) === "function" && _d || Object])
], CardOverviewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=card-overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/deck-overview/deck-detail/deck-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "select {\r\n    display: block;\r\n}\r\n\r\nli{\r\n  cursor: pointer;\r\n}\r\nul{\r\n  max-height: 400px;\r\n  overflow: auto;\r\n}\r\n\r\nli button{\r\n  padding-right: 3px;\r\n  padding-left: 3px;\r\n  top: -7px;\r\n  position: relative;\r\n  margin-right: 1px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/deck-overview/deck-detail/deck-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" class=\"col s12\">\r\n  <div class=\"row\"></div>\r\n  <p class=\"red-text\" *ngIf=\"msg !==''\" >{{msg}}</p>\r\n  <div class=\"row\">\r\n    <div class=\"form-group col s6\">\r\n      <label for=\"name\">Deck Name</label>\r\n      <input  id=\"name\" type=\"text\" class=\"validate form-control\" name=\"name\" [disabled]=\"!decks.edit\" [(ngModel)]=\"decks.deck.name\" required>\r\n    </div>\r\n    <div class=\"form-group col s6\">\r\n      <label for=\"race\">Race</label>\r\n      <select id=\"race\" name=\"race\" [(ngModel)]=\"decks.deck.race\" disabled>\r\n        <option *ngFor=\"let race of racesService.races\" [ngValue]=\"race._id\">{{race.name}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n     <div class=\"form-group col s12\">\r\n       <label for=\"description\">Description</label>\r\n       <input type=\"text\"  id=\"description\" class=\"materialize-textarea\" name=\"description\" [disabled]=\"!decks.edit\" [(ngModel)]=\"decks.deck.description\">\r\n     </div>\r\n   </div>\r\n   <div class=\"row\">\r\n     <label>Commander</label>\r\n     <ul class=\"collection\">\r\n       <li  *ngIf=\"decks.deck.commander._id\" (click)=\"decks.clearCommander()\" class=\"collection-item\" [ngClass]=\"getBgColor(decks.deck.commander.race)\">\r\n         <div>{{decks.deck.commander.cardname| truncate}}\r\n           <button class=\"secondary-content amber btn btn-small right\" (click)=\"nothing()\">\r\n             {{decks.deck.commander.resources}}\r\n           </button>\r\n           <button class=\"secondary-content green btn btn-small right\" (click)=\"nothing()\">\r\n             {{decks.deck.commander.life}}\r\n           </button>\r\n         </div>\r\n       </li>\r\n       <li *ngIf=\"!decks.deck.commander._id\" class=\"collection-item blue-text\">\r\n         <div>No element found</div>\r\n       </li>\r\n     </ul>\r\n   </div>\r\n   <div class=\"row\">\r\n     <label>Troops</label>\r\n     <ul class=\"collection\">\r\n       <li *ngFor=\"let troop of decks.deck.troops\" (click)=\"decks.removeTroop(troop)\"  class=\"collection-item\" [ngClass]=\"getBgColor(troop.race)\">\r\n         <div>{{troop.cardname | truncate}}\r\n           <button class=\"secondary-content grey darken-3 btn btn-small left\" (click)=\"nothing()\">\r\n             {{'x'+troop.number}}\r\n           </button>\r\n           <button class=\"secondary-content amber btn btn-small right\" (click)=\"nothing()\" >\r\n             {{troop.cost}}\r\n           </button>\r\n           <button class=\"secondary-content green btn btn-small right\" *ngIf=\"types.getType(troop.type)!='Action'\" (click)=\"nothing()\">\r\n             {{troop.life}}\r\n           </button>\r\n           <button class=\"secondary-content  deep-orange darken-1 btn btn-small right\" *ngIf=\"types.getType(troop.type)!='Action'\" (click)=\"nothing()\">\r\n             {{troop.attack}}\r\n           </button>\r\n         </div>\r\n       </li>\r\n       <li *ngIf=\"decks.deck.troops.length==0\" class=\"collection-item blue-text\">\r\n         <div>No element found</div>\r\n       </li>\r\n     </ul>\r\n   </div>\r\n   <div class=\"row\" *ngIf=\"decks.deck._id\">\r\n     <div class=\"form-group col s6\" *ngIf=\"decks.deck.modified_by\">\r\n       <label>Modified {{decks.deck.modified}} by {{decks.deck.modified_by}}</label>\r\n     </div>\r\n     <div class=\"form-group col s6\">\r\n       <label>Created {{decks.deck.created}} by {{decks.deck.created_by}}</label>\r\n     </div>\r\n   </div>\r\n  <div class=\"form-group row  right\" *ngIf=\"decks.edit\">\r\n    <button\r\n      class=\"btn btn-default left red\" (click)=\"cancelDeckEdition()\">Cancel</button>\r\n    <button\r\n      [ngClass]=\"{disabled: !form.valid}\" [disabled]=\"!form.valid\" (click)=\"submitFormDeck()\" class=\"btn btn-default right\" [class.blue]=\"decks.deck._id\" [class.green]=\"!decks.deck._id\">{{decks.deck._id?\"save\":\"new\"}}</button>\r\n  </div>\r\n  <a *ngIf=\"!decks.edit && (currentUser.getUser().username == decks.deck.created_by || currentUser.isAdmin())\" (click)=\"editDeck()\" class=\"btn-floating btn-small waves-effect waves-light right orange\"><i class=\"material-icons\">edit</i></a>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/deck-overview/deck-detail/deck-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_deck_decks_service__ = __webpack_require__("../../../../../src/app/shared/deck/decks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__ = __webpack_require__("../../../../../src/app/shared/card/races.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_card_types_service__ = __webpack_require__("../../../../../src/app/shared/card/types.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_user_current_user_service__ = __webpack_require__("../../../../../src/app/shared/user/current-user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeckDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeckDetailComponent = (function () {
    function DeckDetailComponent(decks, racesService, types, currentUser) {
        this.decks = decks;
        this.racesService = racesService;
        this.types = types;
        this.currentUser = currentUser;
        this.msg = "";
    }
    DeckDetailComponent.prototype.ngOnInit = function () {
        this.racesService.getRacesList();
        this.decks.getAllDecks();
    };
    DeckDetailComponent.prototype.editDeck = function () {
        this.decks.editDeck();
    };
    DeckDetailComponent.prototype.cancelDeckEdition = function () {
        this.decks.edit = false;
        this.msg = "";
        this.decks.clearDeck();
    };
    DeckDetailComponent.prototype.getBgColor = function (race) {
        return this.racesService.getRaceColor(race);
    };
    DeckDetailComponent.prototype.nothing = function () {
    };
    DeckDetailComponent.prototype.submitFormDeck = function () {
        this.msg = "You must choose a commander for your deck";
        if (this.decks.deck.commander._id) {
            this.msg = "";
            this.decks.insertDeck();
            this.decks.edit = false;
        }
    };
    return DeckDetailComponent;
}());
DeckDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'deck-detail',
        template: __webpack_require__("../../../../../src/app/components/deck-overview/deck-detail/deck-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/deck-overview/deck-detail/deck-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_deck_decks_service__["a" /* DecksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_deck_decks_service__["a" /* DecksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__["a" /* RacesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__["a" /* RacesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_card_types_service__["a" /* TypesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_card_types_service__["a" /* TypesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_user_current_user_service__["a" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_user_current_user_service__["a" /* CurrentUserService */]) === "function" && _d || Object])
], DeckDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=deck-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/deck-overview/deck-list/deck-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li{\r\n  cursor: pointer;\r\n}\r\nul{\r\n  max-height: 400px;\r\n  overflow: auto;\r\n}\r\n\r\nli button{\r\n  padding-right: 3px;\r\n  padding-left: 3px;\r\n  top: -7px;\r\n  position: relative;\r\n  margin-right: 1px;\r\n}\r\n.btn-floating {\r\n  top: 60px;\r\n  left: -15px;\r\n}\r\n  .active{\r\n    color:white !important;\r\n    background-color: #2196F3 !important\r\n  }\r\n  button:focus{\r\n    background-color: transparent;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/deck-overview/deck-list/deck-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <a class=\"waves-effect waves-light btn blue col s6\" [class.darken-3]=\"showAll\" (click)=\"showAllDecks()\">All Decks</a>\r\n  <a class=\"waves-effect waves-light btn blue col s6\" [class.darken-3]=\"!showAll\" (click)=\"showOwnDecks()\" >Own Decks</a>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"\">\r\n    <search-deck></search-deck>\r\n    <a (click)=\"newDeck()\" class=\"btn-floating waves-effect waves-light green\"><i class=\"material-icons\">add</i></a>\r\n    <div class=\"row sort-filter\">\r\n      <i class=\"material-icons grey-text\">sort</i>\r\n      <button class=\"right waves-effect waves-light btn-flat btn-sm\" type=\"button\" name=\"race\" (click)=\"changeSort('race')\">race</button>\r\n      <button class=\"right waves-effect waves-light btn-flat btn-sm\" type=\"button\" name=\"name\" (click)=\"changeSort('name')\">name</button>\r\n    </div>\r\n    <ul class=\"collection\">\r\n      <li *ngFor=\"let deck of decksService.deckList | deckFilter : decksService.deckFilter | sort : fieldSorted\" (click)=\"deckClicked(deck)\"  class=\"collection-item\" [class.active]=\"deck._id===decksService.deck._id\" [ngClass]=\"getBgColor(deck.race)\">\r\n        <div>{{deck.name}}\r\n          <a (click)=\"delete(deck._id)\" *ngIf=\"(user.getUser().username == deck.created_by || user.isAdmin())\" class=\"secondary-content\">\r\n            <i class=\"material-icons red-text\">delete</i>\r\n          </a>\r\n        </div>\r\n      </li>\r\n      <li *ngIf=\"decksService.deckList.length==0\" class=\"collection-item blue-text\">\r\n        <div>No element found</div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/deck-overview/deck-list/deck-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_deck_decks_service__ = __webpack_require__("../../../../../src/app/shared/deck/decks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__ = __webpack_require__("../../../../../src/app/shared/card/races.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user_current_user_service__ = __webpack_require__("../../../../../src/app/shared/user/current-user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeckListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeckListComponent = (function () {
    function DeckListComponent(decksService, races, user) {
        this.decksService = decksService;
        this.races = races;
        this.user = user;
        this.showAll = true;
        this.fieldSorted = 'name';
        this.newDeckEdition = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    DeckListComponent.prototype.ngOnInit = function () {
        this.decksService.getAllDecks();
    };
    DeckListComponent.prototype.deckClicked = function (deck) {
        this.decksService.setDeck(deck);
    };
    DeckListComponent.prototype.delete = function (id) {
        this.decksService.deleteDeck(id);
    };
    DeckListComponent.prototype.newDeck = function () {
        this.decksService.clearDeck();
        this.decksService.edit = true;
        this.newDeckEdition.emit(true);
    };
    DeckListComponent.prototype.getBgColor = function (race) {
        return this.races.getRaceColor(race);
    };
    DeckListComponent.prototype.showOwnDecks = function () {
        this.decksService.deckFilter.created_by = this.user.getUser().username;
        this.showAll = false;
    };
    DeckListComponent.prototype.showAllDecks = function () {
        this.showAll = true;
        this.decksService.deckFilter.created_by = "";
    };
    DeckListComponent.prototype.changeSort = function (field) {
        this.fieldSorted = field;
    };
    return DeckListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], DeckListComponent.prototype, "newDeckEdition", void 0);
DeckListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'deck-list',
        template: __webpack_require__("../../../../../src/app/components/deck-overview/deck-list/deck-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/deck-overview/deck-list/deck-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_deck_decks_service__["a" /* DecksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_deck_decks_service__["a" /* DecksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__["a" /* RacesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__["a" /* RacesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_user_current_user_service__["a" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_user_current_user_service__["a" /* CurrentUserService */]) === "function" && _c || Object])
], DeckListComponent);

var _a, _b, _c;
//# sourceMappingURL=deck-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/deck-overview/deck-overview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/deck-overview/deck-overview.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class = \"col s12 m6\" *ngIf=\"!decks.edit\">\r\n    <div class=\"white-board z-depth-1\">\r\n      <div class=\"row\"></div>\r\n      <deck-list (newDeckEdition)=\"newDeckEdition($event)\"></deck-list>\r\n      <div class=\"row\"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class = \"col s12 m6\" *ngIf=\"decks.edit\">\r\n    <div class=\"white-board z-depth-1\">\r\n      <div class=\"row\"></div>\r\n      <div class=\"row\" *ngIf=\"decks.deck.commander._id\">\r\n        <a class=\"waves-effect waves-light btn blue col s6\" [class.darken-3]=\"showCommanders\" (click)=\"showCommanders=true\">Commanders</a>\r\n        <a class=\"waves-effect waves-light btn blue col s6\" [class.darken-3]=\"!showCommanders\" (click)=\"showCommanders=false\">Troops</a>\r\n      </div>\r\n      <card-list  [deckEdition]=\"true\" [isCommander]=\"showCommanders\"></card-list>\r\n      <div class=\"row\"></div>\r\n    </div>\r\n  </div>\r\n  <div class = \"col s12 m6 \">\r\n    <div class=\"white-board z-depth-1\">\r\n      <div class=\"row\"></div>\r\n      <deck-detail ></deck-detail>\r\n      <div class=\"row\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/deck-overview/deck-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_deck_decks_service__ = __webpack_require__("../../../../../src/app/shared/deck/decks.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeckOverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeckOverviewComponent = (function () {
    function DeckOverviewComponent(decks) {
        this.decks = decks;
        this.showCommanders = true;
    }
    DeckOverviewComponent.prototype.ngOnInit = function () {
        this.decks.edit = false;
    };
    DeckOverviewComponent.prototype.newDeckEdition = function (flag) {
        this.showCommanders = flag;
    };
    return DeckOverviewComponent;
}());
DeckOverviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'deck-overview',
        template: __webpack_require__("../../../../../src/app/components/deck-overview/deck-overview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/deck-overview/deck-overview.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_deck_decks_service__["a" /* DecksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_deck_decks_service__["a" /* DecksService */]) === "function" && _a || Object])
], DeckOverviewComponent);

var _a;
//# sourceMappingURL=deck-overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/game/game-global-chat/game-global-chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button:focus{\r\n  background-color: transparent;\r\n}\r\ninput[type=text]{\r\n  border-bottom: 0px solid #2196F3 !important;\r\n  box-shadow: 0 0px 0 0 #2196F3 !important;\r\n}\r\nbutton{\r\n  top: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/game/game-global-chat/game-global-chat.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"row\">\n    <ul #scrollChat class=\"collection chat\">\n      <li class=\"collection-item\" *ngFor=\"let msg of chat.globalChat\">\n        <label [ngClass]=\"{'green-text':msg.user==currentUser.getUser().username}\">{{msg.user+\": \"}}</label>\n        <span>{{msg.text}}</span>\n      </li>\n    </ul>\n  </div>\n  <div class=\"divider\"></div>\n  <div class=\"row no-margin-bottom\">\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && sendMessage()\" #f=\"ngForm\" novalidate>\n        <div class=\"row no-margin-bottom\">\n            <input type=\"text\" class=\"col s10\" placeholder=\"Type your message\" name=\"textToSend\" [(ngModel)]=\"model.textToSend\" #textToSend=\"ngModel\" required />\n            <button class=\"right waves-effect waves-light btn-flat btn-sm col s2\">send</button>\n        </div>\n    </form>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/game/game-global-chat/game-global-chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_game_chat_service__ = __webpack_require__("../../../../../src/app/shared/game/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_current_user_service__ = __webpack_require__("../../../../../src/app/shared/user/current-user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameGlobalChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameGlobalChatComponent = (function () {
    function GameGlobalChatComponent(chat, currentUser) {
        this.chat = chat;
        this.currentUser = currentUser;
        this.model = { textToSend: "" };
    }
    GameGlobalChatComponent.prototype.ngOnInit = function () {
    };
    GameGlobalChatComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    GameGlobalChatComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    GameGlobalChatComponent.prototype.sendMessage = function () {
        this.chat.sendGlobalMsg(this.model.textToSend);
        this.model.textToSend = "";
    };
    return GameGlobalChatComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('scrollChat'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], GameGlobalChatComponent.prototype, "myScrollContainer", void 0);
GameGlobalChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'game-global-chat',
        template: __webpack_require__("../../../../../src/app/components/game/game-global-chat/game-global-chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/game/game-global-chat/game-global-chat.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_game_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_game_chat_service__["a" /* ChatService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_user_current_user_service__["a" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_user_current_user_service__["a" /* CurrentUserService */]) === "function" && _c || Object])
], GameGlobalChatComponent);

var _a, _b, _c;
//# sourceMappingURL=game-global-chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/game/game-msg/game-msg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/game/game-msg/game-msg.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"row no-margin-bottom\">\n    <div class=\"col s4\">\n      <div *ngIf=\"game.waitForChallenge\" class=\"preloader-wrapper active center\">\n        <div class=\"spinner-layer spinner-red-only\">\n          <div class=\"circle-clipper left\">\n            <div class=\"circle\"></div>\n          </div><div class=\"gap-patch\">\n            <div class=\"circle\"></div>\n          </div><div class=\"circle-clipper right\">\n            <div class=\"circle\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col s8\">\n      <h6>{{game.getChallengeDetails()}}</h6>\n    </div>\n  </div>\n  <div class=\"row no-margin-bottom\" *ngIf=\"game.challenge\">\n    <button [ngClass]=\"{disabled: !decks.deck._id}\" [disabled]=\"!decks.deck._id\" type=\"button\" (click)=\"acceptChallenge()\" name=\"button\" class=\"btn btn-default right s4 green\"> Accept</button>\n    <button type=\"button\" (click)=\"declineChallenge()\" name=\"button\" class=\"btn btn-default right s4 red\"> Decline</button>\n  </div>\n  <div class=\"row\" *ngIf=\"game.challenge && !decks.deck._id\">\n    <p class=\"red-text\">You must choose a deck before joining a game</p>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/game/game-msg/game-msg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_game_game_service__ = __webpack_require__("../../../../../src/app/shared/game/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_alert_alert_service__ = __webpack_require__("../../../../../src/app/shared/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_deck_decks_service__ = __webpack_require__("../../../../../src/app/shared/deck/decks.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameMsgComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameMsgComponent = (function () {
    function GameMsgComponent(game, decks, alert) {
        this.game = game;
        this.decks = decks;
        this.alert = alert;
    }
    GameMsgComponent.prototype.ngOnInit = function () {
    };
    GameMsgComponent.prototype.acceptChallenge = function () {
        if (!!this.decks.deck._id) {
            this.msg = "";
            this.game.acceptChallenge();
            this.alert.clearAlert();
        }
    };
    GameMsgComponent.prototype.declineChallenge = function () {
        this.game.declineChallenge();
        this.msg = "";
    };
    return GameMsgComponent;
}());
GameMsgComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'game-msg',
        template: __webpack_require__("../../../../../src/app/components/game/game-msg/game-msg.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/game/game-msg/game-msg.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_game_game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_game_game_service__["a" /* GameService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_deck_decks_service__["a" /* DecksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_deck_decks_service__["a" /* DecksService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_alert_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_alert_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], GameMsgComponent);

var _a, _b, _c;
//# sourceMappingURL=game-msg.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/game/game-play/game-play.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".canvas{\r\n  overflow: auto;\r\n}\r\ncanvas {\r\n  //background:url(/assets/board-bg.png);\r\n  background-repeat: no-repeat;\r\n  padding: 0px;\r\n}\r\n.hand{\r\n  min-height: 400px;\r\n  overflow: auto;\r\n}\r\n\r\nli{\r\n  cursor: pointer;\r\n}\r\nul{\r\n  max-height: 400px;\r\n  overflow: auto;\r\n}\r\n\r\nli button{\r\n  padding-right: 3px;\r\n  padding-left: 3px;\r\n  top: -7px;\r\n  position: relative;\r\n  margin-right: 1px;\r\n}\r\n.btn-floating {\r\n  top: 60px;\r\n  left: -15px;\r\n}\r\n  .active{\r\n    color:white !important;\r\n    background-color: #2196F3 !important\r\n  }\r\n  button:focus{\r\n    background-color: transparent;\r\n  }\r\n.enemyDetails{\r\n  position: absolute;\r\n  top: 0px;\r\n  right: 0px;\r\n}\r\n.not-allowed{\r\n  cursor: not-allowed;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/game/game-play/game-play.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col s3\">\n  <div class=\"white-board z-depth-1\">\n    <div class=\"row no-margin-bottom\">\n      <label>Commander:</label>\n      <ul class=\"collection no-margin-bottom\">\n        <li class=\"collection-item\" [ngClass]=\"getBgColor(game.currentGame.ownCommander.race)\">\n          <div>{{game.currentGame.ownCommander.cardname| truncate}}\n            <button class=\"secondary-content amber btn btn-small right\">\n              {{game.currentGame.ownCommander.resources}}\n            </button>\n            <button class=\"secondary-content green btn btn-small right\">\n              {{game.currentGame.ownCommander.life}}\n            </button>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div class=\"row hand\">\n      <ul class=\"collection no-margin-bottom\">\n        <label>Your hand:</label>\n        <li *ngFor=\"let card of game.hand\" class=\"collection-item\" [ngClass]=\"getBgColor(card.race)\" >\n          <div>{{card.cardname}}\n            <button class=\"secondary-content amber btn btn-small right\" (click)=\"nothing()\" >\n              {{card.cost}}\n            </button>\n            <button class=\"secondary-content green btn btn-small right\" *ngIf=\"types.getType(card.type)!='Action'\" (click)=\"nothing()\">\n              {{card.life}}\n            </button>\n            <button class=\"secondary-content  deep-orange darken-1 btn btn-small right\" *ngIf=\"types.getType(card.type)!='Action'\" (click)=\"nothing()\">\n              {{card.attack}}\n            </button>\n          </div>\n        </li>\n        <li *ngIf=\"game.hand.length==0\" class=\"collection-item blue-text\" >\n          <div>No cards in hand</div>\n        </li>\n      </ul>\n    </div>\n    <div class=\"row\">\n      <button [ngClass]=\"{disabled: !game.myTurn}\" [disabled]=\"!game.myTurn\" type=\"button\" name=\"button\" (click)=\"endTurn()\" class=\"btn waves-effect waves-light btn-sm col s12 orange\">End Turn</button>\n    </div>\n    <div class=\"row\">\n      <button type=\"button\" name=\"button\" (click)=\"endGame()\" class=\"btn waves-effect waves-light btn-sm col s12 red\">End Game</button>\n    </div>\n  </div>\n</div>\n<div class=\"col s9\">\n    <canvas width=\"672\" height=\"620\" id=\"boardCanvas\" class=\"white-board z-depth-1 canvas\"></canvas>\n</div>\n<div class=\"enemyDetails\">\n  <div class=\"white-board z-depth-1 grey darken-4\">\n    <div class=\"row no-margin-bottom\">\n      <label>Oponent:</label>\n      <ul class=\"collection\">\n        <li class=\"collection-item\"  [ngClass]=\"getBgColor(game.currentGame.enemyCommander.race)\">\n          <div>{{game.currentGame.enemyCommander.cardname| truncate}}\n            <button class=\"secondary-content amber btn btn-small right\">\n              {{game.currentGame.enemyCommander.resources}}\n            </button>\n            <button class=\"secondary-content green btn btn-small right\">\n              {{game.currentGame.enemyCommander.life}}\n            </button>\n          </div>\n        </li>\n      </ul>\n      <label>Hand: {{game.currentGame.enemyHand}}</label>\n      <label>Deck: {{game.currentGame.enemyDeck}}</label>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/game/game-play/game-play.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_game_game_service__ = __webpack_require__("../../../../../src/app/shared/game/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_game_board_service__ = __webpack_require__("../../../../../src/app/shared/game/board.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_card_races_service__ = __webpack_require__("../../../../../src/app/shared/card/races.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_card_types_service__ = __webpack_require__("../../../../../src/app/shared/card/types.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_createjs_module__ = __webpack_require__("../../../../createjs-module/createjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_createjs_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_createjs_module__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePlayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GamePlayComponent = (function () {
    function GamePlayComponent(game, board, races, types) {
        this.game = game;
        this.board = board;
        this.races = races;
        this.types = types;
    }
    GamePlayComponent.prototype.ngOnInit = function () {
    };
    GamePlayComponent.prototype.ngAfterViewInit = function () {
        this.board.board = this.game.getGame().board;
        this.board.init(new __WEBPACK_IMPORTED_MODULE_5_createjs_module__["Stage"]("boardCanvas"));
    };
    GamePlayComponent.prototype.endTurn = function () {
        this.game.endTurn();
    };
    GamePlayComponent.prototype.endGame = function () {
        this.game.endGame();
    };
    GamePlayComponent.prototype.getBgColor = function (race) {
        return this.races.getRaceColor(race);
    };
    return GamePlayComponent;
}());
GamePlayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'game-play',
        template: __webpack_require__("../../../../../src/app/components/game/game-play/game-play.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/game/game-play/game-play.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_game_game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_game_game_service__["a" /* GameService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_game_board_service__["a" /* BoardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_game_board_service__["a" /* BoardService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_card_races_service__["a" /* RacesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_card_races_service__["a" /* RacesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_card_types_service__["a" /* TypesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_card_types_service__["a" /* TypesService */]) === "function" && _d || Object])
], GamePlayComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=game-play.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/game/game-private-chat/game-private-chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button:focus{\r\n  background-color: transparent;\r\n}\r\ninput[type=text]{\r\n  border-bottom: 0px solid #2196F3 !important;\r\n  box-shadow: 0 0px 0 0 #2196F3 !important;\r\n}\r\nbutton{\r\n  top: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/game/game-private-chat/game-private-chat.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"\" *ngIf=\"chat.userPrivateChat!=''\">\n    <div class=\"row\">\n      <h4>{{chat.userPrivateChat}}</h4>\n    </div>\n    <div class=\"row\">\n      <ul #scrollChat class=\"collection chat\" >\n        <li class=\"collection-item\" *ngFor=\"let msg of chat.currentPrivateChat\">\n          <label [ngClass]=\"{'green-text':msg.user==currentUser.getUser().username}\">{{msg.user+\": \"}}</label>\n          <span>{{msg.text}}</span>\n        </li>\n      </ul>\n    </div>\n    <div class=\"divider\"></div>\n    <div class=\"row no-margin-bottom\">\n      <form name=\"form\" (ngSubmit)=\"f.form.valid && sendMessage()\" #f=\"ngForm\" novalidate>\n          <div class=\"row no-margin-bottom\">\n              <input type=\"text\" class=\"col s10\" placeholder=\"Type your message\" name=\"textToSend\" [(ngModel)]=\"model.textToSend\" #textToSend=\"ngModel\" required />\n              <button class=\"right waves-effect waves-light btn-flat btn-sm col s2\">send</button>\n          </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"center\" *ngIf=\"chat.userPrivateChat==''\">\n    <h4> <i class=\"material-icons hide-on-small-only\">keyboard_backspace</i> Select a user from the list</h4>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/game/game-private-chat/game-private-chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_game_chat_service__ = __webpack_require__("../../../../../src/app/shared/game/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_current_user_service__ = __webpack_require__("../../../../../src/app/shared/user/current-user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePrivateChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GamePrivateChatComponent = (function () {
    function GamePrivateChatComponent(chat, currentUser) {
        this.chat = chat;
        this.currentUser = currentUser;
        this.model = { textToSend: "" };
    }
    GamePrivateChatComponent.prototype.ngOnInit = function () {
    };
    GamePrivateChatComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    GamePrivateChatComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    GamePrivateChatComponent.prototype.sendMessage = function () {
        this.chat.sendPrivateMsg(this.model.textToSend);
        this.model.textToSend = "";
    };
    return GamePrivateChatComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('scrollChat'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], GamePrivateChatComponent.prototype, "myScrollContainer", void 0);
GamePrivateChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'game-private-chat',
        template: __webpack_require__("../../../../../src/app/components/game/game-private-chat/game-private-chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/game/game-private-chat/game-private-chat.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_game_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_game_chat_service__["a" /* ChatService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_user_current_user_service__["a" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_user_current_user_service__["a" /* CurrentUserService */]) === "function" && _c || Object])
], GamePrivateChatComponent);

var _a, _b, _c;
//# sourceMappingURL=game-private-chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/game/game-users/game-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li{\r\n  cursor: pointer;\r\n}\r\nul{\r\n  max-height: 400px;\r\n  overflow: auto;\r\n}\r\n\r\nli button{\r\n  padding-right: 3px;\r\n  padding-left: 3px;\r\n  top: -7px;\r\n  position: relative;\r\n  margin-right: 1px;\r\n}\r\n.btn-floating {\r\n  top: 60px;\r\n  left: -15px;\r\n}\r\n  .active{\r\n    color:white !important;\r\n    background-color: #2196F3 !important\r\n  }\r\n  button:focus{\r\n    background-color: transparent;\r\n  }\r\n.connected{\r\n  color: green;\r\n  background-color: #dcedc8;\r\n}\r\n.disconnected{\r\n  color: grey;\r\n  background-color: #e0e0e0;\r\n  cursor: not-allowed;\r\n}\r\n.not-allowed{\r\n  cursor: not-allowed;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/game/game-users/game-users.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"white-board z-depth-1\">\n    <div class=\"row\">\n      <div class=\"\">\n        <ul class=\"collection\">\n          <label>Users:</label>\n          <li *ngFor=\"let user of socket.userList\" class=\"collection-item\"  [ngClass]=\"{'disconnected':user.active==false, 'connected':user.active==true, 'not-allowed':currentUser.getUser().username==user.username, 'orange lighten-3':chat.pendingMsg.indexOf(user.username)>=0}\" (click)=\"selectUser(user)\">\n            <div>{{user.username}}\n              <a class=\"secondary-content\" *ngIf=\"(user.active && !!decks.deck._id) && !game.waitForChallenge && !game.game.id && !(currentUser.getUser().username == user.username)\" (click)=\"sendChallenge(user)\">\n                <i class=\"material-icons green-text\">gamepad</i>\n              </a>\n              <a class=\"secondary-content\" *ngIf=\"game.waitForChallenge && !game.game.id && userChallenged ==user.username\" (click)=\"cancelChallenge(user)\">\n                <i class=\"material-icons red-text\">clear</i>\n              </a>\n            </div>\n          </li>\n          <li *ngIf=\"socket.userList.length==0\" class=\"collection-item blue-text\">\n            <div>No element found</div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/game/game-users/game-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_game_game_service__ = __webpack_require__("../../../../../src/app/shared/game/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_game_chat_service__ = __webpack_require__("../../../../../src/app/shared/game/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_game_socket_service__ = __webpack_require__("../../../../../src/app/shared/game/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_deck_decks_service__ = __webpack_require__("../../../../../src/app/shared/deck/decks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_user_current_user_service__ = __webpack_require__("../../../../../src/app/shared/user/current-user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GameUsersComponent = (function () {
    function GameUsersComponent(game, chat, socket, decks, currentUser) {
        this.game = game;
        this.chat = chat;
        this.socket = socket;
        this.decks = decks;
        this.currentUser = currentUser;
        this.userChallenged = "";
    }
    GameUsersComponent.prototype.ngOnInit = function () {
    };
    GameUsersComponent.prototype.sendChallenge = function (user) {
        this.userChallenged = user.username;
        this.game.sendChallenge(user);
    };
    GameUsersComponent.prototype.cancelChallenge = function (user) {
        this.userChallenged = "";
        this.game.cancelChallenge(user);
    };
    GameUsersComponent.prototype.selectUser = function (user) {
        if (user.username != this.currentUser.getUser().username && user.active) {
            this.chat.userPrivateChat = user.username;
            this.chat.setPrivateChat(user.username);
        }
    };
    return GameUsersComponent;
}());
GameUsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'game-users',
        template: __webpack_require__("../../../../../src/app/components/game/game-users/game-users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/game/game-users/game-users.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_game_game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_game_game_service__["a" /* GameService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_game_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_game_chat_service__["a" /* ChatService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_game_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_game_socket_service__["a" /* SocketService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_deck_decks_service__["a" /* DecksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_deck_decks_service__["a" /* DecksService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_user_current_user_service__["a" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_user_current_user_service__["a" /* CurrentUserService */]) === "function" && _e || Object])
], GameUsersComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=game-users.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/game/game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"!game.gameStart\">\n  <div class = \"col s12 m4\">\n      <game-users></game-users>\n  </div>\n  <div class = \"col s12 m8\">\n    <div class=\"white-board z-depth-1 \" *ngIf=\"game.challenge || game.waitForChallenge\">\n      <div class=\"row no-margin-bottom\">\n        <div class=\"col s12\">\n          <game-msg></game-msg>\n        </div>\n      </div>\n    </div>\n    <div class=\"white-board z-depth-1 \">\n      <div class=\"row no-margin-bottom\">\n        <a class=\"waves-effect waves-light btn blue col s6\" [class.darken-3]=\"chat.showGlobal\" (click)=\"chat.showGlobal=true\">Global Chat</a>\n        <a class=\"waves-effect waves-light btn blue col s6\" [class.darken-3]=\"!chat.showGlobal\" (click)=\"chat.showGlobal=false\">Private chat</a>\n      </div>\n      <div class=\"row\">\n        <div class=\"col s12\" *ngIf=\"chat.showGlobal\">\n          <game-global-chat></game-global-chat>\n        </div>\n        <div class=\"col s12\" *ngIf=\"!chat.showGlobal\">\n          <game-private-chat></game-private-chat>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\" *ngIf=\"game.gameStart\">\n  <game-play></game-play>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_game_chat_service__ = __webpack_require__("../../../../../src/app/shared/game/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_game_game_service__ = __webpack_require__("../../../../../src/app/shared/game/game.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameComponent = (function () {
    function GameComponent(chat, game) {
        this.chat = chat;
        this.game = game;
    }
    GameComponent.prototype.ngOnInit = function () {
    };
    return GameComponent;
}());
GameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'game',
        template: __webpack_require__("../../../../../src/app/components/game/game.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/game/game.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_game_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_game_chat_service__["a" /* ChatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_game_game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_game_game_service__["a" /* GameService */]) === "function" && _b || Object])
], GameComponent);

var _a, _b;
//# sourceMappingURL=game.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search-commander/search-commander.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\r\n  margin-bottom: 0px;\r\n}\r\nselect {\r\n    display: block;\r\n}\r\nbutton:focus{\r\n  background-color: transparent;\r\n}\r\nbutton{\r\n  border-bottom: 1px solid #9e9e9e;\r\n  height: 42px;\r\n}\r\n.min-width-290{\r\n    min-width: 290px;\r\n}\r\n@media screen and (min-width: 992px){\r\n  button{\r\n    height: 44px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search-commander/search-commander.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <input type=\"text\" class=\"col s10\" name=\"cardname\" [(ngModel)]=\"commanderService.commanderFilter.cardname\" placeholder=\"Search\" style=\"text-align: right\">\r\n  <button type=\"button\" class=\"col s2 waves-effect waves-blue btn-flat\" [ngClass]=\"{'blue':advancedSearch || commanderService.commanderFilter.race!=''}\" (click)=\"toggleAvancedSearch()\" name=\"button\"><i class=\"material-icons\">{{advancedSearch || commanderService.commanderFilter.race!=''?'keyboard_arrow_up':'keyboard_arrow_down'}}</i></button>\r\n</div>\r\n<div *ngIf=\"advancedSearch || commanderService.commanderFilter.race!=''\">\r\n  <div class=\"row\">\r\n    <input type=\"number\" class=\"col s4\" name=\"life\" [(ngModel)]=\"commanderService.commanderFilter.life\" placeholder=\"Life\" style=\"text-align: right\">\r\n    <input type=\"number\" class=\"col s4\" name=\"movement\" [(ngModel)]=\"commanderService.commanderFilter.movement\" placeholder=\"Movement\" style=\"text-align: right\">\r\n    <input type=\"number\" class=\"col s4\" name=\"resources\" [(ngModel)]=\"commanderService.commanderFilter.resources\" placeholder=\"Resources\" style=\"text-align: right\">\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"!deckEdition\">\r\n    <div class=\"col s5\" >\r\n      <select id=\"race\" name=\"race\" [(ngModel)]=\"commanderService.commanderFilter.race\" placeholder=\"Race\">\r\n        <option value=\"\" selected >All Races</option>\r\n        <option *ngFor=\"let race of racesService.races\" [ngValue]=\"race._id\">{{race.name}}</option>\r\n      </select>\r\n    </div>\r\n    <input type=\"text\" class=\"col s7\" name=\"cardname\" [(ngModel)]=\"commanderService.commanderFilter.habilities\" placeholder=\"Habilities\" style=\"text-align: right\">\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"deckEdition\">\r\n    <input type=\"text\" class=\"col s12\" name=\"cardname\" [(ngModel)]=\"commanderService.commanderFilter.habilities\" placeholder=\"Habilities\" style=\"text-align: right\">\r\n  </div>\r\n</div>\r\n<div *ngIf=\"deckEdition\" class=\"margin-bottom-20\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/search/search-commander/search-commander.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_card_commander_service__ = __webpack_require__("../../../../../src/app/shared/card/commander.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__ = __webpack_require__("../../../../../src/app/shared/card/races.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchCommanderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchCommanderComponent = (function () {
    function SearchCommanderComponent(commanderService, racesService) {
        this.commanderService = commanderService;
        this.racesService = racesService;
        this.advancedSearch = false;
    }
    SearchCommanderComponent.prototype.ngOnInit = function () {
    };
    SearchCommanderComponent.prototype.toggleAvancedSearch = function () {
        this.advancedSearch = !(this.advancedSearch || this.commanderService.commanderFilter.race != '');
        if (!this.advancedSearch) {
            var race = this.commanderService.commanderFilter.race;
            this.commanderService.clearFilter();
            if (this.deckEdition) {
                this.commanderService.commanderFilter.race = race;
            }
        }
    };
    return SearchCommanderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], SearchCommanderComponent.prototype, "deckEdition", void 0);
SearchCommanderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'search-commander',
        template: __webpack_require__("../../../../../src/app/components/search/search-commander/search-commander.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/search-commander/search-commander.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_card_commander_service__["a" /* CommanderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_card_commander_service__["a" /* CommanderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__["a" /* RacesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__["a" /* RacesService */]) === "function" && _b || Object])
], SearchCommanderComponent);

var _a, _b;
//# sourceMappingURL=search-commander.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search-deck/search-deck.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\r\n  margin-bottom: 0px;\r\n}\r\nselect {\r\n    display: block;\r\n}\r\nbutton:focus{\r\n  background-color: transparent;\r\n}\r\nbutton{\r\n  border-bottom: 1px solid #9e9e9e;\r\n  height: 42px;\r\n}\r\n.min-width-290{\r\n    min-width: 290px;\r\n}\r\n@media screen and (min-width: 992px){\r\n  button{\r\n    height: 44px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search-deck/search-deck.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <input type=\"text\" class=\"col s10\" name=\"name\" [(ngModel)]=\"decks.deckFilter.name\" placeholder=\"Search\" style=\"text-align: right\">\r\n  <button type=\"button\" class=\"col s2 waves-effect waves-blue btn-flat\" [ngClass]=\"{'blue':advancedSearch}\" (click)=\"toggleAvancedSearch()\" name=\"button\"><i class=\"material-icons\">{{advancedSearch?'keyboard_arrow_up':'keyboard_arrow_down'}}</i></button>\r\n</div>\r\n<div *ngIf=\"advancedSearch\">\r\n  <div class=\"row\">\r\n    <div class=\"col s5\" >\r\n      <select id=\"race\" name=\"race\" [(ngModel)]=\"decks.deckFilter.race\" placeholder=\"Race\">\r\n        <option value=\"\" selected >All Races</option>\r\n        <option *ngFor=\"let race of racesService.races\" [ngValue]=\"race._id\">{{race.name}}</option>\r\n      </select>\r\n    </div>\r\n    <input type=\"text\" class=\"col s7\" name=\"description\" [(ngModel)]=\"decks.deckFilter.description\" placeholder=\"Description\" style=\"text-align: right\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/search/search-deck/search-deck.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_deck_decks_service__ = __webpack_require__("../../../../../src/app/shared/deck/decks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__ = __webpack_require__("../../../../../src/app/shared/card/races.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchDeckComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchDeckComponent = (function () {
    function SearchDeckComponent(decks, racesService) {
        this.decks = decks;
        this.racesService = racesService;
        this.advancedSearch = false;
    }
    SearchDeckComponent.prototype.ngOnInit = function () {
        this.decks.getAllDecks();
    };
    SearchDeckComponent.prototype.toggleAvancedSearch = function () {
        this.advancedSearch = !(this.advancedSearch);
        if (!this.advancedSearch) {
            this.decks.clearFilter();
        }
    };
    return SearchDeckComponent;
}());
SearchDeckComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'search-deck',
        template: __webpack_require__("../../../../../src/app/components/search/search-deck/search-deck.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/search-deck/search-deck.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_deck_decks_service__["a" /* DecksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_deck_decks_service__["a" /* DecksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__["a" /* RacesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__["a" /* RacesService */]) === "function" && _b || Object])
], SearchDeckComponent);

var _a, _b;
//# sourceMappingURL=search-deck.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search-troop/search-troop.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\r\n  margin-bottom: 0px;\r\n}\r\nselect {\r\n    display: block;\r\n}\r\nbutton:focus{\r\n  background-color: transparent;\r\n}\r\nbutton{\r\n  border-bottom: 1px solid #9e9e9e;\r\n  height: 42px;\r\n}\r\n.min-width-290{\r\n    min-width: 290px;\r\n}\r\n@media screen and (min-width: 992px){\r\n  button{\r\n    height: 44px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search-troop/search-troop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <input type=\"text\" class=\"col s10\" name=\"cardname\" [(ngModel)]=\"troopService.troopFilter.cardname\" placeholder=\"Search\" style=\"text-align: right\">\r\n  <button type=\"button\" class=\"col s2 waves-effect waves-blue btn-flat\" [ngClass]=\"{'blue':advancedSearch || troopService.troopFilter.race!=''}\" (click)=\"toggleAvancedSearch()\" name=\"button\"><i class=\"material-icons\">{{advancedSearch || troopService.troopFilter.race!=''?'keyboard_arrow_up':'keyboard_arrow_down'}}</i></button>\r\n</div>\r\n<div *ngIf=\"advancedSearch || troopService.troopFilter.race!=''\">\r\n  <div class=\"row\">\r\n    <input type=\"number\" class=\"col s3\" name=\"life\" [(ngModel)]=\"troopService.troopFilter.life\" placeholder=\"Life\" style=\"text-align: right\">\r\n    <input type=\"number\" class=\"col s3\" name=\"movement\" [(ngModel)]=\"troopService.troopFilter.movement\" placeholder=\"Movement\" style=\"text-align: right\">\r\n    <input type=\"number\" class=\"col s3\" name=\"cost\" [(ngModel)]=\"troopService.troopFilter.cost\" placeholder=\"Cost\" style=\"text-align: right\">\r\n    <input type=\"number\" class=\"col s3\" name=\"attack\" [(ngModel)]=\"troopService.troopFilter.attack\" placeholder=\"Attack\" style=\"text-align: right\">\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"!deckEdition\">\r\n    <div class=\"col s4\">\r\n      <select id=\"race\" name=\"race\" [(ngModel)]=\"troopService.troopFilter.race\">\r\n        <option value=\"\" selected >All Races</option>\r\n        <option *ngFor=\"let race of racesService.races\" [ngValue]=\"race._id\">{{race.name}}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"col s4\">\r\n      <select id=\"race\" name=\"race\" [(ngModel)]=\"troopService.troopFilter.type\">\r\n        <option value=\"\" selected >All Types</option>\r\n        <option *ngFor=\"let type of typesService.types\" [ngValue]=\"type._id\">{{type.name}}</option>\r\n      </select>\r\n    </div>\r\n    <input type=\"text\" class=\"col s4\" name=\"cardname\" [(ngModel)]=\"troopService.troopFilter.habilities\" placeholder=\"Habilities\" style=\"text-align: right\">\r\n  </div>\r\n   <div class=\"row\" *ngIf=\"deckEdition\">\r\n     <div class=\"col s4\">\r\n       <select id=\"type\" name=\"type\" [(ngModel)]=\"troopService.troopFilter.type\">\r\n         <option value=\"\" selected >All Types</option>\r\n         <option *ngFor=\"let type of typesService.types\" [ngValue]=\"type._id\">{{type.name}}</option>\r\n       </select>\r\n     </div>\r\n     <input type=\"text\" class=\"col s8\" name=\"cardname\" [(ngModel)]=\"troopService.troopFilter.habilities\" placeholder=\"Habilities\" style=\"text-align: right\">\r\n   </div>\r\n</div>\r\n<div *ngIf=\"deckEdition\" class=\"margin-bottom-20\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/search/search-troop/search-troop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_card_troop_service__ = __webpack_require__("../../../../../src/app/shared/card/troop.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__ = __webpack_require__("../../../../../src/app/shared/card/races.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_card_types_service__ = __webpack_require__("../../../../../src/app/shared/card/types.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchTroopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchTroopComponent = (function () {
    function SearchTroopComponent(troopService, racesService, typesService) {
        this.troopService = troopService;
        this.racesService = racesService;
        this.typesService = typesService;
        this.advancedSearch = false;
    }
    SearchTroopComponent.prototype.ngOnInit = function () {
        this.troopService.getTroopList();
    };
    SearchTroopComponent.prototype.toggleAvancedSearch = function () {
        this.advancedSearch = !(this.advancedSearch || this.troopService.troopFilter.race != '');
        if (!this.advancedSearch) {
            var race = this.troopService.troopFilter.race;
            this.troopService.clearFilter();
            if (this.deckEdition) {
                this.troopService.troopFilter.race = race;
            }
        }
    };
    return SearchTroopComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], SearchTroopComponent.prototype, "deckEdition", void 0);
SearchTroopComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'search-troop',
        template: __webpack_require__("../../../../../src/app/components/search/search-troop/search-troop.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/search-troop/search-troop.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_card_troop_service__["a" /* TroopService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_card_troop_service__["a" /* TroopService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__["a" /* RacesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_card_races_service__["a" /* RacesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_card_types_service__["a" /* TypesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_card_types_service__["a" /* TypesService */]) === "function" && _c || Object])
], SearchTroopComponent);

var _a, _b, _c;
//# sourceMappingURL=search-troop.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\r\n    padding: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class = \"col s12 m6 offset-m3 white-board z-depth-1\">\r\n\r\n    <h2>Login</h2>\r\n    <p class=\"red-text\" *ngIf=\"failedMessage !==''\" >{{failedMessage}}</p>\r\n    <div *ngIf=\"loading\" class=\"preloader-wrapper active\">\r\n      <div class=\"spinner-layer spinner-red-only\">\r\n        <div class=\"circle-clipper left\">\r\n          <div class=\"circle\"></div>\r\n        </div><div class=\"gap-patch\">\r\n          <div class=\"circle\"></div>\r\n        </div><div class=\"circle-clipper right\">\r\n          <div class=\"circle\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <form name=\"form\" *ngIf=\"!loading\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n            <label for=\"username\">Username</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n        </div>\r\n        <div class=\"row\"></div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary right blue\">Login</button>\r\n        </div>\r\n        <div class=\"row\"></div>\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_authentication_authentication_service__ = __webpack_require__("../../../../../src/app/shared/authentication/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
        this.failedMessage = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            if (!data.username) {
                _this.failedMessage = data.message;
                _this.model.password = '';
                _this.loading = false;
            }
            else {
                _this.failedMessage = 'Login Succesful';
                _this.router.navigate([_this.returnUrl]);
            }
        }, function (error) {
            _this.model.username = _this.model.password = '';
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'login',
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")],
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class = \"col s12 m8 offset-m2 white-board z-depth-1\">\r\n      <h2>Register</h2>\r\n      <p class=\"red-text\" *ngIf=\"registerMsg !==''\" >{{registerMsg}}</p>\r\n      <form #form=\"ngForm\" (ngSubmit)=\"submitForm(form)\" class=\"col s12\" *ngIf=\"!registerOk\">\r\n        <div class=\"row\">\r\n          <div class=\"form-group col s4\">\r\n            <label for=\"first_name\">First Name</label>\r\n            <input id=\"first_name\" type=\"text\" class=\"validate form-control\" name=\"firstname\"  [(ngModel)]=\"user.firstname\" required>\r\n          </div>\r\n          <div class=\"form-group col s4\">\r\n            <label for=\"last_name\">Last Name</label>\r\n            <input id=\"last_name\" type=\"text\" class=\"validate\" name=\"lastname\"  [(ngModel)]=\"user.lastname\" required>\r\n          </div>\r\n          <div class=\"form-group col s4\">\r\n            <label for=\"last_name2\">Second Last Name</label>\r\n            <input id=\"last_name2\" type=\"text\" class=\"validate\" name=\"lastname2\"  [(ngModel)]=\"user.lastname2\" required>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col s6\">\r\n\r\n            <input name=\"gender\" type=\"radio\" [(ngModel)]=\"user.gender\" id=\"male\" value=\"m\" />\r\n            <label for=\"male\">Male</label>\r\n\r\n            <input name=\"gender\" type=\"radio\" [(ngModel)]=\"user.gender\" id=\"female\" value=\"f\" />\r\n            <label for=\"female\">Female</label>\r\n          </div>\r\n          <div class=\"form-group col s6\">\r\n            <label for=\"password\">Password</label>\r\n            <input id=\"password\" type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" required>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col s6\">\r\n            <label for=\"email\">Email</label>\r\n            <input id=\"email\" type=\"email\" class=\"validate\" name=\"email\" [(ngModel)]=\"user.email\" required>\r\n          </div>\r\n          <div class=\"form-group col s6\">\r\n            <label for=\"username\">Username</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.username\" required />\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"form-group col s3\">\r\n            <label for=\"age\">Age</label>\r\n            <input name=\"age\" type=\"number\" id=\"age\" [(ngModel)]=\"user.age\"/>\r\n          </div>\r\n          <div *ngIf=\"!registerError===''\" class=\"form-group col s6\">\r\n            <p>{{registerError}}</p>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"form-group col right\">\r\n          <button\r\n          [ngClass]=\"{disabled: !form.valid}\" [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-default right s4 green\">New</button>\r\n        </div>\r\n        <div class=\"row\">\r\n        </div>\r\n      </form>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_authentication_authentication_service__ = __webpack_require__("../../../../../src/app/shared/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user_user_service__ = __webpack_require__("../../../../../src/app/shared/user/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(userService, route, router, authenticationService) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.registerMsg = "";
        this.registerOk = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = { username: "", firstname: "", lastname: "", lastname2: "", gender: "", age: 0, lvl: 1, email: "" };
    };
    RegisterComponent.prototype.submitForm = function (form) {
        var _this = this;
        this.userService.create(this.user)
            .subscribe(function (data) {
            if (data.user) {
                _this.registerOk = true;
                _this.registerMsg = "Registration OK";
            }
            else {
                _this.registerOk = false;
                _this.registerMsg = data.message;
            }
        }, function (error) {
            _this.registerOk = false;
            _this.registerMsg = error.message;
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/sing-in/sing-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/sing-in/sing-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class = \"col s12 m6 white-board z-depth-1\">\r\n      <login></login>\r\n    </div>\r\n    <div class = \"col s12 m6 white-board z-depth-1\">\r\n      <register></register>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/sing-in/sing-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SingInComponent = (function () {
    function SingInComponent() {
    }
    SingInComponent.prototype.ngOnInit = function () {
    };
    return SingInComponent;
}());
SingInComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'sing-in',
        template: __webpack_require__("../../../../../src/app/components/user/sing-in/sing-in.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/sing-in/sing-in.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SingInComponent);

//# sourceMappingURL=sing-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user-detail/user-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user-detail/user-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron container white-board z-depth-1\">\r\n  <h2>User Details</h2>\r\n  <p *ngIf=\"update.send\" [ngClass]=\"{'green-text': update.success, 'red-text': !update.success}\" >{{update.msg}} </p>\r\n  <div class=\"preloader-wrapper big active center\" *ngIf=\"!user\">\r\n     <div class=\"spinner-layer spinner-blue\">\r\n       <div class=\"circle-clipper left\">\r\n         <div class=\"circle\"></div>\r\n       </div><div class=\"gap-patch\">\r\n         <div class=\"circle\"></div>\r\n       </div><div class=\"circle-clipper right\">\r\n         <div class=\"circle\"></div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n  <form #form=\"ngForm\" (ngSubmit)=\"submitForm(form)\" class=\"col s12\" *ngIf=\"user\">\r\n    <div class=\"row\">\r\n      <div class=\"form-group col s4\">\r\n        <label for=\"first_name\">First Name</label>\r\n        <input id=\"first_name\" type=\"text\" class=\"validate form-control\" name=\"name\"  [(ngModel)]=\"user.firstname\" required>\r\n      </div>\r\n      <div class=\"form-group col s4\">\r\n        <label for=\"last_name\">Last Name</label>\r\n        <input id=\"last_name\" type=\"text\" class=\"validate\" name=\"lastname\"  [(ngModel)]=\"user.lastname\" required>\r\n      </div>\r\n      <div class=\"form-group col s4\">\r\n        <label for=\"last_name2\">Second Last Name</label>\r\n        <input id=\"last_name2\" type=\"text\" class=\"validate\" name=\"lastsurname2\"  [(ngModel)]=\"user.lastname2\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"form-group col s6\">\r\n\r\n        <input name=\"gender\" type=\"radio\" [(ngModel)]=\"user.gender\" id=\"male\" value=\"m\" />\r\n        <label for=\"male\">Male</label>\r\n\r\n        <input name=\"gender\" type=\"radio\" [(ngModel)]=\"user.gender\" id=\"female\" value=\"f\" />\r\n        <label for=\"female\">Female</label>\r\n      </div>\r\n      <div class=\"form-group col s6\">\r\n        <label for=\"password\">Password</label>\r\n        <input id=\"password\" type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" required>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"form-group col s6\">\r\n        <label for=\"email\">Email</label>\r\n        <input id=\"email\" type=\"email\" class=\"validate\" name=\"email\" [(ngModel)]=\"user.email\" required>\r\n      </div>\r\n      <div class=\"form-group col s6\">\r\n          <label for=\"username\">Username</label>\r\n          <input type=\"text\" class=\"form-control\" disabled name=\"username\" [(ngModel)]=\"user.username\" required />\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"form-group col s3\">\r\n        <label for=\"age\">Age</label>\r\n        <input name=\"age\" type=\"number\" id=\"age\" [(ngModel)]=\"user.age\"/>\r\n      </div>\r\n      <div *ngIf=\"currentUser.isAdmin()\" class=\"form-group col s3\">\r\n        <label for=\"lvl\">Access level</label>\r\n        <input name=\"lvl\" type=\"number\" id=\"lvl\" [(ngModel)]=\"user.lvl\"/>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group col s3 right\">\r\n      <button\r\n        [ngClass]=\"{disabled: !form.valid}\" [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-default right s4 blue\">Save</button>\r\n    </div>\r\n    <div class=\"row\"></div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user-detail/user-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_user_service__ = __webpack_require__("../../../../../src/app/shared/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user_current_user_service__ = __webpack_require__("../../../../../src/app/shared/user/current-user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDetailComponent = (function () {
    function UserDetailComponent(currentUser, userService, route, router) {
        this.currentUser = currentUser;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.update = { send: false, msg: "", success: false };
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (_this.currentUser.getUser()) {
                if (!id)
                    id = _this.currentUser.getUser()._id;
                _this.userService.getById(id).subscribe(function (user) {
                    _this.user = user;
                });
            }
            else {
                _this.router.navigate(['login']);
            }
        });
    };
    UserDetailComponent.prototype.submitForm = function (form) {
        var _this = this;
        this.userService.update(this.user, form.form.controls.password.dirty).subscribe(function (user) {
            _this.update = { send: true, msg: "User updated successfully", success: true };
            if (_this.currentUser.isAdmin()) {
                _this.router.navigate(['users']);
            }
            else {
                _this.user = user;
            }
        }, function (error) {
            _this.update = { send: true, msg: "There has been an error updating the user", success: false };
            console.log("Error Updating User " + error);
        });
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'user-detail',
        template: __webpack_require__("../../../../../src/app/components/user/user-detail/user-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user-detail/user-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_user_current_user_service__["a" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_user_current_user_service__["a" /* CurrentUserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_user_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], UserDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron container white-board z-depth-1\">\r\n  <h2>Users List</h2>\r\n  <table class=\"bordered highlight centered\">\r\n    <thead>\r\n      <tr>\r\n          <th>Name</th>\r\n          <th>Username</th>\r\n          <th>LVL</th>\r\n          <th>Edit</th>\r\n          <th>Delete</th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <tr *ngFor=\"let user of userList\">\r\n        <td>{{user.firstname+\" \"+ user.lastname}}</td>\r\n        <td>{{user.username}}</td>\r\n        <td>{{user.lvl}}</td>\r\n        <td >\r\n          <button type=\"button\" name=\"edit\" class=\"btn waves-effect waves-light orange\" (click)=\"editUser(user._id)\">EDIT</button>\r\n        </td>\r\n        <td >\r\n          <button type=\"button\" name=\"edit\" class=\"btn waves-effect waves-light red\" (click)=\"deleteUser(user._id)\">DELETE</button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_user_user_service__ = __webpack_require__("../../../../../src/app/shared/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserListComponent = (function () {
    function UserListComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (list) {
            _this.userList = list;
        });
    };
    UserListComponent.prototype.editUser = function (id) {
        this.router.navigate(['/user', id]);
    };
    UserListComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).subscribe(function () {
            _this.userService.getAll().subscribe(function (list) {
                _this.userList = list;
            });
        });
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'user-list',
        template: __webpack_require__("../../../../../src/app/components/user/user-list/user-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user-list/user-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], UserListComponent);

var _a, _b;
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_user_user_list_user_list_component__ = __webpack_require__("../../../../../src/app/components/user/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/components/user/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_card_overview_card_overview_component__ = __webpack_require__("../../../../../src/app/components/card-overview/card-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_deck_overview_deck_overview_component__ = __webpack_require__("../../../../../src/app/components/deck-overview/deck-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_game_game_component__ = __webpack_require__("../../../../../src/app/components/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_authentication_guard__ = __webpack_require__("../../../../../src/app/shared/authentication/guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/*USUARIOS*/










var appRoutes = [
    {
        path: 'user/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__components_user_user_detail_user_detail_component__["a" /* UserDetailComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__shared_authentication_guard__["a" /* AuthGuard */]]
    }, {
        path: 'user',
        component: __WEBPACK_IMPORTED_MODULE_1__components_user_user_detail_user_detail_component__["a" /* UserDetailComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__shared_authentication_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'users',
        component: __WEBPACK_IMPORTED_MODULE_0__components_user_user_list_user_list_component__["a" /* UserListComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__shared_authentication_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_9__shared_authentication_guard__["b" /* AdminGuard */]]
    },
    {
        path: 'cards',
        component: __WEBPACK_IMPORTED_MODULE_2__components_card_overview_card_overview_component__["a" /* CardOverviewComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__shared_authentication_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'decks',
        component: __WEBPACK_IMPORTED_MODULE_3__components_deck_overview_deck_overview_component__["a" /* DeckOverviewComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__shared_authentication_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'game',
        component: __WEBPACK_IMPORTED_MODULE_6__components_game_game_component__["a" /* GameComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__shared_authentication_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__components_user_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_5__components_user_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: '',
        redirectTo: '/cards',
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
);
//# sourceMappingURL=routing.js.map

/***/ }),

/***/ "../../../../../src/app/shared/alert/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertService = (function () {
    function AlertService() {
        this.alertMsg = "";
        this.alertActive = false;
    }
    AlertService.prototype.clearAlert = function () {
        this.alertMsg = "";
        this.alertActive = false;
    };
    AlertService.prototype.setAlert = function (txt) {
        this.alertMsg = txt;
        this.alertActive = true;
    };
    return AlertService;
}());
AlertService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AlertService);

//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/authentication/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_game_service__ = __webpack_require__("../../../../../src/app/shared/game/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_chat_service__ = __webpack_require__("../../../../../src/app/shared/game/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_socket_service__ = __webpack_require__("../../../../../src/app/shared/game/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_current_user_service__ = __webpack_require__("../../../../../src/app/shared/user/current-user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthenticationService = (function () {
    function AuthenticationService(http, currentUser, game, chat, socket) {
        this.http = http;
        this.currentUser = currentUser;
        this.game = game;
        this.chat = chat;
        this.socket = socket;
        this.isLogged = false;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post('/api/user/login', { username: username, password: password })
            .map(function (response) {
            var data = response.json();
            if (data.username) {
                _this.currentUser.setUser(data);
                _this.setLogged(true);
                _this.socket.connect();
                _this.game.init();
                _this.chat.init();
            }
            return data;
        });
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        return this.http.post('/api/user/logout', {})
            .subscribe(function (response) {
            _this.currentUser.removeUser();
            _this.setLogged(false);
            if (_this.socket.getSocket()) {
                _this.socket.getSocket().emit("disconnect-client", _this.game.getGame());
            }
        });
    };
    AuthenticationService.prototype.setLogged = function (isLogged) {
        this.isLogged = isLogged;
    };
    AuthenticationService.prototype.getLogged = function () {
        return this.isLogged;
    };
    AuthenticationService.prototype.isAdmin = function () {
        if (this.currentUser.isLogged()) {
            return this.currentUser.getUser().lvl == 3;
        }
        return false;
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__user_current_user_service__["a" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__user_current_user_service__["a" /* CurrentUserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__game_game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__game_game_service__["a" /* GameService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__game_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__game_chat_service__["a" /* ChatService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__game_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__game_socket_service__["a" /* SocketService */]) === "function" && _e || Object])
], AuthenticationService);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/authentication/guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_current_user_service__ = __webpack_require__("../../../../../src/app/shared/user/current-user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AdminGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, currentUser) {
        this.router = router;
        this.currentUser = currentUser;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.currentUser.isLogged()) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_current_user_service__["a" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_current_user_service__["a" /* CurrentUserService */]) === "function" && _b || Object])
], AuthGuard);

var AdminGuard = (function () {
    function AdminGuard(router, currentUser) {
        this.router = router;
        this.currentUser = currentUser;
    }
    AdminGuard.prototype.canActivate = function (route, state) {
        var user = this.currentUser.getUser();
        if (user) {
            // logged in so return true
            return (user.lvl == 3);
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AdminGuard;
}());
AdminGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__user_current_user_service__["a" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_current_user_service__["a" /* CurrentUserService */]) === "function" && _d || Object])
], AdminGuard);

var _a, _b, _c, _d;
//# sourceMappingURL=guard.js.map

/***/ }),

/***/ "../../../../../src/app/shared/card/cards.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_current_user_service__ = __webpack_require__("../../../../../src/app/shared/user/current-user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardsService = (function () {
    function CardsService(http, currentUser) {
        this.http = http;
        this.currentUser = currentUser;
        this.edit = false;
    }
    CardsService.prototype.getRaces = function () {
        return this.http.get('/api/cards/races', this.jwt()).map(function (response) { return response.json(); });
    };
    CardsService.prototype.getTypes = function () {
        return this.http.get('/api/cards/types', this.jwt()).map(function (response) { return response.json(); });
    };
    CardsService.prototype.getAllTroops = function () {
        return this.http.get('/api/cards/troops', this.jwt()).map(function (response) { return response.json(); });
    };
    CardsService.prototype.getAllCommanders = function () {
        return this.http.get('/api/cards/commanders', this.jwt()).map(function (response) { return response.json(); });
    };
    CardsService.prototype.getTroopById = function (id) {
        return this.http.get('/api/cards/troops/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    CardsService.prototype.getCommanderById = function (id) {
        return this.http.get('/api/cards/commanders/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    CardsService.prototype.createTroop = function (troop) {
        return this.http.post('/api/cards/troops', troop, this.jwt()).map(function (response) { return response.json(); });
    };
    CardsService.prototype.createCommander = function (commander) {
        return this.http.post('/api/cards/commanders', commander, this.jwt()).map(function (response) { return response.json(); });
    };
    CardsService.prototype.updateTroop = function (troop) {
        return this.http.put('/api/cards/troops/' + troop._id, troop, this.jwt()).map(function (response) { return response.json(); });
    };
    CardsService.prototype.updateCommander = function (commander) {
        return this.http.put('/api/cards/commanders/' + commander._id, commander, this.jwt()).map(function (response) { return response.json(); });
    };
    CardsService.prototype.deleteTroop = function (id) {
        return this.http.delete('/api/cards/troops/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    CardsService.prototype.deleteCommander = function (id) {
        return this.http.delete('/api/cards/commanders/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    // private helper methods
    CardsService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = this.currentUser.getUser();
        var authHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]();
        if (currentUser) {
            authHeader.append('Authorization', 'Bearer ' + currentUser.token);
        }
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ headers: authHeader });
    };
    return CardsService;
}());
CardsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_current_user_service__["a" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_current_user_service__["a" /* CurrentUserService */]) === "function" && _b || Object])
], CardsService);

var _a, _b;
//# sourceMappingURL=cards.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/card/commander.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cards_service__ = __webpack_require__("../../../../../src/app/shared/card/cards.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommanderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommanderService = (function () {
    function CommanderService(cards) {
        this.cards = cards;
        this.commander = { cardname: "", race: "", habilities: "", resources: 0, life: 1, movement: 1 };
        this.commanderFilter = { cardname: "", race: "" };
        this.commanderList = [];
    }
    CommanderService.prototype.setCommander = function (commander) {
        this.commander = commander;
    };
    CommanderService.prototype.clearCommander = function () {
        this.commander = { cardname: "", race: "", habilities: "", resources: 0, life: 1, movement: 1 };
    };
    CommanderService.prototype.clearFilter = function () {
        this.commanderFilter = { cardname: "", race: "" };
    };
    CommanderService.prototype.getCommanderList = function () {
        var _this = this;
        this.cards.getAllCommanders().subscribe(function (list) {
            _this.commanderList = list;
        });
    };
    return CommanderService;
}());
CommanderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cards_service__["a" /* CardsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cards_service__["a" /* CardsService */]) === "function" && _a || Object])
], CommanderService);

var _a;
//# sourceMappingURL=commander.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/card/races.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cards_service__ = __webpack_require__("../../../../../src/app/shared/card/cards.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RacesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RacesService = (function () {
    function RacesService(cards) {
        this.cards = cards;
        this.races = [];
    }
    RacesService.prototype.getRacesList = function () {
        var _this = this;
        if (this.races.length == 0) {
            this.cards.getRaces().subscribe(function (races) {
                _this.races = races;
            }, function (error) {
                console.log("Error getting races: " + error);
            });
        }
    };
    RacesService.prototype.getRace = function (id) {
        var _this = this;
        if (id) {
            if (this.races.length == 0) {
                this.cards.getRaces().subscribe(function (races) {
                    _this.races = races;
                    return _this.races.find(function (x) { return x._id === id; }).name;
                }, function (error) {
                    console.log("Error getting races: " + error);
                });
            }
            else
                return this.races.find(function (x) { return x._id === id; }).name;
        }
        else
            return '';
    };
    RacesService.prototype.getRaceColor = function (race) {
        var aux = this.getRace(race);
        switch (aux) {
            case "Salvajes": return "light-green accent-2";
            case "Arcanos": return "purple lighten-3";
            case "Tecnópatas": return "orange lighten-3";
            case "Eruditos": return "blue lighten-3";
            case "Engendros": return "grey lighten-1";
            case "Humanos": return "pink lighten-4";
        }
    };
    return RacesService;
}());
RacesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cards_service__["a" /* CardsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cards_service__["a" /* CardsService */]) === "function" && _a || Object])
], RacesService);

var _a;
//# sourceMappingURL=races.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/card/troop.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cards_service__ = __webpack_require__("../../../../../src/app/shared/card/cards.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TroopService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TroopService = (function () {
    function TroopService(cards) {
        this.cards = cards;
        this.troop = { cardname: "", race: "", habilities: "", cost: 0, attack: 0, life: 1, movement: 1 };
        this.troopFilter = { cardname: "", race: "", type: "" };
        this.troopList = [];
    }
    TroopService.prototype.setTroop = function (troop) {
        this.troop = troop;
    };
    TroopService.prototype.clearTroop = function () {
        this.troop = { cardname: "", race: "", habilities: "", cost: 0, attack: 0, life: 1, movement: 1 };
    };
    TroopService.prototype.clearFilter = function () {
        this.troopFilter = { cardname: "", race: "", type: "" };
    };
    TroopService.prototype.getTroopList = function () {
        var _this = this;
        this.cards.getAllTroops().subscribe(function (list) {
            _this.troopList = list;
        });
    };
    return TroopService;
}());
TroopService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cards_service__["a" /* CardsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cards_service__["a" /* CardsService */]) === "function" && _a || Object])
], TroopService);

var _a;
//# sourceMappingURL=troop.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/card/types.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cards_service__ = __webpack_require__("../../../../../src/app/shared/card/cards.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypesService = (function () {
    function TypesService(cards) {
        this.cards = cards;
        this.types = [];
    }
    TypesService.prototype.getTypesList = function () {
        var _this = this;
        if (this.types.length == 0) {
            this.cards.getTypes().subscribe(function (types) {
                _this.types = types;
            }, function (error) {
                console.log("Error getting types: " + error);
            });
        }
    };
    TypesService.prototype.getType = function (id) {
        var _this = this;
        if (id) {
            if (this.types.length == 0) {
                this.cards.getTypes().subscribe(function (types) {
                    _this.types = types;
                    return _this.types.find(function (x) { return x._id === id; }).name;
                }, function (error) {
                    console.log("Error getting types: " + error);
                });
            }
            else
                return this.types.find(function (x) { return x._id === id; }).name;
        }
        else
            return '';
    };
    TypesService.prototype.getTypeColor = function (type) {
        var aux = this.getType(type);
        switch (aux) {
            case "Creture": return "";
            case "Structure": return "";
            case "Action": return "";
        }
    };
    return TypesService;
}());
TypesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cards_service__["a" /* CardsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cards_service__["a" /* CardsService */]) === "function" && _a || Object])
], TypesService);

var _a;
//# sourceMappingURL=types.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/deck/decks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_current_user_service__ = __webpack_require__("../../../../../src/app/shared/user/current-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_commander_service__ = __webpack_require__("../../../../../src/app/shared/card/commander.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__card_troop_service__ = __webpack_require__("../../../../../src/app/shared/card/troop.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DecksService; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DecksService = (function () {
    function DecksService(http, currentUser, troopService, commanderService) {
        this.http = http;
        this.currentUser = currentUser;
        this.troopService = troopService;
        this.commanderService = commanderService;
        this.deckList = [];
        this.deck = { name: "", race: "", commander: { cardname: "", race: "" }, troops: [] };
        this.deckFilter = { name: "", race: "" };
        this.edit = false;
    }
    DecksService.prototype.getAllDecks = function () {
        var _this = this;
        this.http.get('/api/decks/decks', this.jwt()).map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.deckList = data;
        }, function (error) {
            console.log(error);
        });
    };
    DecksService.prototype.getOwnedDecks = function (id) {
        var _this = this;
        this.http.get('/api/decks/decks/' + id, this.jwt()).map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.deckList = data;
        }, function (error) {
            console.log(error);
        });
    };
    DecksService.prototype.getDeckById = function (id) {
        var _this = this;
        this.http.get('/api/decks/deck/' + id, this.jwt()).map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.deck = data;
        }, function (error) {
            console.log(error);
        });
    };
    DecksService.prototype.setDeck = function (deck) {
        this.deck = deck;
    };
    DecksService.prototype.clearCommander = function () {
        if (this.edit) {
            this.deck.commander = { cardname: "", race: "" };
            this.deck.race = "";
            this.commanderService.commanderFilter.race = "";
            this.troopService.troopFilter.race = "";
        }
    };
    DecksService.prototype.setCommander = function (commander) {
        this.deck.commander = commander;
        this.deck.race = commander.race;
        this.commanderService.commanderFilter.race = commander.race;
        this.troopService.troopFilter.race = commander.race;
    };
    DecksService.prototype.addTroop = function (troop) {
        var index = this.deck.troops.findIndex(function (x) { return x._id == troop._id; });
        if (index >= 0) {
            if (this.deck.troops[index].number != 4) {
                this.deck.troops[index].number++;
            }
        }
        else {
            var newTroop = __assign({}, troop, { number: 1 });
            this.deck.troops.push(newTroop);
        }
    };
    DecksService.prototype.removeTroop = function (troop) {
        if (this.edit) {
            var index = this.deck.troops.findIndex(function (x) { return x._id == troop._id; });
            if (index >= 0) {
                this.deck.troops[index].number--;
                if (this.deck.troops[index].number <= 0) {
                    this.deck.troops.splice(index, 1);
                }
            }
        }
    };
    DecksService.prototype.clearDeck = function () {
        this.deck = { name: "", race: "", commander: { cardname: "", race: "" }, troops: [] };
        this.commanderService.commanderFilter.race = "";
        this.troopService.troopFilter.race = "";
    };
    DecksService.prototype.editDeck = function () {
        this.edit = true;
        this.commanderService.commanderFilter.race = this.deck.race;
        this.troopService.troopFilter.race = this.deck.race;
    };
    DecksService.prototype.clearFilter = function () {
        this.deckFilter = { name: "", race: "" };
    };
    DecksService.prototype.insertDeck = function () {
        var _this = this;
        this.http.post('/api/decks/deck', this.deck, this.jwt()).map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.getAllDecks();
        }, function (error) {
            console.log(error);
        });
    };
    DecksService.prototype.updateDeck = function () {
        var _this = this;
        this.http.put('/api/decks/deck/' + this.deck._id, this.deck, this.jwt()).map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.getAllDecks();
        }, function (error) {
            console.log(error);
        });
    };
    DecksService.prototype.deleteDeck = function (id) {
        var _this = this;
        this.http.delete('/api/decks/deck/' + id, this.jwt()).map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.getAllDecks();
        }, function (error) {
            console.log(error);
        });
    };
    // private helper methods
    DecksService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = this.currentUser.getUser();
        var authHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]();
        if (currentUser) {
            authHeader.append('Authorization', 'Bearer ' + currentUser.token);
        }
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ headers: authHeader });
    };
    return DecksService;
}());
DecksService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_current_user_service__["a" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_current_user_service__["a" /* CurrentUserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__card_troop_service__["a" /* TroopService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__card_troop_service__["a" /* TroopService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__card_commander_service__["a" /* CommanderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__card_commander_service__["a" /* CommanderService */]) === "function" && _d || Object])
], DecksService);

var _a, _b, _c, _d;
//# sourceMappingURL=decks.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/game/action.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__("../../../../../src/app/shared/game/socket.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionService = (function () {
    function ActionService(socket) {
        this.socket = socket;
        this.showGlobal = true;
        this.globalChat = [];
        this.privateChat = [];
        this.userPrivateChat = "";
        this.currentPrivateChat = [];
        this.pendingMsg = [];
    }
    ActionService.prototype.moveCreature = function (from, to) {
        this.socket.getSocket().emit('creature-move', from, to);
    };
    return ActionService;
}());
ActionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */]) === "function" && _a || Object])
], ActionService);

var _a;
//# sourceMappingURL=action.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/game/board.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_createjs_module__ = __webpack_require__("../../../../createjs-module/createjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_createjs_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_createjs_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__action_service__ = __webpack_require__("../../../../../src/app/shared/game/action.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoardService = (function () {
    function BoardService(action) {
        var _this = this;
        this.action = action;
        this.boardHeightSize = 7;
        this.mapStartX = 195;
        this.mapStartY = 63;
        this.mapHexSize = 55;
        this.mapHexWidth = Math.sqrt(3) / 2 * 2 * this.mapHexSize;
        this.mapHexHeight = 3 / 4 * 2 * this.mapHexSize;
        this.offsetImg = 4;
        this.offsetTriangleHShort = 15;
        this.offsetTriangleHLong = 30;
        this.offsetTriangleV = 26;
        this.queue = new __WEBPACK_IMPORTED_MODULE_1_createjs_module__["LoadQueue"](true);
        this.startingPos = { x: 0, y: 0, initial: true };
        this.witness = false;
        this.mouseOverHex = function (event) {
            if (_this.myTurn) {
                event.target.graphics.clear().beginStroke("#f5f5f5").f("#64dd17").drawPolyStar(0, 0, _this.mapHexSize - 1, 6, 0, 30);
                _this.stage.update();
            }
        };
        this.mouseOutHex = function (event) {
            if (_this.myTurn) {
                event.target.graphics.clear().beginStroke("#212121").f("#ccff90").drawPolyStar(0, 0, _this.mapHexSize, 6, 0, 30);
                _this.stage.update();
            }
        };
        this.pressMove = function (event) {
            if (_this.startingPos.initial) {
                _this.startingPos.tile = _this.getTile(event.currentTarget.x, event.currentTarget.y);
                _this.startingPos.initial = false;
                _this.startingPos.user = _this.board[_this.startingPos.tile.name].user;
            }
            if (_this.user === _this.startingPos.user) {
                event.currentTarget.x = event.stageX;
                event.currentTarget.y = event.stageY;
                _this.stage.update();
            }
            else {
                _this.startingPos.initial = true;
            }
        };
        this.pressUp = function (event) {
            if (_this.user === _this.startingPos.user) {
                var endTile = _this.getTile(event.stageX, event.stageY);
                var target = {};
                if (endTile) {
                    target = _this.board[endTile.name];
                }
                if (endTile && Object.keys(target).length === 0 && _this.myTurn) {
                    _this.moveCreature(_this.startingPos.tile.name, endTile, event.currentTarget);
                }
                else {
                    event.currentTarget.x = _this.startingPos.tile.x;
                    event.currentTarget.y = _this.startingPos.tile.y;
                    _this.startingPos.initial = true;
                }
                _this.stage.update();
            }
        };
    }
    BoardService.prototype.getManifest = function () {
        var server = ".";
        var manifest = [
            { src: server + "/assets/images/circle/commanderAt.png", id: "commanderA" },
            { src: server + "/assets/images/circle/commanderBt.png", id: "commanderB" },
            { src: server + "/assets/images/circle/structureA.png", id: "structureA" },
            { src: server + "/assets/images/circle/structureB.png", id: "structureB" },
            { src: server + "/assets/images/circle/troopAt.png", id: "troopA" },
            { src: server + "/assets/images/circle/troopBt.png", id: "troopB" },
        ];
        return manifest;
    };
    BoardService.prototype.init = function (stage) {
        var _this = this;
        this.queue.on("complete", function (evt) {
            console.log("all files loaded");
            _this.updateBoard();
        }, this);
        this.queue.on("fileload", function (evt) {
            //console.log("fileLoaded: ");
            //console.log(evt)
        }, this);
        this.queue.on("error", function (evt) {
            console.log(evt);
        }, this);
        this.queue.on("progress", function (evt) {
            //console.log(evt);
        }, this);
        var manifest = this.getManifest();
        this.queue.loadManifest(manifest);
        this.stage = stage;
        this.stage.enableMouseOver();
        __WEBPACK_IMPORTED_MODULE_1_createjs_module__["Touch"].enable(this.stage);
        this.createMap();
        this.stage.update();
    };
    BoardService.prototype.createMap = function () {
        var hexX = 0;
        var hexY = 0;
        var hexY = 0;
        var itemsInRow = 0;
        for (var i = 1; i <= this.boardHeightSize; i++) {
            if (i > (this.boardHeightSize / 2 + 1)) {
                itemsInRow--;
            }
            else {
                itemsInRow++;
            }
            for (var j = 1; j <= itemsInRow; j++) {
                var offX = 0;
                if (i % 2 != 0) {
                    offX = 1 / 2 * this.mapHexWidth;
                }
                if (itemsInRow < Math.floor(this.boardHeightSize / 2)) {
                    offX += this.mapHexWidth;
                }
                hexX = this.mapStartX + (j - 1) * this.mapHexWidth + offX;
                hexY = this.mapStartY + (i - 1) * this.mapHexHeight;
                this.createHex(hexX, hexY, this.mapHexSize, i, j);
            }
        }
    };
    BoardService.prototype.createHex = function (x, y, size, i, j) {
        var hex = new __WEBPACK_IMPORTED_MODULE_1_createjs_module__["Shape"]();
        hex.id = 1;
        hex.name = i * 10 + j + "";
        hex.x = x;
        hex.y = y;
        hex.graphics.beginStroke("#212121").f("#ccff90").drawPolyStar(0, 0, size, 6, 0, 30);
        // add events for mouse hover on any hex
        hex.addEventListener("mouseover", this.mouseOverHex);
        hex.addEventListener("mouseout", this.mouseOutHex);
        this.stage.addChild(hex);
    };
    BoardService.prototype.updateBoard = function () {
        var childrenLength = this.stage.children.length;
        for (var i = 16; i < childrenLength; i++) {
            if (this.stage.children[i].id > 1) {
                this.stage.removeChildAt(i);
                i--;
                childrenLength--;
            }
        }
        var fillColor = "#ffffff";
        var strokeColor = "#000000";
        var user = "";
        for (var element in this.board) {
            if (this.board[element].user) {
                var item = this.stage.getChildByName(element);
                var tile;
                if (this.board[element].user == "userA") {
                    user = "A";
                    fillColor = "#ffffff";
                    strokeColor = "#000000";
                }
                else {
                    user = "B";
                    fillColor = "#000000";
                    strokeColor = "#ffffff";
                }
                var matrix = new __WEBPACK_IMPORTED_MODULE_1_createjs_module__["Matrix2D"]();
                matrix.translate(-this.mapHexWidth / 2 - this.offsetImg, -this.mapHexHeight / 2 - this.offsetImg);
                var creature = new __WEBPACK_IMPORTED_MODULE_1_createjs_module__["Container"]();
                creature.id = 2;
                creature.x = item.x;
                creature.y = item.y;
                var background = new __WEBPACK_IMPORTED_MODULE_1_createjs_module__["Shape"]();
                background.graphics.s(strokeColor).f(fillColor).drawPolyStar(0, 0, this.mapHexSize, 6, 0, 30);
                creature.addChild(background);
                var life = new __WEBPACK_IMPORTED_MODULE_1_createjs_module__["Shape"]();
                life.graphics.s(strokeColor).f("#4caf50").dp(this.offsetTriangleHShort, this.offsetTriangleV, this.mapHexSize / 2, 3, 0, 0);
                creature.addChild(life);
                if (this.board[element].commander) {
                    var textLife = new __WEBPACK_IMPORTED_MODULE_1_createjs_module__["Text"](this.board[element].commander.life, "15px Arial", "#ffffff");
                    textLife.x = this.offsetTriangleHShort - 7;
                    textLife.y = this.offsetTriangleV + 4;
                    textLife.textBaseline = "alphabetic";
                    creature.addChild(textLife);
                    tile = this.queue.getResult("commander" + user);
                    var resources = new __WEBPACK_IMPORTED_MODULE_1_createjs_module__["Shape"]();
                    resources.graphics.s(strokeColor).f("#ffc107").dp(this.offsetTriangleHLong, 0, this.mapHexSize / 2, 3, 0, 60);
                    creature.addChild(resources);
                    var textResources = new __WEBPACK_IMPORTED_MODULE_1_createjs_module__["Text"](this.board[element].commander.resources, "15px Arial", "#ffffff");
                    textResources.x = this.offsetTriangleHLong - 7;
                    textResources.y = 0 + 4;
                    textResources.textBaseline = "alphabetic";
                    creature.addChild(textResources);
                }
                else if (this.board[element].structure) {
                    tile = this.queue.getResult("structure" + user);
                }
                else if (this.board[element].troop) {
                    tile = this.queue.getResult("troop" + user);
                }
                var circle = new __WEBPACK_IMPORTED_MODULE_1_createjs_module__["Shape"]();
                circle.graphics.bf(tile, "no-repeat", matrix).drawCircle(0, 0, (this.mapHexSize * Math.sqrt(3) / 2));
                creature.addChild(circle);
                creature.on("pressmove", this.pressMove);
                creature.on("pressup", this.pressUp);
                this.stage.addChild(creature);
            }
        }
        this.stage.update();
    };
    BoardService.prototype.getTile = function (x, y) {
        for (var i = 0; i < this.stage.children.length; i++) {
            var p = this.stage.children[i].globalToLocal(x, y);
            if (this.stage.children[i].hitTest(p.x, p.y)) {
                if (this.stage.children[i].id > 1) {
                    return null;
                }
                return this.stage.children[i];
            }
        }
    };
    BoardService.prototype.getCreature = function (x, y) {
        for (var i = 0; i < this.stage.children.length; i++) {
            var p = this.stage.children[i].globalToLocal(x, y);
            if (this.stage.children[i].hitTest(p.x, p.y)) {
                if (this.stage.children[i].id != 1) {
                    return this.stage.children[i];
                }
            }
        }
    };
    BoardService.prototype.moveCreature = function (from, tileTo, creature) {
        var target = this.board[from];
        this.board[tileTo.name] = target;
        this.board[from] = {};
        creature.x = tileTo.x;
        creature.y = tileTo.y;
        this.action.moveCreature(from, tileTo.name);
    };
    BoardService.prototype.updatePosition = function (from, to) {
        var target = this.board[from];
        var newPos = this.stage.getChildByName(to);
        var creatureMoved = this.getCreature(newPos.x, newPos.y);
        if (!creatureMoved) {
            var oldPos = this.stage.getChildByName(from);
            var creatureToMove = this.getCreature(oldPos.x, oldPos.y);
            creatureToMove.x = newPos.x;
            creatureToMove.y = newPos.y;
        }
        else if (Object.keys(target).length !== 0) {
            var oldPos = this.stage.getChildByName(from);
            var creatureToMove = this.getCreature(oldPos.x, oldPos.y);
            var newPos_1 = this.stage.getChildByName(to);
            creatureToMove.x = newPos_1.x;
            creatureToMove.y = newPos_1.y;
            this.board[to] = target;
            this.board[from] = {};
        }
        this.startingPos.initial = true;
        this.stage.update();
    };
    return BoardService;
}());
BoardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__action_service__["a" /* ActionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__action_service__["a" /* ActionService */]) === "function" && _a || Object])
], BoardService);

var _a;
//# sourceMappingURL=board.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/game/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_current_user_service__ = __webpack_require__("../../../../../src/app/shared/user/current-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socket_service__ = __webpack_require__("../../../../../src/app/shared/game/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_alert_service__ = __webpack_require__("../../../../../src/app/shared/alert/alert.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatService = (function () {
    function ChatService(currentUser, socket, alert) {
        this.currentUser = currentUser;
        this.socket = socket;
        this.alert = alert;
        this.showGlobal = true;
        this.globalChat = [];
        this.privateChat = [];
        this.userPrivateChat = "";
        this.currentPrivateChat = [];
        this.pendingMsg = [];
    }
    ChatService.prototype.init = function () {
        var _this = this;
        this.socket.getSocket().on("global-msg", function (msg) {
            _this.globalChat.push(msg);
        });
        this.socket.getSocket().on("private-msg", function (user, msg) {
            var index = _this.privateChat.findIndex(function (x) { return x.username == user; });
            if (index < 0) {
                _this.privateChat.push({ username: user, msgList: [{ user: user, text: msg }] });
            }
            else {
                _this.privateChat[index].msgList.push({ user: user, text: msg });
            }
            if (_this.userPrivateChat != user || _this.showGlobal) {
                _this.pendingMsg.push(user);
                _this.alert.setAlert(user.toUpperCase() + " HAS WROTE YOU!");
            }
        });
    };
    ChatService.prototype.setPrivateChat = function (user) {
        if (!this.privateChat[this.privateChat.findIndex(function (x) { return x.username == user; })]) {
            this.privateChat.push({ username: user, msgList: [] });
        }
        this.currentPrivateChat = this.privateChat[this.privateChat.findIndex(function (x) { return x.username == user; })].msgList;
        this.showGlobal = false;
        if (this.pendingMsg.indexOf(user) >= 0) {
            this.pendingMsg.splice(this.pendingMsg.indexOf(user), 1);
        }
    };
    ChatService.prototype.sendGlobalMsg = function (text) {
        this.socket.getSocket().emit("global-msg", { user: this.currentUser.getUser().username, text: text });
    };
    ChatService.prototype.sendPrivateMsg = function (text) {
        var _this = this;
        this.socket.getSocket().emit("private-msg", this.currentUser.getUser().username, this.userPrivateChat, text);
        var index = this.privateChat.findIndex(function (x) { return x.username == _this.userPrivateChat; });
        if (index < 0) {
            this.privateChat.push({ username: this.currentUser.getUser().username, msgList: { user: this.userPrivateChat, text: text } });
        }
        else {
            this.privateChat[index].msgList.push({ user: this.currentUser.getUser().username, text: text });
        }
    };
    return ChatService;
}());
ChatService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_current_user_service__["a" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_current_user_service__["a" /* CurrentUserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__socket_service__["a" /* SocketService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__alert_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__alert_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], ChatService);

var _a, _b, _c;
//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/game/game.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_current_user_service__ = __webpack_require__("../../../../../src/app/shared/user/current-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deck_decks_service__ = __webpack_require__("../../../../../src/app/shared/deck/decks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__socket_service__ = __webpack_require__("../../../../../src/app/shared/game/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_alert_service__ = __webpack_require__("../../../../../src/app/shared/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__board_service__ = __webpack_require__("../../../../../src/app/shared/game/board.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GameService = (function () {
    function GameService(currentUser, decks, socket, alert, board) {
        this.currentUser = currentUser;
        this.decks = decks;
        this.socket = socket;
        this.alert = alert;
        this.board = board;
        this.challenge = false;
        this.waitForChallenge = false;
        this.gameStart = false;
        this.currentGame = {};
        this.hand = [];
        this.myTurn = false;
        this.game = {};
        board.myTurn = false;
    }
    GameService.prototype.getChallengeDetails = function () {
        return this.challengeDetails;
    };
    GameService.prototype.updateBoard = function () {
        this.board.updateBoard();
    };
    GameService.prototype.updateGame = function (game) {
        if (this.currentUser.getUser().username == this.game.userA) {
            this.currentGame.ownHand = game.handA;
            this.currentGame.enemyHand = game.handB;
            this.currentGame.ownDeck = game.deckA;
            this.currentGame.enemyDeck = game.deckB;
            this.currentGame.ownCommander = game.commanderA;
            this.currentGame.enemyCommander = game.commanderB;
        }
        else {
            this.currentGame.ownHand = game.handB;
            this.currentGame.enemyHand = game.handA;
            this.currentGame.ownDeck = game.deckB;
            this.currentGame.enemyDeck = game.deckA;
            this.currentGame.ownCommander = game.commanderB;
            this.currentGame.enemyCommander = game.commanderA;
        }
    };
    GameService.prototype.init = function () {
        var _this = this;
        this.socket.getSocket().on("challenge", function (details) {
            _this.challengeDetails = details;
            _this.challenge = true;
            _this.alert.setAlert("NEW CHALLENGE");
            _this.socket.getSocket().once("challengeCanceled", function (data) {
                _this.challengeDetails = "Challenge Request Canceled";
                _this.challenge = false;
            });
        });
        this.socket.getSocket().on("game-join", function (game) {
            _this.gameStart = true;
            _this.game = game;
            _this.updateGame(game);
            if (_this.currentUser.getUser().username == _this.game.userA) {
                _this.board.user = "userA";
            }
            else {
                _this.board.user = "userB";
            }
            _this.board.myTurn = _this.myTurn = _this.currentUser.getUser().username == _this.game.userTurn;
            _this.socket.getSocket().on("next-turn", function (game) {
                _this.game = game;
                _this.updateGame(game);
                _this.board.board = game.board;
                _this.updateBoard();
                _this.board.myTurn = _this.myTurn = _this.currentUser.getUser().username == _this.game.userTurn;
            });
            _this.socket.getSocket().on("game-hand", function (hand) {
                _this.hand = hand;
            });
            _this.socket.getSocket().on("game-info", function (game) {
                _this.game = game;
                _this.updateGame(game);
                // this.board.board = game.board;
                // this.updateBoard();
            });
            _this.socket.getSocket().on("creature-move", function (from, to) {
                _this.board.updatePosition(from, to);
            });
            _this.socket.getSocket().once("end-game", function (game) {
                _this.socket.getSocket().off('creature-move');
                _this.socket.getSocket().off('game-hand');
                _this.socket.getSocket().off('game-info');
                _this.socket.getSocket().off('next-turn');
                _this.game = {};
                _this.updateGame({});
                _this.gameStart = false;
            });
            _this.socket.getSocket().once("user-disconnected", function (user) {
                if (user == _this.game.userA || user == _this.game.userB) {
                    _this.game = {};
                    _this.updateGame({});
                    _this.gameStart = false;
                    _this.socket.getSocket().off('creature-move');
                    _this.socket.getSocket().off('game-hand');
                    _this.socket.getSocket().off('game-info');
                    _this.socket.getSocket().off('next-turn');
                    _this.socket.getSocket().off('end-game');
                    _this.alert.setAlert("User " + user + "has just disconnected");
                }
            });
        });
    };
    GameService.prototype.sendChallenge = function (user) {
        var _this = this;
        this.socket.getSocket().emit("challenge", this.currentUser.getUser().username, this.decks.deck._id, user.username);
        this.waitForChallenge = true;
        this.challengeDetails = "Waiting for " + user.username + " to accept the challenge";
        this.socket.getSocket().once("challengeAccepted", function (data) {
            _this.socket.getSocket().off("challengeDeclined");
            _this.challengeDetails = "Challenge Accepted";
            _this.waitForChallenge = false;
            _this.challenge = false;
        });
        this.socket.getSocket().once("challengeDeclined", function (data) {
            _this.socket.getSocket().off("challengeAccepted");
            _this.challengeDetails = "Challenge Declined";
            _this.waitForChallenge = false;
            _this.challenge = false;
        });
    };
    GameService.prototype.cancelChallenge = function (user) {
        this.socket.getSocket().emit("challengeCanceled", user);
        this.socket.getSocket().off("challengeDeclined");
        this.socket.getSocket().off("challengeAccepted");
        this.challengeDetails = "Challenge Canceled";
        this.waitForChallenge = false;
        this.challenge = false;
    };
    GameService.prototype.acceptChallenge = function () {
        this.socket.getSocket().emit("challengeAccepted", this.decks.deck._id);
        this.socket.getSocket().off("challengeDeclined");
        this.socket.getSocket().off("challengeAccepted");
        this.challengeDetails = "Challenge Accepted";
        this.waitForChallenge = false;
        this.challenge = false;
    };
    GameService.prototype.declineChallenge = function () {
        this.socket.getSocket().emit("challengeDeclined");
        this.socket.getSocket().off("challengeDeclined");
        this.socket.getSocket().off("challengeAccepted");
        this.challengeDetails = "Challenge Declined";
        this.waitForChallenge = false;
        this.challenge = false;
    };
    GameService.prototype.endTurn = function () {
        this.board.myTurn = this.myTurn = this.currentUser.getUser().username == this.game.userTurn;
        if (this.myTurn) {
            this.socket.getSocket().emit("next-turn", this.game);
        }
    };
    GameService.prototype.endGame = function () {
        this.socket.getSocket().emit("end-game", this.game);
    };
    GameService.prototype.getGame = function () {
        return this.game;
    };
    return GameService;
}());
GameService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_current_user_service__["a" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_current_user_service__["a" /* CurrentUserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__deck_decks_service__["a" /* DecksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__deck_decks_service__["a" /* DecksService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__socket_service__["a" /* SocketService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__alert_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__alert_alert_service__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__board_service__["a" /* BoardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__board_service__["a" /* BoardService */]) === "function" && _e || Object])
], GameService);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=game.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/game/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_current_user_service__ = __webpack_require__("../../../../../src/app/shared/user/current-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketService = (function () {
    function SocketService(currentUser) {
        this.currentUser = currentUser;
        this.url = '/';
        this.userList = [];
    }
    SocketService.prototype.getSocket = function () {
        return this.socket;
    };
    SocketService.prototype.connect = function () {
        var _this = this;
        if (this.socket) {
            this.socket.disconnect();
        }
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(this.url);
        this.socket.emit("user", this.currentUser.getUser());
        this.socket.on("userList", function (list) {
            _this.userList = list;
        });
        this.socket.on('disconnect-cient', function () {
            _this.socket.disconnect();
        });
    };
    SocketService.prototype.disconnect = function () {
        if (this.socket) {
            this.socket.disconnect();
        }
    };
    return SocketService;
}());
SocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_current_user_service__["a" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_current_user_service__["a" /* CurrentUserService */]) === "function" && _a || Object])
], SocketService);

var _a;
//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/commanderFilter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommanderFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CommanderFilterPipe = (function () {
    function CommanderFilterPipe() {
    }
    CommanderFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    CommanderFilterPipe.prototype.applyFilter = function (book, filter) {
        for (var field in filter) {
            if (filter[field]) {
                if (typeof filter[field] === 'string') {
                    if (book[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                        return false;
                    }
                }
                else if (typeof filter[field] === 'number') {
                    if (book[field] !== filter[field]) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    return CommanderFilterPipe;
}());
CommanderFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'commanderFilter',
        pure: false
    })
], CommanderFilterPipe);

//# sourceMappingURL=commanderFilter.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/deckFilter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeckFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DeckFilterPipe = (function () {
    function DeckFilterPipe() {
    }
    DeckFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    DeckFilterPipe.prototype.applyFilter = function (book, filter) {
        for (var field in filter) {
            if (filter[field]) {
                if (typeof filter[field] === 'string') {
                    if (book[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                        return false;
                    }
                }
                else if (typeof filter[field] === 'number') {
                    if (book[field] !== filter[field]) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    return DeckFilterPipe;
}());
DeckFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'deckFilter',
        pure: false
    })
], DeckFilterPipe);

//# sourceMappingURL=deckFilter.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/sort.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArraySortPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ArraySortPipe = (function () {
    function ArraySortPipe() {
    }
    ArraySortPipe.prototype.transform = function (array, field) {
        array.sort(function (a, b) {
            if (a[field] < b[field]) {
                return -1;
            }
            else if (a[field] > b[field]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    return ArraySortPipe;
}());
ArraySortPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: "sort"
    })
], ArraySortPipe);

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/troopFilter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TroopFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TroopFilterPipe = (function () {
    function TroopFilterPipe() {
    }
    TroopFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    TroopFilterPipe.prototype.applyFilter = function (book, filter) {
        for (var field in filter) {
            if (filter[field]) {
                if (typeof filter[field] === 'string') {
                    if (book[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                        return false;
                    }
                }
                else if (typeof filter[field] === 'number') {
                    if (book[field] !== filter[field]) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    return TroopFilterPipe;
}());
TroopFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'troopFilter',
        pure: false
    })
], TroopFilterPipe);

//# sourceMappingURL=troopFilter.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/truncateFilter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        // let limit = args.length > 0 ? parseInt(args[0], 10) : 10;
        // let trail = args.length > 1 ? args[1] : '...';
        var limit = args ? parseInt(args, 10) : 22;
        var trail = '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    return TruncatePipe;
}());
TruncatePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'truncate'
    })
], TruncatePipe);

//# sourceMappingURL=truncateFilter.js.map

/***/ }),

/***/ "../../../../../src/app/shared/user/current-user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentUserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurrentUserService = (function () {
    function CurrentUserService() {
        this.logged = false;
    }
    CurrentUserService.prototype.getDecks = function () {
    };
    CurrentUserService.prototype.setUser = function (user) {
        this.currentUser = user;
        this.logged = true;
    };
    CurrentUserService.prototype.getUser = function () {
        return this.currentUser;
    };
    CurrentUserService.prototype.removeUser = function () {
        this.currentUser = { username: "", firstname: "", lastname: "", lastname2: "", gender: "", age: 0, lvl: 1, email: "" };
        this.logged = false;
    };
    CurrentUserService.prototype.isAdmin = function () {
        return this.currentUser.lvl == 3;
    };
    CurrentUserService.prototype.isLogged = function () {
        return this.logged;
    };
    return CurrentUserService;
}());
CurrentUserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CurrentUserService);

//# sourceMappingURL=current-user.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__current_user_service__ = __webpack_require__("../../../../../src/app/shared/user/current-user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http, currentUser) {
        this.http = http;
        this.currentUser = currentUser;
    }
    UserService.prototype.getAll = function () {
        return this.http.get('/api/user/users', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (id) {
        return this.http.get('/api/user/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post('/api/user/users', user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.update = function (user, pws) {
        return this.http.put('/api/user/users/' + user._id + '/' + pws, user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete('/api/user/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    // private helper methods
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = this.currentUser.getUser();
        var authHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]();
        if (currentUser) {
            authHeader.append('Authorization', 'Bearer ' + currentUser.token);
        }
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ headers: authHeader });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__current_user_service__["a" /* CurrentUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__current_user_service__["a" /* CurrentUserService */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map