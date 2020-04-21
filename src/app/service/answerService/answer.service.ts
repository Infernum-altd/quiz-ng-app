import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Answer } from 'src/app/models/answer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private BASE_URL = window["configureApiBaseUrl"];
  private NEW_ANSWER_URL = `${this.BASE_URL}\\quiz\\answer\\new`;
  private UPDATE_ANSWER_URL = `${this.BASE_URL}\\quiz\\answer\\update`;

  constructor(private http: HttpClient) { }

  postAnswer(answer: Answer): Observable<Answer> {
    return this.http.post<Answer>(this.NEW_ANSWER_URL, answer);
  }

  updateAnswer(answer: Answer) {
    this.http.post<Answer>(this.UPDATE_ANSWER_URL, answer);
  }
}
