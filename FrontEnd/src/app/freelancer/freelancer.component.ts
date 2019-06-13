import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FreelancerApiService } from './../services/freelancer-api.service';
import { UserApiService } from './../services/user-api.service';
import { AuthService } from './../services/auth.service';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.css']
})
export class FreelancerComponent implements OnInit {

  connectedFreel: any;
  idFreel: any;
  freelancer: any;
  profil: any;

  constructor(private freelService: FreelancerApiService, private auth: AuthService,
              public router: Router, private user: UserApiService) {
    this.connectedFreel = this.auth.connectedUser;
  }

  ngOnInit() {
    this.idFreel = this.connectedFreel.idFreel;
    console.log(this.idFreel);
    this.freelService.getFreelById(this.idFreel).subscribe((data: any) => {
      this.freelancer = data;
      console.log(this.freelancer);
    });
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/landingPage/home']);
  }

}
