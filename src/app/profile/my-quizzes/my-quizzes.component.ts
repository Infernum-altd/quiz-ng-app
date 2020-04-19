import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../../service/profileService/profile.service";
import {Quiz} from "../../models/quiz";

@Component({
  selector: 'app-my-quizzes',
  templateUrl: './my-quizzes.component.html',
  styleUrls: ['./my-quizzes.component.css']
})
export class MyQuizzesComponent implements OnInit {
  constructor(private profileService: ProfileService) { }
  userQuizzes: Quiz[] = [];

  ngOnInit(): void {
    this.getUserQuizzes();
  }

  getUserQuizzes() {
    this.profileService.getUserQuizzes().subscribe(
      resp => {
        this.userQuizzes = resp;
        this.addCategoryToQuizzes();
      },
        error => {
        alert("Error while download quizzes")
      });
  }

  addCategoryToQuizzes() {
    for (let quiz of this.userQuizzes){
      this.profileService.getCategoryName(quiz.category_id).subscribe(
        resp =>{
          quiz.category = resp.text;
        }
      );
    }
  }
}
