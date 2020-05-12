import * as SockJs from 'sockjs-client';
import * as Stomp from '@stomp/stompjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  BASE_URL: string = window["configureApiBaseUrl"];
  CREATE_GAME: string = `${this.BASE_URL}\\play\\addSession`;
  webSocketEndPoint: string = "ws://localhost:8080/ws"; //FIXME
  client: Stomp.Client;


  constructor(private http: HttpClient) { }

  createGame(game: Game): Observable<number> {
    return this.http.post<number>(this.CREATE_GAME, game);
  }

  initializeWebSocketConnection(gameId: number, userId: number): Observable<Game> {
    this.client = new Stomp.Client();
    this.client.webSocketFactory = function () { return new SockJs("http://localhost:8080/ws"); }
    let client = this.client;
    return Observable.create((observer) => {
      client.onConnect = function (_frame) {
        client.subscribe('/play/game/' + gameId, (message) => {
          if (message.body) {
            observer.next(JSON.parse(message.body));
          }
        });
        client.publish({ destination: '/app/play/game/' + gameId + '/user/' + userId });
      };

      client.onWebSocketClose = function (_frame) {
        observer.complete();
      };
      client.onWebSocketError = function (frame) {
        observer.error(frame);
      };

      return () => {
        client.deactivate();
      }
    });

  }

  connect(): void {
    this.client.activate();
  }

  startGame(gameId: number): void {
    this.client.publish({ destination: '/app/play/game/' + gameId + '/start' });
  }
}
