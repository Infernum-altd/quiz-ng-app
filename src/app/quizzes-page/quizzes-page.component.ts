import {Component, OnInit} from '@angular/core';
import {Category} from "../models/category.model";
import {CategoryService} from "../service/categoryService/category.service";
import {Quiz} from "../models/quiz";
import {QuizService} from "../service/quizService/quiz.service";
import {ProfileService} from "../service/profileService/profile.service";
import {Subject} from "rxjs";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";


@Component({
  selector: 'app-quizzes-page',
  templateUrl: './quizzes-page.component.html',
  styleUrls: ['./quizzes-page.component.css']
})
export class QuizzesPageComponent implements OnInit {
  categories: Category[];
  quizzes: Quiz[];

  length = 0;
  pageIndex: number;
  pageSize : number;
  pageSizeOptions: number[] = [10, 20, 30, 40, 50];
  currentQuizCategory: number;

  public userRequest: string;
  userQuestionUpdate = new Subject<string>();

  constructor(private categoryService: CategoryService,
              private quizService: QuizService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      resp => this.categories = resp
    );
    this.setPaginationParamDefault();
    this.getAllQuizzes();

    this.userQuestionUpdate.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(value => {
        this.setPaginationParamDefault();
          this.filterRequest(value);
      });
  }

  filterRequest(filterText: string){
    this.quizService.getFilteredQuizzes(filterText, this.pageSize, this.pageIndex).subscribe(
      resp =>{
        this.quizzes = resp.responceList;
        this.length = resp.totalNumberOfElement;
      }
    );
  }

  onPageChanged(e) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    if (this.currentQuizCategory != undefined){
      if (this.pageSize == undefined){this.setPaginationParamDefault();}
      this.searchByCategory(this.currentQuizCategory);
    }else if (this.userRequest != undefined){
      if (this.pageSize == undefined){this.setPaginationParamDefault();}
      this.filterRequest(this.userRequest);
    }
    else {
      this.getAllQuizzes();
    }
  }

  setPaginationParamDefault(){
    this.pageIndex = 0;
    this.pageSize = 10;
  }

  getAllQuizzes(){
    this.quizService.getQuizzes(this.pageSize, this.pageIndex).subscribe(
      resp => {
        this.quizzes = resp.responceList;
        this.length = resp.totalNumberOfElement;
      }
    );
  }


  searchByCategory(categoryid: number) {
    this.quizService.getQuizzesByCategory(categoryid, this.pageSize, this.pageIndex).subscribe(
      resp => {
        this.quizzes = resp.responceList;
        this.length = resp.totalNumberOfElement;
      }
    );
  }

  setCurrentCategory(categoryId: number) {
    this.currentQuizCategory = categoryId;
  }
}
