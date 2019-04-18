import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectApiService {

  Token = localStorage.getItem('token');
  Header = new HttpHeaders().append('Authorization', 'Bearer' + this.Token);

  constructor( private http: HttpClient ) { }

  createProject(idComp) {
    return this.http.post(`http://localhost:3000/Project/createProject/${idComp}`, {headers: this.Header});
  }

  getOneProject(idProj) {
    return this.http.get(`http://localhost:3000/Project/readProject/${idProj}`, {headers: this.Header});
  }

  getAllProjects() {
    return this.http.get(`http://localhost:3000/Project/readProjects`, {headers: this.Header});
  }

  upDateProject(idProj) {
    return this.http.post(`http://localhost:3000/Project/updateProject/${idProj}`, {headers: this.Header});
  }

  deleteProject(idProj) {
    return this.http.post(`http://localhost:3000/Project/deleteProject/${idProj}`, {headers: this.Header});
  }

  UploadImg(file) {
    // let header = new HttpHeaders().append('Authorization','Bearer ' + localStorage.getItem('token'));
    // header.set('Content-Type', 'form-data');
    return this.http.post('http://localhost:3000/Project/upload', file);
  }

  applyOffer(idProj, idFreel, body) {
    return this.http.post(`http://localhost:3000/Project/applyOffer/${idProj}/${idFreel}`, body, {headers: this.Header});
  }

  acceptOffer(idProj, idFreel, body) {
    return this.http.post(`http://localhost:3000/Project/acceptOffer/${idProj}/${idFreel}`, body, {headers: this.Header});
  }

  changeStatusToInProgress(idProj) {
    return this.http.post(`http://localhost:3000/Project/inProgressStatus/${idProj}`, {headers: this.Header});
  }

  changeStatusToCompleted(idProj) {
    return this.http.post(`http://localhost:3000/Project/completedStatus/${idProj}`, {headers: this.Header});
  }
}
