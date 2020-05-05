import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Quiz} from '../../models/quiz';
import {StatusType} from '../../models/quiz.model';
import {User} from "../../models/user";




@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private BASE_URL = window['configureApiBaseUrl'];
  private GET_QUIZ_URL = `${this.BASE_URL}\\quizzes\\`;

  constructor(private http: HttpClient) { }

  getQuizzes(): Observable<any> {
    return this.http.get<Quiz[]>(this.GET_QUIZ_URL);
  }

  getQuizById(quizId: string): Observable<Quiz>{
    console.log('service ' + quizId);
    return this.http.get<Quiz>(this.GET_QUIZ_URL + quizId);
  }

}

