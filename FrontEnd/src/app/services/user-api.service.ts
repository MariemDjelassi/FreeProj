import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

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

  loginUser(user) {
    return this.http.post('http://localhost:3000/Auth/login', user);
  }
}
