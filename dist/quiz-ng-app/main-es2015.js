(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_helpers/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/_helpers/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/loginService/authentication.service */ "./src/app/service/loginService/authentication.service.ts");




class AuthGuardService {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    // tslint:disable-next-line:max-line-length
    canActivate(route, state) {
        if (this.authenticationService.logIn) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class JwtInterceptor {
    constructor() { }
    intercept(request, next) {
        if (localStorage.getItem('currentUser') == null) {
            return next.handle(request);
        }
        const resultRequest = request.clone({
            headers: request.headers.append('authorization', `${JSON.parse(localStorage.getItem('currentUser')).token}`)
        });
        return next.handle(resultRequest);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'quiz-ng-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _profile_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/admin-users/admin-users.component */ "./src/app/profile/admin-users/admin-users.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _profile_pending_quizzes_pending_quizzes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/pending-quizzes/pending-quizzes.component */ "./src/app/profile/pending-quizzes/pending-quizzes.component.ts");
/* harmony import */ var _quiz_check_quiz_check_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quiz-check/quiz-check.component */ "./src/app/quiz-check/quiz-check.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _quiz_add_submitted_quiz_submitted_quiz_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./quiz-add/submitted-quiz/submitted-quiz.component */ "./src/app/quiz-add/submitted-quiz/submitted-quiz.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _quiz_quiz_dialog_quiz_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./quiz/quiz-dialog/quiz-dialog.component */ "./src/app/quiz/quiz-dialog/quiz-dialog.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _dashboard_achievements_list_achievements_list_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./dashboard/achievements-list/achievements-list.component */ "./src/app/dashboard/achievements-list/achievements-list.component.ts");
/* harmony import */ var _dashboard_rating_list_rating_list_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./dashboard/rating-list/rating-list.component */ "./src/app/dashboard/rating-list/rating-list.component.ts");
/* harmony import */ var _quizzes_page_quizzes_page_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./quizzes-page/quizzes-page.component */ "./src/app/quizzes-page/quizzes-page.component.ts");
/* harmony import */ var _game_game_question_game_question_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./game/game-question/game-question.component */ "./src/app/game/game-question/game-question.component.ts");
/* harmony import */ var _game_game_answer_game_answer_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./game/game-answer/game-answer.component */ "./src/app/game/game-answer/game-answer.component.ts");
/* harmony import */ var _game_game_optional_answer_game_optional_answer_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./game/game-optional-answer/game-optional-answer.component */ "./src/app/game/game-optional-answer/game-optional-answer.component.ts");
/* harmony import */ var _game_game_sequence_answer_game_sequence_answer_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./game/game-sequence-answer/game-sequence-answer.component */ "./src/app/game/game-sequence-answer/game-sequence-answer.component.ts");
/* harmony import */ var _game_game_string_answer_game_string_answer_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./game/game-string-answer/game-string-answer.component */ "./src/app/game/game-string-answer/game-string-answer.component.ts");
/* harmony import */ var _game_game_boolean_answer_game_boolean_answer_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./game/game-boolean-answer/game-boolean-answer.component */ "./src/app/game/game-boolean-answer/game-boolean-answer.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _game_game_start_game_start_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./game/game-start/game-start.component */ "./src/app/game/game-start/game-start.component.ts");
/* harmony import */ var _game_game_settings_game_settings_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./game/game-settings/game-settings.component */ "./src/app/game/game-settings/game-settings.component.ts");
/* harmony import */ var _game_game_finish_game_finish_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./game/game-finish/game-finish.component */ "./src/app/game/game-finish/game-finish.component.ts");
/* harmony import */ var _quiz_check_quiz_info_quiz_info_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./quiz-check/quiz-info/quiz-info.component */ "./src/app/quiz-check/quiz-info/quiz-info.component.ts");
/* harmony import */ var _quiz_check_question_check_question_check_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./quiz-check/question-check/question-check.component */ "./src/app/quiz-check/question-check/question-check.component.ts");
/* harmony import */ var _quiz_check_quiz_check_nav_quiz_check_nav_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./quiz-check/quiz-check-nav/quiz-check-nav.component */ "./src/app/quiz-check/quiz-check-nav/quiz-check-nav.component.ts");
/* harmony import */ var _set_password_set_password_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./set-password/set-password.component */ "./src/app/set-password/set-password.component.ts");
/* harmony import */ var _profile_played_game_played_game_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./profile/played-game/played-game.component */ "./src/app/profile/played-game/played-game.component.ts");
/* harmony import */ var _profile_played_game_game_result_dialog_game_result_dialog_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./profile/played-game/game-result-dialog/game-result-dialog.component */ "./src/app/profile/played-game/game-result-dialog/game-result-dialog.component.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/__ivy_ngcc__/modules/ngx-infinite-scroll.js");
/* harmony import */ var _service_canDeactivateGuardService_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./service/canDeactivateGuardService/can-deactivate-guard.service */ "./src/app/service/canDeactivateGuardService/can-deactivate-guard.service.ts");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _profile_my_quizzes_reject_messages_dialog_reject_messages_dialog_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./profile/my-quizzes/reject-messages-dialog/reject-messages-dialog.component */ "./src/app/profile/my-quizzes/reject-messages-dialog/reject-messages-dialog.component.ts");
/* harmony import */ var _profile_user_information_user_information_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./profile/user-information/user-information.component */ "./src/app/profile/user-information/user-information.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_friends_friends_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./profile/friends/friends.component */ "./src/app/profile/friends/friends.component.ts");
/* harmony import */ var _profile_my_quizzes_my_quizzes_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./profile/my-quizzes/my-quizzes.component */ "./src/app/profile/my-quizzes/my-quizzes.component.ts");
/* harmony import */ var _profile_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./profile/favorite/favorite.component */ "./src/app/profile/favorite/favorite.component.ts");
/* harmony import */ var _profile_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./profile/change-password/change-password.component */ "./src/app/profile/change-password/change-password.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _helpers_auth_guard_service__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./_helpers/auth-guard.service */ "./src/app/_helpers/auth-guard.service.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _quiz_add_question_question_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./quiz-add/question/question.component */ "./src/app/quiz-add/question/question.component.ts");
/* harmony import */ var _quiz_add_new_quiz_new_quiz_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./quiz-add/new-quiz/new-quiz.component */ "./src/app/quiz-add/new-quiz/new-quiz.component.ts");
/* harmony import */ var _quiz_add_add_questions_add_questions_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./quiz-add/add-questions/add-questions.component */ "./src/app/quiz-add/add-questions/add-questions.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _profile_profile_navigation_profile_navigation_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./profile/profile-navigation/profile-navigation.component */ "./src/app/profile/profile-navigation/profile-navigation.component.ts");
/* harmony import */ var _profile_left_bar_left_bar_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./profile/left-bar/left-bar.component */ "./src/app/profile/left-bar/left-bar.component.ts");
/* harmony import */ var _quiz_add_optional_answer_optional_answer_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./quiz-add/optional-answer/optional-answer.component */ "./src/app/quiz-add/optional-answer/optional-answer.component.ts");
/* harmony import */ var _quiz_add_boolean_answer_boolean_answer_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./quiz-add/boolean-answer/boolean-answer.component */ "./src/app/quiz-add/boolean-answer/boolean-answer.component.ts");
/* harmony import */ var _quiz_add_string_answer_string_answer_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./quiz-add/string-answer/string-answer.component */ "./src/app/quiz-add/string-answer/string-answer.component.ts");
/* harmony import */ var _quiz_add_answer_answer_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./quiz-add/answer/answer.component */ "./src/app/quiz-add/answer/answer.component.ts");
/* harmony import */ var _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./image-upload/image-upload.component */ "./src/app/image-upload/image-upload.component.ts");
/* harmony import */ var _quiz_add_sequence_answer_sequence_answer_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./quiz-add/sequence-answer/sequence-answer.component */ "./src/app/quiz-add/sequence-answer/sequence-answer.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./_helpers/jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");



























































































const quizCheckRoutes = [
    {
        path: 'quizinfo',
        component: _quiz_check_quiz_info_quiz_info_component__WEBPACK_IMPORTED_MODULE_53__["QuizInfoComponent"],
        outlet: 'quiznav'
    },
    {
        path: 'qAnda',
        component: _quiz_check_question_check_question_check_component__WEBPACK_IMPORTED_MODULE_54__["QuestionCheckComponent"],
        outlet: 'quiznav'
    }
];
const profileRoutes = [
    {
        path: 'profinfo',
        component: _profile_user_information_user_information_component__WEBPACK_IMPORTED_MODULE_63__["UserInformationComponent"],
        outlet: 'profilenav'
    },
    {
        path: 'adminUsers',
        component: _profile_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_6__["AdminUsersComponent"],
        outlet: 'profilenav'
    },
    {
        path: 'pendingQuizzes',
        component: _profile_pending_quizzes_pending_quizzes_component__WEBPACK_IMPORTED_MODULE_8__["PendingQuizzesComponent"],
        outlet: 'profilenav'
    },
    {
        path: 'friends',
        component: _profile_friends_friends_component__WEBPACK_IMPORTED_MODULE_65__["FriendsComponent"],
        outlet: 'profilenav'
    },
    {
        path: 'mygames',
        component: _profile_my_quizzes_my_quizzes_component__WEBPACK_IMPORTED_MODULE_66__["MyQuizzesComponent"],
        outlet: 'profilenav'
    },
    {
        path: 'favorite',
        component: _profile_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_67__["FavoriteComponent"],
        outlet: 'profilenav'
    },
    {
        path: 'changePass',
        component: _profile_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_68__["ChangePasswordComponent"],
        outlet: 'profilenav'
    },
    {
        path: 'played',
        component: _profile_played_game_played_game_component__WEBPACK_IMPORTED_MODULE_57__["PlayedGameComponent"],
        outlet: 'profilenav'
    }
];
const appRoutes = [
    {
        path: 'registration',
        component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_69__["RegistrationComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_70__["LoginComponent"]
    },
    {
        path: 'profile/:id', canActivate: [_helpers_auth_guard_service__WEBPACK_IMPORTED_MODULE_71__["AuthGuardService"]],
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_72__["ProfileComponent"],
        children: profileRoutes,
    },
    {
        path: 'friends', canActivate: [_helpers_auth_guard_service__WEBPACK_IMPORTED_MODULE_71__["AuthGuardService"]],
        component: _profile_friends_friends_component__WEBPACK_IMPORTED_MODULE_65__["FriendsComponent"]
    },
    {
        path: 'quizzes/:id',
        component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_5__["QuizComponent"]
    },
    {
        path: 'quiz',
        component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_5__["QuizComponent"]
    },
    {
        path: 'friends', canActivate: [_helpers_auth_guard_service__WEBPACK_IMPORTED_MODULE_71__["AuthGuardService"]],
        component: _profile_friends_friends_component__WEBPACK_IMPORTED_MODULE_65__["FriendsComponent"]
    },
    {
        path: 'quizzes/:id',
        component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_5__["QuizComponent"]
    },
    {
        path: 'question',
        component: _quiz_add_question_question_component__WEBPACK_IMPORTED_MODULE_73__["QuestionComponent"]
    },
    {
        path: 'new_quiz',
        component: _quiz_add_new_quiz_new_quiz_component__WEBPACK_IMPORTED_MODULE_74__["NewQuizComponent"]
    },
    {
        path: 'add_questions',
        component: _quiz_add_add_questions_add_questions_component__WEBPACK_IMPORTED_MODULE_75__["AddQuestionsComponent"]
    },
    {
        path: 'submitted_quiz',
        component: _quiz_add_submitted_quiz_submitted_quiz_component__WEBPACK_IMPORTED_MODULE_15__["SubmittedQuizComponent"]
    },
    {
        path: 'quizzes',
        component: _quizzes_page_quizzes_page_component__WEBPACK_IMPORTED_MODULE_42__["QuizzesPageComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["DashboardComponent"]
    },
    {
        path: 'pendingQuizzes', canActivate: [_helpers_auth_guard_service__WEBPACK_IMPORTED_MODULE_71__["AuthGuardService"]],
        component: _profile_pending_quizzes_pending_quizzes_component__WEBPACK_IMPORTED_MODULE_8__["PendingQuizzesComponent"]
    },
    {
        path: 'game/question/:gameId/:questionNumber',
        component: _game_game_question_game_question_component__WEBPACK_IMPORTED_MODULE_43__["GameQuestionComponent"],
        canDeactivate: [_service_canDeactivateGuardService_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_60__["CanDeactivateGuardService"]],
        runGuardsAndResolvers: 'always',
    },
    {
        path: 'game/settings/:quizId',
        component: _game_game_settings_game_settings_component__WEBPACK_IMPORTED_MODULE_51__["GameSettingsComponent"]
    },
    {
        path: 'game/start/:gameId',
        component: _game_game_start_game_start_component__WEBPACK_IMPORTED_MODULE_50__["GameStartComponent"],
        canDeactivate: [_service_canDeactivateGuardService_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_60__["CanDeactivateGuardService"]]
    },
    {
        path: 'game/finish/:gameId',
        component: _game_game_finish_game_finish_component__WEBPACK_IMPORTED_MODULE_52__["GameFinishComponent"]
    },
    {
        path: 'pendingQuizzes', canActivate: [_helpers_auth_guard_service__WEBPACK_IMPORTED_MODULE_71__["AuthGuardService"]],
        component: _profile_pending_quizzes_pending_quizzes_component__WEBPACK_IMPORTED_MODULE_8__["PendingQuizzesComponent"]
    },
    {
        path: 'checkquiz/:id', canActivate: [_helpers_auth_guard_service__WEBPACK_IMPORTED_MODULE_71__["AuthGuardService"]],
        component: _quiz_check_quiz_check_component__WEBPACK_IMPORTED_MODULE_9__["QuizCheckComponent"],
        children: quizCheckRoutes,
    },
    {
        path: 'adminUsers', canActivate: [_helpers_auth_guard_service__WEBPACK_IMPORTED_MODULE_71__["AuthGuardService"]],
        component: _profile_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_6__["AdminUsersComponent"]
    },
    {
        path: 'activate/:code',
        component: _set_password_set_password_component__WEBPACK_IMPORTED_MODULE_56__["SetPasswordComponent"]
    },
    {
        path: '',
        redirectTo: '/quizzes',
        pathMatch: 'full',
    }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_87__["JwtInterceptor"], multi: true }
    ], imports: [[
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_64__["RouterModule"].forRoot(appRoutes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_85__["BrowserAnimationsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_30__["MatButtonModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_27__["MatCardModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_86__["MatFormFieldModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__["MatProgressSpinnerModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_39__["LayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_33__["MatListModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_36__["MatButtonToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialogModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_49__["DragDropModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_39__["LayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__["MatProgressBarModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_59__["InfiniteScrollModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_61__["MatBadgeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _registration_registration_component__WEBPACK_IMPORTED_MODULE_69__["RegistrationComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_70__["LoginComponent"],
        _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_76__["NavigationComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_72__["ProfileComponent"],
        _profile_profile_navigation_profile_navigation_component__WEBPACK_IMPORTED_MODULE_77__["ProfileNavigationComponent"],
        _profile_left_bar_left_bar_component__WEBPACK_IMPORTED_MODULE_78__["LeftBarComponent"],
        _profile_user_information_user_information_component__WEBPACK_IMPORTED_MODULE_63__["UserInformationComponent"],
        _profile_friends_friends_component__WEBPACK_IMPORTED_MODULE_65__["FriendsComponent"],
        _profile_my_quizzes_my_quizzes_component__WEBPACK_IMPORTED_MODULE_66__["MyQuizzesComponent"],
        _profile_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_67__["FavoriteComponent"],
        _profile_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_68__["ChangePasswordComponent"],
        _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_5__["QuizComponent"],
        _quiz_add_question_question_component__WEBPACK_IMPORTED_MODULE_73__["QuestionComponent"],
        _quiz_add_optional_answer_optional_answer_component__WEBPACK_IMPORTED_MODULE_79__["OptionalAnswerComponent"],
        _quiz_add_boolean_answer_boolean_answer_component__WEBPACK_IMPORTED_MODULE_80__["BooleanAnswerComponent"],
        _quiz_add_string_answer_string_answer_component__WEBPACK_IMPORTED_MODULE_81__["StringAnswerComponent"],
        _quiz_add_sequence_answer_sequence_answer_component__WEBPACK_IMPORTED_MODULE_84__["SequenceAnswerComponent"],
        _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_83__["ImageUploadComponent"],
        _quiz_add_answer_answer_component__WEBPACK_IMPORTED_MODULE_82__["AnswerComponent"],
        _quiz_add_new_quiz_new_quiz_component__WEBPACK_IMPORTED_MODULE_74__["NewQuizComponent"],
        _quiz_add_add_questions_add_questions_component__WEBPACK_IMPORTED_MODULE_75__["AddQuestionsComponent"],
        _quiz_add_submitted_quiz_submitted_quiz_component__WEBPACK_IMPORTED_MODULE_15__["SubmittedQuizComponent"],
        _quizzes_page_quizzes_page_component__WEBPACK_IMPORTED_MODULE_42__["QuizzesPageComponent"],
        _quiz_quiz_dialog_quiz_dialog_component__WEBPACK_IMPORTED_MODULE_20__["QuizDialogComponent"],
        _quiz_add_add_questions_add_questions_component__WEBPACK_IMPORTED_MODULE_75__["AddQuestionsComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["DashboardComponent"],
        _dashboard_achievements_list_achievements_list_component__WEBPACK_IMPORTED_MODULE_40__["AchievementsListComponent"],
        _dashboard_rating_list_rating_list_component__WEBPACK_IMPORTED_MODULE_41__["RatingListComponent"],
        _game_game_question_game_question_component__WEBPACK_IMPORTED_MODULE_43__["GameQuestionComponent"],
        _game_game_answer_game_answer_component__WEBPACK_IMPORTED_MODULE_44__["GameAnswerComponent"],
        _game_game_optional_answer_game_optional_answer_component__WEBPACK_IMPORTED_MODULE_45__["GameOptionalAnswerComponent"],
        _game_game_sequence_answer_game_sequence_answer_component__WEBPACK_IMPORTED_MODULE_46__["GameSequenceAnswerComponent"],
        _game_game_string_answer_game_string_answer_component__WEBPACK_IMPORTED_MODULE_47__["GameStringAnswerComponent"],
        _game_game_boolean_answer_game_boolean_answer_component__WEBPACK_IMPORTED_MODULE_48__["GameBooleanAnswerComponent"],
        _game_game_start_game_start_component__WEBPACK_IMPORTED_MODULE_50__["GameStartComponent"],
        _game_game_settings_game_settings_component__WEBPACK_IMPORTED_MODULE_51__["GameSettingsComponent"],
        _game_game_finish_game_finish_component__WEBPACK_IMPORTED_MODULE_52__["GameFinishComponent"],
        _profile_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_6__["AdminUsersComponent"],
        _profile_pending_quizzes_pending_quizzes_component__WEBPACK_IMPORTED_MODULE_8__["PendingQuizzesComponent"],
        _quiz_check_quiz_check_component__WEBPACK_IMPORTED_MODULE_9__["QuizCheckComponent"],
        _quiz_check_question_check_question_check_component__WEBPACK_IMPORTED_MODULE_54__["QuestionCheckComponent"],
        _quiz_check_quiz_info_quiz_info_component__WEBPACK_IMPORTED_MODULE_53__["QuizInfoComponent"],
        _quiz_check_quiz_check_nav_quiz_check_nav_component__WEBPACK_IMPORTED_MODULE_55__["QuizCheckNavComponent"],
        _set_password_set_password_component__WEBPACK_IMPORTED_MODULE_56__["SetPasswordComponent"],
        _profile_played_game_played_game_component__WEBPACK_IMPORTED_MODULE_57__["PlayedGameComponent"],
        _profile_played_game_game_result_dialog_game_result_dialog_component__WEBPACK_IMPORTED_MODULE_58__["GameResultDialogComponent"],
        _dashboard_rating_list_rating_list_component__WEBPACK_IMPORTED_MODULE_41__["RatingListComponent"],
        _profile_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_6__["AdminUsersComponent"],
        _profile_pending_quizzes_pending_quizzes_component__WEBPACK_IMPORTED_MODULE_8__["PendingQuizzesComponent"],
        _quiz_check_quiz_check_component__WEBPACK_IMPORTED_MODULE_9__["QuizCheckComponent"],
        _quiz_check_question_check_question_check_component__WEBPACK_IMPORTED_MODULE_54__["QuestionCheckComponent"],
        _quiz_check_quiz_info_quiz_info_component__WEBPACK_IMPORTED_MODULE_53__["QuizInfoComponent"],
        _quiz_check_quiz_check_nav_quiz_check_nav_component__WEBPACK_IMPORTED_MODULE_55__["QuizCheckNavComponent"],
        _profile_my_quizzes_reject_messages_dialog_reject_messages_dialog_component__WEBPACK_IMPORTED_MODULE_62__["RejectMessagesDialogComponent"]], imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_64__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_85__["BrowserAnimationsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_30__["MatButtonModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_27__["MatCardModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_86__["MatFormFieldModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__["MatProgressSpinnerModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_39__["LayoutModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_33__["MatListModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_36__["MatButtonToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialogModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_49__["DragDropModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_39__["LayoutModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__["MatProgressBarModule"],
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_59__["InfiniteScrollModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_61__["MatBadgeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _registration_registration_component__WEBPACK_IMPORTED_MODULE_69__["RegistrationComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_70__["LoginComponent"],
                    _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_76__["NavigationComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_72__["ProfileComponent"],
                    _profile_profile_navigation_profile_navigation_component__WEBPACK_IMPORTED_MODULE_77__["ProfileNavigationComponent"],
                    _profile_left_bar_left_bar_component__WEBPACK_IMPORTED_MODULE_78__["LeftBarComponent"],
                    _profile_user_information_user_information_component__WEBPACK_IMPORTED_MODULE_63__["UserInformationComponent"],
                    _profile_friends_friends_component__WEBPACK_IMPORTED_MODULE_65__["FriendsComponent"],
                    _profile_my_quizzes_my_quizzes_component__WEBPACK_IMPORTED_MODULE_66__["MyQuizzesComponent"],
                    _profile_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_67__["FavoriteComponent"],
                    _profile_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_68__["ChangePasswordComponent"],
                    _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_5__["QuizComponent"],
                    _quiz_add_question_question_component__WEBPACK_IMPORTED_MODULE_73__["QuestionComponent"],
                    _quiz_add_optional_answer_optional_answer_component__WEBPACK_IMPORTED_MODULE_79__["OptionalAnswerComponent"],
                    _quiz_add_boolean_answer_boolean_answer_component__WEBPACK_IMPORTED_MODULE_80__["BooleanAnswerComponent"],
                    _quiz_add_string_answer_string_answer_component__WEBPACK_IMPORTED_MODULE_81__["StringAnswerComponent"],
                    _quiz_add_sequence_answer_sequence_answer_component__WEBPACK_IMPORTED_MODULE_84__["SequenceAnswerComponent"],
                    _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_83__["ImageUploadComponent"],
                    _quiz_add_answer_answer_component__WEBPACK_IMPORTED_MODULE_82__["AnswerComponent"],
                    _quiz_add_new_quiz_new_quiz_component__WEBPACK_IMPORTED_MODULE_74__["NewQuizComponent"],
                    _quiz_add_add_questions_add_questions_component__WEBPACK_IMPORTED_MODULE_75__["AddQuestionsComponent"],
                    _quiz_add_submitted_quiz_submitted_quiz_component__WEBPACK_IMPORTED_MODULE_15__["SubmittedQuizComponent"],
                    _quizzes_page_quizzes_page_component__WEBPACK_IMPORTED_MODULE_42__["QuizzesPageComponent"],
                    _quiz_quiz_dialog_quiz_dialog_component__WEBPACK_IMPORTED_MODULE_20__["QuizDialogComponent"],
                    _quiz_add_add_questions_add_questions_component__WEBPACK_IMPORTED_MODULE_75__["AddQuestionsComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["DashboardComponent"],
                    _dashboard_achievements_list_achievements_list_component__WEBPACK_IMPORTED_MODULE_40__["AchievementsListComponent"],
                    _dashboard_rating_list_rating_list_component__WEBPACK_IMPORTED_MODULE_41__["RatingListComponent"],
                    _game_game_question_game_question_component__WEBPACK_IMPORTED_MODULE_43__["GameQuestionComponent"],
                    _game_game_answer_game_answer_component__WEBPACK_IMPORTED_MODULE_44__["GameAnswerComponent"],
                    _game_game_optional_answer_game_optional_answer_component__WEBPACK_IMPORTED_MODULE_45__["GameOptionalAnswerComponent"],
                    _game_game_sequence_answer_game_sequence_answer_component__WEBPACK_IMPORTED_MODULE_46__["GameSequenceAnswerComponent"],
                    _game_game_string_answer_game_string_answer_component__WEBPACK_IMPORTED_MODULE_47__["GameStringAnswerComponent"],
                    _game_game_boolean_answer_game_boolean_answer_component__WEBPACK_IMPORTED_MODULE_48__["GameBooleanAnswerComponent"],
                    _game_game_start_game_start_component__WEBPACK_IMPORTED_MODULE_50__["GameStartComponent"],
                    _game_game_settings_game_settings_component__WEBPACK_IMPORTED_MODULE_51__["GameSettingsComponent"],
                    _game_game_finish_game_finish_component__WEBPACK_IMPORTED_MODULE_52__["GameFinishComponent"],
                    _profile_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_6__["AdminUsersComponent"],
                    _profile_pending_quizzes_pending_quizzes_component__WEBPACK_IMPORTED_MODULE_8__["PendingQuizzesComponent"],
                    _quiz_check_quiz_check_component__WEBPACK_IMPORTED_MODULE_9__["QuizCheckComponent"],
                    _quiz_check_question_check_question_check_component__WEBPACK_IMPORTED_MODULE_54__["QuestionCheckComponent"],
                    _quiz_check_quiz_info_quiz_info_component__WEBPACK_IMPORTED_MODULE_53__["QuizInfoComponent"],
                    _quiz_check_quiz_check_nav_quiz_check_nav_component__WEBPACK_IMPORTED_MODULE_55__["QuizCheckNavComponent"],
                    _set_password_set_password_component__WEBPACK_IMPORTED_MODULE_56__["SetPasswordComponent"],
                    _profile_played_game_played_game_component__WEBPACK_IMPORTED_MODULE_57__["PlayedGameComponent"],
                    _profile_played_game_game_result_dialog_game_result_dialog_component__WEBPACK_IMPORTED_MODULE_58__["GameResultDialogComponent"],
                    _dashboard_rating_list_rating_list_component__WEBPACK_IMPORTED_MODULE_41__["RatingListComponent"],
                    _profile_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_6__["AdminUsersComponent"],
                    _profile_pending_quizzes_pending_quizzes_component__WEBPACK_IMPORTED_MODULE_8__["PendingQuizzesComponent"],
                    _quiz_check_quiz_check_component__WEBPACK_IMPORTED_MODULE_9__["QuizCheckComponent"],
                    _quiz_check_question_check_question_check_component__WEBPACK_IMPORTED_MODULE_54__["QuestionCheckComponent"],
                    _quiz_check_quiz_info_quiz_info_component__WEBPACK_IMPORTED_MODULE_53__["QuizInfoComponent"],
                    _quiz_check_quiz_check_nav_quiz_check_nav_component__WEBPACK_IMPORTED_MODULE_55__["QuizCheckNavComponent"],
                    _profile_my_quizzes_reject_messages_dialog_reject_messages_dialog_component__WEBPACK_IMPORTED_MODULE_62__["RejectMessagesDialogComponent"]
                ],
                imports: [
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_64__["RouterModule"].forRoot(appRoutes),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_85__["BrowserAnimationsModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_30__["MatButtonModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_27__["MatCardModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_86__["MatFormFieldModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__["MatProgressSpinnerModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_39__["LayoutModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_33__["MatListModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_36__["MatButtonToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialogModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_49__["DragDropModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_39__["LayoutModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__["MatProgressBarModule"],
                    ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_59__["InfiniteScrollModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_61__["MatBadgeModule"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_87__["JwtInterceptor"], multi: true }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                entryComponents: [_quiz_add_optional_answer_optional_answer_component__WEBPACK_IMPORTED_MODULE_79__["OptionalAnswerComponent"], _quiz_add_boolean_answer_boolean_answer_component__WEBPACK_IMPORTED_MODULE_80__["BooleanAnswerComponent"], _quiz_add_string_answer_string_answer_component__WEBPACK_IMPORTED_MODULE_81__["StringAnswerComponent"], _quiz_add_sequence_answer_sequence_answer_component__WEBPACK_IMPORTED_MODULE_84__["SequenceAnswerComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/achievements-list/achievements-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/achievements-list/achievements-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: AchievementsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AchievementsListComponent", function() { return AchievementsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_achievementsService_achievements_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/achievementsService/achievements.service */ "./src/app/service/achievementsService/achievements.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");









function AchievementsListComponent_mat_list_0_div_4_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-progress-bar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const achievement_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](achievement_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](achievement_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", achievement_r3.progress);
} }
function AchievementsListComponent_mat_list_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AchievementsListComponent_mat_list_0_div_4_mat_list_item_1_Template, 9, 3, "mat-list-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const achievement_r3 = ctx.$implicit;
    const category_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", achievement_r3.categoryId == category_r1.id);
} }
function AchievementsListComponent_mat_list_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AchievementsListComponent_mat_list_0_div_4_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, category_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx_r0.achievements));
} }
class AchievementsListComponent {
    constructor(achievementsService) {
        this.achievementsService = achievementsService;
    }
    ngOnInit() {
        this.categories = this.achievementsService.getAchievementCategories();
        this.achievements = this.achievementsService.getAchievementsByUser(this.userId);
    }
}
AchievementsListComponent.ɵfac = function AchievementsListComponent_Factory(t) { return new (t || AchievementsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_achievementsService_achievements_service__WEBPACK_IMPORTED_MODULE_1__["AchievementsService"])); };
AchievementsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AchievementsListComponent, selectors: [["app-achievements-list"]], inputs: { userId: "userId" }, decls: 2, vars: 3, consts: [["autosize", "", 4, "ngFor", "ngForOf"], ["autosize", ""], ["mat-subheader", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["mat-list-icon", ""], ["mat-line", ""], ["mode", "determinate", 3, "value"]], template: function AchievementsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AchievementsListComponent_mat_list_0_Template, 7, 6, "mat-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.categories));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListSubheaderCssMatStyler"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatLine"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9hY2hpZXZlbWVudHMtbGlzdC9hY2hpZXZlbWVudHMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AchievementsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-achievements-list',
                templateUrl: './achievements-list.component.html',
                styleUrls: ['./achievements-list.component.css']
            }]
    }], function () { return [{ type: _service_achievementsService_achievements_service__WEBPACK_IMPORTED_MODULE_1__["AchievementsService"] }]; }, { userId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['userId']
        }] }); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_dashboardService_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../service/dashboardService/dashboard.service */ "./src/app/service/dashboardService/dashboard.service.ts");
/* harmony import */ var _service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../service/categoryService/category.service */ "./src/app/service/categoryService/category.service.ts");
/* harmony import */ var _service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../service/profileService/profile.service */ "./src/app/service/profileService/profile.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _service_current_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/current-user.service */ "./src/app/service/current-user.service.ts");
/* harmony import */ var _service_announcementService_announcement_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/announcementService/announcement.service */ "./src/app/service/announcementService/announcement.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _rating_list_rating_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rating-list/rating-list.component */ "./src/app/dashboard/rating-list/rating-list.component.ts");
/* harmony import */ var _achievements_list_achievements_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./achievements-list/achievements-list.component */ "./src/app/dashboard/achievements-list/achievements-list.component.ts");




















const _c0 = ["ratingNavbar"];
const _c1 = ["achievementsNavbar"];
function DashboardComponent_mat_drawer_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClick", function DashboardComponent_mat_drawer_1_Template_mat_drawer_backdropClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.ratingClose(); })("keydown.escape", function DashboardComponent_mat_drawer_1_Template_mat_drawer_keydown_escape_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.ratingClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_mat_drawer_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.ratingClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-rating-list", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userId", ctx_r0.userId)("ratingPos", ctx_r0.rating);
} }
function DashboardComponent_mat_drawer_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer", 25, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClick", function DashboardComponent_mat_drawer_2_Template_mat_drawer_backdropClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.achievementsClose(); })("keydown.escape", function DashboardComponent_mat_drawer_2_Template_mat_drawer_keydown_escape_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.achievementsClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_mat_drawer_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.achievementsClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-achievements-list", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userId", ctx_r1.userId);
} }
function DashboardComponent_mat_card_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quiz_r19 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r2.getQuizImage(quiz_r19.id)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](quiz_r19.name);
} }
function DashboardComponent_h3_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No recent activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_mat_option_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r21.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r21.name, " ");
} }
function DashboardComponent_mat_card_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quiz_r22 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r5.getQuizImage(quiz_r22.id)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](quiz_r22.name);
} }
function DashboardComponent_mat_card_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quiz_r24 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r6.getQuizImage(quiz_r24.id)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](quiz_r24.name);
} }
function DashboardComponent_h3_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Play some games to get recommendations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_67_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Administrator announcement");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const annon_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 3, annon_r26.date, "shortTime"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, annon_r26.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", annon_r26.text, " ");
} }
function DashboardComponent_div_67_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Friends activities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const annon_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 3, annon_r26.date, "shortTime"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, annon_r26.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", annon_r26.text, " ");
} }
function DashboardComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_67_mat_card_1_Template, 13, 8, "mat-card", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_67_ng_template_2_Template, 13, 8, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const annon_r26 = ctx.$implicit;
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !annon_r26.generated)("ngIfElse", _r28);
} }
class DashboardComponent {
    constructor(dashboardService, categoryService, profileService, sanitizer, currentUserService, annoService, router) {
        this.dashboardService = dashboardService;
        this.categoryService = categoryService;
        this.profileService = profileService;
        this.sanitizer = sanitizer;
        this.currentUserService = currentUserService;
        this.annoService = annoService;
        this.router = router;
        this.ratingIsOpen = false;
        this.achievementIsOpen = false;
        this.maxCards = 5;
        this.userId = parseInt(this.currentUserService.getCurrentUser().id);
        this.imageMap = new Map();
        this.categories = this.categoryService.getCategories();
        this.quizCategory = -1;
    }
    ngOnInit() {
        this.profileService.getProfileImage(this.userId.toString()).subscribe((resp => this.profileImage = resp.text));
        this.recentQuizzes = this.dashboardService.getRecentQuizzes(this.userId, this.maxCards);
        this.topQuizzes = this.dashboardService.getTopQuizzes(this.maxCards);
        this.recommendationQuizzes = this.dashboardService.getRecommendations(this.userId, this.maxCards);
        this.rating = this.dashboardService.getRating(this.userId);
        this.achievementsTotal = this.dashboardService.getAchievementsTotal();
        this.achievementsForUser = this.dashboardService.getAchievementsForUser(this.userId);
        this.annoService.getAnnouncement().subscribe(resp => this.announcement = resp);
    }
    achievementsOpen() {
        if (this.ratingIsOpen) {
            this.ratingNavbar.close();
            this.ratingIsOpen = false;
        }
        this.achievementIsOpen = true;
        setTimeout(() => {
            this.achievementsNavbar.open();
        }, 0);
    }
    ratingOpen() {
        if (this.achievementIsOpen) {
            this.achievementsNavbar.close();
            this.achievementIsOpen = false;
        }
        this.ratingIsOpen = true;
        setTimeout(() => {
            this.ratingNavbar.open();
        }, 0);
    }
    achievementsClose() {
        this.achievementsNavbar.close();
        this.achievementIsOpen = false;
    }
    ratingClose() {
        this.ratingNavbar.close();
        this.ratingIsOpen = false;
    }
    closeAll() {
        if (this.ratingIsOpen) {
            this.ratingNavbar.close();
        }
        if (this.achievementIsOpen) {
            this.achievementsNavbar.close();
        }
    }
    onQuizCategorySelected(value) {
        if (value === -1) {
            this.topQuizzes = this.dashboardService.getTopQuizzes(this.maxCards);
        }
        else {
            this.topQuizzes = this.dashboardService.getTopQuizzesByCategory(value, this.maxCards);
        }
    }
    getQuizImage(quizId) {
        if (!this.imageMap.get(quizId)) {
            this.imageMap.set(quizId, this.dashboardService.getQuizImage(quizId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => resp.text)));
        }
        return this.imageMap.get(quizId);
    }
    goToProfile() {
        this.router.navigate(['profile', this.currentUserService.getCurrentUser().id, { outlets: { profilenav: 'profinfo' } }]);
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_dashboardService_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_current_user_service__WEBPACK_IMPORTED_MODULE_6__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_announcementService_announcement_service__WEBPACK_IMPORTED_MODULE_7__["AnnouncementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ratingNavbar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.achievementsNavbar = _t.first);
    } }, decls: 68, vars: 33, consts: [[1, "achievement-container"], ["mode", "side", "position", "end", 3, "backdropClick", "keydown.escape", 4, "ngIf"], ["fxLayout.gt-sm", "row", "fxLayout.gt-xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "3rem", "fxLayoutAlign", "center", 1, "background"], ["fxLayout", "column", "fxLayoutGap", "1rem", "fxLayoutAlign", "starts"], ["id", "profile-card"], ["fxLayout", "row", "fxLayoutAlign", "space-around"], ["mat-card-image", "", "id", "profile-img", "alt", "Profile image", "fxFlexAlign", "end", 3, "src"], ["fxLayoutAlign", "space-around"], ["mat-raised-button", "", "id", "profile-button", "fxFlexAlign", "end", "color", "accent", 1, "text", 3, "click"], ["id", "rating-card", 3, "click"], [1, "text"], [1, "rating"], ["id", "achievement-card", 3, "click"], ["fxLayout", "column", "fxLayoutGap", "1rem", "fxLayoutAlign", "start"], ["fxLayout.gt-xs", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "1rem", "fxLayoutAlign", "start"], ["class", "game-card", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["fxLayout.gt-xs", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "1rem", "fxLayoutAlign", "space-between"], [3, "value", "valueChange", "selectionChange"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout.gt-xs", "row", "fxLayout.xs", "column", "fxLayoutGap", "1rem", "fxLayoutAlign", "space-between"], ["id", "announcements-block"], ["fxLayout", "column", "fxLayoutGap", "1rem", "fxLayoutAlign", "center", 1, "announcements-list"], [4, "ngFor", "ngForOf"], ["mode", "side", "position", "end", 3, "backdropClick", "keydown.escape"], ["ratingNavbar", ""], ["mat-flat-button", "", "color", "accent", 3, "click"], [3, "userId", "ratingPos"], ["achievementsNavbar", ""], [3, "userId"], [1, "game-card"], ["mat-card-image", "", "onerror", "this.onerror=null; this.src='https://material.angular.io/assets/img/examples/shiba2.jpg'", "alt", "Game image", "fxFlexAlign", "end", 1, "card-image", 3, "src"], ["fxLayout", "column", "fxLayoutAlign", "space-between", "fxFlexAlign", "center", 1, "quiz-name"], ["mat-card-image", "", "onerror", "this.onerror=null; this.src='https://material.angular.io/assets/img/examples/shiba2.jpg'", "alt", "Quiz image", "fxFlexAlign", "end", 1, "card-image", 3, "src"], ["style", "border: 2px solid #ff0000", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [2, "border", "2px solid #ff0000"], [2, "border", "2px solid #008000"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_mat_drawer_1_Template, 6, 2, "mat-drawer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_mat_drawer_2_Template, 6, 1, "mat-drawer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-actions", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_12_listener() { return ctx.goToProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Go to Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_mat_card_click_14_listener() { return ctx.ratingOpen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "TH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-footer", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_mat_card_click_24_listener() { return ctx.achievementsOpen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-footer", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Achievements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Recent activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DashboardComponent_mat_card_37_Template, 6, 4, "mat-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, DashboardComponent_h3_39_Template, 2, 0, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Top quizzes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Select category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DashboardComponent_Template_mat_select_valueChange_47_listener($event) { return ctx.quizCategory = $event; })("selectionChange", function DashboardComponent_Template_mat_select_selectionChange_47_listener($event) { return ctx.onQuizCategorySelected($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "View all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, DashboardComponent_mat_option_50_Template, 2, 2, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, DashboardComponent_mat_card_53_Template, 6, 4, "mat-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Recommendations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, DashboardComponent_mat_card_58_Template, 6, 4, "mat-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, DashboardComponent_h3_60_Template, 2, 0, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Announcements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, DashboardComponent_div_67_Template, 4, 2, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ratingIsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.achievementIsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 15, ctx.rating));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 17, ctx.achievementsForUser), " / ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 19, ctx.achievementsTotal), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 21, ctx.recentQuizzes));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 23, ctx.recentQuizzes) == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.quizCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0 - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 25, ctx.categories));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 27, ctx.topQuizzes));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 29, ctx.recommendationQuizzes));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 31, ctx.recommendationQuizzes) == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.announcement);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawerContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawerContent"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardImage"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardFooter"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawer"], _rating_list_rating_list_component__WEBPACK_IMPORTED_MODULE_17__["RatingListComponent"], _achievements_list_achievements_list_component__WEBPACK_IMPORTED_MODULE_18__["AchievementsListComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardSubtitle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: [".background[_ngcontent-%COMP%] {\r\n  background-color: #f5f5f5;\r\n  min-height: 50rem;\r\n  width: 100%;\r\n  padding: 1rem 0 5rem 0;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\r\n\r\n.dashboard-card[_ngcontent-%COMP%] {\r\n  top: 15px;\r\n  left: 15px;\r\n  right: 15px;\r\n  bottom: 15px;\r\n  margin: 0px 10px 10px 10px;\r\n}\r\n\r\n.dashboard-card-content[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], div[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\n#profile-card[_ngcontent-%COMP%] {\r\n  width: 10rem;\r\n  height: 10rem;\r\n}\r\n\r\n#profile-img[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  background-color: aliceblue;\r\n  width: 6.5rem;\r\n  height: 6.5rem;\r\n  margin: 0;\r\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba2.jpg\");\r\n}\r\n\r\n#rating-card[_ngcontent-%COMP%], #achievement-card[_ngcontent-%COMP%] {\r\n  width: 10rem;\r\n  height: 4rem;\r\n  margin: 0;\r\n  padding: 1rem;\r\n  text-align: center;\r\n}\r\n\r\n.game-card[_ngcontent-%COMP%] {\r\n  width: 10rem;\r\n  height: 8rem;\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n  color: #424242;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\n.rating[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\nsup[_ngcontent-%COMP%] {\r\n  vertical-align: super;\r\n  font-size: 0.5rem;\r\n}\r\n\r\n.quiz-name[_ngcontent-%COMP%] {\r\n  color: #424242;\r\n  padding-bottom: 1rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.card-image[_ngcontent-%COMP%] {\r\n  height: 95%;\r\n  margin-bottom: 0;\r\n}\r\n\r\n#profile-button[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n}\r\n\r\nmat-drawer[_ngcontent-%COMP%] {\r\n  width: 25rem;\r\n}\r\n\r\n.categories[_ngcontent-%COMP%] {\r\n  width: 10rem;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.announcements-list[_ngcontent-%COMP%] {\r\n  width: 64rem;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 0px;\r\n  height: 0px;\r\n  background: transparent;\r\n}\r\n\r\n#announcements-block[_ngcontent-%COMP%] {\r\n  height: 500px;\r\n  overflow: scroll;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTs7O0dBR0c7O0FBRUg7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsY0FBYztFQUNkLFNBQVM7RUFDVCxtRkFBbUY7QUFDckY7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIG1pbi1oZWlnaHQ6IDUwcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFyZW0gMCA1cmVtIDA7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY2FyZCB7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgYm90dG9tOiAxNXB4O1xyXG4gIG1hcmdpbjogMHB4IDEwcHggMTBweCAxMHB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oMiwgZGl2IHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qXHJcbm1hdC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufSAqL1xyXG5cclxuI3Byb2ZpbGUtY2FyZCB7XHJcbiAgd2lkdGg6IDEwcmVtO1xyXG4gIGhlaWdodDogMTByZW07XHJcbn1cclxuXHJcbiNwcm9maWxlLWltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICB3aWR0aDogNi41cmVtO1xyXG4gIGhlaWdodDogNi41cmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTIuanBnXCIpO1xyXG59XHJcblxyXG4jcmF0aW5nLWNhcmQsICNhY2hpZXZlbWVudC1jYXJkIHtcclxuICB3aWR0aDogMTByZW07XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdhbWUtY2FyZCB7XHJcbiAgd2lkdGg6IDEwcmVtO1xyXG4gIGhlaWdodDogOHJlbTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGNvbG9yOiAjNDI0MjQyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJhdGluZyB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5zdXAge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcclxuICBmb250LXNpemU6IDAuNXJlbTtcclxufVxyXG5cclxuLnF1aXotbmFtZSB7XHJcbiAgY29sb3I6ICM0MjQyNDI7XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jYXJkLWltYWdlIHtcclxuICBoZWlnaHQ6IDk1JTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4jcHJvZmlsZS1idXR0b24ge1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbm1hdC1kcmF3ZXIge1xyXG4gIHdpZHRoOiAyNXJlbTtcclxufVxyXG5cclxuLmNhdGVnb3JpZXMge1xyXG4gIHdpZHRoOiAxMHJlbTtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmFubm91bmNlbWVudHMtbGlzdCB7XHJcbiAgd2lkdGg6IDY0cmVtO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMHB4O1xyXG4gIGhlaWdodDogMHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jYW5ub3VuY2VtZW50cy1ibG9jayB7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _service_dashboardService_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] }, { type: _service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] }, { type: _service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }, { type: _service_current_user_service__WEBPACK_IMPORTED_MODULE_6__["CurrentUserService"] }, { type: _service_announcementService_announcement_service__WEBPACK_IMPORTED_MODULE_7__["AnnouncementService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, { ratingNavbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ratingNavbar']
        }], achievementsNavbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['achievementsNavbar']
        }] }); })();


