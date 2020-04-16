import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import {Router, RouterModule, Routes} from "@angular/router";
import { CloseComponent } from './close/close.component';
import {AuthGuardService} from "./_helpers/auth-guard.service";
import { QuestionComponent } from './question/question.component';
import { OptionalAnswerComponent } from './optional-answer/optional-answer.component';
import { BooleanAnswerComponent } from './boolean-answer/boolean-answer.component';
import { StringAnswerComponent } from './string-answer/string-answer.component';
import { SequenceAnswerComponent } from './sequence-answer/sequence-answer.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';

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
    path: 'question',
    component: QuestionComponent
  },
  {
    path:'close', canActivate:[AuthGuardService],
    component:CloseComponent
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
    CloseComponent,
    QuestionComponent,
    OptionalAnswerComponent,
    BooleanAnswerComponent,
    StringAnswerComponent,
    SequenceAnswerComponent,
    ImageUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
