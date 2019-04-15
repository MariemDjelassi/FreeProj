import { UserApiService } from './../services/user-api.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-freelancer',
  templateUrl: './register-freelancer.component.html',
  styleUrls: ['./register-freelancer.component.css']
})
export class RegisterFreelancerComponent implements OnInit {

  registerFreelancerForm: FormGroup;
  skillsFormArray: FormArray;
  languagesFormArray: FormArray;

  fakePath: any;
  fileUpload: any;

  constructor( private router: Router, private service: UserApiService ) {

    this.registerFreelancerForm = new FormGroup({
      firstName : new FormControl(''),
      lastName : new FormControl(''),
      rateWork : new FormControl(''),
      birthDate : new FormControl(''),
      phone : new FormControl(''),
      address : new FormControl(''),
      linkedIn_link : new FormControl(''),
      fb_link : new FormControl(''),
      twitter_link : new FormControl(''),
      gitHub_link : new FormControl(''),
      portFolio_link : new FormControl(''),
      email : new FormControl(''),
      password : new FormControl(''),
      skills : new FormArray([this.skillsForm()]),
      languages : new FormArray([this.languagesForm()]),
      role : new FormControl('Freelancer'),
      profileImage : new FormControl(''),
    });

  }

  skillsForm(): FormGroup {
    return new FormGroup({
      skill: new FormControl(''),
    });
  }

  languagesForm(): FormGroup {
    return new FormGroup({
      language: new FormControl(''),
    });
  }

  addSkill() {
    this.skillsFormArray = this.registerFreelancerForm.get('skills') as FormArray;
    this.skillsFormArray.push(this.skillsForm());
  }

  addLanguage() {
    this.languagesFormArray = this.registerFreelancerForm.get('languages') as FormArray;
    this.languagesFormArray.push(this.languagesForm());
  }

  deleteSkill(index: number) {
    const control = this.registerFreelancerForm.get('skills') as FormArray;
    control.removeAt(index);
  }

  deleteLanguage(index: number) {
    const control = this.registerFreelancerForm.get('languages') as FormArray;
    control.removeAt(index);
  }

  registerComp(form) {
    console.log(form.value);
    this.service.registerApiFreel(form.value).subscribe((res) => {
    this.router.navigateByUrl('/login');
    });
  }

  ngOnInit() { }

  removeFakePathUrl(f) {
    this.fakePath = f.slice(12, f.length);
    return this.fakePath;
  }

  uploadFile() {
    const fba = new FormData();
    fba.append('file', this.fileUpload[0]);
    this.service.UploadImg(fba).subscribe(res => {
    });
  }

  filechangeEvent(fileInput: any) {
    this.fileUpload = fileInput.target.files;
  }

}
