import { Validators } from '@angular/forms';
import { QuestionService } from './../service/questionService/question.service';
import { Router } from '@angular/router';
import { Question, QuestionType } from './../models/question.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questionForm: FormGroup;
  submitted = false;
  questionTypes = Object.keys(QuestionType)

  model: Question = {
    id: null,
    type: QuestionType.OPTION,
    image: null,
    text: '',
    active: true
  };

  constructor(private router: Router,
    public service: QuestionService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    Object
    this.questionForm = this.formBuilder.group({
      text: [''],
      type:[''],
      image:[null]
    });
  }

  isValid(): boolean {
    return this.questionForm.valid
  }

  add() {
    this.submitted = true;

    if (this.questionForm.invalid) {
      return;
    }

    let input: Question = JSON.parse(JSON.stringify(this.questionForm.value));
    //TODO: put data from form to model
    this.save();
  }

  onOptionSelected(value: String) {

  }

  save() {
    //TODO: add service to send question
  }

}
