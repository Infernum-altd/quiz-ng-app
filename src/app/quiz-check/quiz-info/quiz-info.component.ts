import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Quiz} from '../../models/pending-quizzes.model';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizService} from '../../service/quizService/quiz.service';
import {FormControl} from "@angular/forms";
import {User} from "../../models/user";
import {Role} from "../../models/role.enum";
import {ProfileService} from "../../service/profileService/profile.service";
import {ShareIdService} from "../../service/profileService/share-id.service";
import {PlatformLocation} from "@angular/common";

@Component({
  selector: 'app-quiz-info',
  templateUrl: './quiz-info.component.html',
  styleUrls: ['./quiz-info.component.css']
})
export class QuizInfoComponent implements OnInit {
  public quiz: Quiz;
  currentQuizId: string;
  id: string;
  comment: boolean;

  constructor(private quizService: QuizService,
              private shareId: ShareIdService,
              private location: PlatformLocation,
              private router: Router){
    this.currentQuizId = JSON.parse(localStorage.getItem('currentQuiz')).id;
  }
  moderatorCheck(){
    if (this.quiz.moderatorComment !== null){
      this.comment = true;
    }
    else{this.comment = false; }
  }

  ngOnInit(): void {
    this.getQuiz(this.currentQuizId);
    this.location.onPopState(() => {
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
