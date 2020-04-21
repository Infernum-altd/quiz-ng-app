import { AnswerService } from './../service/answerService/answer.service';
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

  send: boolean;
  questionId: number;

  submitted: boolean = false;
  answerForm: FormGroup;
  items: FormArray;
  answer: Answer[] = [];
  maxAnswer = 4;
  minRequired = 2;

  constructor(private formBuilder: FormBuilder,
    private answerService: AnswerService) { }

  ngOnInit(): void {
    this.answerForm = new FormGroup({
      items: this.formBuilder.array([])
    });
    this.items = this.answerForm.get('items') as FormArray;
    for (var _i = 0; _i < this.maxAnswer; _i++) {
      this.answer.push({
        id: null,
        questionId: 0,
        text: "",
        correct: true,
        nextAnswerId: null
      });
      let formControl = new FormControl(this.answer[_i].text, []);
      if (_i < this.minRequired) {
        formControl.setValidators([Validators.required, Validators.maxLength(30)]);
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

  save(): void {
    this.submitted = true;
    if (this.isValid()) {
      let flag = true;
      for (var i = 0; i < this.answer.length; i++) {

        this.answer[i].text = (this.answerForm.get('items') as FormArray).at(i).get("text").value;

        console.log(this.answer[i]);

        if (this.answer[i].text === "" || this.answer[i].text == null)
          break;

        this.answer[i].questionId = this.questionId;

        this.answerService.postAnswer(this.answer[i]).subscribe(
          res => {
            console.log('Sequence answer added');
            this.answer[i].id = res.id;
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

  update(): void {
    for (var i = 0; i < this.answer.length - 1; i++) {
      this.answer[i].nextAnswerId = this.answer[i + 1].id;
      console.log(this.answer[i]);
      this.answerService.updateAnswer(this.answer[i]);
    }
  }
}
