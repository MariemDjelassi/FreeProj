import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailApiService {

  Token = localStorage.getItem('token');
  Header = new HttpHeaders().append('Authorization', 'Bearer ' + this.Token);

  constructor( private http: HttpClient ) { }

  sendMail(idComp, idFreel) {
    return this.http.post(`http://localhost:3000/Mail/sendMail/${idComp}/${idFreel}`, null, {headers: this.Header});
  }
}
