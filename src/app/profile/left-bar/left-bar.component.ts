import { Component, OnInit } from '@angular/core';
import {UserInformationComponent} from "../user-information/user-information.component";

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changePassword() {
    UserInformationComponent.isShowComponent = false;
  }
}