/***/ }),

/***/ "./src/app/dashboard/rating-list/rating-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/rating-list/rating-list.component.ts ***!
  \****************************************************************/
/*! exports provided: RatingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingListComponent", function() { return RatingListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_ratingService_rating_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/ratingService/rating.service */ "./src/app/service/ratingService/rating.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");







function RatingListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RatingListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", user_r16.id == ctx_r1.userId ? "yellow" : "black");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r17 + 1);
} }
function RatingListComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RatingListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r18.name);
} }
function RatingListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Surname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RatingListComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r19 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", user_r19.id == ctx_r5.userId ? "yellow" : "black");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r19.surname, "");
} }
function RatingListComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RatingListComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r20 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", user_r20.id == ctx_r7.userId ? "yellow" : "black");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r20.rating, "");
} }
function RatingListComponent_mat_header_row_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function RatingListComponent_mat_row_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
function RatingListComponent_mat_icon_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RatingListComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", user_r23.id == ctx_r11.userId ? "red" : "black");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r24 + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r11.ratingPos) - ctx_r11.range + 1, " ");
} }
function RatingListComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r25 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", user_r25.id == ctx_r12.userId ? "red" : "black");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r25.name);
} }
function RatingListComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r26 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", user_r26.id == ctx_r13.userId ? "red" : "black");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r26.surname, "");
} }
function RatingListComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r27 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", user_r27.id == ctx_r14.userId ? "red" : "black");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r27.rating, "");
} }
function RatingListComponent_mat_row_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const i_r29 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", i_r29 + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r15.ratingPos) - ctx_r15.range <= ctx_r15.topNumber);
} }
class RatingListComponent {
    constructor(ratingService) {
        this.ratingService = ratingService;
        this.topNumber = 3;
        this.range = 2;
        this.displayedColumns = ['position', 'name', 'surname', 'rating'];
    }
    ngOnInit() {
        this.topUsers = this.ratingService.getRating(0, this.topNumber);
        this.nearUsers = this.ratingService.getRatingRange(this.userId, this.range);
    }
}
RatingListComponent.ɵfac = function RatingListComponent_Factory(t) { return new (t || RatingListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_ratingService_rating_service__WEBPACK_IMPORTED_MODULE_1__["RatingService"])); };
RatingListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RatingListComponent, selectors: [["app-rating-list"]], inputs: { userId: "userId", ratingPos: "ratingPos" }, decls: 32, vars: 12, consts: [["mat-table", "", "matColumnDef", "position", 3, "dataSource"], ["matColumnDef", "position"], [4, "matHeaderCellDef"], [3, "color", 4, "matCellDef"], ["matColumnDef", "name"], [4, "matCellDef"], ["matColumnDef", "surname"], ["class", "description-cell", 3, "color", 4, "matCellDef"], ["matColumnDef", "rating"], ["class", "duration-cell", 3, "color", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mat-list-icon", "", 4, "ngIf"], ["mat-table", "", "matColumnDef", " position", 3, "dataSource"], [3, "hidden", 4, "matRowDef", "matRowDefColumns"], [1, "description-cell"], [1, "duration-cell"], ["mat-list-icon", ""]], template: function RatingListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " class=\"mat-elevation-z8\"> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RatingListComponent_div_5_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RatingListComponent_div_6_Template, 2, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RatingListComponent_div_8_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RatingListComponent_div_9_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RatingListComponent_div_11_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RatingListComponent_div_12_Template, 2, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RatingListComponent_div_14_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RatingListComponent_div_15_Template, 2, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RatingListComponent_mat_header_row_16_Template, 1, 0, "mat-header-row", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RatingListComponent_mat_row_17_Template, 1, 0, "mat-row", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RatingListComponent_mat_icon_18_Template, 2, 0, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " class=\"mat-elevation-z8\"> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RatingListComponent_div_24_Template, 3, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RatingListComponent_div_26_Template, 2, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RatingListComponent_div_28_Template, 2, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RatingListComponent_div_30_Template, 2, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RatingListComponent_mat_row_31_Template, 2, 4, "mat-row", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx.topUsers));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 8, ctx.ratingPos) - ctx.range >= ctx.topNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 10, ctx.nearUsers));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListIconCssMatStyler"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n    margin-left: 2rem;\r\n}\r\n\r\n.ng-star-inserted[_ngcontent-%COMP%] {\r\n    width: 20rem;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\nmat-icon[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 3rem;\r\n    text-align: center;\r\n    font-size: 3rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3JhdGluZy1saXN0L3JhdGluZy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcmF0aW5nLWxpc3QvcmF0aW5nLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4ubmctc3Rhci1pbnNlcnRlZCB7XHJcbiAgICB3aWR0aDogMjByZW07XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxubWF0LWljb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rating-list',
                templateUrl: './rating-list.component.html',
                styleUrls: ['./rating-list.component.css']
            }]
    }], function () { return [{ type: _service_ratingService_rating_service__WEBPACK_IMPORTED_MODULE_1__["RatingService"] }]; }, { userId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['userId']
        }], ratingPos: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ratingPos']
        }] }); })();


/***/ }),

/***/ "./src/app/game/game-answer/game-answer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/game/game-answer/game-answer.component.ts ***!
  \***********************************************************/
/*! exports provided: GameAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameAnswerComponent", function() { return GameAnswerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GameAnswerComponent {
    constructor() {
        this.maxAnswerSize = 4;
        this.answers = [];
    }
    ngOnInit() {
    }
    getSubmittedAnswers() {
        return [];
    }
    getEmptyAnswer() {
        return {
            id: null,
            questionId: null,
            text: null,
            correct: null,
            nextAnswerId: null,
            image: null,
            changed: false,
            deleted: false
        };
    }
}
GameAnswerComponent.ɵfac = function GameAnswerComponent_Factory(t) { return new (t || GameAnswerComponent)(); };
GameAnswerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameAnswerComponent, selectors: [["app-game-answer"]], inputs: { answers: "answers", questionId: "questionId" }, decls: 2, vars: 0, template: function GameAnswerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "game-answer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS1hbnN3ZXIvZ2FtZS1hbnN3ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameAnswerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-answer',
                templateUrl: './game-answer.component.html',
                styleUrls: ['./game-answer.component.css']
            }]
    }], function () { return []; }, { answers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], questionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/game/game-boolean-answer/game-boolean-answer.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/game/game-boolean-answer/game-boolean-answer.component.ts ***!
  \***************************************************************************/
/*! exports provided: GameBooleanAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameBooleanAnswerComponent", function() { return GameBooleanAnswerComponent; });
/* harmony import */ var _game_answer_game_answer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../game-answer/game-answer.component */ "./src/app/game/game-answer/game-answer.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function GameBooleanAnswerComponent_mat_button_toggle_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-button-toggle", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameBooleanAnswerComponent_mat_button_toggle_2_Template_mat_button_toggle_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const option_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.onAnswerClick(option_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, option_r1), "");
} }
class GameBooleanAnswerComponent extends _game_answer_game_answer_component__WEBPACK_IMPORTED_MODULE_0__["GameAnswerComponent"] {
    constructor() {
        super();
        this.options = ["true", "false"];
        this.currentAnswer = null;
    }
    onAnswerClick(option) {
        this.currentAnswer = option;
    }
    getSubmittedAnswers() {
        let answer = this.getEmptyAnswer();
        answer.text = this.currentAnswer;
        return [answer];
    }
}
GameBooleanAnswerComponent.ɵfac = function GameBooleanAnswerComponent_Factory(t) { return new (t || GameBooleanAnswerComponent)(); };
GameBooleanAnswerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameBooleanAnswerComponent, selectors: [["app-game-boolean-answer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 1, consts: [["fxLayout", "row", "fxLayoutAlign", "space-evenly", 1, "container"], ["class", "answer-button", "color", "accent", 3, "click", 4, "ngFor", "ngForOf"], ["color", "accent", 1, "answer-button", 3, "click"]], template: function GameBooleanAnswerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-button-toggle-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GameBooleanAnswerComponent_mat_button_toggle_2_Template, 3, 3, "mat-button-toggle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"]], styles: [".answer-button[_ngcontent-%COMP%] {\r\n    width: 25rem;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%], mat-button-toggle-group[_ngcontent-%COMP%], material-card[_ngcontent-%COMP%] {\r\n    background: none !important;\r\n    opacity: 100 !important;\r\n}\r\n\r\nmat-button-toggle[_ngcontent-%COMP%] {\r\n    background-color: #ffd740 !important;\r\n    color: #424242;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    width: 25rem;\r\n}\r\n\r\nmat-button-toggle[_ngcontent-%COMP%]:hover {\r\n    background-color: #ffd740 !important;\r\n}\r\n\r\n.mat-button-toggle-checked[_ngcontent-%COMP%] {\r\n    background-color: #fafafa !important;\r\n    color: #ffd740 !important;\r\n}\r\n\r\n.mat-button-toggle-checked[_ngcontent-%COMP%]:hover {\r\n    background-color: #f5f5f5!important;\r\n    color: #ffd740 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLWJvb2xlYW4tYW5zd2VyL2dhbWUtYm9vbGVhbi1hbnN3ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS1ib29sZWFuLWFuc3dlci9nYW1lLWJvb2xlYW4tYW5zd2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5zd2VyLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjVyZW07XHJcbn1cclxuXHJcbmRpdiwgbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAsIG1hdGVyaWFsLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1hdC1idXR0b24tdG9nZ2xlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ3NDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNDI0MjQyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjVyZW07XHJcbn1cclxuXHJcbm1hdC1idXR0b24tdG9nZ2xlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ3NDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmQ3NDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNSFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZDc0MCAhaW1wb3J0YW50O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameBooleanAnswerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-game-boolean-answer',
                templateUrl: './game-boolean-answer.component.html',
                styleUrls: ['./game-boolean-answer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/game/game-finish/game-finish.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/game/game-finish/game-finish.component.ts ***!
  \***********************************************************/
/*! exports provided: GameFinishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameFinishComponent", function() { return GameFinishComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_gameService_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/gameService/game.service */ "./src/app/service/gameService/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function GameFinishComponent_mat_list_item_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](player_r1.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", player_r1.userScore, "");
} }
class GameFinishComponent {
    constructor(gameService, router) {
        this.gameService = gameService;
        this.router = router;
    }
    ngOnInit() {
        this.getRating();
    }
    getRating() {
        this.rating = this.gameService.subscribeRating();
        this.gameService.finishGame();
    }
    quitGame() {
        this.router.navigateByUrl('dashboard');
    }
}
GameFinishComponent.ɵfac = function GameFinishComponent_Factory(t) { return new (t || GameFinishComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_gameService_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
GameFinishComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameFinishComponent, selectors: [["app-game-finish"]], decls: 16, vars: 3, consts: [[1, "container"], ["fxLayout", "row", "fxLayoutAlign", "space-between"], ["mat-raised-button", "", "color", "accent", 1, "start-button", 3, "click"], ["fxLayout", "column", "fxLayoutAlign", "start"], ["fxFlexAlign", "center", 1, "user-list"], ["role", "list"], ["role", "listitem", 4, "ngFor", "ngForOf"], ["role", "listitem"], ["fxLayout", "row", "fxLayoutAlign", "space-between", 1, "mat-list-item-content"], ["fxFlexAlign", "center"]], template: function GameFinishComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Game results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameFinishComponent_Template_button_click_6_listener() { return ctx.quitGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Quit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GameFinishComponent_mat_list_item_14_Template, 6, 2, "mat-list-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 1, ctx.rating));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexAlignDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".mat-list-item-content[_ngcontent-%COMP%] {\r\n    width: 80% !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLWZpbmlzaC9nYW1lLWZpbmlzaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9nYW1lLWZpbmlzaC9nYW1lLWZpbmlzaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1saXN0LWl0ZW0tY29udGVudCB7XHJcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameFinishComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-finish',
                templateUrl: './game-finish.component.html',
                styleUrls: ['./game-finish.component.css']
            }]
    }], function () { return [{ type: _service_gameService_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/game/game-optional-answer/game-optional-answer.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/game/game-optional-answer/game-optional-answer.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GameOptionalAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameOptionalAnswerComponent", function() { return GameOptionalAnswerComponent; });
/* harmony import */ var _game_answer_game_answer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../game-answer/game-answer.component */ "./src/app/game/game-answer/game-answer.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");







function GameOptionalAnswerComponent_div_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameOptionalAnswerComponent_div_4_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r5.checked[i_r2] = !ctx_r5.checked[i_r2]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", answer_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, answer_r1.text), "");
} }
function GameOptionalAnswerComponent_div_4_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameOptionalAnswerComponent_div_4_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r9.checked[i_r2] = !ctx_r9.checked[i_r2]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, answer_r1.text), "");
} }
function GameOptionalAnswerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GameOptionalAnswerComponent_div_4_button_1_Template, 4, 4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GameOptionalAnswerComponent_div_4_button_2_Template, 4, 3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.checked[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.checked[i_r2]);
} }
class GameOptionalAnswerComponent extends _game_answer_game_answer_component__WEBPACK_IMPORTED_MODULE_0__["GameAnswerComponent"] {
    constructor(changeDetectionRef) {
        super();
        this.changeDetectionRef = changeDetectionRef;
        this.checked = [].fill(false, this.maxAnswerSize);
        this.changeDetectionRef.detach();
        setInterval(() => {
            this.changeDetectionRef.reattach();
            this.changeDetectionRef.markForCheck();
        }, 1000);
    }
    OnInit() {
    }
    getSubmittedAnswers() {
        let submittedAnswer = [];
        this.answers.forEach((value, index) => {
            if (this.checked[index]) {
                submittedAnswer.push(value);
            }
        });
        return submittedAnswer;
    }
}
GameOptionalAnswerComponent.ɵfac = function GameOptionalAnswerComponent_Factory(t) { return new (t || GameOptionalAnswerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
GameOptionalAnswerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameOptionalAnswerComponent, selectors: [["app-game-optional-answer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 1, consts: [["fxLayout", "column", 1, "container"], ["fxFlexAlign", "center"], ["fxLayout", "row wrap", "fxLayoutAlign", "center"], ["fxFlex", "40%", "class", "answer-option", 4, "ngFor", "ngForOf"], ["fxFlex", "40%", 1, "answer-option"], ["mat-raised-button", "", "color", "accent", "fxLayout", "column", "fxLayoutAlign", "center", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", "color", "accent", "fxLayout", "column", "fxLayoutAlign", "center", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "fxLayout", "column", "fxLayoutAlign", "center", 3, "click"], ["matCardImage", "", "alt", "https://material.angular.io/assets/img/examples/shiba2.jpg", 3, "src"], ["mat-stroked-button", "", "color", "accent", "fxLayout", "column", "fxLayoutAlign", "center", 3, "click"], ["matCardImage", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg"]], template: function GameOptionalAnswerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Select one or more answers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GameOptionalAnswerComponent_div_4_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.answers);
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexAlignDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]], styles: [".answer-option[_ngcontent-%COMP%] {\r\n    margin: 1rem !important;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    height: 5rem;\r\n    width: 100%;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: 3rem;\r\n    margin: 0 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLW9wdGlvbmFsLWFuc3dlci9nYW1lLW9wdGlvbmFsLWFuc3dlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9nYW1lLW9wdGlvbmFsLWFuc3dlci9nYW1lLW9wdGlvbmFsLWFuc3dlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFuc3dlci1vcHRpb24ge1xyXG4gICAgbWFyZ2luOiAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGhlaWdodDogNXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDNyZW07XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameOptionalAnswerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-game-optional-answer',
                templateUrl: './game-optional-answer.component.html',
                styleUrls: ['./game-optional-answer.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/game/game-question/game-question.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/game/game-question/game-question.component.ts ***!
  \***************************************************************/
/*! exports provided: GameQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameQuestionComponent", function() { return GameQuestionComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _game_string_answer_game_string_answer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../game-string-answer/game-string-answer.component */ "./src/app/game/game-string-answer/game-string-answer.component.ts");
/* harmony import */ var _game_boolean_answer_game_boolean_answer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../game-boolean-answer/game-boolean-answer.component */ "./src/app/game/game-boolean-answer/game-boolean-answer.component.ts");
/* harmony import */ var _game_optional_answer_game_optional_answer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../game-optional-answer/game-optional-answer.component */ "./src/app/game/game-optional-answer/game-optional-answer.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_question_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/question.model */ "./src/app/models/question.model.ts");
/* harmony import */ var _game_sequence_answer_game_sequence_answer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../game-sequence-answer/game-sequence-answer.component */ "./src/app/game/game-sequence-answer/game-sequence-answer.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _service_gameService_game_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../service/gameService/game.service */ "./src/app/service/gameService/game.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");















const _c0 = ["dynamicComponent"];
function GameQuestionComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.question.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function GameQuestionComponent_div_0_ng_template_15_Template(rf, ctx) { }
function GameQuestionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-card-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "mat-progress-spinner", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, GameQuestionComponent_div_0_div_14_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, GameQuestionComponent_div_0_ng_template_15_Template, 0, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Question ", ctx_r0.questionNumber, " : ", ctx_r0.question.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 100 * (ctx_r0.questionTimer / ctx_r0.initTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.questionTimer, " sec");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.question.image != null);
} }
class GameQuestionComponent {
    constructor(activatedRoute, router, componentFactoryResolver, gameService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.componentFactoryResolver = componentFactoryResolver;
        this.gameService = gameService;
        this.image = null;
        this.initialized = false;
        this.navigationSubscription = this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                this.initialized = false;
                this.ngOnInit();
            }
        });
    }
    ngOnInit() {
        this.gameId = this.activatedRoute.snapshot.params['gameId'];
        this.player = history.state.player;
        this.questionNumber = history.state.questionNumber + 1;
        this.question = history.state.question;
        this.initTime = history.state.questionTimer;
        this.questionTimer = this.initTime;
    }
    ngAfterViewChecked() {
        if (!this.initialized) {
            this.initialized = true;
            this.loadComponent();
            this.startTimer();
        }
    }
    loadComponent() {
        while (!this.answerHost) { }
        let titleCasePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"]();
        var componentFactory;
        switch (titleCasePipe.transform(this.question.type)) {
            case src_app_models_question_model__WEBPACK_IMPORTED_MODULE_5__["QuestionType"].OPTION:
                componentFactory = this.componentFactoryResolver.resolveComponentFactory(_game_optional_answer_game_optional_answer_component__WEBPACK_IMPORTED_MODULE_3__["GameOptionalAnswerComponent"]);
                break;
            case src_app_models_question_model__WEBPACK_IMPORTED_MODULE_5__["QuestionType"].BOOLEAN:
                componentFactory = this.componentFactoryResolver.resolveComponentFactory(_game_boolean_answer_game_boolean_answer_component__WEBPACK_IMPORTED_MODULE_2__["GameBooleanAnswerComponent"]);
                break;
            case src_app_models_question_model__WEBPACK_IMPORTED_MODULE_5__["QuestionType"].ANSWER:
                componentFactory = this.componentFactoryResolver.resolveComponentFactory(_game_string_answer_game_string_answer_component__WEBPACK_IMPORTED_MODULE_1__["GameStringAnswerComponent"]);
                break;
            case src_app_models_question_model__WEBPACK_IMPORTED_MODULE_5__["QuestionType"].SEQUENCE:
                componentFactory = this.componentFactoryResolver.resolveComponentFactory(_game_sequence_answer_game_sequence_answer_component__WEBPACK_IMPORTED_MODULE_6__["GameSequenceAnswerComponent"]);
                break;
        }
        this.answerHost.clear();
        this.componentRef = this.answerHost.createComponent(componentFactory);
        this.componentRef.instance.answers = this.question.answerList;
        this.componentRef.instance.questionId = this.question.id;
        this.componentRef.changeDetectorRef.detectChanges();
    }
    startTimer() {
        this.questionTimer = this.initTime;
        this.interval = setInterval(() => {
            if (this.questionTimer > 0) {
                this.questionTimer--;
            }
            else {
                clearInterval(this.interval);
                this.submitAnswer();
            }
        }, 1000);
    }
    submitAnswer() {
        let answers = this.componentRef.instance.getSubmittedAnswers();
        for (let answer of answers) {
            answer.questionId = this.question.id;
        }
        this.gameService.postAnswer(answers);
    }
    canDeactivate() {
        if (window.confirm('Quit this page?')) {
            this.gameService.disconnect();
            return true;
        }
        return false;
    }
}
GameQuestionComponent.ɵfac = function GameQuestionComponent_Factory(t) { return new (t || GameQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_gameService_game_service__WEBPACK_IMPORTED_MODULE_8__["GameService"])); };
GameQuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: GameQuestionComponent, selectors: [["app-game-question"]], viewQuery: function GameQuestionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.answerHost = _t.first);
    } }, decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], ["fxLayout", "column", "fxLayoutAlign", "space-between"], ["fxLayout", "column", "fxLayoutAlign", "start"], ["fxLayout", "row", "fxLayoutAlign", "center"], ["cols", "6", "rowHeight", "20rem", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "image"], ["fxFlexAlign", "center", 3, "value"], ["id", "time", "fxFlexAlign", "center"], ["class", "image", "colspan", "4", 4, "ngIf"], ["dynamicComponent", ""], ["colspan", "4", 1, "image"], [1, "w-100"], ["matCardImage", "", "alt", "https://material.angular.io/assets/img/examples/shiba2.jpg", "fxFlexAlign", "center", 3, "src"]], template: function GameQuestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, GameQuestionComponent_div_0_Template, 17, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.question);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinner"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardImage"]], styles: [".container[_ngcontent-%COMP%] {\r\n    margin: 3rem;\r\n    height: 50rem;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    height: 20rem;\r\n}\r\n\r\nmat-card-header[_ngcontent-%COMP%] {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n#answer[_ngcontent-%COMP%] {\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n#time[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: -62.5px;\r\n    left: 30%;\r\n}\r\n\r\n.w-100[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLXF1ZXN0aW9uL2dhbWUtcXVlc3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS1xdWVzdGlvbi9nYW1lLXF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogM3JlbTtcclxuICAgIGhlaWdodDogNTByZW07XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogMjByZW07XHJcbn1cclxuXHJcbm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4jYW5zd2VyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbn1cclxuXHJcbiN0aW1lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTYyLjVweDtcclxuICAgIGxlZnQ6IDMwJTtcclxufVxyXG5cclxuLnctMTAwIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](GameQuestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'app-game-question',
                templateUrl: './game-question.component.html',
                styleUrls: ['./game-question.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ComponentFactoryResolver"] }, { type: _service_gameService_game_service__WEBPACK_IMPORTED_MODULE_8__["GameService"] }]; }, { answerHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['dynamicComponent', { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] }]
        }] }); })();


/***/ }),

/***/ "./src/app/game/game-sequence-answer/game-sequence-answer.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/game/game-sequence-answer/game-sequence-answer.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GameSequenceAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameSequenceAnswerComponent", function() { return GameSequenceAnswerComponent; });
/* harmony import */ var _game_answer_game_answer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../game-answer/game-answer.component */ "./src/app/game/game-answer/game-answer.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");








function GameSequenceAnswerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", answer_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](answer_r1.text);
} }
class GameSequenceAnswerComponent extends _game_answer_game_answer_component__WEBPACK_IMPORTED_MODULE_0__["GameAnswerComponent"] {
    constructor(changeDetectionRef) {
        super();
        this.changeDetectionRef = changeDetectionRef;
        this.changeDetectionRef.detach();
        setInterval(() => {
            this.changeDetectionRef.reattach();
            this.changeDetectionRef.markForCheck();
        }, 1000);
    }
    ngOnInit() {
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.answers, event.previousIndex, event.currentIndex);
    }
    getSubmittedAnswers() {
        return this.answers;
    }
}
GameSequenceAnswerComponent.ɵfac = function GameSequenceAnswerComponent_Factory(t) { return new (t || GameSequenceAnswerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
GameSequenceAnswerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameSequenceAnswerComponent, selectors: [["app-game-sequence-answer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 1, consts: [["fxLayout", "column", 1, "container"], ["fxFlexAlign", "center"], ["fxLayout", "row", "fxLayoutAlign", "space-evenly"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "list", 3, "cdkDropListDropped"], ["class", "box", "cdkDrag", "", "fxLayout", "row", "fxLayoutAlign", "center", 4, "ngFor", "ngForOf"], ["cdkDrag", "", "fxLayout", "row", "fxLayoutAlign", "center", 1, "box"], ["matCardImage", "", "alt", "https://material.angular.io/assets/img/examples/shiba2.jpg", 3, "src"]], template: function GameSequenceAnswerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Tap and hold to arrange the tiles in the correct order");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function GameSequenceAnswerComponent_Template_div_cdkDropListDropped_4_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, GameSequenceAnswerComponent_div_5_Template, 4, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.answers);
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexAlignDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["CdkDrag"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"]], styles: [".list[_ngcontent-%COMP%] {\r\n    width: 1000px;\r\n    max-width: 100%;\r\n    border: solid 1px #ccc;\r\n    min-height: 60px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    background: white;\r\n    border-radius: 4px;\r\n    overflow: hidden;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n    padding: 20px 10px;\r\n    border-right: solid 1px #ccc;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    box-sizing: border-box;\r\n    cursor: move;\r\n    background: #ffd740;\r\n    font-size: 14px;\r\n    flex-grow: 1;\r\n    flex-basis: 0;\r\n}\r\n\r\n.cdk-drag-preview[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n}\r\n\r\n.cdk-drag-animating[_ngcontent-%COMP%] {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.example-box[_ngcontent-%COMP%]:last-child {\r\n    border: none;\r\n}\r\n\r\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: 3rem;\r\n    margin: 0 !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLXNlcXVlbmNlLWFuc3dlci9nYW1lLXNlcXVlbmNlLWFuc3dlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHFIQUFxSDtBQUN6SDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9nYW1lLXNlcXVlbmNlLWFuc3dlci9nYW1lLXNlcXVlbmNlLWFuc3dlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3Qge1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2NjYztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjdXJzb3I6IG1vdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZkNzQwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZmxleC1iYXNpczogMDtcclxufVxyXG5cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDNyZW07XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameSequenceAnswerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-game-sequence-answer',
                templateUrl: './game-sequence-answer.component.html',
                styleUrls: ['./game-sequence-answer.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/game/game-settings/game-settings.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/game/game-settings/game-settings.component.ts ***!
  \***************************************************************/
/*! exports provided: GameSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameSettingsComponent", function() { return GameSettingsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_current_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/current-user.service */ "./src/app/service/current-user.service.ts");
/* harmony import */ var _service_gameService_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/gameService/game.service */ "./src/app/service/gameService/game.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");













class GameSettingsComponent {
    constructor(route, router, currentUserService, gameService) {
        this.route = route;
        this.router = router;
        this.currentUserService = currentUserService;
        this.gameService = gameService;
        this.gameSettingsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            maxUserNumberControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("10", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(2), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(50)]),
            questionTimerControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("10", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(5), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(50)])
        });
        this.game = {
            id: null,
            quizId: null,
            hostId: null,
            questionTimer: 10,
            maxUsersNumber: 10,
            players: null
        };
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.game.quizId = +params['quizId'];
        });
        this.game.hostId = parseInt(this.currentUserService.getCurrentUser().id);
    }
    createGame() {
        if (this.gameSettingsForm.valid) {
            this.game.maxUsersNumber = this.gameSettingsForm.get('maxUserNumberControl').value;
            this.game.questionTimer = this.gameSettingsForm.get('questionTimerControl').value;
            this.gameService.createGame(this.game).subscribe(response => this.router.navigate(['/game/start', response]), err => {
                console.log("Error creating game: " + err);
            } //FIXME: handle errors
            );
        }
    }
}
GameSettingsComponent.ɵfac = function GameSettingsComponent_Factory(t) { return new (t || GameSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_gameService_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"])); };
GameSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameSettingsComponent, selectors: [["app-game-settings"]], decls: 23, vars: 1, consts: [[1, "container"], ["fxLayout", "row", "fxLayoutAlign", "space-between"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["fxLayout", "column", "fxLayoutAlign", "start"], ["fxFlexAlign", "center"], ["fxLayout.gt-sm", "row", "fxLayout", "column", "fxFlex", "auto", "fxLayoutAlign", "space-evenly", 3, "formGroup"], ["matInput", "", "type", "number", "formControlName", "maxUserNumberControl", "min", "2", "max", "50", "required", ""], ["matInput", "", "type", "number", "formControlName", "questionTimerControl", "min", "5", "max", "50", "required", ""]], template: function GameSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Apply Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameSettingsComponent_Template_button_click_5_listener() { return ctx.createGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Save Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Max number of users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Please enter a value between 2 and 50");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Timer for question");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Please enter a value between 5 and 50");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.gameSettingsForm);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: ["h2[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    margin: 3rem;\r\n    height: 50rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLXNldHRpbmdzL2dhbWUtc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9nYW1lLXNldHRpbmdzL2dhbWUtc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAzcmVtO1xyXG4gICAgaGVpZ2h0OiA1MHJlbTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-game-settings',
                templateUrl: './game-settings.component.html',
                styleUrls: ['./game-settings.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"] }, { type: _service_gameService_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/game/game-start/game-start.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/game/game-start/game-start.component.ts ***!
  \*********************************************************/
/*! exports provided: GameStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameStartComponent", function() { return GameStartComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_gameService_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/gameService/game.service */ "./src/app/service/gameService/game.service.ts");
/* harmony import */ var _service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/loginService/authentication.service */ "./src/app/service/loginService/authentication.service.ts");
/* harmony import */ var src_app_service_current_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/current-user.service */ "./src/app/service/current-user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");












function GameStartComponent_div_0_mat_card_header_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-header", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Game Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameStartComponent_div_0_mat_card_header_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.startGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Start ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GameStartComponent_div_0_mat_list_item_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", player_r6.userName, " ");
} }
function GameStartComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GameStartComponent_div_0_mat_card_header_2_Template, 6, 0, "mat-card-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-content", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Connected users");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, GameStartComponent_div_0_mat_list_item_9_Template, 2, 1, "mat-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", game_r1.hostId == ctx_r0.player.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", game_r1.players);
} }
class GameStartComponent {
    constructor(route, gameService, authenticationService, currentUserService) {
        this.route = route;
        this.gameService = gameService;
        this.authenticationService = authenticationService;
        this.currentUserService = currentUserService;
        this.player = {
            userId: null,
            userScore: 0,
            userName: null,
            authorize: false
        };
    }
    ngOnInit() {
        if (this.authenticationService.logIn) {
            this.player.userId = parseInt(this.currentUserService.getCurrentUser().id);
            this.player.authorize = true;
        }
        else {
            this.player.userId = new Date().getMilliseconds();
            this.player.userName = "Player " + this.player.userId;
            this.player.authorize = false;
        }
        this.route.params.subscribe(params => {
            this.gameId = +params['gameId'];
            this.connectToGame();
        }, err => console.log("Error loading page: " + err) //FIXME
        );
    }
    connectToGame() {
        this.gameService.initializeWebSocketConnection(this.gameId, this.player);
        this.game$ = this.gameService.waitGameStart().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(resp => JSON.parse(resp)));
        this.gameService.subscribeQuestion();
        this.gameService.connect();
    }
    startGame() {
        this.gameService.startGame();
    }
    canDeactivate() {
        if (window.confirm('Quit this page?')) {
            this.gameService.disconnect();
            return true;
        }
        return false;
    }
}
GameStartComponent.ɵfac = function GameStartComponent_Factory(t) { return new (t || GameStartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_gameService_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_current_user_service__WEBPACK_IMPORTED_MODULE_5__["CurrentUserService"])); };
GameStartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameStartComponent, selectors: [["app-game-start"]], decls: 2, vars: 3, consts: [["class", "container", 4, "ngIf"], [1, "container"], ["fxLayout", "row", "fxLayoutAlign", "space-between", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start"], ["fxFlexAlign", "center", 1, "user-list"], ["role", "list"], ["role", "listitem", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "space-between"], ["mat-raised-button", "", "color", "accent", 1, "start-button", 3, "click"], ["role", "listitem"]], template: function GameStartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, GameStartComponent_div_0_Template, 10, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.game$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexAlignDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".container[_ngcontent-%COMP%] {\r\n    margin: 3rem;\r\n    height: 50rem;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    width: auto;\r\n}\r\n\r\nmat-list[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n}\r\n\r\n.settings[_ngcontent-%COMP%] {\r\n    margin-bottom: 5rem;\r\n}\r\n\r\n.user-list[_ngcontent-%COMP%] {\r\n    margin-top: 3rem;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n}\r\n\r\n.user-list[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n    width: 3rem;\r\n    height: 3rem;\r\n    margin: 1rem 3rem 1rem 1rem;\r\n    border-radius: 50%;\r\n}\r\n\r\nmat-list-item[_ngcontent-%COMP%] {\r\n    margin: 0.5rem;\r\n}\r\n\r\n.start-button[_ngcontent-%COMP%] {\r\n    width: 10em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLXN0YXJ0L2dhbWUtc3RhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9nYW1lL2dhbWUtc3RhcnQvZ2FtZS1zdGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDNyZW07XHJcbiAgICBoZWlnaHQ6IDUwcmVtO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxubWF0LWxpc3Qge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2V0dGluZ3Mge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcclxufVxyXG5cclxuLnVzZXItbGlzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4udXNlci1saXN0IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gICAgd2lkdGg6IDNyZW07XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBtYXJnaW46IDFyZW0gM3JlbSAxcmVtIDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbm1hdC1saXN0LWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAwLjVyZW07XHJcbn1cclxuXHJcbi5zdGFydC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameStartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-game-start',
                templateUrl: './game-start.component.html',
                styleUrls: ['./game-start.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _service_gameService_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] }, { type: _service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }, { type: src_app_service_current_user_service__WEBPACK_IMPORTED_MODULE_5__["CurrentUserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/game/game-string-answer/game-string-answer.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/game/game-string-answer/game-string-answer.component.ts ***!
  \*************************************************************************/
/*! exports provided: GameStringAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameStringAnswerComponent", function() { return GameStringAnswerComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _game_answer_game_answer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../game-answer/game-answer.component */ "./src/app/game/game-answer/game-answer.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function GameStringAnswerComponent_mat_error_5_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Answer is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function GameStringAnswerComponent_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, GameStringAnswerComponent_mat_error_5_mat_error_1_Template, 2, 0, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.stringAnswer.errors.required);
} }
class GameStringAnswerComponent extends _game_answer_game_answer_component__WEBPACK_IMPORTED_MODULE_1__["GameAnswerComponent"] {
    constructor() {
        super();
        this.stringAnswer = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
    }
    getSubmittedAnswers() {
        let answer = this.getEmptyAnswer();
        answer.text = this.stringAnswer.value;
        return [answer];
    }
}
GameStringAnswerComponent.ɵfac = function GameStringAnswerComponent_Factory(t) { return new (t || GameStringAnswerComponent)(); };
GameStringAnswerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GameStringAnswerComponent, selectors: [["app-game-string-answer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 2, consts: [["fxLayout", "row", "fxLayoutAlign", "center", 1, "container"], ["appearance", "outline", 1, "answer-input"], ["matInput", "", "placeholder", "Answer", "maxlength", "30", "required", "", 3, "formControl"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function GameStringAnswerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Enter your answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, GameStringAnswerComponent_mat_error_5_Template, 2, 1, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.stringAnswer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stringAnswer.invalid && (ctx.stringAnswer.dirty || ctx.stringAnswer.touched));
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]], styles: [".answer-input[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    width: 40rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLXN0cmluZy1hbnN3ZXIvZ2FtZS1zdHJpbmctYW5zd2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS1zdHJpbmctYW5zd2VyL2dhbWUtc3RyaW5nLWFuc3dlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFuc3dlci1pbnB1dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNDByZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](GameStringAnswerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-game-string-answer',
                templateUrl: './game-string-answer.component.html',
                styleUrls: ['./game-string-answer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/image-upload/image-upload.component.ts":
/*!********************************************************!*\
  !*** ./src/app/image-upload/image-upload.component.ts ***!
  \********************************************************/
/*! exports provided: ImageUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadComponent", function() { return ImageUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






class ImageSnippet {
    constructor(src, file) {
        this.src = src;
        this.file = file;
    }
}
class ImageUploadComponent {
    constructor() { }
    ngOnInit() {
        this.name = "Choose file";
    }
    processFile(imageInput) {
        const file = imageInput.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            this.selectedFile = new ImageSnippet(event.target.result, file);
            this.name = file.name;
        });
        reader.readAsDataURL(file);
    }
}
ImageUploadComponent.ɵfac = function ImageUploadComponent_Factory(t) { return new (t || ImageUploadComponent)(); };
ImageUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageUploadComponent, selectors: [["app-image-upload"]], decls: 10, vars: 1, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "image-input"], [1, "image-name"], ["for", "inputGroupFile01", "ng-bind", "name", 1, "custom-file-label"], ["imageLabel", ""], ["id", "image", "type", "file", "accept", "image/*", "aria-label", "Select image", 2, "display", "none", 3, "change"], ["imageInput", ""], ["matInput", "", "disabled", ""], ["mat-raised-button", "", "id", "inputGroupFileAddon01", 1, "input-group-text", 3, "click"]], template: function ImageUploadComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImageUploadComponent_Template_input_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.processFile(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageUploadComponent_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r1.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".image-input[_ngcontent-%COMP%] {\r\n    margin: 1rem 0;\r\n}\r\n\r\n.image-name[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2UtdXBsb2FkL2ltYWdlLXVwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2ltYWdlLXVwbG9hZC9pbWFnZS11cGxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1pbnB1dCB7XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxufVxyXG5cclxuLmltYWdlLW5hbWUge1xyXG4gICAgd2lkdGg6IDgwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image-upload',
                templateUrl: './image-upload.component.html',
                styleUrls: ['./image-upload.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/loginService/authentication.service */ "./src/app/service/loginService/authentication.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");











function LoginComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class LoginComponent {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
        this.model = {
            image: undefined, notificationStatus: undefined,
            about: "",
            birthdate: undefined,
            city: "",
            countryId: "",
            gender: undefined,
            name: "",
            rating: "",
            role: undefined,
            surname: "",
            id: null,
            email: '',
            password: ''
        };
    }
    ngOnInit() {
    }
    Login() {
        this.authenticationService.login(this.model.email, this.model.password);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 24, vars: 6, consts: [["fxLayout", "row", 1, ""], ["fxFlex", "30"], ["fxFlex", "center center"], ["name", "form", 3, "ngSubmit"], ["f", "ngForm"], [1, "full-width"], ["type", "email", "matInput", "", "name", "login", 3, "ngModel", "ngClass", "ngModelChange"], ["email", "ngModel"], [4, "ngIf"], ["type", "password", "matInput", "", "name", "password", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "type", "submit"], ["routerLink", "/registration"], [1, "sr-only"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r0.form.valid && ctx.Login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) { return ctx.model.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_mat_error_10_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) { return ctx.model.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.email)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, _r0.submitted && _r1.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.password);
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]], styles: [".full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-bottom: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/models/gender.enum.ts":
/*!***************************************!*\
  !*** ./src/app/models/gender.enum.ts ***!
  \***************************************/
/*! exports provided: Gender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gender", function() { return Gender; });
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["NOT_MENTIONED"] = 2] = "NOT_MENTIONED";
})(Gender || (Gender = {}));


/***/ }),

/***/ "./src/app/models/moderator-comment.ts":
/*!*********************************************!*\
  !*** ./src/app/models/moderator-comment.ts ***!
  \*********************************************/
/*! exports provided: ModeratorComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeratorComment", function() { return ModeratorComment; });
class ModeratorComment {
    constructor(quizId, moderatorId, comment, commentDate) {
        this.quizId = quizId;
        this.comment = comment;
        this.commentDate = commentDate;
        this.moderatorId = moderatorId;
    }
}


/***/ }),

/***/ "./src/app/models/notification-status.enum.ts":
/*!****************************************************!*\
  !*** ./src/app/models/notification-status.enum.ts ***!
  \****************************************************/
/*! exports provided: NotificationStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationStatus", function() { return NotificationStatus; });
var NotificationStatus;
(function (NotificationStatus) {
    NotificationStatus[NotificationStatus["ON"] = 0] = "ON";
    NotificationStatus[NotificationStatus["OFF"] = 1] = "OFF";
    NotificationStatus[NotificationStatus["FRIENDS_ONLY"] = 2] = "FRIENDS_ONLY";
    NotificationStatus[NotificationStatus["SYSTEM_ONLY"] = 3] = "SYSTEM_ONLY";
})(NotificationStatus || (NotificationStatus = {}));


/***/ }),

/***/ "./src/app/models/question.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/question.model.ts ***!
  \******************************************/
/*! exports provided: QuestionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionType", function() { return QuestionType; });
var QuestionType;
(function (QuestionType) {
    QuestionType["OPTION"] = "Option";
    QuestionType["BOOLEAN"] = "Boolean";
    QuestionType["ANSWER"] = "Answer";
    QuestionType["SEQUENCE"] = "Sequence";
})(QuestionType || (QuestionType = {}));


/***/ }),

/***/ "./src/app/models/quiz.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/quiz.model.ts ***!
  \**************************************/
/*! exports provided: StatusType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusType", function() { return StatusType; });
var StatusType;
(function (StatusType) {
    StatusType["PENDING"] = "Pending";
    StatusType["ACTIVE"] = "Active";
    StatusType["DEACTIVATED"] = "Deactivated";
    StatusType["DELETED"] = "Deleted";
})(StatusType || (StatusType = {}));


/***/ }),

/***/ "./src/app/models/role.enum.ts":
/*!*************************************!*\
  !*** ./src/app/models/role.enum.ts ***!
  \*************************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role;
(function (Role) {
    Role[Role["USER"] = 0] = "USER";
    Role[Role["MODERATOR"] = 1] = "MODERATOR";
    Role[Role["ADMIN"] = 2] = "ADMIN";
    Role[Role["SUPER_ADMIN"] = 3] = "SUPER_ADMIN";
})(Role || (Role = {}));


/***/ }),

/***/ "./src/app/models/status-type.enum.ts":
/*!********************************************!*\
  !*** ./src/app/models/status-type.enum.ts ***!
  \********************************************/
/*! exports provided: StatusType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusType", function() { return StatusType; });
var StatusType;
(function (StatusType) {
    StatusType[StatusType["PENDING"] = 0] = "PENDING";
    StatusType[StatusType["ACTIVE"] = 1] = "ACTIVE";
    StatusType[StatusType["DEACTIVATED"] = 2] = "DEACTIVATED";
    StatusType[StatusType["DELETED"] = 3] = "DELETED";
})(StatusType || (StatusType = {}));


/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/loginService/authentication.service */ "./src/app/service/loginService/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");











function NavigationComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.isOpen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Connect to game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavigationComponent_mat_form_field_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function NavigationComponent_mat_form_field_8_Template_input_keydown_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.toGame(_r10.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavigationComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavigationComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { profilenav: "profinfo" }; };
const _c1 = function (a0) { return { outlets: a0 }; };
const _c2 = function (a1, a2) { return ["profile", a1, a2]; };
function NavigationComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c2, ctx_r4.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.username);
} }
function NavigationComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "assignment_ind");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r6.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0))));
} }
function NavigationComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.authService.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavigationComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isOpen = true;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser != null) {
            this.username = this.currentUser.email;
            this.id = this.currentUser.id;
        }
    }
    ngOnInit() { }
    toProfile() {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['profile', this.id, { outlets: { profilenav: 'profinfo' } }]);
        });
    }
    toGame(gameId) {
        this.isOpen = true;
        this.router.navigateByUrl(`/game/start/${gameId}`);
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 20, vars: 8, consts: [["mat-button", "", "routerLink", "/dashboard"], ["mat-button", "", "routerLink", "/quizzes"], [1, "spacer"], ["mat-stroked-button", "", "class", "connect-button", 3, "click", 4, "ngIf"], ["appearance", "outline", "style", "margin-bottom: -1.25em", 4, "ngIf"], ["mat-button", "", "routerLink", "/registration", 4, "ngIf"], ["mat-button", "", "routerLink", "/login", 4, "ngIf"], ["mat-button", "", 3, "routerLink", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "routerLink", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", 1, "connect-button", 3, "click"], ["appearance", "outline", 2, "margin-bottom", "-1.25em"], ["matInput", "", "type", "number", "placeholder", "Game id", 3, "keydown.enter"], ["gameId", ""], ["mat-button", "", "routerLink", "/registration"], ["mat-button", "", "routerLink", "/login"], ["mat-button", "", 3, "routerLink"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", "routerLink", "/", 3, "click"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "QUIZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Quizzes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavigationComponent_button_7_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavigationComponent_mat_form_field_8_Template, 3, 0, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavigationComponent_a_10_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavigationComponent_a_11_Template, 2, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavigationComponent_a_12_Template, 2, 8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-menu", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NavigationComponent_button_18_Template, 5, 7, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NavigationComponent_button_19_Template, 5, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.logIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.logIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.logIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.logIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.logIn);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["_MatMenu"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".mat-menu-item[_ngcontent-%COMP%]{\r\n  line-height:35px;\r\n  height:35px;\r\n}\r\n\r\n.spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.input[_ngcontent-%COMP%] {\r\n  margin-bottom: 0px;\r\n}\r\n\r\nmat-form-field.mat-form-field[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.connect-button[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 200px;\r\n  font-size: 20px;\r\n  background: rgba(0, 0, 0, 0);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZiw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtbWVudS1pdGVte1xyXG4gIGxpbmUtaGVpZ2h0OjM1cHg7XHJcbiAgaGVpZ2h0OjM1cHg7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5jb25uZWN0LWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.css']
            }]
    }], function () { return [{ type: _service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile/admin-users/admin-users.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/profile/admin-users/admin-users.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function() { return AdminUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _models_gender_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/gender.enum */ "./src/app/models/gender.enum.ts");
/* harmony import */ var _models_notification_status_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/notification-status.enum */ "./src/app/models/notification-status.enum.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_role_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/role.enum */ "./src/app/models/role.enum.ts");
/* harmony import */ var _service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/profileService/profile.service */ "./src/app/service/profileService/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/profileService/share-id.service */ "./src/app/service/profileService/share-id.service.ts");
/* harmony import */ var _service_registrationService_registration_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/registrationService/registration.service */ "./src/app/service/registrationService/registration.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

























function AdminUsersComponent_mat_accordion_1_mat_panel_title_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add moderator ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminUsersComponent_mat_accordion_1_mat_panel_title_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add administrative user user ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminUsersComponent_mat_accordion_1_mat_panel_description_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter the data of the new moderator ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminUsersComponent_mat_accordion_1_mat_panel_description_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter the data of the new administrative user ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminUsersComponent_mat_accordion_1_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminUsersComponent_mat_accordion_1_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminUsersComponent_mat_accordion_1_mat_form_field_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "MODERATOR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function AdminUsersComponent_mat_accordion_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminUsersComponent_mat_accordion_1_mat_panel_title_3_Template, 2, 0, "mat-panel-title", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminUsersComponent_mat_accordion_1_mat_panel_title_4_Template, 2, 0, "mat-panel-title", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdminUsersComponent_mat_accordion_1_mat_panel_description_5_Template, 2, 0, "mat-panel-description", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdminUsersComponent_mat_accordion_1_mat_panel_description_6_Template, 2, 0, "mat-panel-description", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminUsersComponent_mat_accordion_1_Template_form_ngSubmit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminUsersComponent_mat_accordion_1_mat_error_15_Template, 2, 0, "mat-error", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AdminUsersComponent_mat_accordion_1_mat_error_16_Template, 2, 0, "mat-error", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AdminUsersComponent_mat_accordion_1_mat_form_field_17_Template, 8, 0, "mat-form-field", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Add new user");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.roleUs.toString() == "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.roleUs.toString() == "SUPER_ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.roleUs.toString() == "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.roleUs.toString() == "SUPER_ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.registerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r0.submitted && ctx_r0.f.email.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors == null ? null : ctx_r0.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors == null ? null : ctx_r0.f.email.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isSuperAdmin);
} }
function AdminUsersComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminUsersComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUsersComponent_td_33_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const element_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.checkOut(element_r23.id, element_r23.email); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", element_r23.name, " ", element_r23.surname, "");
} }
function AdminUsersComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminUsersComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r26.email, "");
} }
function AdminUsersComponent_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminUsersComponent_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r27.role, "");
} }
function AdminUsersComponent_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminUsersComponent_td_42_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminUsersComponent_td_42_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Deactivated");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminUsersComponent_td_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminUsersComponent_td_42_div_1_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminUsersComponent_td_42_div_2_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r28.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !element_r28.active);
} }
function AdminUsersComponent_th_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Acting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminUsersComponent_td_45_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUsersComponent_td_45_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const element_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.updateActiveStatusUser(element_r32.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Deactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminUsersComponent_td_45_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUsersComponent_td_45_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const element_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.updateActiveStatusUser(element_r32.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminUsersComponent_td_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminUsersComponent_td_45_button_2_Template, 2, 0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminUsersComponent_td_45_button_3_Template, 2, 0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.isAdmin && element_r32.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.isAdmin && !element_r32.active);
} }
function AdminUsersComponent_tr_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 44);
} }
function AdminUsersComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 45);
} }
class AdminUsersComponent {
    constructor(profileService, router, shareId, regService, formBuilder) {
        this.profileService = profileService;
        this.router = router;
        this.shareId = shareId;
        this.regService = regService;
        this.formBuilder = formBuilder;
        this.model = {
            id: null,
            email: '',
            password: '',
            name: '',
            surname: '',
            gender: _models_gender_enum__WEBPACK_IMPORTED_MODULE_3__["Gender"][Symbol.hasInstance],
            birthdate: new Date(),
            city: '',
            about: '',
            image: '',
            role: _models_role_enum__WEBPACK_IMPORTED_MODULE_7__["Role"][Symbol.hasInstance],
            notificationStatus: _models_notification_status_enum__WEBPACK_IMPORTED_MODULE_4__["NotificationStatus"][Symbol.hasInstance],
            countryId: null,
            rating: null
        };
        this.displayedColumns = ['name', 'email', 'role', 'active', 'actions'];
        this.isCollapsed = true;
        this.submitted = false;
        this.isAdmin = false;
        this.isSuperAdmin = false;
        this.selectedRole = 'AllRole';
        this.selectedStatus = 'AllStatus';
        this.length = 0;
        this.pageSizeOptions = [10, 20, 30, 40, 50];
        this.currentUserRole = 'AllRole';
        this.currentUserStatus = 'AllStatus';
        this.userQuestionUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.currentUserId = JSON.parse(localStorage.getItem('currentUser')).id;
        this.roleUs = JSON.parse(localStorage.getItem('currentUser')).role;
    }
    ngOnInit() {
        this.adminCheck();
        this.registerForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            role: ['MODERATOR']
        });
        this.setPaginationParamDefault();
        this.userQuestionUpdate.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])())
            .subscribe(userSearch => {
            this.setPaginationParamDefault();
            userSearch.length == 0 ? this.getAllAdminUsers() : this.filterRequest(userSearch);
        });
        this.searchByRoleStatus(this.currentUserRole, this.currentUserStatus);
    }
    onPageChanged(e) {
        this.pageIndex = e.pageIndex;
        this.pageSize = e.pageSize;
        if (this.currentUserRole != undefined && this.currentUserStatus != undefined) {
            if (this.pageSize == undefined) {
                this.setPaginationParamDefault();
            }
            this.searchByRoleStatus(this.currentUserRole, this.currentUserStatus);
        }
        else if (this.userRequest != undefined && this.userRequest) {
            if (this.pageSize == undefined) {
                this.setPaginationParamDefault();
            }
            this.filterRequest(this.userRequest);
        }
        else {
            this.getAllAdminUsers();
        }
    }
    searchByRoleStatus(userRole, userStatus) {
        this.profileService.getUsersByRoleStatus(userRole, userStatus, this.pageSize, this.pageIndex).subscribe(resp => {
            this.adminUsers = resp.responceList;
            this.length = resp.totalNumberOfElement;
        });
    }
    filterRequest(filterText) {
        this.profileService.getFilteredUsers(filterText, this.pageSize, this.pageIndex).subscribe(resp => {
            this.adminUsers = resp.responceList;
            this.length = resp.totalNumberOfElement;
        });
    }
    setPaginationParamDefault() {
        this.pageIndex = 0;
        this.pageSize = 10;
    }
    setCurrentRole(role) {
        this.currentUserRole = role;
    }
    setCurrentStatus(status) {
        this.currentUserStatus = status;
    }
    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        const input = JSON.parse(JSON.stringify(this.registerForm.value));
        this.model.email = input.email;
        if (this.roleUs === _models_role_enum__WEBPACK_IMPORTED_MODULE_7__["Role"].ADMIN) {
            this.model.role = _models_role_enum__WEBPACK_IMPORTED_MODULE_7__["Role"].MODERATOR;
        }
        else {
            this.model.role = input.role;
        }
        this.addNewUser();
    }
    addNewUser() {
        this.profileService.postRegisterInfo(this.model).subscribe(res => {
            alert('Activation code was sent');
        }, error => {
            alert(error.error.message);
        });
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['profile', this.currentUserId, { outlets: { profilenav: 'adminUsers' } }]);
        });
    }
    adminCheck() {
        if (this.roleUs.toString() === _models_role_enum__WEBPACK_IMPORTED_MODULE_7__["Role"][_models_role_enum__WEBPACK_IMPORTED_MODULE_7__["Role"].SUPER_ADMIN]) {
            this.isSuperAdmin = true;
        }
        if (this.roleUs.toString() === _models_role_enum__WEBPACK_IMPORTED_MODULE_7__["Role"][_models_role_enum__WEBPACK_IMPORTED_MODULE_7__["Role"].ADMIN]) {
            this.isAdmin = true;
        }
    }
    getAllAdminUsers() {
        this.profileService.getAdminUsers(this.pageSize, this.pageIndex).subscribe(resp => {
            this.currentUserRole = undefined;
            this.adminUsers = resp.responceList;
            this.length = resp.totalNumberOfElement;
        });
    }
    checkOut(id, email) {
        this.shareId.setEmail(email);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['profile', id, { outlets: { profilenav: 'profinfo' } }]);
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    deleteAdminUser(id) {
        this.profileService.deleteAdminUsers(id).subscribe((resp) => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(['profile', this.currentUserId, { outlets: { profilenav: 'adminUsers' } }]);
            });
        }, error => {
            alert('Something wrong while deleting user');
        });
    }
    updateActiveStatusUser(id) {
        this.profileService.updateActiveStatusUser(id).subscribe((resp) => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(['profile', this.currentUserId, { outlets: { profilenav: 'adminUsers' } }]);
            });
        }, error => {
            alert('Something wrong while change active status');
        });
    }
    get f() { return this.registerForm.controls; }
}
AdminUsersComponent.ɵfac = function AdminUsersComponent_Factory(t) { return new (t || AdminUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_10__["ShareIdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_registrationService_registration_service__WEBPACK_IMPORTED_MODULE_11__["RegistrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
AdminUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminUsersComponent, selectors: [["app-admin-users"]], viewQuery: function AdminUsersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 49, vars: 11, consts: [["fxLayout", "column"], [4, "ngIf"], ["fxFlex", "71", 1, "scroll", "main"], ["maincontent", ""], [1, "input"], ["appearance", "outline"], ["matInput", "", "type", "search", "placeholder", "Search", "value", "", 3, "ngModel", "ngModelChange"], [1, "role_selection"], ["disableRipple", "", 3, "value", "valueChange"], ["value", "AllRole", 3, "click"], ["value", "Admins", 3, "click"], ["value", "Moderators", 3, "click"], [1, "status_selection"], ["value", "AllStatus", 3, "click"], ["value", "Active", 3, "click"], ["value", "Deactivated", 3, "click"], [1, "mat-elevation-z8", "w-75"], ["mat-table", "", "width", "100%", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "role"], ["matColumnDef", "active"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageIndex", "length", "pageSize", "pageSizeOptions", "page"], ["fxLayout", "row", 1, ""], ["fxFlex", "30"], ["fxFlex", "center center"], [3, "formGroup", "ngSubmit"], [1, "full-width"], ["matInput", "", "formControlName", "email", "placeholder", "Email", "name", "email", 3, "ngClass"], ["mat-raised-button", "", 1, "btn", "btn-primary"], ["id", "selectRole", "formControlName", "role", 1, "form-control"], ["value", "ADMIN"], ["value", "MODERATOR"], ["mat-header-cell", ""], ["mat-cell", ""], ["routerLink", "", 1, "nav-link", 3, "click"], [1, "buttonsAction"], ["mat-stroked-button", "", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function AdminUsersComponent_Template(rf, ctx) { if (rf & 1) {
        const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminUsersComponent_mat_accordion_1_Template, 22, 11, "mat-accordion", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Search quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminUsersComponent_Template_input_ngModelChange_8_listener($event) { return ctx.userRequest = $event; })("ngModelChange", function AdminUsersComponent_Template_input_ngModelChange_8_listener($event) { return ctx.userQuestionUpdate.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AdminUsersComponent_Template_mat_select_valueChange_12_listener($event) { return ctx.selectedRole = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUsersComponent_Template_mat_option_click_13_listener($event) { ctx.setPaginationParamDefault(); ctx.setCurrentRole("AllRole"); return ctx.onPageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUsersComponent_Template_mat_option_click_15_listener($event) { ctx.setPaginationParamDefault(); ctx.setCurrentRole("ADMIN"); return ctx.onPageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUsersComponent_Template_mat_option_click_17_listener($event) { ctx.setPaginationParamDefault(); ctx.setCurrentRole("MODERATOR"); return ctx.onPageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "MODERATOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Select status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AdminUsersComponent_Template_mat_select_valueChange_22_listener($event) { return ctx.selectedStatus = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUsersComponent_Template_mat_option_click_23_listener($event) { ctx.setPaginationParamDefault(); ctx.setCurrentStatus("AllStatus"); return ctx.onPageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUsersComponent_Template_mat_option_click_25_listener($event) { ctx.setPaginationParamDefault(); ctx.setCurrentStatus("ACTIVE"); return ctx.onPageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUsersComponent_Template_mat_option_click_27_listener($event) { ctx.setPaginationParamDefault(); ctx.setCurrentStatus("DEACTIVATED"); return ctx.onPageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Deactivated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AdminUsersComponent_th_32_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AdminUsersComponent_td_33_Template, 3, 2, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AdminUsersComponent_th_35_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AdminUsersComponent_td_36_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](37, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AdminUsersComponent_th_38_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AdminUsersComponent_td_39_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](40, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AdminUsersComponent_th_41_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AdminUsersComponent_td_42_Template, 3, 2, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](43, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AdminUsersComponent_th_44_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AdminUsersComponent_td_45_Template, 4, 2, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, AdminUsersComponent_tr_46_Template, 1, 0, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, AdminUsersComponent_tr_47_Template, 1, 0, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-paginator", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function AdminUsersComponent_Template_mat_paginator_page_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); ctx.onPageChanged($event); return _r1.scrollTop = 0; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin || ctx.isSuperAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userRequest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.adminUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageIndex", ctx.pageIndex)("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionPanelHeader"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__["DefaultClassDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionPanelDescription"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatRow"]], styles: [".buttonsAction[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n.buttonsAction[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  display:flex;\r\n  justify-content:center;\r\n}\r\n\r\n\r\n.mat-select[_ngcontent-%COMP%]{\r\n padding: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9hZG1pbi11c2Vycy9hZG1pbi11c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7O0FBR0E7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOzs7QUFFQTtDQUNDLFlBQVk7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvYWRtaW4tdXNlcnMvYWRtaW4tdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25zQWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmJ1dHRvbnNBY3Rpb24gYnV0dG9uIHtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1zZWxlY3R7XHJcbiBwYWRkaW5nOiA1cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminUsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-users',
                templateUrl: './admin-users.component.html',
                styleUrls: ['./admin-users.component.css']
            }]
    }], function () { return [{ type: _service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_10__["ShareIdService"] }, { type: _service_registrationService_registration_service__WEBPACK_IMPORTED_MODULE_11__["RegistrationService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/profile/change-password/change-password.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/profile/change-password/change-password.component.ts ***!
  \**********************************************************************/
/*! exports provided: ChangePasswordComponent, MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/profileService/profile.service */ "./src/app/service/profileService/profile.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");












function ChangePasswordComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is require");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Must contain at least 8 or more characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords must match");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ChangePasswordComponent {
    constructor(formBuilder, router, profileService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.profileService = profileService;
        this.submitted = false;
    }
    ngOnInit() {
        this.changePasswordForm = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }
    get f() { return this.changePasswordForm.controls; }
    changingPassFormValidation() {
        this.submitted = true;
        if (this.changePasswordForm.invalid) {
            return;
        }
        this.newPassword = this.changePasswordForm.value.password;
        this.changePassword();
    }
    changePassword() {
        this.profileService.updatePassword(this.newPassword).subscribe((resp) => {
            alert("Password was changed");
            this.router.navigate(['/']);
        }, error => {
            alert("Something wrong while save password");
        });
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"])); };
ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], decls: 21, vars: 11, consts: [["fxLayout", "row", 1, ""], ["fxFlex", "30"], ["fxFlex", "center center"], [3, "formGroup", "ngSubmit"], [1, "full-width"], ["type", "password", "matInput", "", "formControlName", "password", "placeholder", "Password", "name", "password", "required", "", 3, "ngClass"], [4, "ngIf"], ["type", "password", "matInput", "", "placeholder", "Password", "formControlName", "confirmPassword", "name", "confirmPassword", 3, "ngClass"], ["mat-raised-button", "", "type", "submit"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_3_listener() { return ctx.changingPassFormValidation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChangePasswordComponent_mat_error_8_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChangePasswordComponent_mat_error_9_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Confirm password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ChangePasswordComponent_mat_error_15_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ChangePasswordComponent_mat_error_16_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Change password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.changePasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.password.errors == null ? null : ctx.f.password.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.password.errors == null ? null : ctx.f.password.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.confirmPassword.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.confirmPassword.errors == null ? null : ctx.f.confirmPassword.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.confirmPassword.errors == null ? null : ctx.f.confirmPassword.errors.mustMatch);
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: [".full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-change-password',
                templateUrl: './change-password.component.html',
                styleUrls: ['./change-password.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] }]; }, null); })();
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/profile/favorite/favorite.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile/favorite/favorite.component.ts ***!
  \********************************************************/
/*! exports provided: FavoriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteComponent", function() { return FavoriteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/profileService/profile.service */ "./src/app/service/profileService/profile.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");












function FavoriteComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-quiz", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quiz_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("quizData", quiz_r2);
} }
class FavoriteComponent {
    constructor(profileService) {
        this.profileService = profileService;
        this.userQuestionUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.length = 0;
        this.pageSizeOptions = [6, 12, 18];
    }
    ngOnInit() {
        this.setPaginationParamDefault();
        this.uploadFavoriteQuizzes();
        this.userQuestionUpdate.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])())
            .subscribe(userSearch => {
            if (userSearch.length == 0) {
                this.setPaginationParamDefault();
                this.uploadFavoriteQuizzes();
            }
            else {
                this.filterFavoriteQuizzes(userSearch);
            }
        });
    }
    uploadFavoriteQuizzes() {
        this.profileService.getFavoriteGames(this.pageSize, this.pageIndex).subscribe(resp => {
            this.quizzes = resp.responceList;
            this.length = resp.totalNumberOfElement;
        });
    }
    setPaginationParamDefault() {
        this.pageIndex = 0;
        this.pageSize = 6;
    }
    onPageChanged($event) {
        this.pageIndex = $event.pageIndex;
        this.pageSize = $event.pageSize;
        this.choseRequest();
    }
    filterFavoriteQuizzes(userSearch) {
        this.profileService.filterFavoriteRequest(userSearch, this.pageSize, this.pageIndex).subscribe(resp => {
            this.quizzes = resp.responceList;
            this.length = resp.totalNumberOfElement;
        });
    }
    choseRequest() {
        if (this.userRequest != undefined && this.userRequest) {
            if (this.pageSize == undefined) {
                this.setPaginationParamDefault();
            }
            this.filterFavoriteQuizzes(this.userRequest);
        }
        else {
            this.uploadFavoriteQuizzes();
        }
    }
}
FavoriteComponent.ɵfac = function FavoriteComponent_Factory(t) { return new (t || FavoriteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"])); };
FavoriteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavoriteComponent, selectors: [["app-favorite"]], decls: 8, vars: 6, consts: [[1, "input-form"], ["matInput", "", "type", "search", "placeholder", "Search", "value", "", 3, "ngModel", "ngModelChange"], ["fxLayout", "row wrap"], ["maincontent", ""], ["fxLayout", "row wrap", 4, "ngFor", "ngForOf"], [3, "pageIndex", "length", "pageSize", "pageSizeOptions", "page"], [3, "quizData"]], template: function FavoriteComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FavoriteComponent_Template_input_ngModelChange_3_listener($event) { return ctx.userRequest = $event; })("ngModelChange", function FavoriteComponent_Template_input_ngModelChange_3_listener($event) { return ctx.userQuestionUpdate.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FavoriteComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-paginator", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function FavoriteComponent_Template_mat_paginator_page_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); ctx.onPageChanged($event); return _r0.scrollTop = 0; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userRequest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quizzes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageIndex", ctx.pageIndex)("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_10__["QuizComponent"]], styles: ["mat-paginator[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  margin-left: 35%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9mYXZvcml0ZS9mYXZvcml0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZmF2b3JpdGUvZmF2b3JpdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1wYWdpbmF0b3Ige1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoriteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-favorite',
                templateUrl: './favorite.component.html',
                styleUrls: ['./favorite.component.css']
            }]
    }], function () { return [{ type: _service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile/friends/friends.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profile/friends/friends.component.ts ***!
  \******************************************************/
/*! exports provided: FriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsComponent", function() { return FriendsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/profileService/profile.service */ "./src/app/service/profileService/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/profileService/share-id.service */ "./src/app/service/profileService/share-id.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");















function FriendsComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FriendsComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendsComponent_td_8_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const element_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.checkOut(element_r8.id, element_r8.email); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", element_r8.name, " ", element_r8.surname, "");
} }
function FriendsComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FriendsComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r11.rating, "");
} }
function FriendsComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FriendsComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FriendsComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
function FriendsComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
class FriendsComponent {
    constructor(profileService, router, shareId) {
        this.profileService = profileService;
        this.router = router;
        this.shareId = shareId;
        this.displayedColumns = ['name', 'rating', 'actions'];
        this.userQuestionUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.sortDirection = undefined;
        this.length = 0;
        this.pageSizeOptions = [9, 18, 27];
    }
    ngOnInit() {
        this.setPaginationParamDefault();
        this.uploadFriends();
        this.userQuestionUpdate.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])())
            .subscribe(userSearch => {
            if (userSearch.length == 0) {
                this.setPaginationParamDefault();
                this.uploadFriends();
            }
            else {
                this.filterFriends(userSearch);
            }
        });
    }
    checkOut(id, email) {
        this.shareId.setEmail(email);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['profile', id, { outlets: { profilenav: 'profinfo' } }]);
        });
    }
    setPaginationParamDefault() {
        this.pageIndex = 0;
        this.pageSize = 9;
    }
    uploadFriends() {
        this.profileService.getFriends(this.pageSize, this.pageIndex, this.sortDirection).subscribe(resp => {
            this.friends = resp.responceList;
            this.length = resp.totalNumberOfElement;
        });
    }
    onPageChanged($event) {
        this.pageIndex = $event.pageIndex;
        this.pageSize = $event.pageSize;
        this.choseRequest();
    }
    filterFriends(userSearch) {
        this.profileService.filterFriendsRequest(userSearch, this.pageSize, this.pageIndex, this.sortDirection).subscribe(resp => {
            this.friends = resp.responceList;
            this.length = resp.totalNumberOfElement;
        });
    }
    sortFriends($event) {
        this.sortDirection = $event.direction == '' ? undefined : $event;
        this.setPaginationParamDefault();
        this.choseRequest();
    }
    choseRequest() {
        if (this.userRequest != undefined && this.userRequest) {
            if (this.pageSize == undefined) {
                this.setPaginationParamDefault();
            }
            this.filterFriends(this.userRequest);
        }
        else {
            this.uploadFriends();
        }
    }
}
FriendsComponent.ɵfac = function FriendsComponent_Factory(t) { return new (t || FriendsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_5__["ShareIdService"])); };
FriendsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FriendsComponent, selectors: [["app-friends"]], decls: 18, vars: 8, consts: [[1, "input-form"], ["matInput", "", "type", "search", "placeholder", "Search", "value", "", 3, "ngModel", "ngModelChange"], ["id", "table", 1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "rating"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageIndex", "length", "pageSize", "pageSizeOptions", "page"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["routerLink", "", 3, "click"], ["mat-header-cell", ""], ["mat-icon-button", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function FriendsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FriendsComponent_Template_input_ngModelChange_3_listener($event) { return ctx.userRequest = $event; })("ngModelChange", function FriendsComponent_Template_input_ngModelChange_3_listener($event) { return ctx.userQuestionUpdate.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function FriendsComponent_Template_table_matSortChange_5_listener($event) { return ctx.sortFriends($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FriendsComponent_th_7_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FriendsComponent_td_8_Template, 3, 2, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FriendsComponent_th_10_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FriendsComponent_td_11_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FriendsComponent_th_13_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FriendsComponent_td_14_Template, 7, 0, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FriendsComponent_tr_15_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FriendsComponent_tr_16_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-paginator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function FriendsComponent_Template_mat_paginator_page_17_listener($event) { return ctx.onPageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userRequest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.friends);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageIndex", ctx.pageIndex)("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"]], styles: ["button[_ngcontent-%COMP%] {\r\n  padding-left:30px;\r\n  padding-right:30px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n#table[_ngcontent-%COMP%] {\r\n  width: 45%;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n\r\nmat-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%] {\r\n  min-height:auto;\r\n  padding: 12px 16px 12px 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9mcmllbmRzL2ZyaWVuZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL2ZyaWVuZHMvZnJpZW5kcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICBwYWRkaW5nLWxlZnQ6MzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OjMwcHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI3RhYmxlIHtcclxuICB3aWR0aDogNDUlO1xyXG59XHJcblxyXG50aCwgdGQge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbm1hdC1jZWxsLCAubWF0LWNlbGwge1xyXG4gIG1pbi1oZWlnaHQ6YXV0bztcclxuICBwYWRkaW5nOiAxMnB4IDE2cHggMTJweCAwO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FriendsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-friends',
                templateUrl: './friends.component.html',
                styleUrls: ['./friends.component.css']
            }]
    }], function () { return [{ type: _service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_5__["ShareIdService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile/left-bar/left-bar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile/left-bar/left-bar.component.ts ***!
  \********************************************************/
/*! exports provided: LeftBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftBarComponent", function() { return LeftBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/profileService/profile.service */ "./src/app/service/profileService/profile.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/profileService/share-id.service */ "./src/app/service/profileService/share-id.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");











function LeftBarComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftBarComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r2.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LeftBarComponent_button_5_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.fileProgress($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { profilenav: "changePass" }; };
const _c1 = function (a0) { return { outlets: a0 }; };
const _c2 = function (a0) { return [a0]; };
function LeftBarComponent_mat_card_actions_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-actions", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Change password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0))));
} }
class LeftBarComponent {
    constructor(profileService, sanitizer, shareId) {
        this.profileService = profileService;
        this.sanitizer = sanitizer;
        this.shareId = shareId;
        this.username = JSON.parse(localStorage.getItem('currentUser')).email;
        this.currentUserId = JSON.parse(localStorage.getItem('currentUser')).id;
        this.id = shareId.shareId();
        if (shareId.shareEmail() != undefined) {
            this.username = shareId.shareEmail();
        }
    }
    ngOnInit() {
        this.uploadFile();
        this.getNotification();
    }
    fileProgress(imageInput) {
        this.progressImage = imageInput.target.files[0];
        this.changeImg();
    }
    changeImg() {
        this.profileService.updateImage(this.progressImage).subscribe(resp => {
            this.uploadFile();
            alert("Icon was changed");
        }, error => {
            alert("Error while updating icon");
        });
    }
    uploadFile() {
        this.profileService.getProfileImage(this.id).subscribe(resp => {
            this.imageUrl = resp.text;
        }, error => {
            console.log(error);
        });
    }
    change() {
        this.profileService.updateNotificationStatus(this.notificationStatus).subscribe(resp => {
            alert("Notification status was changed");
        }, error => {
            alert("Error while change notification status");
        });
    }
    getNotification() {
        this.profileService.getUserNotificationStatus().subscribe(resp => {
            this.notificationStatus = resp;
        });
    }
}
LeftBarComponent.ɵfac = function LeftBarComponent_Factory(t) { return new (t || LeftBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_3__["ShareIdService"])); };
LeftBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeftBarComponent, selectors: [["app-left-bar"]], decls: 10, vars: 4, consts: [[1, "card"], ["mat-card-image", "", "height", "250", "width", "250", 3, "src"], ["fxLayout", "column"], ["fxLayoutAlign", "end"], ["mat-icon-button", "", "id", "changeImg", 3, "click", 4, "ngIf"], ["fxLayoutAlign", "center"], ["fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["mat-icon-button", "", "id", "changeImg", 3, "click"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], ["image", ""], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["mat-raised-button", "", 3, "routerLink"]], template: function LeftBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LeftBarComponent_button_5_Template, 5, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LeftBarComponent_mat_card_actions_9_Template, 4, 6, "mat-card-actions", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUserId == ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUserId == ctx.id);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"]], styles: ["#changeImg[_ngcontent-%COMP%]{\r\n  width: 30px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  margin-right: 30px;\r\n  margin-top: 90px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n width: 150px;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n  max-width: 250px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9sZWZ0LWJhci9sZWZ0LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvbGVmdC1iYXIvbGVmdC1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjaGFuZ2VJbWd7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luLXRvcDogOTBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIG1heC13aWR0aDogMjUwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-left-bar',
                templateUrl: './left-bar.component.html',
                styleUrls: ['./left-bar.component.css']
            }]
    }], function () { return [{ type: _service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }, { type: _service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_3__["ShareIdService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile/my-quizzes/my-quizzes.component.ts":
/*!************************************************************!*\
  !*** ./src/app/profile/my-quizzes/my-quizzes.component.ts ***!
  \************************************************************/
/*! exports provided: MyQuizzesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyQuizzesComponent", function() { return MyQuizzesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _reject_messages_dialog_reject_messages_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reject-messages-dialog/reject-messages-dialog.component */ "./src/app/profile/my-quizzes/reject-messages-dialog/reject-messages-dialog.component.ts");
/* harmony import */ var _service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/profileService/profile.service */ "./src/app/service/profileService/profile.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_service_newQuizService_new_quiz_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/newQuizService/new-quiz.service */ "./src/app/service/newQuizService/new-quiz.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");




















function MyQuizzesComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyQuizzesComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyQuizzesComponent_td_16_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const element_r20 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.openDialog(element_r20.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r20.name);
} }
function MyQuizzesComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyQuizzesComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyQuizzesComponent_td_19_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const element_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.openDialog(element_r23.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r23.category);
} }
function MyQuizzesComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyQuizzesComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyQuizzesComponent_td_22_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const element_r26 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.openDialog(element_r26.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyQuizzesComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Acting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyQuizzesComponent_mat_cell_25_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyQuizzesComponent_mat_cell_25_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const row_r29 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.editQuiz(row_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyQuizzesComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 31);
} }
function MyQuizzesComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 32);
} }
function MyQuizzesComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyQuizzesComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r33.name);
} }
function MyQuizzesComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyQuizzesComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r34.category);
} }
function MyQuizzesComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyQuizzesComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r35.status);
} }
function MyQuizzesComponent_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Acting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyQuizzesComponent_mat_cell_47_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyQuizzesComponent_mat_cell_47_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const row_r36 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.onStartClick(row_r36.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyQuizzesComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 31);
} }
function MyQuizzesComponent_tr_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 35);
} }
class MyQuizzesComponent {
    constructor(profileService, dialog, quizService, router) {
        this.profileService = profileService;
        this.dialog = dialog;
        this.quizService = quizService;
        this.router = router;
        this.displayedColumns = ['name', 'category', 'status', 'actions'];
        this.userQuestionUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.sortDirection = undefined;
        this.length = 0;
        this.pageSizeOptions = [8, 16, 24];
        this.rejectedSortDirection = undefined;
        this.rejectedLength = 0;
        this.rejectedPageSizeOptions = [8, 16, 24];
    }
    ngOnInit() {
        this.setPaginationParamDefault();
        this.getUserQuizzes();
        this.setPaginationRejectedParamDefault();
        this.getUserRejectedQuizzes();
        this.userQuestionUpdate.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])())
            .subscribe(userSearch => {
            if (userSearch.length == 0) {
                this.setPaginationParamDefault();
                this.getUserQuizzes();
            }
            else {
                this.filterQuizzes(userSearch);
            }
        });
    }
    getUserQuizzes() {
        this.profileService.getUserQuizzes(this.pageSize, this.pageIndex, this.sortDirection).subscribe(resp => {
            this.userQuizzes = resp.responceList;
            this.length = resp.totalNumberOfElement;
        });
    }
    setPaginationParamDefault() {
        this.pageIndex = 0;
        this.pageSize = 8;
    }
    onPageChanged($event) {
        this.pageIndex = $event.pageIndex;
        this.pageSize = $event.pageSize;
        this.choseRequest();
    }
    filterQuizzes(userSearch) {
        this.profileService.filterQuizzesRequest(userSearch, this.pageSize, this.pageIndex, this.sortDirection).subscribe(resp => {
            this.userQuizzes = resp.responceList;
            this.length = resp.totalNumberOfElement;
        });
    }
    choseRequest() {
        if (this.userRequest != undefined && this.userRequest) {
            if (this.pageSize == undefined) {
                this.setPaginationParamDefault();
            }
            this.filterQuizzes(this.userRequest);
        }
        else {
            this.getUserQuizzes();
        }
    }
    sortQuizzes($event) {
        this.sortDirection = $event.direction == '' ? undefined : $event;
        this.setPaginationParamDefault();
        this.choseRequest();
    }
    getUserRejectedQuizzes() {
        this.profileService.getRejectedQuizzes(this.rejectedPageSize, this.rejectedPageIndex, this.rejectedSortDirection).subscribe(resp => {
            this.rejectedQuizzes = resp.responceList;
            this.rejectedLength = resp.totalNumberOfElement;
        });
    }
    setPaginationRejectedParamDefault() {
        this.rejectedPageIndex = 0;
        this.rejectedPageSize = 8;
    }
    onPageRejectedChanged($event) {
        this.rejectedPageIndex = $event.pageIndex;
        this.rejectedPageSize = $event.pageSize;
        this.choseRejectedRequest();
    }
    choseRejectedRequest() {
        if (this.rejectedPageSize == undefined) {
            this.setPaginationParamDefault();
        }
        this.getUserRejectedQuizzes();
    }
    sortRejectedQuizzes($event) {
        this.rejectedSortDirection = $event.direction == '' ? undefined : $event;
        this.setPaginationRejectedParamDefault();
        this.choseRejectedRequest();
    }
    openDialog(id) {
        this.dialog.open(_reject_messages_dialog_reject_messages_dialog_component__WEBPACK_IMPORTED_MODULE_3__["RejectMessagesDialogComponent"], {
            data: id
        });
    }
    editQuiz(quiz) {
        this.quizService.getQuizInfo(quiz.id).subscribe(resp => this.router.navigateByUrl('/new_quiz', {
            state: {
                quiz: resp
            }
        }), err => {
            console.log(err);
            alert(err.message);
        });
    }
    onStartClick(id) {
        this.router.navigate(['/game/settings', id]);
    }
}
MyQuizzesComponent.ɵfac = function MyQuizzesComponent_Factory(t) { return new (t || MyQuizzesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_newQuizService_new_quiz_service__WEBPACK_IMPORTED_MODULE_6__["NewQuizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
MyQuizzesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyQuizzesComponent, selectors: [["app-my-quizzes"]], decls: 51, vars: 16, consts: [["id", "add-quiz-button"], ["mat-raised-button", "", "routerLink", "/new_quiz"], ["id", "rejected"], ["fxLayoutAlign", "center"], ["matBadgeOverlap", "false", "matBadgePosition", "above", 3, "matBadge"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "category"], ["matColumnDef", "status"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["id", "actions2", "mat-header-cell", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "reject", 4, "matRowDef", "matRowDefColumns"], [3, "pageIndex", "length", "pageSize", "pageSizeOptions", "page"], [1, "input-form"], ["matInput", "", "type", "search", "placeholder", "Search", "value", "", 3, "ngModel", "ngModelChange"], ["id", "table", 1, "mat-elevation-z8"], ["mat-cell", "", 4, "matCellDef"], ["id", "actions", "mat-header-cell", "", 4, "matHeaderCellDef"], ["fxLayoutAlign", "center", 4, "matCellDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 3, "click"], ["mat-header-cell", ""], ["id", "actions2", "mat-header-cell", ""], ["mat-icon-button", "", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "reject"], ["mat-cell", ""], ["id", "actions", "mat-header-cell", ""], ["mat-row", ""]], template: function MyQuizzesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-accordion", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-panel-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Rejected quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function MyQuizzesComponent_Template_table_matSortChange_13_listener($event) { return ctx.sortRejectedQuizzes($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MyQuizzesComponent_th_15_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MyQuizzesComponent_td_16_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MyQuizzesComponent_th_18_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MyQuizzesComponent_td_19_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MyQuizzesComponent_th_21_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MyQuizzesComponent_td_22_Template, 2, 0, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MyQuizzesComponent_th_24_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MyQuizzesComponent_mat_cell_25_Template, 4, 0, "mat-cell", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MyQuizzesComponent_tr_26_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MyQuizzesComponent_tr_27_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-paginator", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function MyQuizzesComponent_Template_mat_paginator_page_28_listener($event) { return ctx.onPageRejectedChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Search quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyQuizzesComponent_Template_input_ngModelChange_32_listener($event) { return ctx.userRequest = $event; })("ngModelChange", function MyQuizzesComponent_Template_input_ngModelChange_32_listener($event) { return ctx.userQuestionUpdate.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function MyQuizzesComponent_Template_table_matSortChange_35_listener($event) { return ctx.sortQuizzes($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](36, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, MyQuizzesComponent_th_37_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, MyQuizzesComponent_td_38_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](39, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, MyQuizzesComponent_th_40_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, MyQuizzesComponent_td_41_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](42, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, MyQuizzesComponent_th_43_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, MyQuizzesComponent_td_44_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](45, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, MyQuizzesComponent_th_46_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, MyQuizzesComponent_mat_cell_47_Template, 4, 0, "mat-cell", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, MyQuizzesComponent_tr_48_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, MyQuizzesComponent_tr_49_Template, 1, 0, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-paginator", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function MyQuizzesComponent_Template_mat_paginator_page_50_listener($event) { return ctx.onPageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matBadge", ctx.rejectedLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.rejectedQuizzes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageIndex", ctx.rejectedPageIndex)("length", ctx.rejectedLength)("pageSize", ctx.rejectedPageSize)("pageSizeOptions", ctx.rejectedPageSizeOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userRequest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.userQuizzes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageIndex", ctx.pageIndex)("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelTitle"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadge"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  width: 50px;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n\r\n#actions[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  width: 100px;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n\r\nmat-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%] {\r\n  min-height: auto;\r\n  padding: 12px 16px 12px 0;\r\n}\r\n\r\nmat-icon-button[_ngcontent-%COMP%] {\r\n  padding-right: 10px;\r\n  width: 50px;\r\n}\r\n\r\n#table[_ngcontent-%COMP%] {\r\n  width: 48%;\r\n}\r\n\r\n.mat-badge-medium.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\r\n  top: 0px;\r\n  left: 8px;\r\n}\r\n\r\n.mat-expansion-panel[_ngcontent-%COMP%] {\r\n  width: 48%;\r\n}\r\n\r\n.mat-raised-button[_ngcontent-%COMP%] {\r\n  width: 455px;\r\n}\r\n\r\n.reject.mat-row[_ngcontent-%COMP%]:hover {\r\n  background-color: whitesmoke;\r\n}\r\n\r\n.input-form[_ngcontent-%COMP%] {\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n  width: 455px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9teS1xdWl6emVzL215LXF1aXp6ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBR0E7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9teS1xdWl6emVzL215LXF1aXp6ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGgsIHRkIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbiNhY3Rpb25zIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG5tYXQtY2VsbCwgLm1hdC1jZWxsIHtcclxuICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEycHggMTZweCAxMnB4IDA7XHJcbn1cclxuXHJcblxyXG5tYXQtaWNvbi1idXR0b24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbiN0YWJsZSB7XHJcbiAgd2lkdGg6IDQ4JTtcclxufVxyXG5cclxuLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudCB7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogOHB4O1xyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgd2lkdGg6IDQ4JTtcclxufVxyXG5cclxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICB3aWR0aDogNDU1cHg7XHJcbn1cclxuXHJcbi5yZWplY3QubWF0LXJvdzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLmlucHV0LWZvcm0ge1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIHdpZHRoOiA0NTVweDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyQuizzesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-quizzes',
                templateUrl: './my-quizzes.component.html',
                styleUrls: ['./my-quizzes.component.css']
            }]
    }], function () { return [{ type: _service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: src_app_service_newQuizService_new_quiz_service__WEBPACK_IMPORTED_MODULE_6__["NewQuizService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile/my-quizzes/reject-messages-dialog/reject-messages-dialog.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/profile/my-quizzes/reject-messages-dialog/reject-messages-dialog.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: RejectMessagesDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectMessagesDialogComponent", function() { return RejectMessagesDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/profileService/profile.service */ "./src/app/service/profileService/profile.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");







function RejectMessagesDialogComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mess_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 3, mess_r1.date, "shortTime"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, mess_r1.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mess_r1.comment, " ");
} }
class RejectMessagesDialogComponent {
    constructor(profileService, dialogRef, quizId) {
        this.profileService = profileService;
        this.dialogRef = dialogRef;
        this.quizId = quizId;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
        this.profileService.getRejectMessages(this.quizId).subscribe(resp => {
            this.messages = resp;
            console.log(resp);
        });
    }
}
RejectMessagesDialogComponent.ɵfac = function RejectMessagesDialogComponent_Factory(t) { return new (t || RejectMessagesDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
RejectMessagesDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RejectMessagesDialogComponent, selectors: [["app-reject-messages-dialog"]], decls: 1, vars: 1, consts: [["class", "card", 4, "ngFor", "ngForOf"], [1, "card"]], template: function RejectMessagesDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RejectMessagesDialogComponent_div_0_Template, 12, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".card[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n  max-height: 300px;\r\n  overflow: scroll;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 0px;\r\n  height: 0px;\r\n  background: transparent;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9teS1xdWl6emVzL3JlamVjdC1tZXNzYWdlcy1kaWFsb2cvcmVqZWN0LW1lc3NhZ2VzLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvbXktcXVpenplcy9yZWplY3QtbWVzc2FnZXMtZGlhbG9nL3JlamVjdC1tZXNzYWdlcy1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDBweDtcclxuICBoZWlnaHQ6IDBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RejectMessagesDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reject-messages-dialog',
                templateUrl: './reject-messages-dialog.component.html',
                styleUrls: ['./reject-messages-dialog.component.css']
            }]
    }], function () { return [{ type: _service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile/pending-quizzes/pending-quizzes.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/profile/pending-quizzes/pending-quizzes.component.ts ***!
  \**********************************************************************/
/*! exports provided: PendingQuizzesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingQuizzesComponent", function() { return PendingQuizzesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _service_pendingQuizzesService_pending_quizzes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/pendingQuizzesService/pending-quizzes.service */ "./src/app/service/pendingQuizzesService/pending-quizzes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/profileService/share-id.service */ "./src/app/service/profileService/share-id.service.ts");
/* harmony import */ var _service_quizCheckService_quiz_check_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/quizCheckService/quiz-check.service */ "./src/app/service/quizCheckService/quiz-check.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");



















function PendingQuizzesComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PendingQuizzesComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.name, "");
} }
function PendingQuizzesComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PendingQuizzesComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.category, "");
} }
function PendingQuizzesComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PendingQuizzesComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r15.date), "");
} }
function PendingQuizzesComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Author Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PendingQuizzesComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PendingQuizzesComponent_td_29_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const element_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.checkOut(element_r16.author, element_r16.authorEmail); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", element_r16.authorName, " ", element_r16.authorSurname, "");
} }
function PendingQuizzesComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Acting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PendingQuizzesComponent_mat_cell_32_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PendingQuizzesComponent_mat_cell_32_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const element_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.checkQuiz(element_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0421heck");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PendingQuizzesComponent_mat_cell_32_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PendingQuizzesComponent_mat_cell_32_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const element_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.checkQuiz(element_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PendingQuizzesComponent_mat_cell_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PendingQuizzesComponent_mat_cell_32_button_1_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PendingQuizzesComponent_mat_cell_32_button_2_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.currentTable == "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.currentTable == "Assigned");
} }
function PendingQuizzesComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 28);
} }
function PendingQuizzesComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 29);
} }
class PendingQuizzesComponent {
    constructor(quizService, router, shareId, quizCheckService) {
        this.quizService = quizService;
        this.router = router;
        this.shareId = shareId;
        this.quizCheckService = quizCheckService;
        this.displayedColumns = ['name', 'category', 'date', 'authorEmail', 'actions'];
        this.length = 0;
        this.pageSizeOptions = [10, 20, 30, 40, 50];
        this.selected = 'Pending';
        this.userQuestionUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.currentUserId = JSON.parse(localStorage.getItem('currentUser')).id;
    }
    ngOnInit() {
        this.setPaginationParamDefault();
        this.setCurrentTable('Pending');
        this.userQuestionUpdate.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])())
            .subscribe(userSearch => {
            this.setPaginationParamDefault();
            userSearch.length == 0 ? this.getAllPendingQuizzes() : this.filterRequest(userSearch);
        });
        this.getAllPendingQuizzes();
    }
    onPageChanged(e) {
        this.pageIndex = e.pageIndex;
        this.pageSize = e.pageSize;
        if (this.currentTable != 'Pending' && this.currentTable != null) {
            if (this.pageSize == undefined) {
                this.setPaginationParamDefault();
            }
            this.getAssignedQuizzes();
        }
        else if (this.userRequest != undefined && this.userRequest) {
            if (this.pageSize == undefined) {
                this.setPaginationParamDefault();
            }
            this.filterRequest(this.userRequest);
        }
        else {
            this.getAllPendingQuizzes();
        }
    }
    filterRequest(filterText) {
        this.quizService.getFilteredPendingQuizzes(filterText, this.pageSize, this.pageIndex).subscribe(resp => {
            this.pendingQuizzes = resp.responceList;
            this.length = resp.totalNumberOfElement;
        });
    }
    setPaginationParamDefault() {
        this.pageIndex = 0;
        this.pageSize = 10;
    }
    getAllPendingQuizzes() {
        this.quizService.getPendingQuizzes(this.pageSize, this.pageIndex).subscribe(resp => {
            this.pendingQuizzes = resp.responceList;
            this.length = resp.totalNumberOfElement;
        });
    }
    getAssignedQuizzes() {
        this.quizService.getAssignedQuizzes(this.currentUserId, this.pageSize, this.pageIndex).subscribe(resp => {
            this.pendingQuizzes = resp.responceList;
            this.length = resp.totalNumberOfElement;
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    checkOut(id, email) {
        this.shareId.setEmail(email);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['profile', id, { outlets: { profilenav: 'profinfo' } }]);
        });
    }
    checkQuiz(quiz) {
        if (this.currentTable === 'Pending') {
            this.quizCheckService.assignQuiz(quiz.id, JSON.parse(localStorage.getItem('currentUser')).id).subscribe((resp) => {
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                    this.router.navigate(['checkquiz', quiz.id, { outlets: { quiznav: 'quizinfo' } }]);
                });
                localStorage.setItem('currentQuiz', JSON.stringify(quiz));
            }, error => {
                alert('Something wrong while assigning quiz');
            });
        }
        else {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(['checkquiz', quiz.id, { outlets: { quiznav: 'quizinfo' } }]);
            });
            localStorage.setItem('currentQuiz', JSON.stringify(quiz));
        }
    }
    setCurrentTable(type) {
        this.currentTable = type;
    }
}
PendingQuizzesComponent.ɵfac = function PendingQuizzesComponent_Factory(t) { return new (t || PendingQuizzesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_pendingQuizzesService_pending_quizzes_service__WEBPACK_IMPORTED_MODULE_4__["PendingQuizzesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_6__["ShareIdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_quizCheckService_quiz_check_service__WEBPACK_IMPORTED_MODULE_7__["QuizCheckService"])); };
PendingQuizzesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PendingQuizzesComponent, selectors: [["app-not-checked-quizzes"]], viewQuery: function PendingQuizzesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 36, vars: 9, consts: [["fxLayout", "column"], ["fxFlex", "71", 1, "scroll", "main"], ["maincontent", ""], [1, "input"], ["appearance", "outline"], ["matInput", "", "type", "search", "placeholder", "Search", "value", "", 3, "ngModel", "ngModelChange"], [1, "quiz_selection"], ["disableRipple", "", 3, "value", "valueChange"], ["value", "Pending", 3, "click"], ["value", "Assigned", 3, "click"], [1, "mat-elevation-z8", "w-75"], ["mat-table", "", "width", "100%", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "category"], ["matColumnDef", "date"], ["matColumnDef", "authorEmail"], ["matColumnDef", "actions"], [4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageIndex", "length", "pageSize", "pageSizeOptions", "page"], ["mat-header-cell", ""], ["mat-cell", ""], ["routerLink", "", 1, "nav-link", 3, "click"], ["class", "buttonsAction", "mat-stroked-button", "", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", 1, "buttonsAction", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function PendingQuizzesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Search quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PendingQuizzesComponent_Template_input_ngModelChange_7_listener($event) { return ctx.userRequest = $event; })("ngModelChange", function PendingQuizzesComponent_Template_input_ngModelChange_7_listener($event) { return ctx.userQuestionUpdate.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function PendingQuizzesComponent_Template_mat_select_valueChange_11_listener($event) { return ctx.selected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PendingQuizzesComponent_Template_mat_option_click_12_listener() { ctx.setPaginationParamDefault(); ctx.setCurrentTable("Pending"); return ctx.getAllPendingQuizzes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Assignments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PendingQuizzesComponent_Template_mat_option_click_14_listener() { ctx.setPaginationParamDefault(); ctx.setCurrentTable("Assigned"); return ctx.getAssignedQuizzes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "My Assignments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PendingQuizzesComponent_th_19_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PendingQuizzesComponent_td_20_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PendingQuizzesComponent_th_22_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PendingQuizzesComponent_td_23_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, PendingQuizzesComponent_th_25_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, PendingQuizzesComponent_td_26_Template, 3, 3, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PendingQuizzesComponent_th_28_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PendingQuizzesComponent_td_29_Template, 3, 2, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PendingQuizzesComponent_th_31_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, PendingQuizzesComponent_mat_cell_32_Template, 3, 2, "mat-cell", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, PendingQuizzesComponent_tr_33_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, PendingQuizzesComponent_tr_34_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-paginator", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function PendingQuizzesComponent_Template_mat_paginator_page_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); ctx.onPageChanged($event); return _r0.scrollTop = 0; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userRequest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.pendingQuizzes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageIndex", ctx.pageIndex)("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]], styles: [".buttonsAction[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.buttonsAction[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  display:flex;\r\n  justify-content:center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wZW5kaW5nLXF1aXp6ZXMvcGVuZGluZy1xdWl6emVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wZW5kaW5nLXF1aXp6ZXMvcGVuZGluZy1xdWl6emVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uc0FjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYnV0dG9uc0FjdGlvbiBidXR0b24ge1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PendingQuizzesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-checked-quizzes',
                templateUrl: './pending-quizzes.component.html',
                styleUrls: ['./pending-quizzes.component.css']
            }]
    }], function () { return [{ type: _service_pendingQuizzesService_pending_quizzes_service__WEBPACK_IMPORTED_MODULE_4__["PendingQuizzesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_6__["ShareIdService"] }, { type: _service_quizCheckService_quiz_check_service__WEBPACK_IMPORTED_MODULE_7__["QuizCheckService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/profile/played-game/game-result-dialog/game-result-dialog.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/profile/played-game/game-result-dialog/game-result-dialog.component.ts ***!
  \****************************************************************************************/
/*! exports provided: GameResultDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameResultDialogComponent", function() { return GameResultDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/profileService/profile.service */ "./src/app/service/profileService/profile.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");







function GameResultDialogComponent_mat_list_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const player_r1 = ctx.$implicit;
    const indexOfelement_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", indexOfelement_r2 + 1, " ", player_r1.userName, " ", player_r1.userScore, "");
} }
class GameResultDialogComponent {
    constructor(profileService, dialogRef, gameId) {
        this.profileService = profileService;
        this.dialogRef = dialogRef;
        this.gameId = gameId;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
        this.profileService.getGamesResult(this.gameId).subscribe(resp => this.players = resp);
    }
}
GameResultDialogComponent.ɵfac = function GameResultDialogComponent_Factory(t) { return new (t || GameResultDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
GameResultDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameResultDialogComponent, selectors: [["app-game-result-dialog"]], decls: 4, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["role", "list", 4, "ngFor", "ngForOf"], ["role", "list"], ["role", "listitem"]], template: function GameResultDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Game result\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameResultDialogComponent_mat_list_3_Template, 3, 3, "mat-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.players);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"]], styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 0px;\r\n  height: 0px;\r\n  background: transparent;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wbGF5ZWQtZ2FtZS9nYW1lLXJlc3VsdC1kaWFsb2cvZ2FtZS1yZXN1bHQtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcGxheWVkLWdhbWUvZ2FtZS1yZXN1bHQtZGlhbG9nL2dhbWUtcmVzdWx0LWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDBweDtcclxuICBoZWlnaHQ6IDBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameResultDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-result-dialog',
                templateUrl: './game-result-dialog.component.html',
                styleUrls: ['./game-result-dialog.component.css']
            }]
    }], function () { return [{ type: _service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile/played-game/played-game.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/profile/played-game/played-game.component.ts ***!
  \**************************************************************/
/*! exports provided: PlayedGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayedGameComponent", function() { return PlayedGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _game_result_dialog_game_result_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-result-dialog/game-result-dialog.component */ "./src/app/profile/played-game/game-result-dialog/game-result-dialog.component.ts");
/* harmony import */ var _service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/profileService/profile.service */ "./src/app/service/profileService/profile.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");














function PlayedGameComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayedGameComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayedGameComponent_td_9_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const element_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.openDialog(element_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r8.quizName);
} }
function PlayedGameComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayedGameComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayedGameComponent_td_12_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const element_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.openDialog(element_r11.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r11.date));
} }
function PlayedGameComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayedGameComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayedGameComponent_td_15_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const element_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.openDialog(element_r14.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r14.personalScore);
} }
function PlayedGameComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
} }
function PlayedGameComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 15);
} }
class PlayedGameComponent {
    constructor(profileService, dialog) {
        this.profileService = profileService;
        this.dialog = dialog;
        this.displayedColumns = ['name', 'date', 'score'];
        this.userQuestionUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.sortDirection = undefined;
        this.length = 0;
        this.pageSizeOptions = [9, 18, 27];
    }
    ngOnInit() {
        this.setPaginationParamDefault();
        this.uploadPlayedGames();
        this.userQuestionUpdate.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])())
            .subscribe(userSearch => {
            if (userSearch.length == 0) {
                this.setPaginationParamDefault();
                this.uploadPlayedGames();
            }
            else {
                userSearch.length == 0 ? this.uploadPlayedGames() : this.uploadPlayedGames(userSearch);
            }
        });
    }
    setPaginationParamDefault() {
        this.pageIndex = 0;
        this.pageSize = 9;
    }
    uploadPlayedGames(userSearch) {
        this.profileService.getPlayedGames(this.pageSize, this.pageIndex, this.sortDirection, userSearch).subscribe(resp => {
            this.playedGame = resp.responceList;
            this.length = resp.totalNumberOfElement;
        });
    }
    onPageChanged($event) {
        this.pageIndex = $event.pageIndex;
        this.pageSize = $event.pageSize;
        this.choseRequest();
    }
    choseRequest() {
        if (this.userRequest != undefined && this.userRequest) {
            if (this.pageSize == undefined) {
                this.setPaginationParamDefault();
            }
            this.uploadPlayedGames(this.userRequest);
        }
        else {
            this.uploadPlayedGames();
        }
    }
    sortPlayedGames($event) {
        this.sortDirection = $event.direction == '' ? undefined : $event;
        this.setPaginationParamDefault();
        this.choseRequest();
    }
    openDialog(id) {
        this.dialog.open(_game_result_dialog_game_result_dialog_component__WEBPACK_IMPORTED_MODULE_3__["GameResultDialogComponent"], {
            data: id
        });
    }
}
PlayedGameComponent.ɵfac = function PlayedGameComponent_Factory(t) { return new (t || PlayedGameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
PlayedGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayedGameComponent, selectors: [["app-played-game"]], decls: 19, vars: 8, consts: [[1, "input-form"], ["matInput", "", "type", "search", "placeholder", "Search", "value", "", 3, "ngModel", "ngModelChange"], ["id", "table", 1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "date"], ["matColumnDef", "score"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageIndex", "length", "pageSize", "pageSizeOptions", "page"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function PlayedGameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlayedGameComponent_Template_input_ngModelChange_3_listener($event) { return ctx.userRequest = $event; })("ngModelChange", function PlayedGameComponent_Template_input_ngModelChange_3_listener($event) { return ctx.userQuestionUpdate.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function PlayedGameComponent_Template_table_matSortChange_6_listener($event) { return ctx.sortPlayedGames($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PlayedGameComponent_th_8_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PlayedGameComponent_td_9_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PlayedGameComponent_th_11_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PlayedGameComponent_td_12_Template, 3, 3, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PlayedGameComponent_th_14_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PlayedGameComponent_td_15_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PlayedGameComponent_tr_16_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PlayedGameComponent_tr_17_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-paginator", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function PlayedGameComponent_Template_mat_paginator_page_18_listener($event) { return ctx.onPageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userRequest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.playedGame);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageIndex", ctx.pageIndex)("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  width: 50px;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n\r\nmat-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%] {\r\n  min-height: auto;\r\n  padding: 12px 16px 12px 0;\r\n}\r\n\r\n#table[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n}\r\n\r\n.mat-row[_ngcontent-%COMP%]:hover {\r\n  background-color: whitesmoke;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wbGF5ZWQtZ2FtZS9wbGF5ZWQtZ2FtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcGxheWVkLWdhbWUvcGxheWVkLWdhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGgsIHRkIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbm1hdC1jZWxsLCAubWF0LWNlbGwge1xyXG4gIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMTJweCAxNnB4IDEycHggMDtcclxufVxyXG5cclxuI3RhYmxlIHtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4ubWF0LXJvdzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayedGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-played-game',
                templateUrl: './played-game.component.html',
                styleUrls: ['./played-game.component.css']
            }]
    }], function () { return [{ type: _service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile/profile-navigation/profile-navigation.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/profile/profile-navigation/profile-navigation.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProfileNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileNavigationComponent", function() { return ProfileNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_role_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/role.enum */ "./src/app/models/role.enum.ts");
/* harmony import */ var _service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/profileService/share-id.service */ "./src/app/service/profileService/share-id.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const _c0 = function () { return { profilenav: "friends" }; };
const _c1 = function (a0) { return { outlets: a0 }; };
const _c2 = function (a0) { return [a0]; };
function ProfileNavigationComponent_nav_0_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My friends");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))))("active", _r8.isActive);
} }
const _c3 = function () { return { profilenav: "mygames" }; };
function ProfileNavigationComponent_nav_0_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Quizzes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c3))))("active", _r9.isActive);
} }
const _c4 = function () { return { profilenav: "favorite" }; };
function ProfileNavigationComponent_nav_0_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c4))))("active", _r10.isActive);
} }
const _c5 = function () { return { profilenav: "played" }; };
function ProfileNavigationComponent_nav_0_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Played games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c5))))("active", _r11.isActive);
} }
const _c6 = function () { return { profilenav: "pendingQuizzes" }; };
function ProfileNavigationComponent_nav_0_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quizzes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c6))))("active", _r12.isActive);
} }
const _c7 = function () { return { profilenav: "adminUsers" }; };
function ProfileNavigationComponent_nav_0_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Admin users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c7))))("active", _r13.isActive);
} }
const _c8 = function () { return { profilenav: "profinfo" }; };
function ProfileNavigationComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileNavigationComponent_nav_0_a_4_Template, 3, 7, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileNavigationComponent_nav_0_a_5_Template, 3, 7, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileNavigationComponent_nav_0_a_6_Template, 3, 7, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileNavigationComponent_nav_0_a_7_Template, 3, 7, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfileNavigationComponent_nav_0_a_8_Template, 3, 7, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileNavigationComponent_nav_0_a_9_Template, 3, 7, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c8))))("active", _r1.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
} }
class ProfileNavigationComponent {
    constructor(shareId) {
        this.shareId = shareId;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.isAdmin = false;
        this.id = shareId.shareId();
        this.roleUs = JSON.parse(localStorage.getItem('currentUser')).role;
    }
    adminCheck() {
        if (this.roleUs.toString() !== _models_role_enum__WEBPACK_IMPORTED_MODULE_1__["Role"][_models_role_enum__WEBPACK_IMPORTED_MODULE_1__["Role"].USER]) {
            this.isAdmin = true;
        }
    }
    ngOnInit() {
        this.id = this.shareId.shareId();
        this.adminCheck();
    }
}
ProfileNavigationComponent.ɵfac = function ProfileNavigationComponent_Factory(t) { return new (t || ProfileNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_2__["ShareIdService"])); };
ProfileNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileNavigationComponent, selectors: [["app-profile-navigation"]], decls: 1, vars: 1, consts: [["mat-tab-nav-bar", "", 4, "ngIf"], ["mat-tab-nav-bar", ""], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active"], ["myProfile", "routerLinkActive"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active", 4, "ngIf"], ["myFriends", "routerLinkActive"], ["myQuizzes", "routerLinkActive"], ["favorite", "routerLinkActive"], ["games", "routerLinkActive"], ["quizzes", "routerLinkActive"], ["admins", "routerLinkActive"]], template: function ProfileNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileNavigationComponent_nav_0_Template, 10, 13, "nav", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.id == ctx.id);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabNav"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"]], styles: ["nav[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLW5hdmlnYXRpb24vcHJvZmlsZS1uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUtbmF2aWdhdGlvbi9wcm9maWxlLW5hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileNavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-navigation',
                templateUrl: './profile-navigation.component.html',
                styleUrls: ['./profile-navigation.component.css']
            }]
    }], function () { return [{ type: _service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_2__["ShareIdService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/profileService/share-id.service */ "./src/app/service/profileService/share-id.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _left_bar_left_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./left-bar/left-bar.component */ "./src/app/profile/left-bar/left-bar.component.ts");
/* harmony import */ var _profile_navigation_profile_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-navigation/profile-navigation.component */ "./src/app/profile/profile-navigation/profile-navigation.component.ts");







class ProfileComponent {
    constructor(activateRoute, router, shareId) {
        this.activateRoute = activateRoute;
        this.router = router;
        this.shareId = shareId;
        this.subscription = this.activateRoute.params.subscribe(params => {
            this.id = params.id;
        });
        this.shareId.setId(this.id);
        // this.router.navigate([{outlets: {profilenav: 'profinfo'}}]);
    }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_2__["ShareIdService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 7, vars: 0, consts: [["fxLayout", "row", "fxLayoutAlign", "center start"], ["id", "leftbar", "fxFlex", "20"], ["fxFlex", "50"], ["id", "navigation"], ["name", "profilenav"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-left-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-profile-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _left_bar_left_bar_component__WEBPACK_IMPORTED_MODULE_4__["LeftBarComponent"], _profile_navigation_profile_navigation_component__WEBPACK_IMPORTED_MODULE_5__["ProfileNavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".input-form[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-left: 20px;\r\n}\r\n\r\n#navigation[_ngcontent-%COMP%] {\r\n  min-height: 90px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbiNuYXZpZ2F0aW9uIHtcclxuICBtaW4taGVpZ2h0OiA5MHB4O1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_2__["ShareIdService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile/user-information/user-information.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/profile/user-information/user-information.component.ts ***!
  \************************************************************************/
/*! exports provided: UserInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInformationComponent", function() { return UserInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _models_role_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/role.enum */ "./src/app/models/role.enum.ts");
/* harmony import */ var _service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/profileService/profile.service */ "./src/app/service/profileService/profile.service.ts");
/* harmony import */ var _service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/profileService/share-id.service */ "./src/app/service/profileService/share-id.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_quizCheckService_quiz_check_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/quizCheckService/quiz-check.service */ "./src/app/service/quizCheckService/quiz-check.service.ts");
/* harmony import */ var _service_quizService_quiz_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/quizService/quiz.service */ "./src/app/service/quizService/quiz.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
















function UserInformationComponent_div_0_div_1_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Role: ", ctx_r4.profile == null ? null : ctx_r4.profile.role, " ");
} }
function UserInformationComponent_div_0_div_1_button_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserInformationComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserInformationComponent_div_0_div_1_p_15_Template, 2, 1, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserInformationComponent_div_0_div_1_Template_div_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.isEditForm = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UserInformationComponent_div_0_div_1_button_18_Template, 2, 0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Name: ", ctx_r1.profile == null ? null : ctx_r1.profile.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Surname: ", ctx_r1.profile == null ? null : ctx_r1.profile.surname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gender: ", ctx_r1.profile == null ? null : ctx_r1.profile.gender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birthdate: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 8, ctx_r1.profile == null ? null : ctx_r1.profile.birthdate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("City: ", ctx_r1.profile == null ? null : ctx_r1.profile.city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("About me: ", ctx_r1.profile == null ? null : ctx_r1.profile.about, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.id == ctx_r1.currentUserId);
} }
function UserInformationComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserInformationComponent_div_0_div_2_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.ngSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserInformationComponent_div_0_div_2_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.profile.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Surname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserInformationComponent_div_0_div_2_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.profile.surname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-radio-group", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserInformationComponent_div_0_div_2_Template_mat_radio_group_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.profile.gender = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-radio-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-radio-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-radio-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Not mentioned");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Birtdate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserInformationComponent_div_0_div_2_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.profile.birthdate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserInformationComponent_div_0_div_2_Template_input_ngModelChange_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.profile.city = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "textarea", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserInformationComponent_div_0_div_2_Template_textarea_ngModelChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.profile.about = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserInformationComponent_div_0_div_2_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.closeEditForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.profile.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.profile.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.profile.gender)("formControl", ctx_r2.floatLabelControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.profile.birthdate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.profile.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.profile.about);
} }
function UserInformationComponent_div_0_div_3_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserInformationComponent_div_0_div_3_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r27.name, "");
} }
function UserInformationComponent_div_0_div_3_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserInformationComponent_div_0_div_3_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r28.category, "");
} }
function UserInformationComponent_div_0_div_3_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserInformationComponent_div_0_div_3_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r29.date), "");
} }
function UserInformationComponent_div_0_div_3_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Acting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserInformationComponent_div_0_div_3_mat_cell_15_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserInformationComponent_div_0_div_3_mat_cell_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const element_r31 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r32.unsignModeratorQuiz(element_r31.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Unasign");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserInformationComponent_div_0_div_3_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 33);
} }
function UserInformationComponent_div_0_div_3_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 34);
} }
function UserInformationComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Moderator`s assignments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserInformationComponent_div_0_div_3_th_5_Template, 2, 0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserInformationComponent_div_0_div_3_td_6_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserInformationComponent_div_0_div_3_th_8_Template, 2, 0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserInformationComponent_div_0_div_3_td_9_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserInformationComponent_div_0_div_3_th_11_Template, 2, 0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UserInformationComponent_div_0_div_3_td_12_Template, 3, 3, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UserInformationComponent_div_0_div_3_th_14_Template, 2, 0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserInformationComponent_div_0_div_3_mat_cell_15_Template, 3, 0, "mat-cell", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UserInformationComponent_div_0_div_3_tr_16_Template, 1, 0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UserInformationComponent_div_0_div_3_tr_17_Template, 1, 0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserInformationComponent_div_0_div_3_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.unsignAllModeratorQuiz(ctx_r35.profile.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Unsign All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r3.assignedQuizzes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r3.displayedColumns);
} }
function UserInformationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserInformationComponent_div_0_div_1_Template, 19, 10, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserInformationComponent_div_0_div_2_Template, 45, 7, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserInformationComponent_div_0_div_3_Template, 20, 3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isEditForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isEditForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.profile.role.toString() == "MODERATOR" && ctx_r0.assignedQuizzes != null);
} }
class UserInformationComponent {
    constructor(profileService, shareId, location, router, quizCheckService, quizService) {
        this.profileService = profileService;
        this.shareId = shareId;
        this.location = location;
        this.router = router;
        this.quizCheckService = quizCheckService;
        this.quizService = quizService;
        this.floatLabelControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('auto');
        this.isEditForm = false;
        this.isAdmin = false;
        this.isModerator = false;
        this.isSuperAdmin = false;
        this.isUser = false;
        this.displayedColumns = ['name', 'category', 'date', 'actions'];
        this.currentUserId = JSON.parse(localStorage.getItem('currentUser')).id;
        this.id = shareId.shareId();
        this.shareId.setEmail(JSON.parse(localStorage.getItem('currentUser')).email);
        this.roleUs = JSON.parse(localStorage.getItem('currentUser')).role;
    }
    adminCheck() {
        switch (this.roleUs.toString()) {
            case _models_role_enum__WEBPACK_IMPORTED_MODULE_2__["Role"][_models_role_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].ADMIN]:
                this.isAdmin = true;
                break;
            case _models_role_enum__WEBPACK_IMPORTED_MODULE_2__["Role"][_models_role_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].MODERATOR]:
                this.isModerator = true;
                break;
            case _models_role_enum__WEBPACK_IMPORTED_MODULE_2__["Role"][_models_role_enum__WEBPACK_IMPORTED_MODULE_2__["Role"].SUPER_ADMIN]:
                this.isSuperAdmin = true;
                break;
            default:
                this.isUser = true;
                break;
        }
    }
    ngOnInit() {
        this.getProfile(this.id);
        this.adminCheck();
        this.location.onPopState(() => {
            this.shareId.setId(this.currentUserId);
            this.shareId.setEmail(JSON.parse(localStorage.getItem('currentUser')).email);
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(['profile', this.currentUserId, { outlets: { profilenav: 'profinfo' } }]);
            });
        });
        this.getAssignedQuizzes();
    }
    closeEditForm() {
        this.isEditForm = false;
    }
    ngSubmit() {
        if (this.id === this.currentUserId) {
            this.saveProfile();
        }
        else {
            this.updateAdminUser();
        }
        this.closeEditForm();
    }
    getProfile(id) {
        this.profileService.getProfile(id).subscribe((resp) => {
            this.adminCheck();
            this.profile = resp;
        }, error => {
            console.log(error);
            alert('Something wrong with downloading profile');
        });
    }
    updateAdminUser() {
        this.profile.id = this.id;
        this.profileService.updateAdminUser(this.profile).subscribe((resp) => {
            this.profile = resp;
        }, error => {
            alert('Something wrong while updating profile');
        });
    }
    saveProfile() {
        this.profileService.updateProfile(this.profile).subscribe((resp) => {
            this.profile = resp;
        }, error => {
            alert('Something wrong while updating profile');
        });
    }
    getAssignedQuizzes() {
        this.profileService.getAssignedQuizzes(this.id).subscribe(resp => {
            this.assignedQuizzes = resp;
        });
    }
    unsignModeratorQuiz(id) {
        this.quizCheckService.unsignQuiz(id).subscribe((resp) => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(['profile', this.id, { outlets: { profilenav: 'profinfo' } }]);
            });
        }, error => {
            alert('Something wrong while unsign');
        });
    }
    unsignAllModeratorQuiz(id) {
        this.quizService.unsignAllQuiz(id).subscribe((resp) => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(['profile', this.id, { outlets: { profilenav: 'profinfo' } }]);
            });
        }, error => {
            alert('Something wrong while unsign');
        });
    }
}
UserInformationComponent.ɵfac = function UserInformationComponent_Factory(t) { return new (t || UserInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_4__["ShareIdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_quizCheckService_quiz_check_service__WEBPACK_IMPORTED_MODULE_7__["QuizCheckService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_quizService_quiz_service__WEBPACK_IMPORTED_MODULE_8__["QuizService"])); };
UserInformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserInformationComponent, selectors: [["app-user-information"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "mat-elevation-z8 w-75", 4, "ngIf"], [3, "click"], ["mat-raised-button", "", 4, "ngIf"], ["mat-raised-button", ""], [3, "ngSubmit"], [1, "width-45"], ["name", "name", "matInput", "", "placeholder", "Name", 3, "ngModel", "ngModelChange"], ["name", "surname", "matInput", "", "placeholder", "Name", 3, "ngModel", "ngModelChange"], [3, "ngModel", "formControl", "ngModelChange"], ["value", "MALE"], ["value", "FEMALE"], ["value", "NOT_MENTIONED"], ["type", "date", "name", "birthdate", "matInput", "", "placeholder", "Birthdate", 3, "ngModel", "ngModelChange"], ["name", "city", "matInput", "", "placeholder", "City", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "about", "placeholder", "About", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "type", "submit", 1, "width-45"], ["mat-raised-button", "", 1, "width-45", 3, "click"], [1, "mat-elevation-z8", "w-75"], ["align", "center"], ["mat-table", "", "width", "100%", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "category"], ["matColumnDef", "date"], ["matColumnDef", "actions"], [4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-stroked-button", "", 1, "buttonsAction", 3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function UserInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserInformationComponent_div_0_Template, 4, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["mat-radio-button[_ngcontent-%COMP%] {\r\n  padding-right: 10px;\r\n}\r\n\r\n.width-45[_ngcontent-%COMP%]{\r\n  width: 45%;\r\n}\r\n\r\n.mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{\r\n  border-color:rgb(66, 134, 244);\r\n}\r\n\r\n.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%]{\r\n  color:rgb(66, 134, 244);\r\n  background-color:rgb(66, 134, 244) ;\r\n}\r\n\r\n.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\r\n  background-color:rgb(255, 37, 37.26);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS91c2VyLWluZm9ybWF0aW9uL3VzZXItaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFHQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3VzZXItaW5mb3JtYXRpb24vdXNlci1pbmZvcm1hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLndpZHRoLTQ1e1xyXG4gIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcblxyXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle1xyXG4gIGJvcmRlci1jb2xvcjpyZ2IoNjYsIDEzNCwgMjQ0KTtcclxufVxyXG5cclxuLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZXtcclxuICBjb2xvcjpyZ2IoNjYsIDEzNCwgMjQ0KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig2NiwgMTM0LCAyNDQpIDtcclxufVxyXG5cclxuLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsIDM3LCAzNy4yNik7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserInformationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-information',
                templateUrl: './user-information.component.html',
                styleUrls: ['./user-information.component.css']
            }]
    }], function () { return [{ type: _service_profileService_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] }, { type: _service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_4__["ShareIdService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _service_quizCheckService_quiz_check_service__WEBPACK_IMPORTED_MODULE_7__["QuizCheckService"] }, { type: _service_quizService_quiz_service__WEBPACK_IMPORTED_MODULE_8__["QuizService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/quiz-add/add-questions/add-questions.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/quiz-add/add-questions/add-questions.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionsComponent", function() { return AddQuestionsComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../question/question.component */ "./src/app/quiz-add/question/question.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_newQuizService_new_quiz_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../service/newQuizService/new-quiz.service */ "./src/app/service/newQuizService/new-quiz.service.ts");
/* harmony import */ var _service_imageService_image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../service/imageService/image.service */ "./src/app/service/imageService/image.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
















const _c0 = function (a0) { return { "hidden": a0 }; };
function AddQuestionsComponent_mat_accordion_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-expansion-panel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-panel-title", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddQuestionsComponent_mat_accordion_6_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.removeQuestion(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "app-question", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, question_r1.deleted));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", question_r1.text ? question_r1.text : "Add question info", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("question", question_r1);
} }
class AddQuestionsComponent {
    constructor(router, newQuizService, imageService) {
        this.router = router;
        this.newQuizService = newQuizService;
        this.imageService = imageService;
        this.questions = [];
        this.quiz = this.router.getCurrentNavigation().extras.state.quiz;
        this.image = this.router.getCurrentNavigation().extras.state.image;
        this.questions = this.quiz.questions;
    }
    ngOnInit() {
    }
    addQuestion() {
        this.questions.push({
            id: null,
            quizId: null,
            type: "Option",
            text: '',
            active: true,
            answerList: null,
            image: null,
            changed: true,
            deleted: false
        });
    }
    removeQuestion(i) {
        if (this.questions.filter(item => !item.deleted).length > 1) {
            if (this.questions[i].id != null) {
                this.questions[i].deleted = true;
            }
            else {
                this.questions.splice(i, 1);
            }
        }
        else {
            alert("Can't delete the only one question");
        }
    }
    onSubmit() {
        const observableBatch = [];
        if (this.isValid()) {
            console.log("submit");
            this.questionComponents.toArray().forEach(el => {
                console.log(el.question);
                observableBatch.push(el.getData());
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])(observableBatch).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => this.quiz.questions = resp), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(_ => this.imageService.saveImage(this.image).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => { if (resp != "")
                this.quiz.image = resp; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(_ => {
                console.log(this.quiz);
                return this.newQuizService.postQuiz(this.quiz);
            })))).subscribe(_ => this.router.navigateByUrl('/submitted_quiz'), err => {
                alert(err.message);
                console.log(err);
            });
        }
        else {
            alert("Error. Check your questions");
        }
    }
    isValid() {
        let valid = true;
        this.questionComponents.toArray().forEach(value => {
            if (!value.isValid()) {
                valid = false;
            }
        });
        return valid;
    }
}
AddQuestionsComponent.ɵfac = function AddQuestionsComponent_Factory(t) { return new (t || AddQuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_newQuizService_new_quiz_service__WEBPACK_IMPORTED_MODULE_5__["NewQuizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_imageService_image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"])); };
AddQuestionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddQuestionsComponent, selectors: [["app-add-questions"]], viewQuery: function AddQuestionsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_question_question_component__WEBPACK_IMPORTED_MODULE_1__["QuestionComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.questionComponents = _t);
    } }, decls: 14, vars: 2, consts: [["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["fxLayout", "column", "fxLayoutAlign", "start"], [4, "ngFor", "ngForOf"], ["mat-fab", "", 3, "click"], ["mat-raised-button", "", "type", "submit", 1, "fab", 3, "click"], [3, "ngClass"], ["fxLayout", "row", "fxLayoutAlign", "space-evenly center"], ["mat-raised-button", "", "color", "warn", 1, "delete-button", 3, "click"], [3, "question"]], template: function AddQuestionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AddQuestionsComponent_mat_accordion_6_Template, 11, 5, "mat-accordion", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddQuestionsComponent_Template_button_click_8_listener() { return ctx.addQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddQuestionsComponent_Template_button_click_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Quiz: ", ctx.quiz.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.questions);
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardActions"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__["DefaultClassDirective"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelDescription"], _question_question_component__WEBPACK_IMPORTED_MODULE_1__["QuestionComponent"]], styles: ["mat-card[_ngcontent-%COMP%] {\r\n    align-self: center;\r\n    width: 60%;\r\n}\r\n\r\nmat-card-actions[_ngcontent-%COMP%] {\r\n    text-align: end;\r\n}\r\n\r\nmat-expansion-panel[_ngcontent-%COMP%] {\r\n    margin: 1rem 0;\r\n}\r\n\r\n.delete-button[_ngcontent-%COMP%] {\r\n    margin-right: 1rem;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n.fab[_ngcontent-%COMP%] {\r\n    margin: 1rem;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei1hZGQvYWRkLXF1ZXN0aW9ucy9hZGQtcXVlc3Rpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvcXVpei1hZGQvYWRkLXF1ZXN0aW9ucy9hZGQtcXVlc3Rpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG5tYXQtY2FyZC1hY3Rpb25zIHtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxufVxyXG5cclxuLmRlbGV0ZS1idXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5mYWIge1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AddQuestionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-add-questions',
                templateUrl: './add-questions.component.html',
                styleUrls: ['./add-questions.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _service_newQuizService_new_quiz_service__WEBPACK_IMPORTED_MODULE_5__["NewQuizService"] }, { type: _service_imageService_image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"] }]; }, { questionComponents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"],
            args: [_question_question_component__WEBPACK_IMPORTED_MODULE_1__["QuestionComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/quiz-add/answer/answer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/quiz-add/answer/answer.component.ts ***!
  \*****************************************************/
/*! exports provided: AnswerComponent, SequenceValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerComponent", function() { return AnswerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SequenceValidator", function() { return SequenceValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _service_imageService_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/imageService/image.service */ "./src/app/service/imageService/image.service.ts");




class AnswerComponent {
    constructor(imageService) {
        this.imageService = imageService;
        this.submitted = false;
        this.answer = [];
        this.images = [];
    }
    ngOnInit() {
    }
    isValid() {
        return true;
    }
    getData() {
        return null;
    }
    getImages() {
    }
    saveImages() {
        let observableBatch = [];
        this.answer.forEach((_, index) => {
            observableBatch.push(this.imageService.saveImage(this.images[index]));
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(observableBatch);
    }
}
AnswerComponent.ɵfac = function AnswerComponent_Factory(t) { return new (t || AnswerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_imageService_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"])); };
AnswerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnswerComponent, selectors: [["app-answer"]], inputs: { answer: "answer" }, decls: 2, vars: 0, template: function AnswerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " answer works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aXotYWRkL2Fuc3dlci9hbnN3ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnswerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-answer',
                templateUrl: './answer.component.html',
                styleUrls: ['./answer.component.css']
            }]
    }], function () { return [{ type: _service_imageService_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"] }]; }, { answer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
function SequenceValidator() {
    return (formArray) => {
        for (var _i = 1; _i < formArray.controls.length; _i++) {
            let previous = formArray.controls[_i - 1];
            let current = formArray.controls[_i];
            if (current.get('text').value !== '' && previous.get('text').value === '') {
                previous.setErrors({ mustExist: true });
                return;
            }
            else {
                previous.setErrors(null);
            }
        }
        return;
    };
}


/***/ }),

/***/ "./src/app/quiz-add/boolean-answer/boolean-answer.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/quiz-add/boolean-answer/boolean-answer.component.ts ***!
  \*********************************************************************/
/*! exports provided: BooleanAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanAnswerComponent", function() { return BooleanAnswerComponent; });
/* harmony import */ var _answer_answer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../answer/answer.component */ "./src/app/quiz-add/answer/answer.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _service_imageService_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/imageService/image.service */ "./src/app/service/imageService/image.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class BooleanAnswerComponent extends _answer_answer_component__WEBPACK_IMPORTED_MODULE_0__["AnswerComponent"] {
    constructor(imageService) {
        super(imageService);
        this.checkBox = false;
    }
    ngOnInit() {
        let result = {
            id: null,
            questionId: 0,
            text: "",
            correct: true,
            nextAnswerId: null,
            image: null,
            changed: true,
            deleted: false
        };
        this.answer.push(result);
    }
    getData() {
        this.answer[0].questionId = this.questionId;
        this.answer[0].text = this.checkBox ? "true" : "false";
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.answer);
    }
}
BooleanAnswerComponent.ɵfac = function BooleanAnswerComponent_Factory(t) { return new (t || BooleanAnswerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_imageService_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"])); };
BooleanAnswerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BooleanAnswerComponent, selectors: [["app-boolean-answer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 1, consts: [[1, "container"], ["type", "checkbox", "id", "checkbox", "ngDefaultControl", "", 3, "ngModel", "change"], ["for", "checkbox"]], template: function BooleanAnswerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BooleanAnswerComponent_Template_input_change_1_listener() { return ctx.checkBox = !ctx.checkBox; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Is question true?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.checkBox);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aXotYWRkL2Jvb2xlYW4tYW5zd2VyL2Jvb2xlYW4tYW5zd2VyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BooleanAnswerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-boolean-answer',
                templateUrl: './boolean-answer.component.html',
                styleUrls: ['./boolean-answer.component.css']
            }]
    }], function () { return [{ type: _service_imageService_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/quiz-add/new-quiz/new-quiz.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/quiz-add/new-quiz/new-quiz.component.ts ***!
  \*********************************************************/
/*! exports provided: NewQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewQuizComponent", function() { return NewQuizComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_quiz_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/quiz.model */ "./src/app/models/quiz.model.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
/* harmony import */ var src_app_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/image-upload/image-upload.component */ "./src/app/image-upload/image-upload.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/categoryService/category.service */ "./src/app/service/categoryService/category.service.ts");
/* harmony import */ var _service_current_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/current-user.service */ "./src/app/service/current-user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






















const _c0 = ["chipList"];
function NewQuizComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " You must enter quiz name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NewQuizComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Quiz name can be max 30 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NewQuizComponent_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", category_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, category_r7.name), " ");
} }
function NewQuizComponent_mat_chip_27_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NewQuizComponent_mat_chip_27_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function NewQuizComponent_mat_chip_27_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const tag_r8 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.remove(tag_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NewQuizComponent_mat_chip_27_mat_icon_2_Template, 2, 0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r8 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectable", ctx_r5.selectable)("removable", ctx_r5.removable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tag_r8.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.removable);
} }
function NewQuizComponent_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Description can be max 360 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class NewQuizComponent {
    constructor(categoryService, formBuilder, currentUserService, router) {
        var _a;
        this.categoryService = categoryService;
        this.formBuilder = formBuilder;
        this.currentUserService = currentUserService;
        this.router = router;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.tags = [];
        this.submitted = false;
        this.quiz = {
            id: null,
            name: "",
            author: parseInt(this.currentUserService.getCurrentUser().id),
            category_id: 1,
            date: new Date().toISOString(),
            description: "",
            status: _models_quiz_model__WEBPACK_IMPORTED_MODULE_2__["StatusType"].PENDING.toString(),
            modification_time: new Date().toISOString(),
            image: null,
            questions: [],
            tags: [],
            changed: true
        };
        if ((_a = this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.quiz)
            this.quiz = this.router.getCurrentNavigation().extras.state.quiz;
        this.tags = this.quiz.tags;
    }
    ngOnInit() {
        this.loadCategories();
        console.log(this.quiz);
        this.quizForm = this.formBuilder.group({
            name: [this.quiz.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength]],
            category: [],
            description: [this.quiz.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength]]
        });
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        if ((value || '').trim() && !(this.tags.find(element => element.name == value.trim()))) {
            this.tags.push({ id: null, name: value.trim() });
            if (input) {
                input.value = '';
            }
        }
    }
    remove(fruit) {
        const index = this.tags.indexOf(fruit);
        if (index >= 0) {
            this.tags.splice(index, 1);
        }
    }
    loadCategories() {
        return this.categoryService.getCategories().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(resp => {
            this.categories = resp;
            if (this.quiz.id != null)
                this.getCategory();
            return this.categories;
        }));
    }
    getCategory() {
        var _a;
        let category = null;
        if (this.quiz.id) {
            category = (_a = this.categories) === null || _a === void 0 ? void 0 : _a.find(item => item.id == this.quiz.category_id);
        }
        else {
            category = this.categories[0];
        }
        this.quizForm.get('category').setValue(category);
    }
    onSubmit() {
        this.submitted = true;
        if (this.quizForm.invalid) {
            return;
        }
        this.getData();
        this.saveQuiz();
    }
    saveQuiz() {
        this.router.navigateByUrl('/add_questions', {
            state: {
                quiz: this.quiz,
                image: this.image
            }
        });
    }
    getData() {
        var _a;
        let input = JSON.parse(JSON.stringify(this.quizForm.value));
        this.quiz.name = input.name;
        let category = this.quizForm.get('category').value;
        this.quiz.category_id = category.id;
        this.quiz.description = input.description;
        this.quiz.status = this.quiz.status.toUpperCase();
        this.image = (_a = this.imageComponent.selectedFile) === null || _a === void 0 ? void 0 : _a.file;
        this.quiz.tags = this.tags;
        console.log(this.quiz);
    }
}
NewQuizComponent.ɵfac = function NewQuizComponent_Factory(t) { return new (t || NewQuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_current_user_service__WEBPACK_IMPORTED_MODULE_7__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
NewQuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewQuizComponent, selectors: [["app-new-quiz"]], viewQuery: function NewQuizComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](src_app_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_4__["ImageUploadComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chipList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.imageComponent = _t.first);
    } }, decls: 37, vars: 12, consts: [["fxLayout", "row", "fxLayoutAlign", "space-around center"], [1, "form-container"], [3, "formGroup"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "maxlength", "30", "formControlName", "name", "placeholder", "Quiz name", "required", ""], ["input", ""], ["align", "end"], [4, "ngIf"], [1, "form-field"], ["formControlName", "category", "value", "questionTypes[0]"], [3, "value", 4, "ngFor", "ngForOf"], ["aria-label", "Tag selection"], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "Add tag...", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], ["matInput", "", "formControlName", "description", "placeholder", "Description", 1, "form-control"], ["mat-raised-button", "", "type", "submit", 3, "click"], [3, "value"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""]], template: function NewQuizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "New Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Enter quiz name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-hint", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, NewQuizComponent_mat_error_15_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, NewQuizComponent_mat_error_16_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-image-upload", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Select category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, NewQuizComponent_mat_option_22_Template, 3, 4, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-chip-list", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, NewQuizComponent_mat_chip_27_Template, 3, 4, "mat-chip", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matChipInputTokenEnd", function NewQuizComponent_Template_input_matChipInputTokenEnd_28_listener($event) { return ctx.add($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, NewQuizComponent_mat_error_33_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewQuizComponent_Template_button_click_35_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.quizForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (_r0.value == null ? null : _r0.value.length) || 0, "/30");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.quizForm.get("name").errors == null ? null : ctx.quizForm.get("name").errors.required) && (ctx.submitted || ctx.quizForm.get("name").touched || ctx.quizForm.get("name").dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.quizForm.get("name").errors == null ? null : ctx.quizForm.get("name").errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories ? ctx.categories : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 10, ctx.loadCategories()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matChipInputFor", _r4)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes)("matChipInputAddOnBlur", ctx.addOnBlur);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.quizForm.get("name").errors == null ? null : ctx.quizForm.get("name").errors.maxlength);
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], src_app_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_4__["ImageUploadComponent"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipInput"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipRemove"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["TitleCasePipe"]], styles: ["mat-card[_ngcontent-%COMP%] {\r\n    align-self: center;\r\n    width: 60%;\r\n    margin: 3em;\r\n}\r\n\r\nmat-card-content[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\nmat-card-actions[_ngcontent-%COMP%] {\r\n    text-align: end;\r\n}\r\n\r\n.form-container[_ngcontent-%COMP%] {\r\n    width: 400 px;\r\n    margin: 0 px auto;\r\n    margin-top: 200 px\r\n}\r\n\r\n.form-field[_ngcontent-%COMP%] {\r\n    display: block\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei1hZGQvbmV3LXF1aXovbmV3LXF1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9xdWl6LWFkZC9uZXctcXVpei9uZXctcXVpei5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogM2VtO1xyXG59XHJcblxyXG5tYXQtY2FyZC1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNDAwIHB4O1xyXG4gICAgbWFyZ2luOiAwIHB4IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMDAgcHhcclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gICAgZGlzcGxheTogYmxvY2tcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NewQuizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-new-quiz',
                templateUrl: './new-quiz.component.html',
                styleUrls: ['./new-quiz.component.css']
            }]
    }], function () { return [{ type: _service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: _service_current_user_service__WEBPACK_IMPORTED_MODULE_7__["CurrentUserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, { chipList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['chipList']
        }], imageComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [src_app_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_4__["ImageUploadComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/quiz-add/optional-answer/optional-answer.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/quiz-add/optional-answer/optional-answer.component.ts ***!
  \***********************************************************************/
/*! exports provided: OptionalAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionalAnswerComponent", function() { return OptionalAnswerComponent; });
/* harmony import */ var _answer_answer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../answer/answer.component */ "./src/app/quiz-add/answer/answer.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../image-upload/image-upload.component */ "./src/app/image-upload/image-upload.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_imageService_image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../service/imageService/image.service */ "./src/app/service/imageService/image.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");














function OptionalAnswerComponent_li_3_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Should have at least two answers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OptionalAnswerComponent_li_3_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Answer can be max 30 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OptionalAnswerComponent_li_3_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add text. Next answer is not empty. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OptionalAnswerComponent_li_3_mat_divider_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-divider");
} }
function OptionalAnswerComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Check if answer is correct");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Enter answer name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, OptionalAnswerComponent_li_3_mat_error_11_Template, 2, 0, "mat-error", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, OptionalAnswerComponent_li_3_mat_error_12_Template, 2, 0, "mat-error", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, OptionalAnswerComponent_li_3_mat_error_13_Template, 2, 0, "mat-error", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-image-upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, OptionalAnswerComponent_li_3_mat_divider_15_Template, 1, 0, "mat-divider", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r0.items.controls[i_r2].get("text").errors == null ? null : ctx_r0.items.controls[i_r2].get("text").errors.required) && (ctx_r0.submitted || ctx_r0.items.controls[i_r2].get("text").touched || ctx_r0.items.controls[i_r2].get("text").dirty));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.items.controls[i_r2].get("text").errors == null ? null : ctx_r0.items.controls[i_r2].get("text").errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.items.controls[i_r2].errors == null ? null : ctx_r0.items.controls[i_r2].errors.mustExist);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 != ctx_r0.items.controls.length - 1);
} }
class OptionalAnswerComponent extends _answer_answer_component__WEBPACK_IMPORTED_MODULE_0__["AnswerComponent"] {
    constructor(formBuilder, imageService) {
        super(imageService);
        this.formBuilder = formBuilder;
        this.maxAnswer = 4;
        this.minRequired = 2;
    }
    ngOnInit() {
        this.answerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            items: this.formBuilder.array([])
        });
        for (var _i = 0; _i < this.maxAnswer; _i++) {
            this.answer.push({
                id: null,
                questionId: 0,
                text: "",
                correct: false,
                nextAnswerId: null,
                image: null,
                changed: true,
                deleted: false
            });
            const correctControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.answer[_i].correct, []);
            const textControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.answer[_i].text, []);
            if (_i < this.minRequired) {
                textControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]);
            }
            this.items = this.answerForm.get('items');
            this.items.push(this.formBuilder.group({
                isCorrect: correctControl,
                text: textControl
            }));
        }
        this.answerForm.get('items').setValidators([Object(_answer_answer_component__WEBPACK_IMPORTED_MODULE_0__["SequenceValidator"])()]);
    }
    isValid() {
        this.submitted = true;
        this.items.setValidators(Object(_answer_answer_component__WEBPACK_IMPORTED_MODULE_0__["SequenceValidator"])());
        this.items.markAsTouched();
        return this.answerForm.valid;
    }
    getData() {
        this.getImages();
        const items = this.answerForm.get('items');
        for (var i = 0; i < this.answer.length; i++) {
            const current = items.at(i);
            if (this.answer[i].id != null && current.dirty) {
                this.answer[i].changed = true;
            }
            const newText = current.get('text').value;
            if (this.answer[i].text != "" && newText == "") {
                this.answer[i].deleted = true;
            }
            this.answer[i].correct = current.get('isCorrect').value;
            this.answer[i].text = newText;
            if (this.answer[i].text === "" || this.answer[i].text == null)
                break;
        }
        return this.saveImages().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((resp) => {
            for (let i in resp) {
                if (resp[i] !== "") {
                    this.answer[i].image = resp[i];
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(_ => {
            const result = [];
            for (let i of this.answer) {
                if (i.text || i.deleted) {
                    result.push(i);
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        }));
    }
    getImages() {
        this.imageComponents.forEach(image => {
            var _a;
            if (image.selectedFile != null) {
                this.images.push((_a = image.selectedFile) === null || _a === void 0 ? void 0 : _a.file);
            }
            else {
                this.images.push(null);
            }
        });
    }
}
OptionalAnswerComponent.ɵfac = function OptionalAnswerComponent_Factory(t) { return new (t || OptionalAnswerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_imageService_image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"])); };
OptionalAnswerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OptionalAnswerComponent, selectors: [["app-optional-answer"]], viewQuery: function OptionalAnswerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_3__["ImageUploadComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.imageComponents = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 2, consts: [[1, "container"], [3, "formGroup"], ["formArrayName", "items"], [4, "ngFor", "ngForOf"], [3, "formGroupName"], ["id", "checkbox", "type", "checkbox", "formControlName", "isCorrect", "color", "primary"], ["for", "checkbox"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "maxlength", "30", "formControlName", "text", "placeholder", "Quiz name"], ["input", ""], [4, "ngIf"]], template: function OptionalAnswerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ol", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OptionalAnswerComponent_li_3_Template, 16, 5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.answerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items.controls);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_3__["ImageUploadComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"]], styles: ["form[_ngcontent-%COMP%] {\r\n    align-self: center;\r\n    width: 100%;\r\n}\r\n\r\n.form-field[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n#checkbox[_ngcontent-%COMP%] {\r\n    margin-bottom: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei1hZGQvb3B0aW9uYWwtYW5zd2VyL29wdGlvbmFsLWFuc3dlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3F1aXotYWRkL29wdGlvbmFsLWFuc3dlci9vcHRpb25hbC1hbnN3ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jY2hlY2tib3gge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OptionalAnswerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-optional-answer',
                templateUrl: './optional-answer.component.html',
                styleUrls: ['./optional-answer.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _service_imageService_image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"] }]; }, { imageComponents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: [_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_3__["ImageUploadComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/quiz-add/question/question.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/quiz-add/question/question.component.ts ***!
  \*********************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _sequence_answer_sequence_answer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../sequence-answer/sequence-answer.component */ "./src/app/quiz-add/sequence-answer/sequence-answer.component.ts");
/* harmony import */ var _string_answer_string_answer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../string-answer/string-answer.component */ "./src/app/quiz-add/string-answer/string-answer.component.ts");
/* harmony import */ var _boolean_answer_boolean_answer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../boolean-answer/boolean-answer.component */ "./src/app/quiz-add/boolean-answer/boolean-answer.component.ts");
/* harmony import */ var _optional_answer_optional_answer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../optional-answer/optional-answer.component */ "./src/app/quiz-add/optional-answer/optional-answer.component.ts");
/* harmony import */ var _models_question_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/question.model */ "./src/app/models/question.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../image-upload/image-upload.component */ "./src/app/image-upload/image-upload.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _service_questionService_question_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/questionService/question.service */ "./src/app/service/questionService/question.service.ts");
/* harmony import */ var _service_imageService_image_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../service/imageService/image.service */ "./src/app/service/imageService/image.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");






















const _c0 = ["dynamicComponent"];
function QuestionComponent_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Question cannot be empty. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QuestionComponent_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Question can be max 30 characters long.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function QuestionComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", type_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, type_r5), " ");
} }
function QuestionComponent_ng_template_16_Template(rf, ctx) { }
class QuestionComponent {
    constructor(questionService, formBuilder, componentFactoryResolver, imageService) {
        this.questionService = questionService;
        this.formBuilder = formBuilder;
        this.componentFactoryResolver = componentFactoryResolver;
        this.imageService = imageService;
        this.submitted = false;
        this.send = false;
        this.questionTypes = [];
        this.question = {
            id: null,
            quizId: null,
            type: "Option",
            text: "",
            active: true,
            answerList: [],
            image: null,
            changed: true,
            deleted: false
        };
        this.image = null;
        Object.keys(_models_question_model__WEBPACK_IMPORTED_MODULE_5__["QuestionType"]).forEach(value => this.questionTypes.push(value));
    }
    ngOnInit() {
        this.questionForm = this.formBuilder.group({
            text: [this.question.text, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(360)]],
            type: [this.question.type]
        });
    }
    ngAfterViewInit() {
        this.questionForm.get('type').setValue(this.question.type);
        this.loadComponent(this.question.type);
    }
    loadComponent(value) {
        let titleCasePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]();
        value = titleCasePipe.transform(value);
        var componentFactory;
        switch (value) {
            case _models_question_model__WEBPACK_IMPORTED_MODULE_5__["QuestionType"].OPTION:
                componentFactory = this.componentFactoryResolver.resolveComponentFactory(_optional_answer_optional_answer_component__WEBPACK_IMPORTED_MODULE_4__["OptionalAnswerComponent"]);
                break;
            case _models_question_model__WEBPACK_IMPORTED_MODULE_5__["QuestionType"].BOOLEAN:
                componentFactory = this.componentFactoryResolver.resolveComponentFactory(_boolean_answer_boolean_answer_component__WEBPACK_IMPORTED_MODULE_3__["BooleanAnswerComponent"]);
                break;
            case _models_question_model__WEBPACK_IMPORTED_MODULE_5__["QuestionType"].ANSWER:
                componentFactory = this.componentFactoryResolver.resolveComponentFactory(_string_answer_string_answer_component__WEBPACK_IMPORTED_MODULE_2__["StringAnswerComponent"]);
                break;
            case _models_question_model__WEBPACK_IMPORTED_MODULE_5__["QuestionType"].SEQUENCE:
                componentFactory = this.componentFactoryResolver.resolveComponentFactory(_sequence_answer_sequence_answer_component__WEBPACK_IMPORTED_MODULE_1__["SequenceAnswerComponent"]);
                break;
        }
        this.answerHost.clear();
        this.componentRef = this.answerHost.createComponent(componentFactory);
        if (this.question.id) {
            if (value === _models_question_model__WEBPACK_IMPORTED_MODULE_5__["QuestionType"].OPTION || value === _models_question_model__WEBPACK_IMPORTED_MODULE_5__["QuestionType"].SEQUENCE) {
                while (this.question.answerList.length < 4) {
                    this.question.answerList.push({
                        id: null,
                        questionId: 0,
                        text: "",
                        correct: false,
                        nextAnswerId: null,
                        image: null,
                        changed: true,
                        deleted: true
                    });
                }
            }
            this.componentRef.instance.answer = this.question.answerList;
        }
        this.componentRef.changeDetectorRef.detectChanges();
    }
    isValid() {
        this.submitted = true;
        this.questionForm.markAsTouched();
        return this.questionForm.valid && this.componentRef.instance.isValid();
    }
    getData() {
        this.question.quizId = this.quizId;
        this.question.type = this.question.type.toUpperCase();
        this.question.text = this.questionForm.get('text').value;
        this.question.type = this.questionForm.get('type').value.toUpperCase();
        this.question.answerList = this.componentRef.instance.answer;
        return this.componentRef.instance.getData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(resp => { console.log(resp); this.question.answerList = resp; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mergeMap"])(_ => {
            var _a;
            return this.imageService.saveImage((_a = this.imageComponent.selectedFile) === null || _a === void 0 ? void 0 : _a.file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(resp => { if (resp != "")
                this.question.image = resp; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mergeMap"])(_ => Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(this.question)));
        }));
    }
    onOptionSelected(value) {
        console.log(value);
        this.loadComponent(value);
    }
}
QuestionComponent.ɵfac = function QuestionComponent_Factory(t) { return new (t || QuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_questionService_question_service__WEBPACK_IMPORTED_MODULE_11__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_imageService_image_service__WEBPACK_IMPORTED_MODULE_12__["ImageService"])); };
QuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: QuestionComponent, selectors: [["app-question"]], viewQuery: function QuestionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewContainerRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_7__["ImageUploadComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.answerHost = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.imageComponent = _t.first);
    } }, inputs: { question: "question" }, decls: 18, vars: 4, consts: [["fxLayout", "row", "fxLayoutAlign", "space-around center"], [3, "formGroup"], [1, "form-field"], ["matInput", "", "id", "text", "type", "text", "formControlName", "text", "maxlength", "360", "required", "", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["id", "type", "formControlName", "type", 1, "form-control", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["dynamicComponent", ""], [1, "alert", "alert-danger"], [3, "value"]], template: function QuestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, QuestionComponent_mat_error_6_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, QuestionComponent_mat_error_7_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "app-image-upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Answer type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function QuestionComponent_Template_mat_select_selectionChange_12_listener($event) { return ctx.onOptionSelected($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, QuestionComponent_mat_option_13_Template, 3, 4, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Answers");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, QuestionComponent_ng_template_16_Template, 0, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.questionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.questionForm.get("text").errors == null ? null : ctx.questionForm.get("text").errors.required) && (ctx.submitted || ctx.questionForm.get("text").touched || ctx.questionForm.get("text").dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.questionForm.get("text").errors == null ? null : ctx.questionForm.get("text").errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.questionTypes);
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_7__["ImageUploadComponent"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]], styles: ["form[_ngcontent-%COMP%] {\r\n    align-self: center;\r\n    width: 80%;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n.form-container[_ngcontent-%COMP%] {\r\n    width: 400 px;\r\n    margin: 0 px auto;\r\n    margin-top: 200 px\r\n}\r\n\r\n.form-field[_ngcontent-%COMP%] {\r\n    display: block\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei1hZGQvcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcXVpei1hZGQvcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuaDMge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDQwMCBweDtcclxuICAgIG1hcmdpbjogMCBweCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjAwIHB4XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](QuestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
        args: [{
                selector: 'app-question',
                templateUrl: './question.component.html',
                styleUrls: ['./question.component.css']
            }]
    }], function () { return [{ type: _service_questionService_question_service__WEBPACK_IMPORTED_MODULE_11__["QuestionService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ComponentFactoryResolver"] }, { type: _service_imageService_image_service__WEBPACK_IMPORTED_MODULE_12__["ImageService"] }]; }, { question: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }], answerHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
            args: ['dynamicComponent', { read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewContainerRef"] }]
        }], imageComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
            args: [_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_7__["ImageUploadComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/quiz-add/sequence-answer/sequence-answer.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/quiz-add/sequence-answer/sequence-answer.component.ts ***!
  \***********************************************************************/
/*! exports provided: SequenceAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SequenceAnswerComponent", function() { return SequenceAnswerComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../image-upload/image-upload.component */ "./src/app/image-upload/image-upload.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _answer_answer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../answer/answer.component */ "./src/app/quiz-add/answer/answer.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_imageService_image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../service/imageService/image.service */ "./src/app/service/imageService/image.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");













function SequenceAnswerComponent_li_3_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Should have at least two answers. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SequenceAnswerComponent_li_3_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Answer can be max 30 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SequenceAnswerComponent_li_3_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Add text. Next answer is not empty. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SequenceAnswerComponent_li_3_hr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "hr", 10);
} }
function SequenceAnswerComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Enter answer name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SequenceAnswerComponent_li_3_mat_error_6_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SequenceAnswerComponent_li_3_mat_error_7_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, SequenceAnswerComponent_li_3_mat_error_8_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-image-upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, SequenceAnswerComponent_li_3_hr_10_Template, 1, 0, "hr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroupName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.items.controls[i_r2].get("text").errors == null ? null : ctx_r0.items.controls[i_r2].get("text").errors.required) && (ctx_r0.submitted || ctx_r0.items.controls[i_r2].get("text").touched || ctx_r0.items.controls[i_r2].get("text").dirty));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.items.controls[i_r2].get("text").errors == null ? null : ctx_r0.items.controls[i_r2].get("text").errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.items.controls[i_r2].errors == null ? null : ctx_r0.items.controls[i_r2].errors.mustExist);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r2 != ctx_r0.items.controls.length - 1);
} }
class SequenceAnswerComponent extends _answer_answer_component__WEBPACK_IMPORTED_MODULE_3__["AnswerComponent"] {
    constructor(formBuilder, imageService) {
        super(imageService);
        this.formBuilder = formBuilder;
        this.maxAnswer = 4;
        this.minRequired = 2;
    }
    ngOnInit() {
        this.answerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            items: this.formBuilder.array([])
        });
        this.items = this.answerForm.get('items');
        for (var _i = 0; _i < this.maxAnswer; _i++) {
            this.answer.push({
                id: null,
                questionId: 0,
                text: "",
                correct: true,
                nextAnswerId: null,
                image: null,
                changed: true,
                deleted: false
            });
            const formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.answer[_i].text, []);
            if (_i < this.minRequired) {
                formControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]);
            }
            this.items = this.answerForm.get('items');
            this.items.push(this.formBuilder.group({
                text: formControl
            }));
        }
        this.answerForm.get('items').setValidators([Object(_answer_answer_component__WEBPACK_IMPORTED_MODULE_3__["SequenceValidator"])()]);
    }
    isValid() {
        this.submitted = true;
        this.items.setValidators(Object(_answer_answer_component__WEBPACK_IMPORTED_MODULE_3__["SequenceValidator"])());
        return this.answerForm.valid;
    }
    getData() {
        this.getImages();
        for (var i = 0; i < this.answer.length; i++) {
            if (this.answer[i].id != null && this.answerForm.get('items').at(i).dirty) {
                this.answer[i].changed = true;
            }
            const newText = this.answerForm.get('items').at(i).get("text").value;
            if (this.answer[i].text != "" && newText == "") {
                this.answer[i].deleted = true;
            }
            this.answer[i].text = newText;
            if (this.answer[i].text === "" || this.answer[i].text == null)
                break;
        }
        return this.saveImages().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((resp) => {
            for (let i in resp) {
                if (resp[i] !== "") {
                    this.answer[i].image = resp[i];
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(_ => {
            const result = [];
            for (let i of this.answer) {
                if (i.text || i.deleted) {
                    result.push(i);
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(result);
        }));
    }
    getImages() {
        this.imageComponents.forEach(image => {
            if (image.selectedFile != null) {
                this.images.push(image.selectedFile.file);
            }
            else {
                this.images.push(null);
            }
        });
    }
}
SequenceAnswerComponent.ɵfac = function SequenceAnswerComponent_Factory(t) { return new (t || SequenceAnswerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_imageService_image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"])); };
SequenceAnswerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SequenceAnswerComponent, selectors: [["app-sequence-answer"]], viewQuery: function SequenceAnswerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_1__["ImageUploadComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.imageComponents = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 2, consts: [[1, "container"], [3, "formGroup"], ["formArrayName", "items"], [4, "ngFor", "ngForOf"], [3, "formGroupName"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "placeholder", "Answer", "formControlName", "text", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "my-4", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "my-4"]], template: function SequenceAnswerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ol", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SequenceAnswerComponent_li_3_Template, 11, 5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.answerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.items.controls);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_1__["ImageUploadComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aXotYWRkL3NlcXVlbmNlLWFuc3dlci9zZXF1ZW5jZS1hbnN3ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](SequenceAnswerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'app-sequence-answer',
                templateUrl: './sequence-answer.component.html',
                styleUrls: ['./sequence-answer.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _service_imageService_image_service__WEBPACK_IMPORTED_MODULE_6__["ImageService"] }]; }, { imageComponents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChildren"],
            args: [_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_1__["ImageUploadComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/quiz-add/string-answer/string-answer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/quiz-add/string-answer/string-answer.component.ts ***!
  \*******************************************************************/
/*! exports provided: StringAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringAnswerComponent", function() { return StringAnswerComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _answer_answer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../answer/answer.component */ "./src/app/quiz-add/answer/answer.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _service_imageService_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/imageService/image.service */ "./src/app/service/imageService/image.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function StringAnswerComponent_mat_error_5_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Answer is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function StringAnswerComponent_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, StringAnswerComponent_mat_error_5_mat_error_1_Template, 2, 0, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.text.errors.required);
} }
class StringAnswerComponent extends _answer_answer_component__WEBPACK_IMPORTED_MODULE_1__["AnswerComponent"] {
    constructor(imageService) {
        super(imageService);
    }
    ngOnInit() {
        let result = {
            id: null,
            questionId: 0,
            text: "",
            correct: true,
            nextAnswerId: null,
            image: null,
            changed: true,
            deleted: false
        };
        this.answer.push(result);
        this.text = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.answer[0].text, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
    }
    isValid() {
        this.submitted = true;
        return this.text.valid;
    }
    getData() {
        if (this.answer[0].id != null && this.text.dirty) {
            this.answer[0].changed = true;
        }
        this.answer[0].text = this.text.value;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.answer);
    }
}
StringAnswerComponent.ɵfac = function StringAnswerComponent_Factory(t) { return new (t || StringAnswerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_imageService_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"])); };
StringAnswerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StringAnswerComponent, selectors: [["app-string-answer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 2, consts: [[1, "container"], ["appearance", "outline"], ["matInput", "", "placeholder", "Answer", "aria-label", "Answer", "aria-describedby", "basic-addon1", "required", "", 1, "form-control", 3, "formControl"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function StringAnswerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Enter answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, StringAnswerComponent_mat_error_5_Template, 2, 1, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.text.invalid && (ctx.submitted || ctx.text.dirty || ctx.text.touched));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: [".form-field[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei1hZGQvc3RyaW5nLWFuc3dlci9zdHJpbmctYW5zd2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9xdWl6LWFkZC9zdHJpbmctYW5zd2VyL3N0cmluZy1hbnN3ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](StringAnswerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-string-answer',
                templateUrl: './string-answer.component.html',
                styleUrls: ['./string-answer.component.css']
            }]
    }], function () { return [{ type: _service_imageService_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/quiz-add/submitted-quiz/submitted-quiz.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/quiz-add/submitted-quiz/submitted-quiz.component.ts ***!
  \*********************************************************************/
/*! exports provided: SubmittedQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmittedQuizComponent", function() { return SubmittedQuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_current_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/current-user.service */ "./src/app/service/current-user.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");








class SubmittedQuizComponent {
    constructor(router, currentUserService) {
        this.router = router;
        this.currentUserService = currentUserService;
    }
    ngOnInit() {
    }
    goToProfile() {
        this.router.navigate(['profile', this.currentUserService.getCurrentUser().id, { outlets: { profilenav: 'profinfo' } }]);
    }
}
SubmittedQuizComponent.ɵfac = function SubmittedQuizComponent_Factory(t) { return new (t || SubmittedQuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_current_user_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"])); };
SubmittedQuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubmittedQuizComponent, selectors: [["app-submitted-quiz"]], decls: 10, vars: 0, consts: [["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["fxLayout", "column", "fxLayoutAlign", "space-around center"], ["fxFlexAlign", "center"], ["mat-button", "", "target", "_blank", 3, "click"]], template: function SubmittedQuizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "done_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Quiz successfully submitted!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-actions", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubmittedQuizComponent_Template_button_click_8_listener() { return ctx.goToProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Go back to profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: ["mat-icon[_ngcontent-%COMP%] {\r\n    width: 10rem;\r\n    height: 10rem;\r\n    font-size: 10rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei1hZGQvc3VibWl0dGVkLXF1aXovc3VibWl0dGVkLXF1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcXVpei1hZGQvc3VibWl0dGVkLXF1aXovc3VibWl0dGVkLXF1aXouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1pY29uIHtcclxuICAgIHdpZHRoOiAxMHJlbTtcclxuICAgIGhlaWdodDogMTByZW07XHJcbiAgICBmb250LXNpemU6IDEwcmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubmittedQuizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-submitted-quiz',
                templateUrl: './submitted-quiz.component.html',
                styleUrls: ['./submitted-quiz.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_current_user_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/quiz-check/question-check/question-check.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/quiz-check/question-check/question-check.component.ts ***!
  \***********************************************************************/
/*! exports provided: QuestionCheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionCheckComponent", function() { return QuestionCheckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _models_moderator_comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/moderator-comment */ "./src/app/models/moderator-comment.ts");
/* harmony import */ var _models_status_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/status-type.enum */ "./src/app/models/status-type.enum.ts");
/* harmony import */ var _service_quizCheckService_quiz_check_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/quizCheckService/quiz-check.service */ "./src/app/service/quizCheckService/quiz-check.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
















function QuestionCheckComponent_div_0_div_2_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const ia_r7 = ctx_r10.index;
    const a_r6 = ctx_r10.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ia_r7 + 1, ") ", a_r6.text, " ");
} }
function QuestionCheckComponent_div_0_div_2_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const ia_r7 = ctx_r11.index;
    const a_r6 = ctx_r11.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ia_r7 + 1, ") ", a_r6.text, " ");
} }
function QuestionCheckComponent_div_0_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuestionCheckComponent_div_0_div_2_div_9_div_1_Template, 2, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuestionCheckComponent_div_0_div_2_div_9_div_2_Template, 2, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", a_r6.correct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !a_r6.correct);
} }
function QuestionCheckComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, QuestionCheckComponent_div_0_div_2_div_9_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuestionCheckComponent_div_0_div_2_Template_mat_checkbox_change_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const q_r3 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.checkCount(q_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Checked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r3 = ctx.$implicit;
    const iq_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Id ", q_r3.id, " type ", q_r3.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Question ", iq_r4 + 1, ": ", q_r3.text, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", q_r3.answers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("labelPosition", ctx_r1.labelPosition);
} }
function QuestionCheckComponent_div_0_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionCheckComponent_div_0_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.activeQuiz(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionCheckComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function QuestionCheckComponent_div_0_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.commentFormValidation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuestionCheckComponent_div_0_div_2_Template, 13, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-expansion-panel-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Reject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Leave a comment, why it was rejected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "textarea", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Send and reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, QuestionCheckComponent_div_0_button_17_Template, 2, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.commentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.quiz.questions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.allChecked());
} }
class QuestionCheckComponent {
    constructor(formBuilder, quizService, activateRoute, router) {
        this.formBuilder = formBuilder;
        this.quizService = quizService;
        this.activateRoute = activateRoute;
        this.router = router;
        this.checkedQuestions = [7];
        this.submitted = false;
        this.labelPosition = 'before';
    }
    ngOnInit() {
        this.getQuiz(JSON.parse(localStorage.getItem('currentQuiz')).id);
        this.commentForm = this.formBuilder.group({
            comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
        });
    }
    getQuiz(id) {
        this.quizService.getQuizById(id).subscribe((resp) => {
            this.quiz = resp;
        }, error => {
            console.log(error);
            alert('Something wrong with downloading quiz');
        });
    }
    activeQuiz() {
        this.currentQuizId = JSON.parse(localStorage.getItem('currentQuiz')).id;
        this.currentUserId = JSON.parse(localStorage.getItem('currentUser')).id;
        this.unsignModeratorQuiz();
        this.quizService.updateStatusQuiz(this.currentQuizId, _models_status_type_enum__WEBPACK_IMPORTED_MODULE_3__["StatusType"].ACTIVE).subscribe((resp) => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(['profile', this.currentUserId, { outlets: { profilenav: 'pendingQuizzes' } }]);
            });
        }, error => {
            alert('Something wrong while change active status');
        });
    }
    checkCount(i) {
        if (!this.checkedQuestions.includes(i)) {
            this.checkedQuestions.push(i);
        }
        else {
            this.checkedQuestions.splice(this.checkedQuestions.indexOf(i), i);
        }
    }
    allChecked() {
        if (this.checkedQuestions.length - 1 === this.quiz.questions.length) {
            return true;
        }
    }
    leaveComment() {
        this.currentQuizId = JSON.parse(localStorage.getItem('currentQuiz')).id;
        this.currentUserId = JSON.parse(localStorage.getItem('currentUser')).id;
        this.unsignModeratorQuiz();
        const com = new _models_moderator_comment__WEBPACK_IMPORTED_MODULE_2__["ModeratorComment"](this.currentQuizId, this.currentUserId, this.comment, new Date());
        this.quizService.addComment(com).subscribe((resp) => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(['profile', this.currentUserId, { outlets: { profilenav: 'pendingQuizzes' } }]);
                alert('Comment sent successfully');
            });
        }, error => {
            alert('Something wrong while leave comment');
        });
    }
    unsignModeratorQuiz() {
        this.quizService.unsignQuiz(this.currentQuizId).subscribe((resp) => {
        }, error => {
            alert('Something wrong while unsign');
        });
    }
    get f() { return this.commentForm.controls; }
    commentFormValidation() {
        this.submitted = true;
        if (this.commentForm.invalid) {
            return;
        }
        this.comment = this.commentForm.value.comment;
        this.leaveComment();
    }
}
QuestionCheckComponent.ɵfac = function QuestionCheckComponent_Factory(t) { return new (t || QuestionCheckComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_quizCheckService_quiz_check_service__WEBPACK_IMPORTED_MODULE_4__["QuizCheckService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
QuestionCheckComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionCheckComponent, selectors: [["app-question-check"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 4, "ngFor", "ngForOf"], ["fxLayout", "column"], [1, "reject-comment"], ["fxLayout", "column", 1, "form-field"], ["matInput", "", "row", "5", "formControlName", "comment", "placeholder", "Comment", 1, "form-control"], ["mat-flat-button", "", "type", "submit", 1, "mat-button-send"], ["class", "mat-button-active", "fxLayout", "column", "mat-flat-button", "", 3, "click", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], [1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], [4, "ngFor", "ngForOf"], [1, "checkBox"], [1, "example-checkbox", 3, "labelPosition", "change"], ["class", "true-answer-div", 4, "ngIf"], ["class", "false-answer-div", 4, "ngIf"], [1, "true-answer-div"], [1, "false-answer-div"], ["fxLayout", "column", "mat-flat-button", "", 1, "mat-button-active", 3, "click"]], template: function QuestionCheckComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QuestionCheckComponent_div_0_Template, 20, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quiz);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelDescription"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckbox"]], styles: [".example-card[_ngcontent-%COMP%] {\r\n  min-width: 650px;\r\n  border: 1px;\r\n  margin: 5px;\r\n  background-color: ghostwhite;\r\n}\r\n\r\n.true-answer-div[_ngcontent-%COMP%]{\r\n  border-radius: 3px;\r\n  margin: 5px;\r\n  padding: 10px;\r\n  background-color: lightgreen;\r\n}\r\n\r\n.false-answer-div[_ngcontent-%COMP%]{\r\n  border-radius: 3px;\r\n  margin: 5px;\r\n  padding: 10px;\r\n  background-color: lightgrey;\r\n}\r\n\r\n.checkBox[_ngcontent-%COMP%]{\r\n  padding-left: 6px;\r\n}\r\n\r\n.mat-button-send[_ngcontent-%COMP%]{\r\n  margin: 10px;\r\n  background-color: lightgrey;\r\n  border-radius: 3px;\r\n  border-color: darkgrey;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.mat-button-active[_ngcontent-%COMP%]{\r\n  background-color: lightgreen;\r\n  border-radius: 3px;\r\n  border-color: darkgrey;\r\n  margin: 10px;\r\n}\r\n\r\n.example-header-image[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n}\r\n\r\n.reject-comment[_ngcontent-%COMP%]{\r\n  background-color: lightsalmon;\r\n}\r\n\r\n.reject-comment[_ngcontent-%COMP%]:hover{\r\n  background-color: salmon !important;\r\n}\r\n\r\n.form-field[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei1jaGVjay9xdWVzdGlvbi1jaGVjay9xdWVzdGlvbi1jaGVjay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcXVpei1jaGVjay9xdWVzdGlvbi1jaGVjay9xdWVzdGlvbi1jaGVjay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XHJcbiAgbWluLXdpZHRoOiA2NTBweDtcclxuICBib3JkZXI6IDFweDtcclxuICBtYXJnaW46IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlO1xyXG59XHJcblxyXG4udHJ1ZS1hbnN3ZXItZGl2e1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtYXJnaW46IDVweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XHJcbn1cclxuLmZhbHNlLWFuc3dlci1kaXZ7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG59XHJcbi5jaGVja0JveHtcclxuICBwYWRkaW5nLWxlZnQ6IDZweDtcclxufVxyXG4ubWF0LWJ1dHRvbi1zZW5ke1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlci1jb2xvcjogZGFya2dyZXk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubWF0LWJ1dHRvbi1hY3RpdmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiBkYXJrZ3JleTtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4ucmVqZWN0LWNvbW1lbnR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzYWxtb247XHJcbn1cclxuLnJlamVjdC1jb21tZW50OmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHNhbG1vbiAhaW1wb3J0YW50O1xyXG59XHJcbi5mb3JtLWZpZWxke1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionCheckComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-question-check',
                templateUrl: './question-check.component.html',
                styleUrls: ['./question-check.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _service_quizCheckService_quiz_check_service__WEBPACK_IMPORTED_MODULE_4__["QuizCheckService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/quiz-check/quiz-check-nav/quiz-check-nav.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/quiz-check/quiz-check-nav/quiz-check-nav.component.ts ***!
  \***********************************************************************/
/*! exports provided: QuizCheckNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizCheckNavComponent", function() { return QuizCheckNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function () { return { quiznav: "quizinfo" }; };
const _c1 = function (a0) { return { outlets: a0 }; };
const _c2 = function (a0) { return [a0]; };
const _c3 = function () { return { quiznav: "qAnda" }; };
function QuizCheckNavComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Quiz Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))))("active", _r1.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3))))("active", _r2.isActive);
} }
class QuizCheckNavComponent {
    constructor() {
        this.currentQuiz = JSON.parse(localStorage.getItem('currentQuiz'));
        this.id = this.currentQuiz.id;
    }
    ngOnInit() {
        this.id = this.currentQuiz.id;
    }
}
QuizCheckNavComponent.ɵfac = function QuizCheckNavComponent_Factory(t) { return new (t || QuizCheckNavComponent)(); };
QuizCheckNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuizCheckNavComponent, selectors: [["app-quiz-check-nav"]], decls: 1, vars: 1, consts: [["mat-tab-nav-bar", "", 4, "ngIf"], ["mat-tab-nav-bar", ""], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active"], ["quizInfo", "routerLinkActive"], ["qAnda", "routerLinkActive"]], template: function QuizCheckNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QuizCheckNavComponent_nav_0_Template, 7, 14, "nav", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentQuiz.id == ctx.id);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabNav"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: ["nav[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei1jaGVjay9xdWl6LWNoZWNrLW5hdi9xdWl6LWNoZWNrLW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcXVpei1jaGVjay9xdWl6LWNoZWNrLW5hdi9xdWl6LWNoZWNrLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizCheckNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quiz-check-nav',
                templateUrl: './quiz-check-nav.component.html',
                styleUrls: ['./quiz-check-nav.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/quiz-check/quiz-check.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quiz-check/quiz-check.component.ts ***!
  \****************************************************/
/*! exports provided: QuizCheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizCheckComponent", function() { return QuizCheckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/profileService/share-id.service */ "./src/app/service/profileService/share-id.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _quiz_check_nav_quiz_check_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quiz-check-nav/quiz-check-nav.component */ "./src/app/quiz-check/quiz-check-nav/quiz-check-nav.component.ts");






class QuizCheckComponent {
    constructor(activateRoute, router, shareId) {
        this.activateRoute = activateRoute;
        this.router = router;
        this.shareId = shareId;
        this.subscription = this.activateRoute.params.subscribe(params => {
            this.id = params.id;
        });
    }
    ngOnInit() {
    }
}
QuizCheckComponent.ɵfac = function QuizCheckComponent_Factory(t) { return new (t || QuizCheckComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_2__["ShareIdService"])); };
QuizCheckComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuizCheckComponent, selectors: [["app-quiz-check"]], decls: 5, vars: 0, consts: [["fxLayout", "row", "fxLayoutAlign", "center start"], ["fxFlex", "50"], ["id", "navigation"], ["name", "quiznav"]], template: function QuizCheckComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-quiz-check-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _quiz_check_nav_quiz_check_nav_component__WEBPACK_IMPORTED_MODULE_4__["QuizCheckNavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".input-form[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-left: 20px;\r\n}\r\n\r\n#navigation[_ngcontent-%COMP%] {\r\n  min-height: 90px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei1jaGVjay9xdWl6LWNoZWNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcXVpei1jaGVjay9xdWl6LWNoZWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbiNuYXZpZ2F0aW9uIHtcclxuICBtaW4taGVpZ2h0OiA5MHB4O1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizCheckComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quiz-check',
                templateUrl: './quiz-check.component.html',
                styleUrls: ['./quiz-check.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_2__["ShareIdService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/quiz-check/quiz-info/quiz-info.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/quiz-check/quiz-info/quiz-info.component.ts ***!
  \*************************************************************/
/*! exports provided: QuizInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizInfoComponent", function() { return QuizInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_quizCheckService_quiz_check_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/quizCheckService/quiz-check.service */ "./src/app/service/quizCheckService/quiz-check.service.ts");
/* harmony import */ var _service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/profileService/share-id.service */ "./src/app/service/profileService/share-id.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");









function QuizInfoComponent_div_2_div_26_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Quiz rejected by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizInfoComponent_div_2_div_26_div_3_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const q_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r5.checkOut(q_r3.moderatorId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Moderator comment: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", q_r3.moderatorName, " ", q_r3.moderatorSurname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, q_r3.commentDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r3.comment, " ");
} }
function QuizInfoComponent_div_2_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Moderator`s comments history");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QuizInfoComponent_div_2_div_26_div_3_Template, 15, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.comments);
} }
function QuizInfoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, QuizInfoComponent_div_2_div_26_Template, 4, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.quiz.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.quiz.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Author: ", ctx_r0.quiz.authorName, " ", ctx_r0.quiz.authorSurname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 9, ctx_r0.quiz.date), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Description: ", ctx_r0.quiz.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Status: ", ctx_r0.quiz.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Modification time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 11, ctx_r0.quiz.modificationTime), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.comments);
} }
class QuizInfoComponent {
    constructor(quizService, shareId, location, router) {
        this.quizService = quizService;
        this.shareId = shareId;
        this.location = location;
        this.router = router;
        this.currentQuizId = JSON.parse(localStorage.getItem('currentQuiz')).id;
    }
    ngOnInit() {
        this.getQuiz(this.currentQuizId);
        this.getCommentHistory();
        this.location.onPopState(() => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(['checkquiz', this.currentQuizId, { outlets: { quiznav: 'quizinfo' } }]);
            });
        });
    }
    getCommentHistory() {
        this.quizService.getCommentHistory(this.currentQuizId).subscribe((resp) => {
            this.comments = resp;
        }, error => {
            console.log(error);
            alert('Something wrong with downloading comment history');
        });
    }
    ngSubmit() { }
    getQuiz(id) {
        this.quizService.getQuizInfoById(id).subscribe((resp) => {
            this.quiz = resp;
        }, error => {
            console.log(error);
            alert('Something wrong with downloading quiz');
        });
    }
    checkOut(id) {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['profile', id, { outlets: { profilenav: 'profinfo' } }]);
        });
    }
}
QuizInfoComponent.ɵfac = function QuizInfoComponent_Factory(t) { return new (t || QuizInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_quizCheckService_quiz_check_service__WEBPACK_IMPORTED_MODULE_1__["QuizCheckService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_2__["ShareIdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
QuizInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuizInfoComponent, selectors: [["app-quiz-info"]], decls: 3, vars: 1, consts: [["align", "center"], [4, "ngIf"], [1, "container"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], [1, "info-card"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 4, "ngFor", "ngForOf"], [1, "example-card"], ["routerLink", "", 1, "nav-link", 3, "click"], [1, "comment-title"], [1, "comment"]], template: function QuizInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Quiz info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuizInfoComponent_div_2_Template, 27, 13, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quiz);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".example-card[_ngcontent-%COMP%] {\r\n  min-width: 700px;\r\n  border: 1px;\r\n  margin: 5px;\r\n  padding: 5px;\r\n  background-color: lightsalmon;\r\n}\r\n.info-card[_ngcontent-%COMP%] {\r\n  min-width: 700px;\r\n  border: 1px;\r\n  background-color: ghostwhite;\r\n}\r\n.h2[_ngcontent-%COMP%]{\r\n  margin-top: 25px;\r\n  padding: 5px;\r\n}\r\n.comment[_ngcontent-%COMP%]{\r\n  padding-left: 50px;\r\n  padding-top: 5px;\r\n}\r\n.comment-title[_ngcontent-%COMP%]{\r\n  padding-left: 15px;\r\n}\r\n.p[_ngcontent-%COMP%]{\r\n  padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei1jaGVjay9xdWl6LWluZm8vcXVpei1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3F1aXotY2hlY2svcXVpei1pbmZvL3F1aXotaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uZXhhbXBsZS1jYXJkIHtcclxuICBtaW4td2lkdGg6IDcwMHB4O1xyXG4gIGJvcmRlcjogMXB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNhbG1vbjtcclxufVxyXG4uaW5mby1jYXJkIHtcclxuICBtaW4td2lkdGg6IDcwMHB4O1xyXG4gIGJvcmRlcjogMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdob3N0d2hpdGU7XHJcbn1cclxuLmgye1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5jb21tZW50e1xyXG4gIHBhZGRpbmctbGVmdDogNTBweDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcbi5jb21tZW50LXRpdGxle1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4ucHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quiz-info',
                templateUrl: './quiz-info.component.html',
                styleUrls: ['./quiz-info.component.css']
            }]
    }], function () { return [{ type: _service_quizCheckService_quiz_check_service__WEBPACK_IMPORTED_MODULE_1__["QuizCheckService"] }, { type: _service_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_2__["ShareIdService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/quiz/quiz-dialog/quiz-dialog.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/quiz/quiz-dialog/quiz-dialog.component.ts ***!
  \***********************************************************/
/*! exports provided: QuizDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizDialogComponent", function() { return QuizDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/loginService/authentication.service */ "./src/app/service/loginService/authentication.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










function QuizDialogComponent_mat_chip_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r2.name);
} }
function QuizDialogComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizDialogComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onStartClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Start Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class QuizDialogComponent {
    constructor(dialogRef, data, router, authenticationService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.authenticationService = authenticationService;
    }
    ngOnInit() {
        this.isLogin = this.authenticationService.logIn;
    }
    onStartClick() {
        this.router.navigate(['/game/settings', this.data.quizData.id]);
        this.dialogRef.close();
    }
}
QuizDialogComponent.ɵfac = function QuizDialogComponent_Factory(t) { return new (t || QuizDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
QuizDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuizDialogComponent, selectors: [["app-quiz-dialog"]], decls: 23, vars: 6, consts: [["mat-dialog-content", ""], ["mat-card-image", "", "alt", "Photo of a Shiba Inu", 3, "src"], [1, "header"], [4, "ngFor", "ngForOf"], ["mat-dialog-actions", ""], ["mat-flat-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "mat-dialog-close", ""], ["mat-flat-button", "", "color", "accent", 3, "click"]], template: function QuizDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Tags ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-chip-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, QuizDialogComponent_mat_chip_13_Template, 2, 1, "mat-chip", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, QuizDialogComponent_button_20_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.data.quizData.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.quizData.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.quizData.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.quizData.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.quizData.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogin);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChip"]], styles: [".header[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 0px;\r\n  height: 0px;\r\n  background: transparent;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei9xdWl6LWRpYWxvZy9xdWl6LWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9xdWl6L3F1aXotZGlhbG9nL3F1aXotZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMHB4O1xyXG4gIGhlaWdodDogMHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quiz-dialog',
                templateUrl: './quiz-dialog.component.html',
                styleUrls: ['./quiz-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/quiz/quiz.component.ts":
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var _quiz_dialog_quiz_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz-dialog/quiz-dialog.component */ "./src/app/quiz/quiz-dialog/quiz-dialog.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/loginService/authentication.service */ "./src/app/service/loginService/authentication.service.ts");
/* harmony import */ var _service_quizService_quiz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/quizService/quiz.service */ "./src/app/service/quizService/quiz.service.ts");
/* harmony import */ var _service_current_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/current-user.service */ "./src/app/service/current-user.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");













function QuizComponent_div_6_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuizComponent_div_6_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.unmarkQuizAsFavorite(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QuizComponent_div_6_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuizComponent_div_6_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.markQuizAsFavorite(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "star_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function QuizComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QuizComponent_div_6_button_1_Template, 3, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, QuizComponent_div_6_button_2_Template, 3, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.quizData.favorite);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.quizData.favorite);
} }
function QuizComponent_mat_chip_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r8.name);
} }
class QuizComponent {
    constructor(sanitizer, authenticationService, quizService, currentUserService, dialog) {
        this.sanitizer = sanitizer;
        this.authenticationService = authenticationService;
        this.quizService = quizService;
        this.currentUserService = currentUserService;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.quizImage = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + this.quizData.image);
    }
    markQuizAsFavorite() {
        this.quizService.markQuizAsFavorite(this.quizData.id, (this.currentUserService.getCurrentUser().id)).subscribe(resp => {
            this.quizData.favorite = true;
        });
    }
    unmarkQuizAsFavorite() {
        this.quizService.unmarkQuizAsFavorite(this.quizData.id, (this.currentUserService.getCurrentUser().id)).subscribe(resp => {
            this.quizData.favorite = false;
        });
    }
    openDialog() {
        this.dialog.open(_quiz_dialog_quiz_dialog_component__WEBPACK_IMPORTED_MODULE_0__["QuizDialogComponent"], {
            width: '30em',
            data: { quizData: this.quizData, quizImage: this.quizImage }
        });
    }
}
QuizComponent.ɵfac = function QuizComponent_Factory(t) { return new (t || QuizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_quizService_quiz_service__WEBPACK_IMPORTED_MODULE_4__["QuizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_current_user_service__WEBPACK_IMPORTED_MODULE_5__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
QuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: QuizComponent, selectors: [["app-quiz"]], inputs: { quizData: "quizData" }, decls: 14, vars: 6, consts: [[1, "card"], [1, "head"], [4, "ngIf"], ["mat-card-image", "", 1, "image", 3, "src"], [4, "ngFor", "ngForOf"], ["id", "openButton", "mat-button", "", 3, "disableRipple", "click"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 3, "click"]], template: function QuizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, QuizComponent_div_6_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-chip-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, QuizComponent_mat_chip_10_Template, 2, 1, "mat-chip", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QuizComponent_Template_button_click_12_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "OPEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.quizData.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Category: ", ctx.quizData.category, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authenticationService.logIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.quizData.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.quizData.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disableRipple", true);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChip"]], styles: [".card[_ngcontent-%COMP%] {\r\n  width: 225px;\r\n  height:340px;\r\n  margin: 5px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  align-self: self-end;\r\n}\r\n\r\n.head[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  -o-object-fit: cover;\r\n     object-fit: cover; \r\n  width: 114%;\r\n  height: 55%;\r\n}\r\n\r\nmat-card-content[_ngcontent-%COMP%] {\r\n  height: 10%;\r\n  overflow: scroll;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 0px;\r\n  height: 0px;\r\n  background: transparent;\r\n}\r\n\r\n#openButton[_ngcontent-%COMP%] {\r\n  align-content: center;\r\n  width: 100%;\r\n  height: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUUsOERBQThEO0VBQ2pGLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3F1aXovcXVpei5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIHdpZHRoOiAyMjVweDtcclxuICBoZWlnaHQ6MzQwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYWxpZ24tc2VsZjogc2VsZi1lbmQ7XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxubWF0LWNhcmQgaW1ne1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyOyAvKnRoaXMgbWFrZXMgdGhlIGltYWdlIGluIHNyYyBmaXQgdG8gdGhlIHNpemUgc3BlY2lmaWVkIGJlbG93Ki9cclxuICB3aWR0aDogMTE0JTtcclxuICBoZWlnaHQ6IDU1JTtcclxufVxyXG5cclxubWF0LWNhcmQtY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDBweDtcclxuICBoZWlnaHQ6IDBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuI29wZW5CdXR0b24ge1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDBweDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-quiz',
                templateUrl: './quiz.component.html',
                styleUrls: ['./quiz.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }, { type: _service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: _service_quizService_quiz_service__WEBPACK_IMPORTED_MODULE_4__["QuizService"] }, { type: _service_current_user_service__WEBPACK_IMPORTED_MODULE_5__["CurrentUserService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, { quizData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/quizzes-page/quizzes-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/quizzes-page/quizzes-page.component.ts ***!
  \********************************************************/
/*! exports provided: QuizzesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizzesPageComponent", function() { return QuizzesPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/categoryService/category.service */ "./src/app/service/categoryService/category.service.ts");
/* harmony import */ var _service_quizService_quiz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/quizService/quiz.service */ "./src/app/service/quizService/quiz.service.ts");
/* harmony import */ var _service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/loginService/authentication.service */ "./src/app/service/loginService/authentication.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");


















