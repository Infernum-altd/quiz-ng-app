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
  webSocketEndPoint: string = "ws://localhost:8080/ws";
  // client: Stomp.Client;


  constructor(private http: HttpClient) { }

  createGame(game: Game): Observable<number> {
    return this.http.post<number>(this.CREATE_GAME, game);
  }

  initializeWebSocketConnection(gameId: number, userId: number) {
    // this.client = new Stomp.Client();
    // this.client.webSocketFactory = function () { return new WebSocket("ws://localhost:8080/ws"); }
    // this.client.brokerURL = this.webSocketEndPoint;
    // let client = this.client;
    // client.onConnect = function (_frame) {
    //   console.log(client);
    // console.log('here');
    //   client.subscribe('/play/' + gameId, function (message) {
    //     console.log("here");
    //     if (message.body) {
    //       console.log(message.body);
    //     }
    //   });
    //   client.publish({ destination: '/play/' + gameId + '/' + userId, body: "hello" });
    // };

    // console.log(this.client.brokerURL);
    // console.log(this.client.webSocket);

    // this.client.activate();

    // let socket = new SockJs("http://localhost:8080/ws");

    let client = Stomp.Stomp.over(function () {
      return new WebSocket('ws://localhost:8080/ws')
    });
    client.connect({}, function (_frame) {
      client.subscribe('/play/game/' + gameId, function (message) {
        console.log("here");
        if (message.body) {
          console.log(message.body);
        }
      });
      client.send('/play/game/' + gameId + '/user/' + userId);
    })

  }

}
