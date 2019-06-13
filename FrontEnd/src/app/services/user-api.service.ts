import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  Token = localStorage.getItem('token');
  Header = new HttpHeaders().append('Authorization', 'Bearer ' + this.Token);

  constructor( private http: HttpClient ) { }

  registerApiComp(user) {
    console.log(user);
    return this.http.post('http://localhost:3000/Users/register/company', user);
  }

  registerApiFreel(user) {
    return this.http.post('http://localhost:3000/Users/register/freelancer', user);
  }

  UploadImg(img) {
    return this.http.post('http://localhost:3000/Upload/upload', img);
  }

  getImage(img) {
    return this.http.get(`http://localhost:3000/Upload/download/${img}`, {headers: this.Header});
  }

  loginUser(user) {
    return this.http.post('http://localhost:3000/Auth/login', user);
  }
}
