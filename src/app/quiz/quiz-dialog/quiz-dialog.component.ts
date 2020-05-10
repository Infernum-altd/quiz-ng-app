import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Quiz } from 'src/app/models/quiz';
import { SafeResourceUrl } from '@angular/platform-browser';

export interface QuizDialogData {
  quizData: Quiz;
  quizImage: SafeResourceUrl;
}

@Component({
  selector: 'app-quiz-dialog',
  templateUrl: './quiz-dialog.component.html',
  styleUrls: ['./quiz-dialog.component.css']
})
export class QuizDialogComponent {

  constructor(public dialogRef: MatDialogRef<QuizDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: QuizDialogData) {
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  onStartClick(): void {
    //TODO: go to game settings
  }
}
