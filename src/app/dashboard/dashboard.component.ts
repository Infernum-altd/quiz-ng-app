import { Observable, Observer } from 'rxjs';
import { CategoryService } from './../service/categoryService/category.service';
import { DashboardService } from './../service/dashboardService/dashboard.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { Category } from '../models/category.model';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('ratingNavbar') ratingNavbar: MatSidenav;
  @ViewChild('achievementsNavbar') achievementsNavbar: MatSidenav;

  ratingIsOpen: boolean = false;
  achievementIsOpen: boolean = false;


  maxCards: number = 5;

  userId: number = 4; //FIXME: get user id from local storage
  recentQuizzes: Observable<Quiz[]> = this.dashboardService.getRecentQuizzes(this.userId, this.maxCards);
  recentQuizzesImages: File[] = [];  //TODO: get images for topQuizzes 
  topQuizzes: Observable<Quiz[]> = this.dashboardService.getTopQuizzes(this.maxCards);
  topQuizzesImages: File[] = [];  //TODO: get images for topQuizzes 
  recommendationQuizzes: Observable<Quiz[]> = this.dashboardService.getRecommendations(this.userId, this.maxCards);
  recommendationQuizzesImages: File[] = [];


  categories: Observable<Category[]> = this.categoryService.getCategories();
  quizCategory: number = -1;

  rating: Observable<number> = this.dashboardService.getRating(this.userId);

  achievementsTotal: Observable<number> = this.dashboardService.getAchievementsTotal();
  achievementsForUser: Observable<number> = this.dashboardService.getAchievementsForUser(this.userId);

  constructor(private dashboardService: DashboardService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  achievementsOpen(): void {
    if (this.ratingIsOpen) {
      this.ratingNavbar.close();
      this.ratingIsOpen = false;
    }

    this.achievementIsOpen = true;
    setTimeout(() => {
      this.achievementsNavbar.open();
    }, 0);

  }

  ratingOpen(): void {
    if (this.achievementIsOpen) {
      this.achievementsNavbar.close();
      this.achievementIsOpen = false;
    }

    this.ratingIsOpen = true;
    setTimeout(() => {
      this.ratingNavbar.open();
    }, 0);
  }

  achievementsClose(): void {
    this.achievementsNavbar.close();
    this.achievementIsOpen = false;
  }

  ratingClose(): void {
    this.ratingNavbar.close();
    this.ratingIsOpen = false;
  }

  closeAll(): void {
    if (this.ratingIsOpen) {
      this.ratingNavbar.close();
    }
    if (this.achievementIsOpen) {
      this.achievementsNavbar.close();
    }
  }

  onQuizCategorySelected(value: number): void {
    if (value === -1) {
      this.topQuizzes = this.dashboardService.getTopQuizzes(this.maxCards);
    } else {
      this.topQuizzes = this.dashboardService.getTopQuizzesByCategory(value, this.maxCards);
    }
  }

}
