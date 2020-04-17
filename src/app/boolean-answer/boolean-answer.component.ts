import { AnswerComponent } from './../answer/answer.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Answer } from '../models/answer.model';

@Component({
  selector: 'app-boolean-answer',
  templateUrl: './boolean-answer.component.html',
  styleUrls: ['./boolean-answer.component.css']
})
export class BooleanAnswerComponent implements OnInit, AnswerComponent {

  constructor() { }
  answerForm: FormGroup;
  submitted: boolean;
  model: Answer;

  ngOnInit(): void {
  }

}