function QuizzesPageComponent_mat_list_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizzesPageComponent_mat_list_12_Template_button_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const category_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r5.setPaginationParamDefault(); ctx_r5.setCurrentCategory(category_r4.id); return ctx_r5.onPageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r4.name);
} }
function QuizzesPageComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-quiz", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quiz_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("quizData", quiz_r7);
} }
function QuizzesPageComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-quiz", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recomendedQuiz_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("quizData", recomendedQuiz_r8);
} }
class QuizzesPageComponent {
    constructor(categoryService, quizService, authService) {
        this.categoryService = categoryService;
        this.quizService = quizService;
        this.authService = authService;
        this.length = 0;
        this.pageSizeOptions = [10, 20, 30, 40, 50];
        this.recommendationLimit = 20;
        this.userQuestionUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.categoryService.getCategories().subscribe(resp => this.categories = resp);
        this.setPaginationParamDefault();
        this.getAllQuizzes();
        this.authService.logIn ? this.getRecommendationForAuthUser() : this.getRecommendationForAnonimus();
        this.userQuestionUpdate.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])())
            .subscribe(userSearch => {
            this.setPaginationParamDefault();
            userSearch.length == 0 ? this.getAllQuizzes() : this.filterRequest(userSearch);
        });
    }
    filterRequest(filterText) {
        this.quizService.getFilteredQuizzes(filterText, this.pageSize, this.pageIndex).subscribe(resp => {
            this.quizzes = resp.responceList;
            this.length = resp.totalNumberOfElement;
        });
    }
    onPageChanged(e) {
        this.pageIndex = e.pageIndex;
        this.pageSize = e.pageSize;
        if (this.currentQuizCategory != undefined) {
            if (this.pageSize == undefined) {
                this.setPaginationParamDefault();
            }
            this.searchByCategory(this.currentQuizCategory);
        }
        else if (this.userRequest != undefined && this.userRequest) {
            if (this.pageSize == undefined) {
                this.setPaginationParamDefault();
            }
            this.filterRequest(this.userRequest);
        }
        else {
            this.getAllQuizzes();
        }
    }
    setPaginationParamDefault() {
        this.pageIndex = 0;
        this.pageSize = 10;
    }
    getAllQuizzes() {
        console.log("pagesize " + this.pageSize);
        this.quizService.getQuizzes(this.pageSize, this.pageIndex).subscribe(resp => {
            this.currentQuizCategory = undefined;
            this.quizzes = resp.responceList;
            this.length = resp.totalNumberOfElement;
        });
    }
    searchByCategory(categoryid) {
        this.quizService.getQuizzesByCategory(categoryid, this.pageSize, this.pageIndex).subscribe(resp => {
            this.quizzes = resp.responceList;
            this.length = resp.totalNumberOfElement;
        });
    }
    setCurrentCategory(categoryId) {
        this.currentQuizCategory = categoryId;
    }
    getRecommendationForAuthUser() {
        this.quizService.getRecommendedQuizzes(this.recommendationLimit).subscribe(resp => {
            this.recommendationQuizzes = resp;
        });
    }
    getRecommendationForAnonimus() {
        this.quizService.RecommendationForAnonimus(this.recommendationLimit).subscribe(resp => {
            this.recommendationQuizzes = resp;
        });
    }
}
QuizzesPageComponent.ɵfac = function QuizzesPageComponent_Factory(t) { return new (t || QuizzesPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_quizService_quiz_service__WEBPACK_IMPORTED_MODULE_4__["QuizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"])); };
QuizzesPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuizzesPageComponent, selectors: [["app-quizzes-page"]], decls: 29, vars: 12, consts: [["fxLayout", "row"], ["fxFlex", "15"], ["mat-raised-button", "", "routerLink", "/new_quiz", 1, "create_button"], ["align", "center"], ["mat-raised-button", "", 3, "click"], [4, "ngFor", "ngForOf"], ["fxFlex", "71", 1, "scroll", "main"], ["maincontent", ""], [1, "input"], ["appearance", "outline"], ["matInput", "", "type", "search", "placeholder", "Search", "value", "", 3, "ngModel", "ngModelChange"], ["fxLayout", "row wrap", 1, "content"], ["fxLayout", "row wrap", 4, "ngFor", "ngForOf"], [3, "pageIndex", "length", "pageSize", "pageSizeOptions", "page"], ["fxFlex", "14"], ["id", "recommended", "align", "center"], [1, "scrollRec"], ["fxLayout", "row wrap"], [3, "quizData"]], template: function QuizzesPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizzesPageComponent_Template_button_click_9_listener() { ctx.setPaginationParamDefault(); return ctx.getAllQuizzes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-selection-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, QuizzesPageComponent_mat_list_12_Template, 4, 1, "mat-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Search quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuizzesPageComponent_Template_input_ngModelChange_19_listener($event) { return ctx.userRequest = $event; })("ngModelChange", function QuizzesPageComponent_Template_input_ngModelChange_19_listener($event) { return ctx.userQuestionUpdate.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, QuizzesPageComponent_div_21_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-paginator", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function QuizzesPageComponent_Template_mat_paginator_page_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); ctx.onPageChanged($event); return _r1.scrollTop = 0; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Recommended for you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, QuizzesPageComponent_div_28_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-elevation-z24", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userRequest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quizzes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageIndex", ctx.pageIndex)("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-elevation-z24", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recommendationQuizzes);
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatSelectionList"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginator"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_16__["QuizComponent"]], styles: ["button[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.scroll[_ngcontent-%COMP%] {\r\n  max-height: 950px;\r\n  overflow: scroll;\r\n}\r\n\r\n.scrollRec[_ngcontent-%COMP%] {\r\n  max-height: 900px;\r\n  overflow: scroll;\r\n}\r\n\r\nmat-selection-list[_ngcontent-%COMP%] {\r\n  max-height: 900px;\r\n  overflow: scroll;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 0px;\r\n  background: transparent;\r\n}\r\n\r\n#recommended[_ngcontent-%COMP%] {\r\n  margin-top: 6px;\r\n  margin-bottom: 3px;\r\n}\r\n\r\n.create_button[_ngcontent-%COMP%] {\r\n  background: grey;\r\n}\r\n\r\n.input[_ngcontent-%COMP%] {\r\n  margin-left: 536px;\r\n  max-width: 350px;\r\n  width: 100%;\r\n  margin-bottom: 0px;\r\n  padding-bottom: 0px;\r\n}\r\n\r\nmat-paginator[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  margin-left: 49%;\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n  margin-left: 9px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpenplcy1wYWdlL3F1aXp6ZXMtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFHQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9xdWl6emVzLXBhZ2UvcXVpenplcy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnNjcm9sbCB7XHJcbiAgbWF4LWhlaWdodDogOTUwcHg7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuLnNjcm9sbFJlYyB7XHJcbiAgbWF4LWhlaWdodDogOTAwcHg7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxubWF0LXNlbGVjdGlvbi1saXN0IHtcclxuICBtYXgtaGVpZ2h0OiA5MDBweDtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jcmVjb21tZW5kZWQge1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcbi5jcmVhdGVfYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiBncmV5O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIG1hcmdpbi1sZWZ0OiA1MzZweDtcclxuICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5cclxubWF0LXBhZ2luYXRvciB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogNDklO1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDlweDtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizzesPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quizzes-page',
                templateUrl: './quizzes-page.component.html',
                styleUrls: ['./quizzes-page.component.css']
            }]
    }], function () { return [{ type: _service_categoryService_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] }, { type: _service_quizService_quiz_service__WEBPACK_IMPORTED_MODULE_4__["QuizService"] }, { type: _service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: Gender, RegistrationComponent, MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gender", function() { return Gender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _service_registrationService_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/registrationService/registration.service */ "./src/app/service/registrationService/registration.service.ts");
/* harmony import */ var _service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/loginService/authentication.service */ "./src/app/service/loginService/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");













function RegistrationComponent_form_3_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_form_3_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_form_3_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is require");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_form_3_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Must contain at least 8 or more characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_form_3_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_form_3_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords must match");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_form_3_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "For registration you must be not logged in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function RegistrationComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_form_3_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RegistrationComponent_form_3_mat_error_5_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RegistrationComponent_form_3_mat_error_6_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RegistrationComponent_form_3_mat_error_12_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RegistrationComponent_form_3_mat_error_13_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Confirm password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegistrationComponent_form_3_mat_error_19_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RegistrationComponent_form_3_mat_error_20_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RegistrationComponent_form_3_div_24_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.registerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx_r0.submitted && ctx_r0.f.email.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors == null ? null : ctx_r0.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors == null ? null : ctx_r0.f.email.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx_r0.submitted && ctx_r0.f.password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.password.errors == null ? null : ctx_r0.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.password.errors == null ? null : ctx_r0.f.password.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx_r0.submitted && ctx_r0.f.confirmPassword.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.confirmPassword.errors == null ? null : ctx_r0.f.confirmPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.confirmPassword.errors == null ? null : ctx_r0.f.confirmPassword.errors.mustMatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.authService.logIn);
} }
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["NOT_MENTIONED"] = 2] = "NOT_MENTIONED";
})(Gender || (Gender = {}));
class RegistrationComponent {
    constructor(service, authService, formBuilder, router) {
        this.service = service;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
        this.Gender = Gender;
        this.model = {
            image: undefined,
            notificationStatus: undefined,
            about: '',
            birthdate: undefined,
            city: "",
            countryId: "",
            gender: undefined,
            name: "",
            rating: "",
            role: undefined,
            surname: "",
            id: null,
            email: '',
            password: ''
        };
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            name: [''],
            surname: [''],
            gender: [Gender.NOT_MENTIONED],
            birthdate: ['1973-01-01'],
            city: [''],
            about: [''],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        const input = JSON.parse(JSON.stringify(this.registerForm.value));
        this.model.email = input.email;
        this.model.password = input.password;
        this.model.name = input.name;
        this.model.surname = input.surname;
        this.model.gender = input.gender;
        this.model.birthdate = input.birthdate;
        this.model.city = input.city;
        this.model.about = input.about;
        this.register();
    }
    register() {
        this.service.postRegisterInfo(this.model).subscribe(res => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate(['/']);
            });
            alert("You registered");
        }, error => {
            alert(error.error['message']);
        });
    }
    get f() { return this.registerForm.controls; }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_registrationService_registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 5, vars: 1, consts: [["fxLayout", "row", 1, ""], ["fxFlex", "30"], ["fxFlex", "center center"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "full-width"], ["matInput", "", "formControlName", "email", "placeholder", "Email", "name", "email", 3, "ngClass"], [4, "ngIf"], ["type", "password", "matInput", "", "formControlName", "password", "placeholder", "Password", "name", "password", "required", "", 3, "ngClass"], ["type", "password", "matInput", "", "placeholder", "Password", "formControlName", "confirmPassword", "name", "confirmPassword", 3, "ngClass"], ["mat-raised-button", "", "type", "submit"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegistrationComponent_form_3_Template, 25, 17, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.logIn);
    } }, directives: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: [".full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration',
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.css']
            }]
    }], function () { return [{ type: _service_registrationService_registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"] }, { type: _service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/service/achievementsService/achievements.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/service/achievementsService/achievements.service.ts ***!
  \*********************************************************************/
/*! exports provided: AchievementsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AchievementsService", function() { return AchievementsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AchievementsService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = window['configureApiBaseUrl'];
        this.GET_ACHIEVEMENTS = `${this.BASE_URL}\\achievements`;
        this.GET_ACHIEVEMENT_CATEGORIES = `${this.BASE_URL}\\achievements\\categories`;
        this.GET_ACHIEVEMENTS_BY_CATEGORY = `${this.BASE_URL}\\achievements\\by_category\\`;
    }
    getAchievements() {
        return this.http.get(this.GET_ACHIEVEMENTS);
    }
    getAchievementCategories() {
        return this.http.get(this.GET_ACHIEVEMENT_CATEGORIES);
    }
    getAchievementsByCategory(categoryId) {
        return this.http.get(this.GET_ACHIEVEMENTS_BY_CATEGORY + categoryId);
    }
    getAchievementsByUser(userId) {
        return this.http.get(this.GET_ACHIEVEMENTS + `\\` + userId);
    }
}
AchievementsService.ɵfac = function AchievementsService_Factory(t) { return new (t || AchievementsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AchievementsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AchievementsService, factory: AchievementsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AchievementsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/announcementService/announcement.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/service/announcementService/announcement.service.ts ***!
  \*********************************************************************/
/*! exports provided: AnnouncementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementService", function() { return AnnouncementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _current_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../current-user.service */ "./src/app/service/current-user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class AnnouncementService {
    constructor(currentUserService, http) {
        this.currentUserService = currentUserService;
        this.http = http;
        this.BASE_URL = window["configureApiBaseUrl"];
        this.GET_ANNOUNCEMENT = `${this.BASE_URL}\\announce\\dash\\`;
    }
    getAnnouncement() {
        return this.http.get(this.GET_ANNOUNCEMENT + "?userId=" + this.currentUserService.getCurrentUser().id);
    }
}
AnnouncementService.ɵfac = function AnnouncementService_Factory(t) { return new (t || AnnouncementService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AnnouncementService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AnnouncementService, factory: AnnouncementService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnnouncementService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _current_user_service__WEBPACK_IMPORTED_MODULE_1__["CurrentUserService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/canDeactivateGuardService/can-deactivate-guard.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/service/canDeactivateGuardService/can-deactivate-guard.service.ts ***!
  \***********************************************************************************/
/*! exports provided: CanDeactivateGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateGuardService", function() { return CanDeactivateGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CanDeactivateGuardService {
    canDeactivate(component, currentRoute, currentState, nextState) {
        if (currentState.url.includes('/game/start') && nextState.url.includes('/game/question')) {
            return true;
        }
        if (currentState.url.includes('/game/question') && (nextState.url.includes('/game/question') || nextState.url.includes('/game/finish'))) {
            return true;
        }
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
CanDeactivateGuardService.ɵfac = function CanDeactivateGuardService_Factory(t) { return new (t || CanDeactivateGuardService)(); };
CanDeactivateGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanDeactivateGuardService, factory: CanDeactivateGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanDeactivateGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/service/categoryService/category.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/service/categoryService/category.service.ts ***!
  \*************************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class CategoryService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = window["configureApiBaseUrl"];
        this.CATEGORIES_URL = `${this.BASE_URL}\\categories`;
    }
    getCategories() {
        return this.http.get(this.CATEGORIES_URL);
    }
    getCategoryByName(name) {
        return this.http.get(`${this.CATEGORIES_URL}\\${name}`);
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/current-user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/current-user.service.ts ***!
  \*************************************************/
/*! exports provided: CurrentUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserService", function() { return CurrentUserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CurrentUserService {
    constructor() { }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }
}
CurrentUserService.ɵfac = function CurrentUserService_Factory(t) { return new (t || CurrentUserService)(); };
CurrentUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CurrentUserService, factory: CurrentUserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentUserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/service/dashboardService/dashboard.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/service/dashboardService/dashboard.service.ts ***!
  \***************************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class DashboardService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = window['configureApiBaseUrl'];
        this.TOP_QUIZZES = `${this.BASE_URL}\\quizzes\\top_quizzes`;
        this.RECENT_QUIZZES = `${this.BASE_URL}\\quizzes\\recent_quizzes`;
        this.GET_RATING = `${this.BASE_URL}\\api\\users\\rating\\`;
        this.GET_ACHIEVEMENTS_TOTAL = `${this.BASE_URL}\\achievements\\count_total`;
        this.GET_ACHIEVEMENTS_FOR_USER = `${this.BASE_URL}\\achievements\\count\\`;
        this.GET_RECOMMENDATIONS = `${this.BASE_URL}\\quizzes\\recommendations\\`;
        this.GET_QUIZ_IMAGE = `${this.BASE_URL}\\quizzes\\get_image\\`;
    }
    getTopQuizzes(limit) {
        return this.http.get(this.TOP_QUIZZES + "?limit=" + limit);
    }
    getTopQuizzesByCategory(categoryId, limit) {
        return this.http.get(this.TOP_QUIZZES + '/' + categoryId + "?limit=" + limit);
    }
    getRecentQuizzes(userId, limit) {
        return this.http.get(this.RECENT_QUIZZES + '/' + userId + "?limit=" + limit);
    }
    getRating(userId) {
        return this.http.get(this.GET_RATING + userId);
    }
    getAchievementsTotal() {
        return this.http.get(this.GET_ACHIEVEMENTS_TOTAL);
    }
    getAchievementsForUser(userId) {
        return this.http.get(this.GET_ACHIEVEMENTS_FOR_USER + userId);
    }
    getRecommendations(userId, limit) {
        return this.http.get(this.GET_RECOMMENDATIONS + userId + "?limit=" + limit);
    }
    getQuizImage(quizId) {
        return this.http.get(this.GET_QUIZ_IMAGE + quizId);
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/gameService/game.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/gameService/game.service.ts ***!
  \*****************************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stomp/rx-stomp */ "./node_modules/@stomp/rx-stomp/bundles/rx-stomp.umd.js");
/* harmony import */ var _stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _gameStateService_game_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../gameStateService/game-state.service */ "./src/app/service/gameStateService/game-state.service.ts");








class GameService {
    constructor(http, router, gameStateService) {
        this.http = http;
        this.router = router;
        this.gameStateService = gameStateService;
        this.BASE_URL = window["configureApiBaseUrl"];
        this.CREATE_GAME = `${this.BASE_URL}\\play\\addSession`;
        this.webSocketEndPoint = `${this.BASE_URL}\\ws`;
    }
    createGame(game) {
        return this.http.post(this.CREATE_GAME, game);
    }
    initializeWebSocketConnection(gameId, player) {
        this.gameId = gameId;
        this.player = player;
        const that = this;
        const config = new _stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_3__["RxStompConfig"]();
        config.webSocketFactory = function () { return new sockjs_client__WEBPACK_IMPORTED_MODULE_0__(that.webSocketEndPoint); };
        this.client = new _stomp_rx_stomp__WEBPACK_IMPORTED_MODULE_3__["RxStomp"]();
        this.client.configure(config);
        this.gameStateService.setGameState(this.gameId, false);
        this.gameObservable = this.client.watch(`/play/game/${this.gameId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(resp => resp.body));
    }
    connect() {
        this.client.activate();
        this.client.publish({ destination: `/app/play/game/${this.gameId}/user`, body: JSON.stringify(this.player) });
    }
    waitGameStart() {
        return this.gameObservable;
    }
    subscribeQuestion() {
        this.gameObservable.subscribe(resp => {
            let data = JSON.parse(resp);
            if (data) {
                if (data['question']) {
                    this.gameStateService.setGameState(this.gameId, true);
                    this.routeQuestion(data);
                }
                else {
                    if (this.gameStateService.getGameState(this.gameId)) {
                        this.routeResults();
                    }
                }
            }
        });
    }
    subscribeRating() {
        return this.gameObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(resp => {
            let data = JSON.parse(resp);
            this.disconnect();
            return data['players'];
        }));
    }
    startGame() {
        this.client.publish({ destination: `/app/play/game/${this.gameId}/start` });
    }
    postAnswer(answers) {
        this.client.publish({ destination: `/app/play/game/${this.gameId}/sendAnswer`, body: JSON.stringify({ answers: answers, player: this.player }) });
    }
    getQuestion() {
        return this.gameObservable;
    }
    routeQuestion(data) {
        let link = `/game/question/${this.gameId}/${data['questionNumber']}`;
        this.router.navigate([link], {
            state: {
                questionNumber: data['questionNumber'],
                question: data['question'],
                questionTimer: data['questionTimer'],
                player: this.player
            }
        });
    }
    routeResults() {
        let link = `/game/finish/${this.gameId}`;
        this.router.navigate([link]);
    }
    finishGame() {
        this.client.publish({ destination: `/app/play/game/${this.gameId}/finish` });
    }
    manageGameState() {
        if (!this.gameStateService.getGameState(this.gameId)) {
            this.gameStateService.setGameState(this.gameId, true);
        }
    }
    disconnect() {
        this.gameStateService.deleteGame(this.gameId);
        this.client.deactivate();
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_gameStateService_game_state_service__WEBPACK_IMPORTED_MODULE_6__["GameStateService"])); };
GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _gameStateService_game_state_service__WEBPACK_IMPORTED_MODULE_6__["GameStateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/gameStateService/game-state.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/service/gameStateService/game-state.service.ts ***!
  \****************************************************************/
/*! exports provided: GameStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameStateService", function() { return GameStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GameStateService {
    constructor() { }
    setGameState(gameId, active) {
        sessionStorage.setItem(gameId.toString(), String(active));
    }
    getGameState(gameId) {
        return JSON.parse(sessionStorage.getItem(gameId.toString()));
    }
    deleteGame(gameId) {
        sessionStorage.removeItem(gameId.toString());
    }
}
GameStateService.ɵfac = function GameStateService_Factory(t) { return new (t || GameStateService)(); };
GameStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameStateService, factory: GameStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/service/imageService/image.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/service/imageService/image.service.ts ***!
  \*******************************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ImageService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = window['configureApiBaseUrl'];
        this.SAVE_IMAGE = `${this.BASE_URL}\\image`;
    }
    saveImage(image) {
        if (image == null) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])("");
        }
        const uploadImg = new FormData();
        uploadImg.append('image', image);
        return this.http.post(this.SAVE_IMAGE, uploadImg, { responseType: 'text' });
    }
}
ImageService.ɵfac = function ImageService_Factory(t) { return new (t || ImageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ImageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImageService, factory: ImageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/loginService/authentication.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/service/loginService/authentication.service.ts ***!
  \****************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profileService_share_id_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profileService/share-id.service */ "./src/app/service/profileService/share-id.service.ts");
/* harmony import */ var _current_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../current-user.service */ "./src/app/service/current-user.service.ts");






class AuthenticationService {
    constructor(http, router, shareId, currentUserService) {
        this.http = http;
        this.router = router;
        this.shareId = shareId;
        this.currentUserService = currentUserService;
        this.BASE_URL = window["configureApiBaseUrl"];
        this.LOGIN_API_URL = `${this.BASE_URL}\\auth\\login`;
        this.USER_BY_CODE_URL = `${this.BASE_URL}\\api\\users\\activate\\`;
        this.SET_PASSWORD_URL = `${this.BASE_URL}\\profile\\updatePassword\\`;
    }
    login(email, password) {
        this.http.post(this.LOGIN_API_URL, { email, password })
            .subscribe((resp) => {
            localStorage.setItem('currentUser', JSON.stringify(resp));
            this.shareId.setId(JSON.parse(localStorage.getItem('currentUser')).id);
            window.location.replace('/');
        }, error => {
            alert(error.error['message']);
        });
    }
    logout() {
        localStorage.removeItem('currentUser');
        window.location.replace('/dashboard');
    }
    get logIn() {
        return (localStorage.getItem('currentUser') != null);
    }
    getUserbyCode(code) {
        return this.http.get(this.USER_BY_CODE_URL + code);
    }
    setPassword(userId, newPassword) {
        return this.http.post(this.SET_PASSWORD_URL + userId, newPassword);
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_profileService_share_id_service__WEBPACK_IMPORTED_MODULE_3__["ShareIdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_current_user_service__WEBPACK_IMPORTED_MODULE_4__["CurrentUserService"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _profileService_share_id_service__WEBPACK_IMPORTED_MODULE_3__["ShareIdService"] }, { type: _current_user_service__WEBPACK_IMPORTED_MODULE_4__["CurrentUserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/newQuizService/new-quiz.service.ts":
/*!************************************************************!*\
  !*** ./src/app/service/newQuizService/new-quiz.service.ts ***!
  \************************************************************/
/*! exports provided: NewQuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewQuizService", function() { return NewQuizService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class NewQuizService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = window["configureApiBaseUrl"];
        this.NEW_QUIZ_URL = `${this.BASE_URL}\\quizzes\\new_quiz`;
        this.QUIZZES_INFO = `${this.BASE_URL}\\quizzes\\info\\`;
    }
    postQuiz(quiz) {
        return this.http.post(this.NEW_QUIZ_URL, quiz);
    }
    getQuizInfo(quizId) {
        return this.http.get(this.QUIZZES_INFO + quizId);
    }
}
NewQuizService.ɵfac = function NewQuizService_Factory(t) { return new (t || NewQuizService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
NewQuizService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NewQuizService, factory: NewQuizService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewQuizService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/pendingQuizzesService/pending-quizzes.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/service/pendingQuizzesService/pending-quizzes.service.ts ***!
  \**************************************************************************/
/*! exports provided: PendingQuizzesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingQuizzesService", function() { return PendingQuizzesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_quiz_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/quiz.model */ "./src/app/models/quiz.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _loginService_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loginService/authentication.service */ "./src/app/service/loginService/authentication.service.ts");
/* harmony import */ var _current_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../current-user.service */ "./src/app/service/current-user.service.ts");






class PendingQuizzesService {
    constructor(http, authService, currentUserService) {
        this.http = http;
        this.authService = authService;
        this.currentUserService = currentUserService;
        this.BASE_URL = window['configureApiBaseUrl'];
        this.PENDING_QUIZZES_URL = `${this.BASE_URL}\\quizzes\\status\\`;
        this.ASSIGNED_QUIZZES_URL = `${this.BASE_URL}\\quizzes\\moderatorQuizzes\\`;
        this.GET_FILTERED_PENDING_QUIZZES_URL = `${this.BASE_URL}\\quizzes\\filter\\`;
    }
    getPendingQuizzes(pageSize, pageIndex) {
        return this.http.get(this.PENDING_QUIZZES_URL + _models_quiz_model__WEBPACK_IMPORTED_MODULE_1__["StatusType"].PENDING + '/' + pageSize + '/' + pageIndex);
    }
    getAssignedQuizzes(moderatorId, pageSize, pageIndex) {
        return this.http.get(this.ASSIGNED_QUIZZES_URL + moderatorId + '/' + pageSize + '/' + pageIndex);
    }
    getFilteredPendingQuizzes(searchText, pageSize, pageIndex) {
        return this.http.get(this.GET_FILTERED_PENDING_QUIZZES_URL + searchText + '/' + pageSize + '/' + pageIndex);
    }
}
PendingQuizzesService.ɵfac = function PendingQuizzesService_Factory(t) { return new (t || PendingQuizzesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_current_user_service__WEBPACK_IMPORTED_MODULE_4__["CurrentUserService"])); };
PendingQuizzesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PendingQuizzesService, factory: PendingQuizzesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PendingQuizzesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _loginService_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: _current_user_service__WEBPACK_IMPORTED_MODULE_4__["CurrentUserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/profileService/profile.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/service/profileService/profile.service.ts ***!
  \***********************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _loginService_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loginService/authentication.service */ "./src/app/service/loginService/authentication.service.ts");
/* harmony import */ var _current_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../current-user.service */ "./src/app/service/current-user.service.ts");





class ProfileService {
    constructor(http, authService, currentUserService) {
        this.http = http;
        this.authService = authService;
        this.currentUserService = currentUserService;
        this.BASE_URL = window['configureApiBaseUrl'];
        this.PROFILE_URL = `${this.BASE_URL}\\profile\\myprofile\\`;
        this.FRIEND_LIST_URL = `${this.BASE_URL}\\profile\\myfriends\\`;
        this.ADMIN_USERS_LIST_URL = `${this.BASE_URL}\\profile\\adminUsers`;
        this.UPDATE_PROFILE_URL = `${this.BASE_URL}\\profile\\myprofile\\update`;
        this.UPDATE_PASSWORD_URL = `${this.BASE_URL}\\profile\\updatePassword\\`;
        this.UPDATE_ACTIVE_STATUS_URL = `${this.BASE_URL}\\profile\\updateActive\\`;
        this.GET_QUIZZES_URL = `${this.BASE_URL}\\profile\\myquizzes\\`;
        this.GET_FAVORITE_URL = `${this.BASE_URL}\\profile\\myfavorite\\`;
        this.GET_CATEGORY_NAME = `${this.BASE_URL}\\profile\\category\\`;
        this.UPDATE_USER_IMAGE = `${this.BASE_URL}\\profile\\newicon\\`;
        this.GET_USER_IMAGE_BY_USER_ID = `${this.BASE_URL}\\profile\\getimage\\`;
        this.UPDATE_GET_NOTIFICATION = `${this.BASE_URL}\\profile\\status\\`;
        this.GET_PLAYED_GAMES = `${this.BASE_URL}\\profile\\played\\`;
        this.GET_GAME_RESULT = `${this.BASE_URL}\\profile\\gameresult\\`;
        this.DELETE_ADMIN_URL = `${this.BASE_URL}\\profile\\deleteAdminUser\\`;
        this.GET_FILTERED_USERS = `${this.BASE_URL}\\profile\\adminUsers\\filter\\`;
        this.GET_USERS_BY_ROLE = `${this.BASE_URL}\\profile\\roleStatus\\`;
        this.ADD_ADMIN_USER_URL = `${this.BASE_URL}\\api\\users\\addAdminUser`;
        this.GET_REJECTED_QUIZZES = `${this.BASE_URL}\\profile\\reject\\`;
        this.GET_REJECTED_MESSAGES = `${this.BASE_URL}\\profile\\rejectMessage\\`;
        this.ASSIGNED_QUIZZES_URL = `${this.BASE_URL}\\profile\\moderatorQuizzes\\`;
        this.userId = this.currentUserService.getCurrentUser().id;
    }
    getProfile(userId) {
        return this.http.get(this.PROFILE_URL + userId);
    }
    updateProfile(user) {
        user.id = this.userId;
        return this.http.post(this.UPDATE_PROFILE_URL, user);
    }
    updateAdminUser(user) {
        return this.http.post(this.UPDATE_PROFILE_URL, user);
    }
    deleteAdminUsers(id) {
        return this.http.delete(this.DELETE_ADMIN_URL + id);
    }
    updateActiveStatusUser(id) {
        return this.http.post(this.UPDATE_ACTIVE_STATUS_URL + id, 'Change active status');
    }
    updatePassword(newPassword) {
        return this.http.post(this.UPDATE_PASSWORD_URL + this.userId, newPassword);
    }
    getFriends(pageSize, pageNumber, sortDirection) {
        return this.http.get(this.FRIEND_LIST_URL + pageSize + '/' + pageNumber + '/' + this.userId + '?sort=' + (sortDirection == undefined ? "" : sortDirection.active + ' ' + sortDirection.direction)); //active direction
    }
    getUserQuizzes(pageSize, pageNumber, sortDirection) {
        return this.http.get(this.GET_QUIZZES_URL + pageSize + '/' + pageNumber + '/' + this.userId + '?sort=' + (sortDirection == undefined ? "" : sortDirection.active + ' ' + sortDirection.direction));
    }
    getFavoriteGames(pageSize, pageNumber) {
        return this.http.get(this.GET_FAVORITE_URL + this.userId + '/' + pageSize + '/' + pageNumber);
    }
    getAdminUsers(pageSize, pageIndex) {
        if (!pageIndex) {
            pageIndex = 0;
        }
        return this.http.get(this.ADMIN_USERS_LIST_URL + '/' + pageSize + '/' + pageIndex + '/' + (this.authService.logIn ? this.currentUserService.getCurrentUser().id : 0));
    }
    getUsersByRoleStatus(userRole, userStatus, pageSize, pageIndex) {
        return this.http.get(this.GET_USERS_BY_ROLE + userRole + '/' + userStatus + '/' + pageSize + '/' + pageIndex + '/' + (this.authService.logIn ? this.currentUserService.getCurrentUser().id : 0));
    }
    getFilteredUsers(searchText, pageSize, pageIndex) {
        return this.http.get(this.GET_FILTERED_USERS + searchText + '/' + pageSize + '/' + pageIndex);
    }
    getCategoryName(categoryId) {
        return this.http.get(this.GET_CATEGORY_NAME + categoryId);
    }
    updateImage(image) {
        const uploadImg = new FormData();
        uploadImg.append('image', image);
        return this.http.post(this.UPDATE_USER_IMAGE + this.userId, uploadImg);
    }
    getProfileImage(id) {
        return this.http.get(this.GET_USER_IMAGE_BY_USER_ID + id);
    }
    updateNotificationStatus(status) {
        return this.http.post(this.UPDATE_GET_NOTIFICATION + this.userId, status);
    }
    getUserNotificationStatus() {
        return this.http.get(this.UPDATE_GET_NOTIFICATION + this.userId);
    }
    filterFriendsRequest(userSearch, pageSize, pageIndex, sortDirection) {
        return this.http.get(this.FRIEND_LIST_URL + userSearch + '/' + pageSize + '/' + pageIndex + '/' + this.userId + '?sort=' + (sortDirection == undefined ? "" : sortDirection.active + ' ' + sortDirection.direction));
    }
    filterQuizzesRequest(userSearch, pageSize, pageIndex, sortDirection) {
        return this.http.get(this.GET_QUIZZES_URL + userSearch + '/' + pageSize + '/' + pageIndex + '/' + this.userId + '?sort=' + (sortDirection == undefined ? "" : sortDirection.active + ' ' + sortDirection.direction));
    }
    filterFavoriteRequest(userSearch, pageSize, pageIndex) {
        return this.http.get(this.GET_QUIZZES_URL + userSearch + '/' + pageSize + '/' + pageIndex + '/' + this.userId);
    }
    getPlayedGames(pageSize, pageIndex, sortDirection, userSearch) {
        console.log(userSearch);
        return this.http.get(this.GET_PLAYED_GAMES + pageSize + '/' + pageIndex + '/' + this.userId +
            '?sort=' + (sortDirection == undefined ? "" : sortDirection.active + ' ' + sortDirection.direction) + '&' +
            'search=' + (userSearch == undefined ? "" : userSearch));
    }
    getGamesResult(gameId) {
        return this.http.get(this.GET_GAME_RESULT + gameId);
    }
    postRegisterInfo(user) {
        return this.http.post(this.ADD_ADMIN_USER_URL, user);
    }
    getRejectedQuizzes(rejectedPageSize, rejectedPageIndex, rejectedSortDirection) {
        return this.http.get(this.GET_REJECTED_QUIZZES + rejectedPageSize + '/' + rejectedPageIndex + '/' + this.userId + '?sort=' + (rejectedSortDirection == undefined ? "" : rejectedSortDirection.active + ' ' + rejectedSortDirection.direction));
    }
    getRejectMessages(quizId) {
        return this.http.get(this.GET_REJECTED_MESSAGES + quizId);
    }
    getAssignedQuizzes(moderatorId) {
        return this.http.get(this.ASSIGNED_QUIZZES_URL + moderatorId);
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"])); };
ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _loginService_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/profileService/share-id.service.ts":
/*!************************************************************!*\
  !*** ./src/app/service/profileService/share-id.service.ts ***!
  \************************************************************/
/*! exports provided: ShareIdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareIdService", function() { return ShareIdService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ShareIdService {
    constructor() { }
    shareId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    shareEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
}
ShareIdService.ɵfac = function ShareIdService_Factory(t) { return new (t || ShareIdService)(); };
ShareIdService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShareIdService, factory: ShareIdService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShareIdService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/service/questionService/question.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/service/questionService/question.service.ts ***!
  \*************************************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class QuestionService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = window["configureApiBaseUrl"];
        this.UPDATE_QUESTION_IMAGE = `${this.BASE_URL}\\quiz\\question\\new_image\\`;
        this.GET_QUESTIONS = `${this.BASE_URL}\\quiz\\question\\quiz\\`;
    }
    updateImage(questionId, image) {
        const uploadImg = new FormData();
        uploadImg.append('image', image);
        return this.http.post(this.UPDATE_QUESTION_IMAGE + questionId, uploadImg);
    }
    getQuestions(id) {
        console.log('service ' + this.http.get(this.GET_QUESTIONS + id));
        return this.http.get(this.GET_QUESTIONS + id);
    }
}
QuestionService.ɵfac = function QuestionService_Factory(t) { return new (t || QuestionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
QuestionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuestionService, factory: QuestionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/quizCheckService/quiz-check.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/service/quizCheckService/quiz-check.service.ts ***!
  \****************************************************************/
/*! exports provided: QuizCheckService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizCheckService", function() { return QuizCheckService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class QuizCheckModel {
}
class QuizCheckService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = window["configureApiBaseUrl"];
        this.QUIZZES_URL = `${this.BASE_URL}\\quizzes\\quizCheck\\`;
        this.UPDATE_QUIZ_STATUS_URL = `${this.BASE_URL}\\quizzes\\update\\status\\`;
        this.ADD_MODERATOR_COMMENT_URL = `${this.BASE_URL}\\quizzes\\addComment\\`;
        this.ASSIGN_QUIZ = `${this.BASE_URL}\\quizzes\\assignment\\`;
        this.UNSIGN_QUIZ_URL = `${this.BASE_URL}\\quizzes\\unsign\\`;
        this.GET_COMMENTS_URL = `${this.BASE_URL}\\quizzes\\comments\\`;
        this.QUIZZES_INFO_URL = `${this.BASE_URL}\\quizzes\\info\\`;
    }
    getQuizById(id) {
        return this.http.get(this.QUIZZES_URL + id);
    }
    updateStatusQuiz(id, status) {
        return this.http.post(this.UPDATE_QUIZ_STATUS_URL + id, status);
    }
    addComment(comment) {
        return this.http.post(this.ADD_MODERATOR_COMMENT_URL, comment);
    }
    assignQuiz(quizId, moderatorId) {
        return this.http.post(this.ASSIGN_QUIZ + quizId, moderatorId);
    }
    unsignQuiz(currentQuizId) {
        return this.http.delete(this.UNSIGN_QUIZ_URL + currentQuizId);
    }
    getCommentHistory(currentQuizId) {
        return this.http.get(this.GET_COMMENTS_URL + currentQuizId);
    }
    getQuizInfoById(id) {
        return this.http.get(this.QUIZZES_INFO_URL + id);
    }
}
QuizCheckService.ɵfac = function QuizCheckService_Factory(t) { return new (t || QuizCheckService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
QuizCheckService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuizCheckService, factory: QuizCheckService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizCheckService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/quizService/quiz.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/quizService/quiz.service.ts ***!
  \*****************************************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _loginService_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loginService/authentication.service */ "./src/app/service/loginService/authentication.service.ts");
/* harmony import */ var _current_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../current-user.service */ "./src/app/service/current-user.service.ts");





class QuizService {
    constructor(http, authService, currentUserService) {
        this.http = http;
        this.authService = authService;
        this.currentUserService = currentUserService;
        this.BASE_URL = window["configureApiBaseUrl"];
        this.QUIZZES_URL = `${this.BASE_URL}\\quizzes`;
        this.QUIZZES_INFO_URL = `${this.BASE_URL}\\quizzes\\info\\`;
        this.GET_QUIZ_BY_CATEGORY = `${this.QUIZZES_URL}\\categories\\`;
        this.GET_FILTERED_QUIZ = `${this.QUIZZES_URL}\\filter\\`;
        this.MARK_QUIZ_AS_FAVORITE = `${this.QUIZZES_URL}\\mark\\`;
        this.UNMARK_QUIZ_AS_FAVORITE = `${this.QUIZZES_URL}\\unmark\\`;
        this.GET_RECOMMENDED_QUIZZES = `${this.QUIZZES_URL}\\recommendations\\`;
        this.GET_POPULAR_QUIZZES = `${this.QUIZZES_URL}\\popular\\`;
        this.UNSIGN_ALL_MODERATOR_QUIZ_URL = `${this.QUIZZES_URL}\\unsignAll\\`;
    }
    getQuizzes(pageSize, pageIndex) {
        if (!pageIndex) {
            pageIndex = 0;
        }
        return this.http.get(this.QUIZZES_URL + '/' + pageSize + '/' + pageIndex + '/' + (this.authService.logIn ? this.currentUserService.getCurrentUser().id : 0));
    }
    getQuizById(id) {
        return this.http.get(this.QUIZZES_URL + id);
    }
    getQuizInfoById(id) {
        return this.http.get(this.QUIZZES_INFO_URL + id);
    }
    getQuizzesByCategory(categoryId, pageSize, pageIndex) {
        return this.http.get(this.GET_QUIZ_BY_CATEGORY + categoryId + '/' + pageSize + '/' + pageIndex + '/' + (this.authService.logIn ? this.currentUserService.getCurrentUser().id : 0));
    }
    getFilteredQuizzes(searcText, pageSize, pageIndex) {
        return this.http.get(this.GET_FILTERED_QUIZ + searcText + '/' + pageSize + '/' + pageIndex + '/' + (this.authService.logIn ? this.currentUserService.getCurrentUser().id : 0));
    }
    markQuizAsFavorite(quizId, userId) {
        return this.http.post(this.MARK_QUIZ_AS_FAVORITE + quizId + '/' + userId, "");
    }
    unmarkQuizAsFavorite(quizId, userId) {
        return this.http.post(this.UNMARK_QUIZ_AS_FAVORITE + quizId + '/' + userId, "");
    }
    getRecommendedQuizzes(limit) {
        return this.http.get(this.GET_RECOMMENDED_QUIZZES + this.currentUserService.getCurrentUser().id + '?limit=' + limit);
    }
    RecommendationForAnonimus(limit) {
        return this.http.get(this.GET_POPULAR_QUIZZES + limit);
    }
    unsignAllQuiz(moderatorId) {
        return this.http.delete(this.UNSIGN_ALL_MODERATOR_QUIZ_URL + moderatorId);
    }
}
QuizService.ɵfac = function QuizService_Factory(t) { return new (t || QuizService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"])); };
QuizService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuizService, factory: QuizService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _loginService_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/ratingService/rating.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/service/ratingService/rating.service.ts ***!
  \*********************************************************/
/*! exports provided: RatingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingService", function() { return RatingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class RatingService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = window['configureApiBaseUrl'];
        this.GET_RATING = `${this.BASE_URL}\\api\\users\\rating`;
        this.GET_RATING_IN_RANGE = `${this.BASE_URL}\\api\\users\\rating\\range\\`;
    }
    getRating(from, to) {
        return this.http.get(this.GET_RATING + "?from=" + from + "&to=" + to);
    }
    getRatingRange(userId, range) {
        return this.http.get(this.GET_RATING_IN_RANGE + userId + "?range=" + range);
    }
}
RatingService.ɵfac = function RatingService_Factory(t) { return new (t || RatingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RatingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RatingService, factory: RatingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/registrationService/registration.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/service/registrationService/registration.service.ts ***!
  \*********************************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class RegistrationService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = window['configureApiBaseUrl'];
        this.REGISTRATION_URL = `${this.BASE_URL}\\auth\\register`;
    }
    postRegisterInfo(user) {
        return this.http.post(this.REGISTRATION_URL, user);
    }
}
RegistrationService.ɵfac = function RegistrationService_Factory(t) { return new (t || RegistrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RegistrationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RegistrationService, factory: RegistrationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/set-password/set-password.component.ts":
/*!********************************************************!*\
  !*** ./src/app/set-password/set-password.component.ts ***!
  \********************************************************/
/*! exports provided: SetPasswordComponent, MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPasswordComponent", function() { return SetPasswordComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/loginService/authentication.service */ "./src/app/service/loginService/authentication.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");













function SetPasswordComponent_div_0_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is require");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SetPasswordComponent_div_0_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Must contain at least 8 or more characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SetPasswordComponent_div_0_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SetPasswordComponent_div_0_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords must match");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function SetPasswordComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SetPasswordComponent_div_0_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.changingPassFormValidation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SetPasswordComponent_div_0_mat_error_11_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SetPasswordComponent_div_0_mat_error_12_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Confirm password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SetPasswordComponent_div_0_mat_error_18_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SetPasswordComponent_div_0_mat_error_19_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Set password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.changePasswordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r0.submitted && ctx_r0.f.password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.password.errors == null ? null : ctx_r0.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.password.errors == null ? null : ctx_r0.f.password.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r0.submitted && ctx_r0.f.confirmPassword.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.confirmPassword.errors == null ? null : ctx_r0.f.confirmPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.confirmPassword.errors == null ? null : ctx_r0.f.confirmPassword.errors.mustMatch);
} }
class SetPasswordComponent {
    constructor(formBuilder, router, authService, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.route = route;
        this.submitted = false;
    }
    ngOnInit() {
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(params => params.getAll('code')))
            .subscribe(data => this.code = data);
        this.changePasswordForm = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
        if (localStorage.getItem('currentUser') !== null) {
            this.logout();
        }
        this.getUser();
    }
    get f() { return this.changePasswordForm.controls; }
    logout() {
        localStorage.removeItem('currentUser');
        window.location.replace('/activate/' + this.code);
    }
    changingPassFormValidation() {
        this.submitted = true;
        if (this.changePasswordForm.invalid) {
            return;
        }
        this.newPassword = this.changePasswordForm.value.password;
        this.setPassword();
        window.location.replace('/login');
    }
    setPassword() {
        this.authService.setPassword(this.user.id, this.newPassword).subscribe((resp) => {
            alert('Password setted');
        }, error => {
            alert('Something wrong while save password');
        });
    }
    getUser() {
        this.authService.getUserbyCode(this.code).subscribe((resp) => {
            this.user = resp;
        }, error => {
            console.log(error);
            alert('Something wrong with downloading user');
        });
    }
}
SetPasswordComponent.ɵfac = function SetPasswordComponent_Factory(t) { return new (t || SetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
SetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SetPasswordComponent, selectors: [["app-set-password"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["fxLayout", "row", 1, ""], ["fxFlex", "30"], ["fxFlex", "center center"], [3, "formGroup", "ngSubmit"], [1, "full-width"], ["type", "password", "matInput", "", "formControlName", "password", "placeholder", "Password", "name", "password", "required", "", 3, "ngClass"], ["type", "password", "matInput", "", "placeholder", "Password", "formControlName", "confirmPassword", "name", "confirmPassword", 3, "ngClass"], ["mat-raised-button", "", "type", "submit"]], template: function SetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SetPasswordComponent_div_0_Template, 24, 12, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldC1wYXNzd29yZC9zZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-set-password',
                templateUrl: './set-password.component.html',
                styleUrls: ['./set-password.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _service_loginService_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dima\Desktop\quiz-ng-app-heroku\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map