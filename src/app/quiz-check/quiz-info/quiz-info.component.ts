import { Component, OnInit } from '@angular/core';
import {QuizService} from "../../service/quizService/quiz.service";
import {ShareIdService} from "../../service/profileService/share-id.service";
import {PlatformLocation} from "@angular/common";
import {Router} from "@angular/router";
import {Quiz} from '../../models/pending-quizzes.model';

@Component({
  selector: 'app-quiz-info',
  templateUrl: './quiz-info.component.html',
  styleUrls: ['./quiz-info.component.css']
})
export class QuizInfoComponent implements OnInit {
  public quiz: Quiz;
  currentQuizId: string;
  id: string;

  constructor(private quizService: QuizService,
              private shareId: ShareIdService,
              private location: PlatformLocation,
              private router: Router){
    this.currentQuizId = JSON.parse(localStorage.getItem('currentQuiz')).id;
    // this.id = shareId.shareId();
  }

  ngOnInit(): void {
    this.getQuiz(this.currentQuizId);
    this.location.onPopState(() => {
      // this.shareId.setId(this.currentQuizId);
      // this.shareId.setEmail(JSON.parse(localStorage.getItem('currentUser')).email);

      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['checkquiz', this.currentQuizId, {outlets: {quiznav: 'quizinfo'}}]);
      });
    });
  }

  ngSubmit(){}

  public getQuiz(id: string){
    this.quizService.getQuizInfoById(id).subscribe(
      (resp: any) => {
        this.quiz = resp;
      },
      error => {
        console.log(error);
        alert('Something wrong with downloading quiz');
      }
    );
  }

}
