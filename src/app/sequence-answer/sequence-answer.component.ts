import { AnswerComponent } from './../answer/answer.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Answer } from '../models/answer.model';

@Component({
  selector: 'app-sequence-answer',
  templateUrl: './sequence-answer.component.html',
  styleUrls: ['./sequence-answer.component.css']
})
export class SequenceAnswerComponent implements OnInit, AnswerComponent {

  constructor() { }
  answerForm: FormGroup;
  submitted: boolean;
  model: Answer;

  ngOnInit(): void {
  }

}
