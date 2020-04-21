import { Validators } from '@angular/forms';
import { AnswerComponent } from './../answer/answer.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Answer } from '../models/answer.model';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-string-answer',
  templateUrl: './string-answer.component.html',
  styleUrls: ['./string-answer.component.css']
})
export class StringAnswerComponent implements OnInit, AnswerComponent {
  submitted: boolean = false;
  answer: Answer[] = [];
  text: FormControl;

  constructor() { }

  ngOnInit(): void {
    let result: Answer = {
      id: null,
      question: null,
      text: '',
      image: null,
      isCorrect: true,
      answer: null
    };
    this.answer.push(result);

    this.text = new FormControl(
      this.answer[0].text, Validators.required
    );
  }

  isValid(): boolean {
    return this.text.valid;
  }
  getResult(): Answer[] {
    return this.answer;
  }

}
