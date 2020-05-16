import { GameAnswerComponent } from './../game-answer/game-answer.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-optional-answer',
  templateUrl: './game-optional-answer.component.html',
  styleUrls: ['./game-optional-answer.component.css']
})
export class GameOptionalAnswerComponent extends GameAnswerComponent implements OnInit {
  checked: boolean[];

  constructor() {
    super();
  }

  OnInit() {
    this.checked.fill(false, this.answers.length);
  }

}
