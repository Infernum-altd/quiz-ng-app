import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

import {Quiz} from '../../models/pending-quizzes.model';
import {StatusType} from "../../models/quiz.model";





@Injectable({
  providedIn: 'root'
})
export class PendingQuizzesService {

  private BASE_URL = window['configureApiBaseUrl'];
  private PENDING_QUIZZES_URL = `${this.BASE_URL}\\quizzes\\status\\`;

  constructor(private http: HttpClient) { }

  getPendingQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.PENDING_QUIZZES_URL + StatusType.PENDING);
  }

}
