import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {NavigationComponent} from './navigation/navigation.component';
import {Router, RouterModule, Routes} from "@angular/router";
import {AuthGuardService} from "./_helpers/auth-guard.service";
import {ProfileComponent} from './profile/profile.component';
import {ProfileNavigationComponent} from './profile/profile-navigation/profile-navigation.component';
import {LeftBarComponent} from './profile/left-bar/left-bar.component';
import {UserInformationComponent} from './profile/user-information/user-information.component';
import {JwtInterceptor} from "./_helpers/jwt.interceptor";
import {FriendsComponent} from './profile/friends/friends.component';
import {MyQuizzesComponent} from './profile/my-quizzes/my-quizzes.component';
import {FavoriteComponent} from './profile/favorite/favorite.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';

const profileRoutes: Routes = [
  {
    path: 'profinfo',
    component: UserInformationComponent,
    outlet: 'profilenav'
  },
  {
    path: 'friends',
    component: FriendsComponent,
    outlet: 'profilenav'
  },
  {
    path: 'mygames',
    component: MyQuizzesComponent,
    outlet: 'profilenav'
  },
  {
    path: 'favorite',
    component: FavoriteComponent,
    outlet: 'profilenav'
  },
  {
    path: 'changePass',
    component: ChangePasswordComponent,
    outlet: 'profilenav'
  }
];

const appRoutes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile/:id', canActivate: [AuthGuardService],
    component: ProfileComponent,
    children: profileRoutes,
  },
  {
    path: 'friends', canActivate: [AuthGuardService],
    component: FriendsComponent
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    NavigationComponent,
    ProfileComponent,
    ProfileNavigationComponent,
    LeftBarComponent,
    UserInformationComponent,
    FriendsComponent,
    MyQuizzesComponent,
    FavoriteComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
