import {ProfileService} from '../../service/profileService/profile.service';
import {ShareIdService} from '../../service/profileService/share-id.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  searchString: string;
  public allRecordOfFriends
  public page: number;
  public collectionSize: number;
  public friends: Array<any>;
  public itemsPerPage = 8;

  constructor(private profileService: ProfileService,
              private router: Router,
              private shareId: ShareIdService) {
    this.allRecordOfFriends = profileService.getAllFriends();
    this.page = 1;
    this.loadPage();

  }

  private loadPage(){
    this.profileService.getFriends(this.page, this.itemsPerPage)
      .subscribe(p => {
        this.friends = p.rows;
        this.collectionSize = p.totalCount;
      });
  }

  onPageChanged() {
    this.loadPage();
  }

  ngOnInit(): void {
  }

  checkOut(id: string, email: string){
    this.shareId.setEmail(email);
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['profile', id, {outlets: {profilenav: 'profinfo'}}]);
    });
  }
}

