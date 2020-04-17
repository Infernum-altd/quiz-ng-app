import { AnswerComponent } from './../answer/answer.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Answer } from '../models/answer.model';

@Component({
  selector: 'app-string-answer',
  templateUrl: './string-answer.component.html',
  styleUrls: ['./string-answer.component.css']
})
export class StringAnswerComponent implements OnInit, AnswerComponent {

  constructor() { }
  answerForm: FormGroup;
  submitted: boolean;
  model: Answer;

  ngOnInit(): void {
  }

}
