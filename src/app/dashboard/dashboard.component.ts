import { ProfileService } from './../service/profileService/profile.service';
import { CategoryService } from './../service/categoryService/category.service';
import { DashboardService } from './../service/dashboardService/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  maxCards: number = 5;

  userId: number = 4; //FIXME: get user id from local storage
  recentQuizzes: Quiz[] = [];
  recentQuizzesImages: File[] = [];  //TODO: get images for topQuizzes 
  topQuizzes: Quiz[] = [];
  topQuizzesImages: File[] = [];  //TODO: get images for topQuizzes 

  categories: Category[];

  rating: number;

  achievementsTotal: number;
  achievementsForUser: number;

  constructor(private dashboardService: DashboardService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getRating();
    this.getAchievements();
    this.getRecentQuizzes();
    this.getTopQuizzes();
    this.getCategories();
  }

  getRecentQuizzes(): void {
    this.dashboardService.getRecentQuizzes(this.userId, this.maxCards).subscribe(
      result => {
        this.recentQuizzes = result;
      },
      err => console.error(err),
      () => console.log('Done loading recent activities')
    );
    //TODO: get images
  }

  getTopQuizzes(): void {
    this.dashboardService.getTopQuizzes(this.maxCards).subscribe(
      result => {
        this.topQuizzes = result;
      },
      err => console.error(err),
      () => console.log('Done loading top quizzes')
    );
    //TODO: get images
  }

  getTopQuizzesByCategory(categoryId: number): void {
    this.dashboardService.getTopQuizzesByCategory(categoryId, this.maxCards).subscribe(
      result => {
        this.topQuizzes = result;
      },
      err => console.error(err),
      () => console.log('Done loading top quizzes by category')
    );
    //TODO: get images
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(
      resp => { this.categories = resp },
      err => console.error(err),
      () => console.log('Done loading categories')
    );
  }

  getRating(): void {
    this.dashboardService.getRating(this.userId).subscribe(
      resp => { this.rating = resp },
      err => console.error(err),
      () => console.log('Done loading user rating')
    )
  }

  getAchievements(): void {
    this.dashboardService.getAchievementsTotal().subscribe(
      resp => { this.rating = resp },
      err => console.error(err),
      () => console.log('Done loading user rating')
    )

    this.dashboardService.getAchievementsForUser(this.userId).subscribe(
      resp => { this.rating = resp },
      err => console.error(err),
      () => console.log('Done loading user rating')
    )
  }
}
