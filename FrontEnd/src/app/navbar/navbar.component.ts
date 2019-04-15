import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule, MatToolbarModule } from '@angular/material';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {

  isConnected = false;
  User;
  Freelancer;
  Company;

  constructor( private router: Router, private auth: AuthService) {
    if (localStorage.getItem('token')) {
      this.isConnected = true;
      this.User = this.auth.connectedUser;
      if (this.User.company) {
        // this.cas.GetCompanyId(this.User.company).subscribe(res => {
        //   this.Company = res;
        // });
      }
      if (this.User.profile) {
        // this.pas.GetProfilById(this.User.freelancer).subscribe(res => {
        //   this.Freelancer = res;
        // });
      }
    } else {
      this.isConnected = false;
    }
  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('token');
    // this.isConnected = false;
    this.router.navigate(['/home']);
    // location.reload();
  }

}
