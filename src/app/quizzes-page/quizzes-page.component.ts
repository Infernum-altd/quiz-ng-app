import { Component, OnInit } from '@angular/core';
import {Category} from "../models/category.model";
import {CategoryService} from "../service/categoryService/category.service";
import {Quiz} from "../models/quiz";
import {QuizService} from "../service/quizService/quiz.service";

@Component({
  selector: 'app-quizzes-page',
  templateUrl: './quizzes-page.component.html',
  styleUrls: ['./quizzes-page.component.css']
})
export class QuizzesPageComponent implements OnInit {
  categories: Category[];
  quizzes: Quiz[];
  quizData: Quiz;
  constructor(private categoryService: CategoryService,
              private quizService: QuizService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      resp => this.categories = resp
    );

    this.quizService.getQuizzes().subscribe(
      resp => this.quizzes = resp
    );
  }

  searchByCategory(categoryid: number){
    this.quizService.getQuizzesByCategory(categoryid).subscribe(
      resp => this.quizzes = resp
    );
  }

}
