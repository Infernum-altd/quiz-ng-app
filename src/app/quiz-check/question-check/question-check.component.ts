import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Question} from '../../models/question.model';
import {QuestionService} from '../../service/questionService/question.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {QuizCheckServiceService} from '../../service/quizCheckService/quiz-check-service.service';
import {QuizCheckModel} from '../../models/quiz-check.model';
import {MustMatch} from "../../profile/change-password/change-password.component";
@Component({
  selector: 'app-question-check',
  templateUrl: './question-check.component.html',
  styleUrls: ['./question-check.component.css']
})
export class QuestionCheckComponent implements OnInit {
  public commentForm: FormGroup;
  private subscription: Subscription;
  quiz: QuizCheckModel;
  id: string;
  currentQuizId: number;
  currentUserId: number;
  checkedQuestions = [7];
  comment: string;
  submitted = false;
  labelPosition = 'before';

  constructor(private formBuilder: FormBuilder,
              private quizService: QuizCheckServiceService,
              private activateRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getQuiz(JSON.parse(localStorage.getItem('currentQuiz')).id);
    this.commentForm = this.formBuilder.group({
      comment: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  public getQuiz(id: string){
    this.quizService.getQuizById(id).subscribe(
      (resp: any) => {
        this.quiz = resp;
        console.log('ans ', this.quiz.questions);
      },
      error => {
        console.log(error);
        alert('Something wrong with downloading quiz');
      }
    );
  }
  activeQuiz() {
    this.currentQuizId = JSON.parse(localStorage.getItem('currentQuiz')).id;
    this.currentUserId = JSON.parse(localStorage.getItem('currentUser')).id;
    this.quizService.updateActiveStatusQuiz(this.currentQuizId).subscribe(
      (resp: any) => {
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['profile', this.currentUserId, {outlets: {profilenav: 'pendingQuizzes'}}]);
        });
        // this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        //   this.router.navigate(['profile', JSON.parse(localStorage.getItem('currentuser')).id, {outlets: {profilenav: 'pendingQuizzes'}}]);
        // });
      },
      error => {
        alert('Something wrong while change active status');
      }
    );
  }
  checkCount(i: number) {
    if (!this.checkedQuestions.includes(i)){
      this.checkedQuestions.push(i);
      console.log('ar ', this.checkedQuestions);
    }
    else {
      this.checkedQuestions.splice(this.checkedQuestions.indexOf(i), i);
      console.log('ar else ', this.checkedQuestions);
    }
  }
  allChecked(){
    if ( this.checkedQuestions.length - 1  === this.quiz.questions.length){
      return true;
    }
  }
  leaveComment() {
    this.currentQuizId = JSON.parse(localStorage.getItem('currentQuiz')).id;
    this.currentUserId = JSON.parse(localStorage.getItem('currentUser')).id;
    console.log("comment component " + this.comment);
    this.quizService.updateCommentQuiz(this.currentQuizId, this.comment).subscribe(
      (resp: any) => {
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['profile', this.currentUserId, {outlets: {profilenav: 'pendingQuizzes'}}]);
          alert('Successfully send comment');
        });
      },
      error => {
        alert('Something wrong while leave comment');
      }
    );
  }

  get f() { return this.commentForm.controls; }


  public commentFormValidation(){
    this.submitted = true;

    if (this.commentForm.invalid) {
      return;
    }
    this.comment = this.commentForm.value.comment;
    this.leaveComment();
  }

}
