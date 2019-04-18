import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyApiService {

  Token = localStorage.getItem('token');
  Header = new HttpHeaders().append('Authorization', 'Bearer' + this.Token);

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
  //   }
  //   // return an observable with a user-facing error message
  //   return throwError('Something bad happened; please try again later.');
  // }

  constructor( private http: HttpClient ) { }

  getCompById(idComp): Observable <any> {
    return this.http.get(`http://localhost:3000/Company/getCompany/${idComp}`, {headers: this.Header});
  }

  upDateComp(idComp, body) {
    return this.http.post(`http://localhost:3000/Company/updateCompany/${idComp}`, body, { responseType: 'text'}).toPromise();
  }

  getFreelsApplied(idProj): Observable <any> {
    return this.http.get(`http://localhost:3000/Project/getFreels/${idProj}`, {headers: this.Header});
  }

}
