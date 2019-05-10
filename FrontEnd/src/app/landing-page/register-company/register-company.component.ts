import { Router } from '@angular/router';
import { UserApiService } from './../../services/user-api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {

  registerCompanyForm: FormGroup;

  constructor( private router: Router, private service: UserApiService ) {
    this.registerCompanyForm = new FormGroup({
      email : new FormControl(''),
      password : new FormControl(''),
      name : new FormControl(''),
      address : new FormControl(''),
      foundYear : new FormControl(''),
      phone : new FormControl(''),
      description : new FormControl(''),
      website : new FormControl(''),
      linkedIn : new FormControl(''),
      fb_link : new FormControl(''),
      role : new FormControl('Company')
    });
   }

  ngOnInit() {
  }

  registerComp(form) {
    console.log(form.value);
    this.service.registerApiComp(form.value).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('/login');
    });
  }

}
