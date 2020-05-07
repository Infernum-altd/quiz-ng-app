import { GameAnswerComponent } from './../game-answer/game-answer.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-string-answer',
  templateUrl: './game-string-answer.component.html',
  styleUrls: ['./game-string-answer.component.css']
})
export class GameStringAnswerComponent extends GameAnswerComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
