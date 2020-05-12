import { QuizService } from './../../service/quizService/quiz.service';
import { mergeMap } from 'rxjs/operators';
import { Player } from './../../models/game.model';
import { Observable, of, forkJoin } from 'rxjs';
import { GameService } from './../../service/gameService/game.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { CurrentUserService } from 'src/app/service/current-user.service';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.css']
})
export class GameStartComponent implements OnInit, OnDestroy {
  gameId: number;
  userId: number;

  game: Observable<Game> = null;


  constructor(private route: ActivatedRoute,
    private gameService: GameService,
    private quizService: QuizService,
    private currentUserService: CurrentUserService) {

  }
  ngOnDestroy(): void {
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
    this.game = this.gameService.initializeWebSocketConnection(gameId, hostId);
    this.gameService.connect();
  }

}
