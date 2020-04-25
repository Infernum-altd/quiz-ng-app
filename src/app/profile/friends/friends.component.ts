import {ProfileService} from '../../service/profileService/profile.service';
import {ShareIdService} from '../../service/profileService/share-id.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {User} from "../../models/user";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";



@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends: User[];
  displayedColumns: string[] = ['name', 'rating', 'actions'];
  dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private profileService: ProfileService,
              private router: Router,
              private shareId: ShareIdService) {


    profileService.getFriends().subscribe(resp => {

      this.friends = resp;
      this.dataSource = new MatTableDataSource(this.friends);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit(): void {}

  checkOut(id: string, email: string) {
    this.shareId.setEmail(email);
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['profile', id, {outlets: {profilenav: 'profinfo'}}]);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


