import {ImageService} from '../../service/imageService/image.service';
import {AnswerComponent, SequenceValidator} from '../answer/answer.component';
import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ImageUploadComponent} from '../../image-upload/image-upload.component';
import {Answer} from 'src/app/models/answer.model';
import {Observable, of} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-optional-answer',
  templateUrl: './optional-answer.component.html',
  styleUrls: ['./optional-answer.component.css']
})
export class OptionalAnswerComponent extends AnswerComponent implements OnInit {
  @ViewChildren(ImageUploadComponent) imageComponents!: QueryList<ImageUploadComponent>;

  answerForm: FormGroup;
  items: FormArray;

  maxAnswer = 4;
  minRequired = 2;

  constructor(private formBuilder: FormBuilder,
              imageService: ImageService) {
    super(imageService);
  }

  ngOnInit(): void {
    this.answerForm = new FormGroup({
      items: this.formBuilder.array([])
    });
    for (let i = 0; i < this.maxAnswer; i++) {
      this.answer.push({
        id: null,
        questionId: 0,
        text: '',
        correct: false,
        nextAnswerId: null,
        image: null,
        changed: true,
        deleted: false
      });
      const correctControl = new FormControl(this.answer[i].correct, []);
      const textControl = new FormControl(this.answer[i].text, []);
      if (i < this.minRequired) {
        textControl.setValidators([Validators.required, Validators.maxLength(30)]);
      }
      this.items = this.answerForm.get('items') as FormArray;
      this.items.push(
        this.formBuilder.group({
          isCorrect: correctControl,
          text: textControl
        })
      );
    }
    this.answerForm.get('items').setValidators([SequenceValidator()]);
  }

  isValid(): boolean {
    this.submitted = true;
    this.items.setValidators(SequenceValidator());
    this.items.markAsTouched();
    return this.answerForm.valid;
  }

  getData(): Observable<Answer[]> {
    this.getImages();

    const items = this.answerForm.get('items') as FormArray;
    for (let i = 0; i < this.answer.length; i++) {
      const current = items.at(i);
      if (this.answer[i].id != null && current.dirty) {
        this.answer[i].changed = true;
      }

      const newText = current.get('text').value;

      if (this.answer[i].text !== '' && newText === '') {
        this.answer[i].deleted = true;
      }

      this.answer[i].correct = current.get('isCorrect').value;
      this.answer[i].text = newText;

      if (this.answer[i].text === '' || this.answer[i].text == null) {
        break;
      }
    }

    return this.saveImages().pipe(
      map((resp) => {
        for (const i in resp) {
          if (resp[i] !== '') {
            this.answer[i].image = resp[i];
          }
        }
      }),
      mergeMap(_ => {
        const result = [];
        for (const i of this.answer) {
          if (i.text || i.deleted) {
            result.push(i);
          }
        }
        return of(result);
      })
    );
  }

  getImages(): void {
    this.imageComponents.forEach(image => {
      if (image.selectedFile != null) {
        this.images.push(image.selectedFile?.file);
      } else {
        this.images.push(null);
      }
    });
  }
}
