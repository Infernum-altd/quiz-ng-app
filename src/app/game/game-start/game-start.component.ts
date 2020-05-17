import { map, take } from 'rxjs/operators';
import { AuthenticationService } from './../../service/loginService/authentication.service';
import { Player } from './../../models/game.model';
import { Observable } from 'rxjs';
import { GameService } from './../../service/gameService/game.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrentUserService } from 'src/app/service/current-user.service';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.css']
})
export class GameStartComponent implements OnInit {
  gameId: number;

  player: Player = {
    userId: null,
    userScore: 0,
    userName: null,
    isAuthorize: false
  }

  game$: Observable<Game> = null;


  constructor(private route: ActivatedRoute,
    private gameService: GameService,
    private authenticationService: AuthenticationService,
    private currentUserService: CurrentUserService) {

  }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    if (this.authenticationService.logIn) {
      this.player.userId = parseInt(this.currentUserService.getCurrentUser().id);
      this.player.isAuthorize = true;
    }
    this.route.params.subscribe(params => {
      this.gameId = +params['gameId'];
      this.connectToGame();
    },
      err => console.log("Error loading page: " + err)  //FIXME
    );
  }

  connectToGame(): void {
    this.game$ = this.gameService.initializeWebSocketConnection(this.gameId, this.player).pipe(
      map(resp => JSON.parse(resp))
    );
    this.gameService.connect();
    this.gameService.subscribeQuestion(this.gameId);
  }

  startGame(): void {
    this.gameService.startGame(this.gameId);
  }

}
