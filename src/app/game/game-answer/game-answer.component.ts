import { Component, OnInit, Input } from '@angular/core';
import { Answer } from 'src/app/models/answer.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-answer',
  templateUrl: './game-answer.component.html',
  styleUrls: ['./game-answer.component.css']
})
export class GameAnswerComponent implements OnInit {
  @Input() answers: Observable<Answer[]>;
  currentAnswer: string;

  constructor() { }

  ngOnInit(): void {
  }

}
