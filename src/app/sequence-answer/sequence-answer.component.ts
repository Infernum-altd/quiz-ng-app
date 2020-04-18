import { ImageUploadComponent } from './../image-upload/image-upload.component';
import { Validators, FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { AnswerComponent, SequenceValidator } from './../answer/answer.component';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Answer } from '../models/answer.model';

@Component({
  selector: 'app-sequence-answer',
  templateUrl: './sequence-answer.component.html',
  styleUrls: ['./sequence-answer.component.css']
})
export class SequenceAnswerComponent implements OnInit, AnswerComponent {
  @ViewChildren(ImageUploadComponent) images!: QueryList<ImageUploadComponent>;

  answerForm: FormGroup;
  items: FormArray;
  answer: Answer[] = [];
  maxAnswer = 4;
  minRequired = 2;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.answerForm = new FormGroup({
      items: this.formBuilder.array([])
    });
    this.items = this.answerForm.get('items') as FormArray;
    for (var _i = 0; _i < this.maxAnswer; _i++) {
      this.answer.push({
        id: null,
        question: null,
        text: '',
        image: null,
        isCorrect: true,
        answer: null
      });
      let formControl = new FormControl(this.answer[_i].text, []);
      if (_i < this.minRequired) {
        formControl.setValidators(Validators.required);
      }
      this.items = this.answerForm.get('items') as FormArray;
      this.items.push(
        this.formBuilder.group({
          text: formControl
        })
      )
    }
    this.answerForm.get('items').setValidators([SequenceValidator()]);
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

  onClick() {
    alert(this.isValid())
    //alert(this.getResult()[0].text)
  }
}
