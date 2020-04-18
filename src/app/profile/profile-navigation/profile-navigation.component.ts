import { Component, OnInit } from '@angular/core';
import {UserInformationComponent} from "../user-information/user-information.component";

@Component({
  selector: 'app-profile-navigation',
  templateUrl: './profile-navigation.component.html',
  styleUrls: ['./profile-navigation.component.css']
})
export class ProfileNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showProfile() {
    UserInformationComponent.isShowComponent = true;
  }
}
