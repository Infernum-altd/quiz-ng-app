import { Component, OnInit } from '@angular/core';
import {QuizService} from "../service/quizService/quiz.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  private quizzesData: any;
  quizData: any;
  constructor(private quizService:QuizService, private route: ActivatedRoute) { }

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

  getPokemonDetails(): void {
    const id = this.route.snapshot.params['id'];
    this.quizService.getQuizById(id).subscribe(data => {
      this.quizData = data;
    });
  }

}
