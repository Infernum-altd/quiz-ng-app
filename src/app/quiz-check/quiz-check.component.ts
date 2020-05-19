import { Component, OnInit } from '@angular/core';
import {Quiz} from '../models/pending-quizzes.model';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizService} from '../service/quizService/quiz.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-quiz-check',
  templateUrl: './quiz-check.component.html',
  styleUrls: ['./quiz-check.component.css']
})
export class QuizCheckComponent implements OnInit {
  private subscription: Subscription;
  public quiz: Quiz;
  id: string;
  constructor(private activateRoute: ActivatedRoute,
              private quizService: QuizService,
              private router: Router) {
    this.subscription = this.activateRoute.params.subscribe(
    params => {
      this.id = params.id;
    }
  );
    this.router.navigate([{outlets: {profilenav: 'checkquiz'}}]);
  }

  ngOnInit(): void {
    this.getQuiz(this.id);
  }

  public getQuiz(id: string){
    this.quizService.getQuizById(id).subscribe(
      (resp: any) => {
        this.quiz = resp;
      },
      error => {
        console.log(error);
        alert('Something wrong with downloading profile');
      }
    );
  }

}
