import { AnswerService } from './../service/answerService/answer.service';
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

  send: boolean;
  questionId: number;

  submitted: boolean = false;
  answerForm: FormGroup;
  items: FormArray;
  answer: Answer[] = [];
  maxAnswer = 4;
  minRequired = 2;

  constructor(private formBuilder: FormBuilder,
    private answerService: AnswerService) {
    this.answerForm = new FormGroup({
      items: this.formBuilder.array([])
    });
    for (var _i = 0; _i < this.maxAnswer; _i++) {
      this.answer.push({
        id: null,
        questionId: 0,
        text: "",
        correct: false,
        nextAnswerId: null
      });
      let correctControl = new FormControl(this.answer[_i].correct, []);
      let textControl = new FormControl(this.answer[_i].text, []);
      if (_i < this.minRequired) {
        textControl.setValidators([Validators.required, Validators.maxLength(30)]);
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

  save(): void {
    this.submitted = true;
    if (this.isValid()) {
      let items = this.answerForm.get('items') as FormArray;
      let flag = true;
      for (var i = 0; i < this.answer.length; i++) {
        let current = items.at(i);
        this.answer[i].correct = current.get('isCorrect').value;
        this.answer[i].text = current.get('text').value;

        console.log(this.answer[i]);

        if (this.answer[i].text === "" || this.answer[i].text == null)
          break;

        this.answer[i].questionId = this.questionId;

        this.answerService.postAnswer(this.answer[i]).subscribe(
          res => {
            console.log('Option answer added');
            flag = true;
          },
          err => {
            alert(err.error['message']);
            flag = false;
          }
        )
      }
      this.send = flag;
    }
  }
}
