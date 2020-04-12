import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  //private BASE_URL = "http://localhost:8080";
  private BASE_URL = "https://quiz-api-netcracker.herokuapp.com";
  private REGISTRATION_URL = `${this.BASE_URL}\\auth\\register`;

  constructor(private http: HttpClient) { }

  postRegisterInfo(user : User) : Observable<User> {
    return this.http.post<User>(this.REGISTRATION_URL, user);
  }

}
