import { GameAnswerComponent } from './../game-answer/game-answer.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-optional-answer',
  templateUrl: './game-optional-answer.component.html',
  styleUrls: ['./game-optional-answer.component.css']
})
export class GameOptionalAnswerComponent extends GameAnswerComponent implements OnInit {
  options: string[] = ["Answer 1", "Answer 2", "Answer 3", "Answer 4"];
  checked: boolean[] = [];

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.options.forEach(
      () => this.checked.push(false)
    );
  }

}
