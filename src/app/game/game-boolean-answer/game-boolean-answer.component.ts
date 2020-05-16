import { GameAnswerComponent } from './../game-answer/game-answer.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-boolean-answer',
  templateUrl: './game-boolean-answer.component.html',
  styleUrls: ['./game-boolean-answer.component.css']
})
export class GameBooleanAnswerComponent extends GameAnswerComponent implements OnInit {
  options: string[] = ["true", "false"];

  constructor() {
    super();
  }

  ngOnInit(): void {
    // this.answer.push({
    //   id: null,
    //   questionId: 0,
    //   text: "",
    //   correct: false,
    //   nextAnswerId: null
    // });
  }

  onAnswerClick(option: string): void {
    this.currentAnswer = option;
  }

}
