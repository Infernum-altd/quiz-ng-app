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
  }

  isValid(): boolean {
    return true
  }

  getResult(): Answer[] {
    return this.answer;
  }
}
