import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../service/profileService/profile.service';

@Component({
  selector: 'app-my-quizzes',
  templateUrl: './my-quizzes.component.html',
  styleUrls: ['./my-quizzes.component.css']
})
export class MyQuizzesComponent implements OnInit {
  public page: number;
  public collectionSize: number;
  public userQuizzes: Array<any>;
  public itemsPerPage = 8;
  constructor(private profileService: ProfileService) {
    this.page = 1;
    this.loadPage();
  }

  ngOnInit(): void {}

/*
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
*/

  addCategoryToQuizzes() {
    for (const quiz of this.userQuizzes){
      this.profileService.getCategoryName(quiz.category_id).subscribe(
        resp => {
          quiz.category = resp.text;
        }
      );
    }
  }

  private loadPage(){
    this.profileService.getUserQuizzes(this.page, this.itemsPerPage)
      .subscribe(p => {
        this.userQuizzes = p.rows;
        this.collectionSize = p.totalCount;
        this.addCategoryToQuizzes();
      });
  }

  onPageChanged() {
    this.loadPage();
  }
}
