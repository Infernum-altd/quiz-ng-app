import { GameAnswerComponent } from './../game-answer/game-answer.component';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-game-sequence-answer',
  templateUrl: './game-sequence-answer.component.html',
  styleUrls: ['./game-sequence-answer.component.css']
})
export class GameSequenceAnswerComponent extends GameAnswerComponent implements OnInit {
  options: string[] = ["Answer 1", "Answer 2", "Answer 3", "Answer 4"];

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.options, event.previousIndex, event.currentIndex);
  }
}