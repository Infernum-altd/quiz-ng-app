import { AnswerService } from './../service/answerService/answer.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { AnswerComponent } from './../answer/answer.component';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Answer } from '../models/answer.model';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-boolean-answer',
  templateUrl: './boolean-answer.component.html',
  styleUrls: ['./boolean-answer.component.css']
})
export class BooleanAnswerComponent implements OnInit, AnswerComponent {
  submitted: boolean = false;
  answer: Answer[] = [];
  checkBox: boolean = false;

  constructor(private answerService: AnswerService) { }

  questionId: number;
  send: boolean;

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

  save(): void {
    this.submitted = true;
    if (this.isValid()) {
      this.answer[0].questionId = this.questionId;
      this.answer[0].text = this.checkBox ? "true" : "false";
      this.answerService.postAnswer(this.answer[0]).subscribe(
        res => {
          console.log('Boolean answer added');
          this.send = true;
        },
        err => {
          alert(err.error['message']);
        }
      )
    }
  }
}
