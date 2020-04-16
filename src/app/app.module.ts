import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import {Router, RouterModule, Routes} from "@angular/router";
import {AuthGuardService} from "./_helpers/auth-guard.service";
import { ProfileComponent } from './profile/profile.component';
import { ProfileNavigationComponent } from './profile/profile-navigation/profile-navigation.component';
import { LeftBarComponent } from './profile/left-bar/left-bar.component';
import { UserInformationComponent } from './profile/user-information/user-information.component';
import {JwtInterceptor} from "./_helpers/jwt.interceptor";


const appRoutes: Routes = [
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'profile', canActivate:[AuthGuardService],
    component: ProfileComponent
  },
  {
    path: 'userinfo', canActivate:[AuthGuardService],
    component: UserInformationComponent
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
export class AppModule { }
