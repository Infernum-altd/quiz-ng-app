import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../service/loginService/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  currentUser: any;
  username: string;
  id: string;
  constructor(public authService: AuthenticationService) {}

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser != null){
      this.username = this.currentUser.email;
      this.id = this.currentUser.id;
    }
  }

}
