import { Component, OnInit } from '@angular/core';
import {ShareIdService} from '../../service/profileService/share-id.service';
import {Role} from '../../models/role.enum';

@Component({
  selector: 'app-profile-navigation',
  templateUrl: './profile-navigation.component.html',
  styleUrls: ['./profile-navigation.component.css']
})
export class ProfileNavigationComponent implements OnInit {
  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  id: any;
  roleUs: Role;
  public isAdmin = false;

  navLinks: any = [
    {
      label: 'My Profile',
      link:'[{outlets: {profilenav: \'profinfo\'}}]',
      index: 0
    },
    {
      label: 'Admin users',
      link: '[{outlets: {profilenav: \'profinfo\'}}]',
      index: 1
    },
    {
      label: 'Pending quizzes',
      link: '[{outlets: {profilenav: \'profinfo\'}}]',
      index: 2
    },
    {
      label: 'My friends',
      link: '[{outlets: {profilenav: \'profinfo\'}}]',
      index: 3
    },
    {
      label: 'My Quizzes',
      link: '[{outlets: {profilenav: \'profinfo\'}}]',
      index: 4
    },
    {
      label: 'Favorite',
      link: [{outlets: {profilenav: 'profinfo'}}],
      index: 5
    }
  ];
  constructor(private shareId: ShareIdService) {
    this.id = shareId.shareId();
    this.roleUs = JSON.parse(localStorage.getItem('currentUser')).role;
  }

  adminCheck(){
    if (this.roleUs.toString() !== Role[Role.USER]){
      this.isAdmin = true;
    }
  }

  ngOnInit(): void {
    this.id = this.shareId.shareId();
    this.adminCheck();
  }

}
