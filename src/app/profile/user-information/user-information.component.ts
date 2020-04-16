import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {ProfileService} from "../../service/profileService/profile.service";

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {
  public profile: User;
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.getProfile();
  }

  public getProfile(){
    this.profileService.getProfile(JSON.parse(localStorage.getItem('currentUser')).id).subscribe(
      (resp:any) => {
        console.log(resp);
        this.profile = resp;
      },
      error => {
        console.log(error);
        alert("Something wrong with downloading profile");
      }
    );
  }

}
