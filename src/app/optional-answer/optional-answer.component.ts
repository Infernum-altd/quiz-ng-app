import { map, mergeMap, concatMap, toArray } from 'rxjs/operators';
import { AnswerService } from './../service/answerService/answer.service';
import { AnswerComponent, SequenceValidator } from './../answer/answer.component';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { FormGroup, FormArray, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Answer } from '../models/answer.model';
import { ImageUploadComponent } from '../image-upload/image-upload.component';
import { Observable, forkJoin, of, from, concat } from 'rxjs';

@Component({
  selector: 'app-optional-answer',
  templateUrl: './optional-answer.component.html',
  styleUrls: ['./optional-answer.component.css']
})
export class OptionalAnswerComponent implements OnInit, AnswerComponent {
  @ViewChildren(ImageUploadComponent) imageComponents!: QueryList<ImageUploadComponent>;

  questionId: number;

  submitted: boolean = false;
  answerForm: FormGroup;
  items: FormArray;

  answer: Answer[] = [];
  images: File[] = [];

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

  save(): Observable<any> {
    this.submitted = true;
    this.getData();
    this.getImages();

    return this.saveAnswers().pipe(
      mergeMap(
        () => this.saveImages()
      )
    );

  }

  saveAnswers(): Observable<any> {
    let observableBatch = [];

    this.answer.forEach(
      (item) => {
        if (item.text != null && item.text !== "") {
          observableBatch.push(
            this.answerService.postAnswer(item).pipe(map(response => item.id = response.id))
          );
        }
      }
    );

    return forkJoin(observableBatch);
  }

  saveImages(): Observable<any> {
    let observableBatch = [];

    this.answer.forEach(
      (item, index) => {
        if (item.text != null && item.text !== "" && this.images[index] != null) {
          observableBatch.push(
            this.answerService.updateImage(item.id, this.images[index])
          );
        }
      }
    );

    return forkJoin(observableBatch);
  }

  getData(): void {
    let items = this.answerForm.get('items') as FormArray;
    for (var i = 0; i < this.answer.length; i++) {
      let current = items.at(i);
      this.answer[i].correct = current.get('isCorrect').value;
      this.answer[i].text = current.get('text').value;

      if (this.answer[i].text === "" || this.answer[i].text == null)
        break;

      this.answer[i].questionId = this.questionId;

      console.log(this.answer[i]);
    }
  }

  getImages(): void {
    this.imageComponents.forEach(image => {
      if (image.selectedFile != null) {
        this.images.push(image.selectedFile.file);
      } else {
        this.images.push(null);
      }
    });
  }
}
