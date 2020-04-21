import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ShareIdService} from "../profileService/share-id.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private BASE_URL = window["configureApiBaseUrl"];
  private LOGIN_API_URL = `${this.BASE_URL}\\auth\\login`;

  constructor(private http: HttpClient,
              private router: Router,
              private shareId: ShareIdService) { }

  login(email: string, password: string) {


    this.http.post(this.LOGIN_API_URL, {email: email,password: password})
      .subscribe((resp : any) => {

        localStorage.setItem('currentUser', JSON.stringify(resp));
        this.shareId.setId(JSON.parse(localStorage.getItem('currentUser')).id);

          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['/']);
          });
      },
        error => {
          alert(error.error['message']);
        });
  }


  logout() {
    localStorage.removeItem('currentUser');
  }

  public get logIn(): boolean {
    return (localStorage.getItem('currentUser') != null);
  }

}
