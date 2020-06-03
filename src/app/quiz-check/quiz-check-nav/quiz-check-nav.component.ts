import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-quiz-check-nav',
  templateUrl: './quiz-check-nav.component.html',
  styleUrls: ['./quiz-check-nav.component.css']
})
export class QuizCheckNavComponent implements OnInit {

  currentQuiz = JSON.parse(localStorage.getItem('currentQuiz'));
  id: any;

  constructor() {
    this.id = this.currentQuiz.id;
  }

  ngOnInit(): void {
    this.id = this.currentQuiz.id;
  }

}
