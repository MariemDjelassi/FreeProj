import { FreelancerApiService } from './../../services/freelancer-api.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-profil-freel',
  templateUrl: './view-profil-freel.component.html',
  styleUrls: ['./view-profil-freel.component.css']
})
export class ViewProfilFreelComponent implements OnInit {

  connectedFreel: any;
  idFreel: any;
  freelancers: any;

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
