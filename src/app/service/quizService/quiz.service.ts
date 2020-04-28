import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Quiz} from "../../models/quiz.model";



@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private BASE_URL = window["configureApiBaseUrl"];
  private QUIZZES_URL = `${this.BASE_URL}\\quizzes`;
  private GET_QUIZ_BY_CATEGORY = `${this.QUIZZES_URL}\\categories\\`;

  constructor(private http: HttpClient) { }

  getQuizzes(): Observable<any> {
    return this.http.get<Quiz[]>(this.QUIZZES_URL);
  }

  getQuizById(id: number){
    return this.http.get(`${this.QUIZZES_URL}\\${id}`);
  }

  getQuizzesByCategory(categoryId: number): Observable<any> {
    return this.http.get(this.GET_QUIZ_BY_CATEGORY + categoryId);
  }


}
