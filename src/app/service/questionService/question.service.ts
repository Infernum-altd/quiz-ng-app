import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from 'src/app/models/question.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private BASE_URL = window["configureApiBaseUrl"];
  private NEW_QUESTION_URL = `${this.BASE_URL}\\quiz\\question\\new`;

  constructor(private http: HttpClient) { }

  postQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(this.NEW_QUESTION_URL, question);
  }
}
