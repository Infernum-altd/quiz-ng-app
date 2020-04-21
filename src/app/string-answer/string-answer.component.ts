import { Validators } from '@angular/forms';
import { AnswerComponent } from './../answer/answer.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Answer } from '../models/answer.model';
import { Question } from '../models/question.model';
import { AnswerService } from '../service/answerService/answer.service';

@Component({
  selector: 'app-string-answer',
  templateUrl: './string-answer.component.html',
  styleUrls: ['./string-answer.component.css']
})
export class StringAnswerComponent implements OnInit, AnswerComponent {
  submitted: boolean = false;
  answer: Answer[] = [];
  text: FormControl;

  constructor(private answerService: AnswerService) { }
  send: boolean;
  questionId: number;

  ngOnInit(): void {
    let result: Answer = {
      id: null,
      questionId: 0,
      text: "",
      correct: true,
      nextAnswerId: null
    };
    this.answer.push(result);

    this.text = new FormControl(
      this.answer[0].text, Validators.required
    );
  }

  isValid(): boolean {
    return this.text.valid;
  }

  save(): void {
    this.submitted = true;
    if (this.isValid()) {
      this.answer[0].questionId = this.questionId;
      this.answer[0].text = this.text.value;
      this.answerService.postAnswer(this.answer[0]).subscribe(
        res => {
          console.log('String answer added');
          this.send = true;
        },
        err => {
          alert(err.error['message']);
        }
      )
    }
  }


}
