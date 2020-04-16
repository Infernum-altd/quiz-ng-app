import { Answer } from './../models/answer.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  answerForm: FormGroup;
  submitted = false;

  model: Answer = {
    id: null,
    question: null,
    text: '',
    image: null,
    isCorrect: false,
    answer: null
  };

  constructor() { }

  ngOnInit() {
  }

}
