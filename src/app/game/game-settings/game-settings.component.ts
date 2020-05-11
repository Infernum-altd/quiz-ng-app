import { mergeMap, defaultIfEmpty } from 'rxjs/operators';
import { GameService } from './../../service/gameService/game.service';
import { CurrentUserService } from './../../service/current-user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from './../../models/game.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.css']
})
export class GameSettingsComponent implements OnInit {
  game: Game = {
    id: null,
    quizId: null,
    hostId: null,
    questionTimer: 10,
    maxUsersNumber: 10
  }

  constructor(private route: ActivatedRoute,
    private router: Router,
    private currentUserService: CurrentUserService,
    private gameService: GameService) {
    this.route.params.subscribe(params => {
      this.game.quizId = params.quizId;
    });
  }

  ngOnInit(): void {
    this.game.hostId = parseInt(this.currentUserService.getCurrentUser().id);
  }

  createGame(): void {
    this.gameService.createGame(this.game).subscribe(
      response => this.startGameSession(response, this.game.hostId),
      err => {
        console.log("Error creating game: " + err)
      }  //FIXME: handle errors
    )
  }

  startGameSession(gameId: number, hostId: number): void {
    this.gameService.initializeWebSocketConnection(gameId, hostId);
    this.router.navigate(['/game/start']);
  }
}
