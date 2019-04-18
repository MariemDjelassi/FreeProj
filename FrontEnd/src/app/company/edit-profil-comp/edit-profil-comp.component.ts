import { AuthService } from './../../services/auth.service';
import { CompanyApiService } from './../../services/company-api.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profil-comp',
  templateUrl: './edit-profil-comp.component.html',
  styleUrls: ['./edit-profil-comp.component.css']
})
export class EditProfilCompComponent implements OnInit {

  profilCompForm: FormGroup;
  idComp: any;
  companies: any;
  connectedComp: any;

  constructor( private router: Router, private compService: CompanyApiService, private auth: AuthService ) {
    this.connectedComp = this.auth.connectedUser;
    this.profilCompForm = new FormGroup({
      email : new FormControl(this.connectedComp.email),
      name : new FormControl(this.connectedComp.name),
      address : new FormControl(this.connectedComp.address),
      foundYear : new FormControl(this.connectedComp.foundYear),
      phone : new FormControl(this.connectedComp.phone),
      description : new FormControl(this.connectedComp.description),
      website : new FormControl(this.connectedComp.website),
      linkedIn : new FormControl(this.connectedComp.linkedIn),
      fb_link : new FormControl(this.connectedComp.fb_link),
      size : new FormControl(this.connectedComp.size),
      logo : new FormControl(this.connectedComp.logo)
    });
   }

  ngOnInit() {
    this.idComp = this.connectedComp.idComp;
    console.log(this.idComp);
    this.compService.getCompById(this.idComp).subscribe((data: any) => {
      this.companies = [data];
    });
  }

  updateProfil(idComp, form) {
  idComp = this.connectedComp.idComp;
  console.log(idComp);
  this.companies = this.compService.upDateComp(idComp, form.value);
  // .subscribe(data => {
  //   this.companies = [data];
  console.log(this.companies);
  }

}
