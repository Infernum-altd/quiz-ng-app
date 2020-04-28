import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from "@angular/router";
import { CloseComponent } from './close/close.component';
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
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LayoutModule } from '@angular/cdk/layout';

import { FlexLayoutModule } from "@angular/flex-layout";
import { from } from 'rxjs';
import { SubmittedQuizComponent } from './submitted-quiz/submitted-quiz.component';

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
    path: 'submitted_quiz',
    component: SubmittedQuizComponent
  },
  {
    path: 'close', canActivate: [AuthGuardService],
    component: CloseComponent
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
    AnswerComponent,
    NewQuizComponent,
    AddQuestionsComponent,
    SubmittedQuizComponent
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
    MatSelectModule,
    MatFormFieldModule,
    MatChipsModule,
    MatExpansionModule,
    MatDividerModule,
    MatCheckboxModule,
    LayoutModule,
    FlexLayoutModule
  ],
  entryComponents: [OptionalAnswerComponent, BooleanAnswerComponent, StringAnswerComponent, SequenceAnswerComponent],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
