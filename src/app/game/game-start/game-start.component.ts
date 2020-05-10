import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Role } from 'src/app/models/role.enum';
import { Gender } from 'src/app/models/gender.enum';
import { NotificationStatus } from 'src/app/models/notification-status.enum';

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.css']
})
export class GameStartComponent implements OnInit {
  user: User = {
    id: '4', email: 'email@mail.com', password: 'password', role: Role.USER, name: 'Name', surname: 'Surname', image: null, birthdate: null,
    gender: Gender.NOT_MENTIONED, countryId: null, city: null, rating: null, about: null, notificationStatus: NotificationStatus.ON
  };
  users: User[] = [
    this.user, this.user, this.user, this.user, this.user
  ]; //TODO: set observable and get data from server

  constructor() {
    //FIXME: delete this code
    for (var i = 0; i < 10; i++) {
      let user = new User('4', 'email@mail.com');
      user.name = "Name";
      user.surname = "Surname";
      this.users.push();
    }
  }

  ngOnInit(): void {

  }

}
