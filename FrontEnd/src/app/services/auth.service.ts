import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connectedUser: any;

  constructor( private http: HttpClient ) {
    this.connectedUser = this.getDecodeToken();
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  getDecodeToken() {
    const helper = new JwtHelperService();
    const decode = localStorage.getItem('token');
    if (decode) {
      const token = helper.decodeToken(decode);
      return token;
    }
    // return null;

    // if (localStorage.getItem('token')) {
    //   const decoded = jwt_decode(localStorage.getItem('token'));
    //   return decoded;
    // }
  }

  verifToken() {
    const decode = localStorage.getItem('token');
    const helper = new JwtHelperService();
    return helper.isTokenExpired(decode);
  }

}
