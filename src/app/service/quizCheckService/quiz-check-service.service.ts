import { Injectable } from '@angular/core';
import {Quiz} from "../../models/quiz.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/user";
import {QuizCheckModel} from "../../models/quiz-check.model";


@Injectable({
  providedIn: 'root'
})
export class QuizCheckServiceService {

  private BASE_URL = window["configureApiBaseUrl"];
  private QUIZZES_URL = `${this.BASE_URL}\\quizzes\\quizCheck\\`;
  private UPDATE_ACTIVE_STATUS_URL = `${this.BASE_URL}\\quizzes\\updateActive\\`;
  private UPDATE_MODERATOR_COMMENT_URL = `${this.BASE_URL}\\quizzes\\updateComment\\`;
  private ASSIGN_QUIZ = `${this.BASE_URL}\\quizzes\\assignment\\`;
  private UNSIGN_QUIZ_URL = `${this.BASE_URL}\\quizzes\\unsign\\`;

  constructor(private http: HttpClient) {
  }

  getQuizById(id: string): Observable<QuizCheckModel>{
    return this.http.get<QuizCheckModel>(this.QUIZZES_URL + id);
  }

  updateActiveStatusQuiz(id): Observable<any>{
    return this.http.post(this.UPDATE_ACTIVE_STATUS_URL + id, 'ACTIVE');
  }
  updateCommentQuiz(id, comment: string): Observable<any>{
    return this.http.post(this.UPDATE_MODERATOR_COMMENT_URL + id, comment);
  }
  assignQuiz(quizId, moderatorId): Observable<any> {
    return this.http.post(this.ASSIGN_QUIZ + quizId, moderatorId);
  }
  unsignQuiz(currentQuizId: number) {
    return this.http.delete(this.UNSIGN_QUIZ_URL + currentQuizId);
  }
}
