import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {ProfileService} from '../../service/profileService/profile.service';
import {Router} from '@angular/router';
import {QuizService} from '../../service/quizService/quiz.service';
import {Quiz} from '../../models/pending-quizzes.model';
import {PendingQuizzesService} from '../../service/pendingQuizzesService/pending-quizzes.service';
import {ShareIdService} from "../../service/profileService/share-id.service";


@Component({
  selector: 'app-not-checked-quizzes',
  templateUrl: './pending-quizzes.component.html',
  styleUrls: ['./pending-quizzes.component.css']
})
export class PendingQuizzesComponent implements OnInit {
  pendingQuizzes: Quiz[];
  displayedColumns: string[] = ['name', 'category', 'date', 'authorEmail', 'actions'];
  dataSource: MatTableDataSource<Quiz>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public isCollapsed = true;

  constructor(private quizService: PendingQuizzesService,
              private router: Router,
              private shareId: ShareIdService) {

    quizService.getPendingQuizzes().subscribe(resp => {

      this.pendingQuizzes = resp;
      this.dataSource = new MatTableDataSource(this.pendingQuizzes);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  checkOut(id: string, email: string) {
    this.shareId.setEmail(email);
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['profile', id, {outlets: {profilenav: 'profinfo'}}]);
    });
  }
  checkQuiz(quiz: Quiz) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['checkquiz', quiz.id, {outlets: {quiznav: 'quizinfo'}}]);
    });
    console.log('quizId ' + quiz.id);
    console.log('checkquiz' + JSON.stringify(quiz));
    localStorage.setItem('currentQuiz', JSON.stringify(quiz));
  }
}
