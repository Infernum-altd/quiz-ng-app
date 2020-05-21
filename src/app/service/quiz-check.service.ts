import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

class QuizCheckModel {
}

@Injectable({
  providedIn: 'root'
})
export class QuizCheckService {
  private BASE_URL = window["configureApiBaseUrl"];
  private QUIZZES_URL = `${this.BASE_URL}\\quizzes\\quizCheck\\`;
  private UPDATE_ACTIVE_STATUS_URL = `${this.BASE_URL}\\quizzes\\updateActive\\`;
  private UPDATE_MODERATOR_COMMENT_URL = `${this.BASE_URL}\\quizzes\\updateComment\\`;

  constructor(private http: HttpClient) {
  }

  getQuizById(id: string): Observable<QuizCheckModel>{
    return this.http.get<QuizCheckModel>(this.QUIZZES_URL + id);
  }

  updateActiveStatusQuiz(id): Observable<any>{
    return this.http.post(this.UPDATE_ACTIVE_STATUS_URL + id, 'ACTIVE');
  }
  updateCommentQuiz(id, comment: string): Observable<any>{
    console.log("comment " + comment.toString() );
    return this.http.post(this.UPDATE_MODERATOR_COMMENT_URL + id, JSON.stringify(comment));
  }
}
