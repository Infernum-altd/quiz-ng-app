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
  private GET_FILTERED_QUIZ = `${this.QUIZZES_URL}\\filter\\`;
  private MARK_QUIZ_AS_FAVORITE = `${this.QUIZZES_URL}\\mark\\`;
  private UNMARK_QUIZ_AS_FAVORITE = `${this.QUIZZES_URL}\\unmark\\`;

  constructor(private http: HttpClient) { }

  getQuizzes(pageSize: number, pageIndex: number, userIndex: string): Observable<any> {
    if (!pageIndex){ pageIndex = 0;}
    return this.http.get<Quiz[]>(this.QUIZZES_URL + '/' + pageSize + '/' + pageIndex + '/' + userIndex);
  }

  getQuizById(id: number){
    return this.http.get(`${this.QUIZZES_URL}\\${id}`);
  }

  getQuizzesByCategory(categoryId: number, pageSize: number, pageIndex: number): Observable<any> {
    return this.http.get(this.GET_QUIZ_BY_CATEGORY + categoryId + '/' + pageSize + '/' + pageIndex);
  }

  getFilteredQuizzes(searcText: string, pageSize: number, pageIndex: number): Observable<any> {
    return this.http.get(this.GET_FILTERED_QUIZ + searcText + '/' + pageSize + '/' + pageIndex)
  }

  markQuizAsFavorite(quizId: string, userId: string): Observable<any>{
    return this.http.post(this.MARK_QUIZ_AS_FAVORITE + quizId + '/' + userId, "");
  }

  unmarkQuizAsFavorite(quizId: string, userId: string): Observable<any> {
    return this.http.post(this.UNMARK_QUIZ_AS_FAVORITE + quizId + '/' + userId, "");
  }

}
