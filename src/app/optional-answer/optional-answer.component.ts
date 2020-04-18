import { AnswerComponent, SequenceValidator } from './../answer/answer.component';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { FormGroup, FormArray, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Answer } from '../models/answer.model';
import { ImageUploadComponent } from '../image-upload/image-upload.component';

@Component({
  selector: 'app-optional-answer',
  templateUrl: './optional-answer.component.html',
  styleUrls: ['./optional-answer.component.css']
})
export class OptionalAnswerComponent implements OnInit, AnswerComponent {
  @ViewChildren(ImageUploadComponent) images!: QueryList<ImageUploadComponent>;

  submitted: boolean = false;
  answerForm: FormGroup;
  items: FormArray;
  answer: Answer[] = [];
  maxAnswer = 4;
  minRequired = 2;

  constructor(private formBuilder: FormBuilder) {
    this.answerForm = new FormGroup({
      items: this.formBuilder.array([])
    });
    for (var _i = 0; _i < this.maxAnswer; _i++) {
      this.answer.push({
        id: null,
        question: null,
        text: '',
        image: null,
        isCorrect: false,
        answer: null
      });
      let correctControl = new FormControl(this.answer[_i].isCorrect, []);
      let textControl = new FormControl(this.answer[_i].text, []);
      if (_i < this.minRequired) {
        textControl.setValidators(Validators.required);
      }
      this.items = this.answerForm.get('items') as FormArray;
      this.items.push(
        this.formBuilder.group({
          isCorrect: correctControl,
          text: textControl
        })
      )
    }
    this.answerForm.get('items').setValidators([SequenceValidator()]);
  }

  ngOnInit(): void {
  }

  isValid(): boolean {
    this.items.setValidators(SequenceValidator());
    return this.answerForm.valid;
  }

  getResult(): Answer[] {
    let answerImages = this.images.toArray();
    for (var _i in answerImages) {
      let file = answerImages[_i].selectedFile.file;
      if (file != null) {
        this.answer[_i].image = file;
      }
    }
    return this.answer;
  }
}
