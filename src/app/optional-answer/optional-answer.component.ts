import { AnswerComponent } from './../answer/answer.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Answer } from '../models/answer.model';

@Component({
  selector: 'app-optional-answer',
  templateUrl: './optional-answer.component.html',
  styleUrls: ['./optional-answer.component.css']
})
export class OptionalAnswerComponent implements OnInit, AnswerComponent {
  answerForm: FormGroup;
  submitted: boolean;
  model: Answer;

  constructor() { }

  ngOnInit(): void {
  }

}
