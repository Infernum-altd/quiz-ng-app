import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {ProfileService} from "../../service/profileService/profile.service";
import {Router} from "@angular/router";
import {ShareIdService} from "../../service/profileService/share-id.service";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(private profileService: ProfileService,
              private router: Router,
              private shareId: ShareIdService) { }
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

  checkOut(id: string, email: string){
    this.shareId.setEmail(email);
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['profile', id, {outlets: {profilenav: 'profinfo'}}]);
    });
  }
}
