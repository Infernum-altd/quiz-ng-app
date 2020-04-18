import { Answer } from './../models/answer.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ValidatorFn, ValidationErrors, FormArray } from '@angular/forms';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  answer: Answer[]

  constructor() { }

  ngOnInit() {
  }

  isValid(): boolean {
    return true
  }

  getResult(): Answer[] {
    return this.answer;
  }

}

export function SequenceValidator(): ValidatorFn {
  return (formArray: FormArray): ValidationErrors => {
    for (var _i = 1; _i < formArray.controls.length; _i++) {
      let previous = formArray.controls[_i - 1];
      let current = formArray.controls[_i];

      if (current.get('text').value !== '' && previous.get('text').value === '') {
        previous.setErrors({ mustExist: true });
        return;
      } else {
        previous.setErrors(null);
      }
    }
    return;
  }
}