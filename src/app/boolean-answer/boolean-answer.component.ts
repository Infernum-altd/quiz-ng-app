import { Observable, of } from 'rxjs';
import { AnswerService } from './../service/answerService/answer.service';
import { AnswerComponent } from './../answer/answer.component';
import { Component, OnInit } from '@angular/core';
import { Answer } from '../models/answer.model';
import { map, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-boolean-answer',
  templateUrl: './boolean-answer.component.html',
  styleUrls: ['./boolean-answer.component.css']
})
export class BooleanAnswerComponent implements OnInit, AnswerComponent {
  submitted: boolean = false;
  answer: Answer[] = [];
  checkBox: boolean = false;

  questionId: number;

  constructor(private answerService: AnswerService) { }

  ngOnInit(): void {
    let result: Answer = {
      id: null,
      questionId: 0,
      text: "",
      correct: true,
      nextAnswerId: null
    };
    this.answer.push(result);
  }

  isValid(): boolean {
    return true
  }

  save(): Observable<any> {
    this.submitted = true;
    this.getData();
    return this.answerService.postAnswer(this.answer[0]);
  }

  getData(): void {
    this.answer[0].questionId = this.questionId;
    this.answer[0].text = this.checkBox ? "true" : "false";
  }
}
