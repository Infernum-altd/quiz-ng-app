import { Router } from '@angular/router';
import { Player } from './../../models/game.model';
import * as SockJs from 'sockjs-client';
import { RxStomp, RxStompConfig } from '@stomp/rx-stomp';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { Observable, ReplaySubject, of } from 'rxjs';
import { Answer } from 'src/app/models/answer.model';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  BASE_URL: string = window["configureApiBaseUrl"];
  CREATE_GAME: string = `${this.BASE_URL}\\play\\addSession`;
  webSocketEndPoint: string = `${this.BASE_URL}\\ws`; //FIXME
  client: RxStomp;
  gameObservable: Observable<string>;

  constructor(private http: HttpClient, private router: Router) { }

  createGame(game: Game): Observable<number> {
    return this.http.post<number>(this.CREATE_GAME, game);
  }

  initializeWebSocketConnection(gameId: number, player: Player): Observable<string> {
    let that = this;

    let config = new RxStompConfig();
    config.webSocketFactory = function () { return new SockJs(that.webSocketEndPoint); };

    this.client = new RxStomp();
    this.client.configure(config);

    this.gameObservable = this.client.watch('/play/game/' + gameId).pipe(
      map(resp => resp.body)
    );

    this.client.publish({ destination: '/app/play/game/' + gameId + '/user', body: JSON.stringify(player) });

    return this.gameObservable;
  }

  connect(): void {
    this.client.activate();
  }

  startGame(gameId: number) {
    this.client.publish({ destination: '/app/play/game/' + gameId + '/start' });
    this.gameObservable.pipe(take(1)).subscribe(
      resp => {
        let data = JSON.parse(resp);
        this.router.navigateByUrl('/game/question/' + gameId, {
          state: {
            questionNumber: data['questionNumber'],
            question: data['question'],
            questionTimer: data['questionTimer']
          }
        });
      }
    );
  }

  postAnswer(gameId: number, answers: Answer[]) {
    this.client.publish({ destination: '/app/play/game/' + gameId + '/start' });
  }

  getQuestion(): Observable<string> {
    return this.gameObservable;
  }
}
