import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private BASE_URL = window["configureApiBaseUrl"];
  private PROFILE_URL = `${this.BASE_URL}/profile/myprofile/`;
  private FRIEND_LIST_URL = `${this.BASE_URL}\\profile\\myfriends\\`;
  private UPDATE_PROFILE_URL = `${this.BASE_URL}\\profile\\myprofile\\update`;
  private UPDATE_PASSWORD_URL = `${this.BASE_URL}\\profile\\updatePassword\\`;
  private GET_QUIZZES_URL = `${this.BASE_URL}\\profile\\/myquizzes\\`;
  private GET_FAVORITE_URL = `${this.BASE_URL}\\profile\\/myfavorite\\`;

  constructor(private http: HttpClient) { }

  getProfile(userId: string): Observable<User>{
    return this.http.get<User>(this.PROFILE_URL + userId);
  }
}
