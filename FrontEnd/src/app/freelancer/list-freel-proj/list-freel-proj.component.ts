import { Component, OnInit } from '@angular/core';
import { FreelancerApiService } from './../../services/freelancer-api.service';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-list-freel-proj',
  templateUrl: './list-freel-proj.component.html',
  styleUrls: ['./list-freel-proj.component.css']
})
export class ListFreelProjComponent implements OnInit {

  freelancers: any;
  connectedFreel: any;
  idFreel: any;

  constructor( private freelService: FreelancerApiService, private auth: AuthService ) {
    this.connectedFreel = this.auth.connectedUser;
  }

  ngOnInit() {
    this.idFreel = this.connectedFreel.idFreel;
    console.log(this.idFreel);
    this.freelService.getFreelById(this.idFreel).subscribe((data: any) => {
      this.freelancers = [data];
      console.log(this.freelancers);
    });
  }

}
