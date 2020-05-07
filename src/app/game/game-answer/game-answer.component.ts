import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/answer.model';

@Component({
  selector: 'app-game-answer',
  templateUrl: './game-answer.component.html',
  styleUrls: ['./game-answer.component.css']
})
export class GameAnswerComponent implements OnInit {
  answer: Answer[] = [];
  currentAnswer: string;

  constructor() { }

  ngOnInit(): void {
  }

}
