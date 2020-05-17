import { GameAnswerComponent } from './../game-answer/game-answer.component';
import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/answer.model';

@Component({
  selector: 'app-game-optional-answer',
  templateUrl: './game-optional-answer.component.html',
  styleUrls: ['./game-optional-answer.component.css']
})
export class GameOptionalAnswerComponent extends GameAnswerComponent implements OnInit {
  checked: boolean[] = [].fill(false, this.maxAnswerSize);

  constructor() {
    super();
  }

  OnInit() {
  }

  getSubmittedAnswers(): Answer[] {
    let submittedAnswer: Answer[] = [];
    this.answers.forEach(
      (value, index) => {
        if (this.checked[index]) {
          submittedAnswer.push(value);
        }
      }
    );
    return submittedAnswer;
  }

}
