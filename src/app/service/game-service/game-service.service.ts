import { Stomp } from 'stompjs';
import { SockJs } from 'sockjs-client';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  serverUrl: string = '';
  title: string = 'WebSockets Game';
  stompClient: Stomp;

  constructor() {

  }

  initializeWebSocketConnection() {
    const ws = new SockJs(this.serverUrl);
    this.stompClient=Stomp.over(ws);
    this.stompClient.connect({},function(frame){
      this.stompClient.subscribe("/game"),(message)=>{
        if(message.body){
          
        }
      }
    });
  }
}
