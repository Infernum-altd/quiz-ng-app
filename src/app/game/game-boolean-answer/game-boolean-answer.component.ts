import { GameAnswerComponent } from './../game-answer/game-answer.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game-boolean-answer',
  templateUrl: './game-boolean-answer.component.html',
  styleUrls: ['./game-boolean-answer.component.css']
})
export class GameBooleanAnswerComponent extends GameAnswerComponent {
  options: string[] = ["true", "false"];

  constructor() {
    super();
  }

  onAnswerClick(option: string): void {
    console.log(option);
  }

}
