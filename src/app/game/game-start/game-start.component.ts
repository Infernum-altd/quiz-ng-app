import { GameService } from './../../service/gameService/game.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { CurrentUserService } from 'src/app/service/current-user.service';

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.css']
})
export class GameStartComponent implements OnInit {
  users: User[] = []; //TODO: set observable and get data from server
  gameId: number;
  userId: number;

  constructor(private route: ActivatedRoute,
    private gameService: GameService,
    private currentUserService: CurrentUserService) {

  }

  ngOnInit(): void {
    this.userId = parseInt(this.currentUserService.getCurrentUser().id);
    this.route.params.subscribe(params => {
      this.gameId = +params['gameId'];
      this.connectToGame(this.gameId, this.userId);
    },
      err => console.log("Error loading page")  //FIXME
    );
  }

  connectToGame(gameId: number, hostId: number): void {
    this.gameService.initializeWebSocketConnection(gameId, hostId);
  }

}
