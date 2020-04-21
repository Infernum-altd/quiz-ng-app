import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../service/loginService/authentication.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  currentUser = JSON.parse(localStorage.getItem('currentUser'))
  username: string = 'menu';
  id = '0';
  constructor(public authService: AuthenticationService) {
    if (this.currentUser != null){
      this.username = this.currentUser.email;
      this.id = this.currentUser.id;
    }
  }

  ngOnInit(): void {
  }

}
