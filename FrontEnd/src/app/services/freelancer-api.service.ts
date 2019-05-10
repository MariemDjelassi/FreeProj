import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FreelancerApiService {

  Token = localStorage.getItem('token');
  Header = new HttpHeaders().append('Authorization', 'Bearer ' + this.Token);

  constructor( private http: HttpClient ) { }

  getFreelById(idFreel) {
    return this.http.get(`http://localhost:3000/Freelancer/getFreelancer/${idFreel}`, {headers: this.Header});
  }

  upDateFreel(idFreel) {
    return this.http.post(`http://localhost:3000/Freelancer/updateFreelancer/${idFreel}`, null, {headers: this.Header});
  }

  UploadImg(img) {
    // let header = new HttpHeaders().append('Authorization','Bearer ' + localStorage.getItem('token'));
    // header.set('Content-Type', 'form-data');
    return this.http.post('http://localhost:3000/Users/upload', img);
  }

}
