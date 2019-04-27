import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.css']
})
export class FreelancerComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

}
