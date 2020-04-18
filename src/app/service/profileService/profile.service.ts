import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/user";
import {Quiz} from "../../models/quiz";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private BASE_URL = window["configureApiBaseUrl"];
  private PROFILE_URL = `${this.BASE_URL}\\profile\\myprofile\\`;
  private FRIEND_LIST_URL = `${this.BASE_URL}\\profile\\myfriends\\`;
  private UPDATE_PROFILE_URL = `${this.BASE_URL}\\profile\\myprofile\\update`;
  private UPDATE_PASSWORD_URL = `${this.BASE_URL}\\profile\\updatePassword\\`;
  private GET_QUIZZES_URL = `${this.BASE_URL}\\profile\\myquizzes\\`;
  private GET_FAVORITE_URL = `${this.BASE_URL}\\profile\\myfavorite\\`;
  private GET_CATEGORY_NAME = `${this.BASE_URL}\\profile\\category\\`;
  private userId = JSON.parse(localStorage.getItem('currentUser')).id;

  constructor(private http: HttpClient) { }

  getProfile(userId: string): Observable<User>{
    return this.http.get<User>(this.PROFILE_URL + userId);
  }

  updateProfile(user: User): Observable<User>{
    user.id = this.userId;
    return this.http.post<User>(this.UPDATE_PROFILE_URL, user);
  }

  updatePassword(newPassword: string): Observable<any>{
    return this.http.post(this.UPDATE_PASSWORD_URL + this.userId, newPassword);
  }

  getFriends(): Observable<any[]>{
    return this.http.get<User[]>(this.FRIEND_LIST_URL + this.userId);
  }

  getUserQuizzes(): Observable<any[]>{
    return this.http.get<Quiz[]>(this.GET_QUIZZES_URL + this.userId);
  }

  getFavoriteGames(): Observable<any[]>{
    return this.http.get<Quiz[]>(this.GET_FAVORITE_URL + this.userId);
  }

  getCategoryName(categoryId : string): Observable<any>{
    return this.http.get(this.GET_CATEGORY_NAME + categoryId)
  }
}
