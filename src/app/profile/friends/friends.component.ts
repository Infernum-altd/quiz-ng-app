import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {ProfileService} from "../../service/profileService/profile.service";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(private profileService: ProfileService) { }
  friends: User[] = [];
  ngOnInit(): void {
    this.getFriends();
  }

  public getFriends(){
    this.profileService.getFriends().subscribe(
      resp =>{
        this.friends = resp;
      },
      error => {
        alert("Error while try to show friends")
      }
    );
  }
}
