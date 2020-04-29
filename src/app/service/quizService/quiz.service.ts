import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Quiz} from "../../models/quiz.model";
import {PageEvent} from "@angular/material/paginator";



@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private BASE_URL = window["configureApiBaseUrl"];
  private QUIZZES_URL = `${this.BASE_URL}\\quizzes`;
  private GET_QUIZ_BY_CATEGORY = `${this.QUIZZES_URL}\\categories\\`;

  constructor(private http: HttpClient) { }

  getQuizzes(pageSize: number, pageIndex: number): Observable<any> {
    if (!pageIndex){ pageIndex = 0;}
    return this.http.get<Quiz[]>(this.QUIZZES_URL + '/' + pageSize + '/' + pageIndex);
  }

  getQuizById(id: number){
    return this.http.get(`${this.QUIZZES_URL}\\${id}`);
  }

  getQuizzesByCategory(categoryId: number, pageSize: number, pageIndex: number): Observable<any> {
    return this.http.get(this.GET_QUIZ_BY_CATEGORY + categoryId + '/' + pageSize + '/' + pageIndex);
  }


}
