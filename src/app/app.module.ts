import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, } from '@angular/common/http';
import { QuizComponent } from './quiz/quiz.component';

import { ProfileComponent } from './profile/profile.component';
import { ProfileNavigationComponent } from './profile/profile-navigation/profile-navigation.component';
import { LeftBarComponent } from './profile/left-bar/left-bar.component';
import { UserInformationComponent } from './profile/user-information/user-information.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { FriendsComponent } from './profile/friends/friends.component';
import { MyQuizzesComponent } from './profile/my-quizzes/my-quizzes.component';
import { FavoriteComponent } from './profile/favorite/favorite.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./_helpers/auth-guard.service";
import { QuestionComponent } from './question/question.component';
import { OptionalAnswerComponent } from './optional-answer/optional-answer.component';
import { BooleanAnswerComponent } from './boolean-answer/boolean-answer.component';
import { StringAnswerComponent } from './string-answer/string-answer.component';
import { SequenceAnswerComponent } from './sequence-answer/sequence-answer.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { AnswerComponent } from './answer/answer.component';
import { NewQuizComponent } from './new-quiz/new-quiz.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

import { FlexLayoutModule } from "@angular/flex-layout";

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
    path: 'quizzes/:id',
    component: QuizComponent
  },
  {
    path: 'question',
    component: QuestionComponent
  },
  {
    path: 'new_quiz',
    component: NewQuizComponent
  },
  {
    path: 'add_questions',
    component: AddQuestionsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
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
    QuizComponent,
    QuestionComponent,
    OptionalAnswerComponent,
    BooleanAnswerComponent,
    StringAnswerComponent,
    SequenceAnswerComponent,
    ImageUploadComponent,
    AnswerComponent,
    NewQuizComponent,
    AddQuestionsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [OptionalAnswerComponent, BooleanAnswerComponent, StringAnswerComponent, SequenceAnswerComponent],
})
export class AppModule {
}
