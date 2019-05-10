import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})

export class ChatApiService {

  socket: any;
  Token = localStorage.getItem('token');
  Header = new HttpHeaders().append('Authorization', 'Bearer ' + this.Token);

  // const header = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

  constructor( private http: HttpClient ) {
    // this.socket = io();
    this.socket = io('http://localhost:3000', { transports : ['websocket', 'polling', 'flashsocket'] });
  }

  sendMessages(idChat, body) {
    return this.http.post(`http://localhost:3000/Chat/sendMesg/${idChat}`, body, {headers: this.Header});
  }

  getChat(idComp, idFreel) {
    return this.http.get(`http://localhost:3000/Chat/getChat/${idComp}/${idFreel}`, {headers: this.Header});
    // return this.http.get('http://localhost:3000/Chat/getChat/' + idComp + '/' + idFreel, {headers: header});
  }
}
