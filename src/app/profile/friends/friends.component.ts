import {ProfileService} from '../../service/profileService/profile.service';
import {ShareIdService} from '../../service/profileService/share-id.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from "../../models/user";



@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends: User[];
  displayedColumns: string[] = ['name', 'rating', 'actions'];

  length = 0;
  pageIndex: number;
  pageSize: number;
  pageSizeOptions: number[] = [10, 20, 30, 40, 50];

  constructor(private profileService: ProfileService,
              private router: Router,
              private shareId: ShareIdService) {

  }

  ngOnInit(): void {
    this.setPaginationParamDefault();

    this.profileService.getFriends(this.pageSize, this.pageSize).subscribe(resp => {
      this.friends = resp.responceList;
      this.length = resp.totalNumberOfElement;
    });
  }

  checkOut(id: string, email: string) {
    this.shareId.setEmail(email);
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['profile', id, {outlets: {profilenav: 'profinfo'}}]);
    });
  }

  setPaginationParamDefault() {
    this.pageIndex = 0;
    this.pageSize = 10;
  }

}


