import {Component, OnInit, ViewChild} from '@angular/core';
import {ProfileService} from '../../service/profileService/profile.service';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Quiz} from "../../models/quiz";

@Component({
  selector: 'app-my-quizzes',
  templateUrl: './my-quizzes.component.html',
  styleUrls: ['./my-quizzes.component.css']
})
export class MyQuizzesComponent implements OnInit {
  userQuizzes: Quiz[];
  displayedColumns: string[] = ['name', 'date', 'category', 'description', 'modificationTime', 'status', 'actions'];
  dataSource: MatTableDataSource<Quiz>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private profileService: ProfileService) {

    profileService.getUserQuizzes().subscribe(resp => {

      this.userQuizzes = resp;
      this.addCategoryToQuizzes();
      this.dataSource = new MatTableDataSource(this.userQuizzes);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit(): void {
  }

  getUserQuizzes() {
    this.profileService.getUserQuizzes().subscribe(
      resp => {
        this.userQuizzes = resp;
      },
        error => {
        alert("Error while download quizzes")
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
