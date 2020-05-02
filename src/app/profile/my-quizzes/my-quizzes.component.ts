import {Component, OnInit, ViewChild} from '@angular/core';
import {ProfileService} from '../../service/profileService/profile.service';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {Quiz} from "../../models/quiz";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-my-quizzes',
  templateUrl: './my-quizzes.component.html',
  styleUrls: ['./my-quizzes.component.css']
})
export class MyQuizzesComponent implements OnInit {
  userQuizzes: Quiz[];
  displayedColumns: string[] = ['name', 'category', 'status', 'actions'];

  length = 0;
  pageIndex: number;
  pageSize: number;
  pageSizeOptions: number[] = [10, 20, 30, 40, 50];


  constructor(private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.setPaginationParamDefault();
    this.getUserQuizzes();
  }

  getUserQuizzes() {
    this.profileService.getUserQuizzes(this.pageSize, this.pageIndex).subscribe(
      resp => {
        console.log(resp);
        this.userQuizzes = resp.responceList;
        this.length = resp.totalNumberOfElement;
      });
  }

  addCategoryToQuizzes() {
    for (const quiz of this.userQuizzes){
      this.profileService.getCategoryName(quiz.category_id).subscribe(
        resp => {
          quiz.category = resp.text;
        }
      );
    }
  }


  setPaginationParamDefault() {
    this.pageIndex = 0;
    this.pageSize = 10;
  }

  onPageChanged($event: PageEvent) {
    this.pageIndex = $event.pageIndex;
    this.pageSize = $event.pageSize;
    this.getUserQuizzes();
  }
}
