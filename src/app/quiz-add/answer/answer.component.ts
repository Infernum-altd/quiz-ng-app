import {ImageService} from '../../service/imageService/image.service';
import {Answer} from '../../models/answer.model';
import {Component, Input, OnInit} from '@angular/core';
import {FormArray, ValidationErrors, ValidatorFn} from '@angular/forms';
import {forkJoin, Observable} from 'rxjs';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  submitted = false;

  @Input() answer: Answer[] = [];
  images: File[] = [];

  questionId: number;

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
  }

  isValid(): boolean {
    return true;
  }

  getData(): Observable<Answer[]> {
    return null;
  }

  getImages(): void {

  }

  saveImages(): Observable<any> {
    const observableBatch = [];

    this.answer.forEach(
      (_, index) => {
        observableBatch.push(
          this.imageService.saveImage(this.images[index])
        );
      }
    );

    return forkJoin(observableBatch);
  }
}

export function SequenceValidator(): ValidatorFn {
  return (formArray: FormArray): ValidationErrors => {
    for (let i = 1; i < formArray.controls.length; i++) {
      const previous = formArray.controls[i - 1];
      const current = formArray.controls[i];

      if (current.get('text').value !== '' && previous.get('text').value === '') {
        previous.setErrors({mustExist: true});
        return;
      } else {
        previous.setErrors(null);
      }
    }
    return;
  };
}
