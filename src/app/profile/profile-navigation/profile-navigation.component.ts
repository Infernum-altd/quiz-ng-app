import { Component, OnInit } from '@angular/core';
import {ShareIdService} from "../../service/profileService/share-id.service";

@Component({
  selector: 'app-profile-navigation',
  templateUrl: './profile-navigation.component.html',
  styleUrls: ['./profile-navigation.component.css']
})
export class ProfileNavigationComponent implements OnInit {
  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  id:any;
  constructor(private shareId: ShareIdService) {
    this.id = shareId.shareId();
  }

  ngOnInit(): void {
  }

}
