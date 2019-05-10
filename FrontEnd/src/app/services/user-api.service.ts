import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor( private http: HttpClient ) { }

  registerApiComp(user) {
    return this.http.post('http://localhost:3000/Users/register/company', user);
  }

  registerApiFreel(user) {
    return this.http.post('http://localhost:3000/Users/register/freelancer', user);
  }

  UploadImg(img) {
    // let header = new HttpHeaders().append('Authorization','Bearer ' + localStorage.getItem('token'));
    // header.set('Content-Type', 'form-data');
    return this.http.post('http://localhost:3000/Users/upload', img);
  }

  loginUser(user) {
    return this.http.post('http://localhost:3000/Auth/login', user);
  }
}
