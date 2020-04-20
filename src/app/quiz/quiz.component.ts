import { Component, OnInit } from '@angular/core';
import {QuizService} from "../service/quizService/quiz.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  private quizzesData: any;
  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.getQuizzes();
  }

  getQuizzes() {
       this.quizService.getQuizzes().subscribe(
            data => { this.quizzesData = data},
          err => console.error(err),
            () => console.log('done loading foods')
        );
      }


}
