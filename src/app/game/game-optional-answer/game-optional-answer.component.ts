import { GameAnswerComponent } from './../game-answer/game-answer.component';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-game-optional-answer',
  templateUrl: './game-optional-answer.component.html',
  styleUrls: ['./game-optional-answer.component.css']
})
export class GameOptionalAnswerComponent extends GameAnswerComponent implements AfterViewInit {
  checked: boolean[];

  constructor() {
    super();
  }
  ngAfterViewInit(): void {
    this.answers.pipe(
      map(_ => this.checked.push(false))
    );
  }
}
