import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyApiService {

  Token = localStorage.getItem('token');
  Header = new HttpHeaders().append('Authorization', 'Bearer' + this.Token);

  constructor( private http: HttpClient ) { }

  getCompById(idComp) {
    return this.http.get(`http://localhost:3000/Company/getCompany/${idComp}`, {headers: this.Header});
  }

  upDateComp(idComp) {
    return this.http.post(`http://localhost:3000/Company/updateCompany/${idComp}`, {headers: this.Header});
  }
}
