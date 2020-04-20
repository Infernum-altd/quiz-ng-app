import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {AuthenticationService} from '../service/loginService/authentication.service';
import {UserLogin} from '../models/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  model: UserLogin = {
    email: '',
    password: ''
  };


  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  Login() {
    this.authenticationService.login(this.model.email, this.model.password);
  }
}
