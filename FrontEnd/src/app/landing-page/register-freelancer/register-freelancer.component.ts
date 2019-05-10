import { UserApiService } from './../../services/user-api.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBarConfig } from '@angular/material';
import { MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

export interface Skills {
  skill: string;
}

export interface Languages {
  language: string;
}

@Component({
  selector: 'app-register-freelancer',
  templateUrl: './register-freelancer.component.html',
  styleUrls: ['./register-freelancer.component.css']
})

export class RegisterFreelancerComponent implements OnInit {

  // registerFreelForm: FormGroup;
  // skillsFormArray: FormArray;
  // languagesFormArray: FormArray;

  FreelForm1: FormGroup;
  FreelForm2: FormGroup;
  FreelForm3: FormGroup;
  FreelForm4: FormGroup;
  FreelForm5: FormGroup;
  FreelForm6: FormGroup;

  fakePath: any;
  imageSrc: any;
  fileSelected: File = null;

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: any;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  skills: Skills[] = [];
  languages: Languages[] = [];

  isOptional = true;

  constructor( private router: Router, private service: UserApiService, private snackBar: MatSnackBar ) {

    this.durationInSeconds = 4;
    this.FreelForm1 = new FormGroup({
      email : new FormControl('', Validators.required),
      password : new FormControl('', [Validators.required, Validators.min(8)]),
    });
    this.FreelForm2 = new FormGroup({
      firstName : new FormControl('', Validators.required),
      lastName : new FormControl('', Validators.required),
    });
    this.FreelForm3 = new FormGroup({
      birthDate : new FormControl(''),
      phone : new FormControl(''),
      address : new FormControl(''),
    });
    this.FreelForm4 = new FormGroup({
      role : new FormControl('Freelancer'),
      profileImage : new FormControl(''),
    });
    this.FreelForm5 = new FormGroup({
      skillsArray : new FormControl(''),
      languagesArray : new FormControl(''),
    });
    this.FreelForm6 = new FormGroup({
      linkedIn_link : new FormControl(''),
      fb_link : new FormControl(''),
      twitter_link : new FormControl(''),
      gitHub_link : new FormControl(''),
      portFolio_link : new FormControl(''),
    });
    // this.registerFreelForm = new FormGroup({
    //   firstName : new FormControl(''),
    //   lastName : new FormControl(''),
    //   rateWork : new FormControl(''),
    //   birthDate : new FormControl(''),
    //   phone : new FormControl(''),
    //   address : new FormControl(''),
    //   linkedIn_link : new FormControl(''),
    //   fb_link : new FormControl(''),
    //   twitter_link : new FormControl(''),
    //   gitHub_link : new FormControl(''),
    //   portFolio_link : new FormControl(''),
    //   email : new FormControl(''),
    //   password : new FormControl(''),
    //   skills : new FormArray([this.skillsForm()]),
    //   languages : new FormArray([this.languagesForm()]),
    //   role : new FormControl('Freelancer'),
    //   profileImage : new FormControl(''),
    // });

  }

  ngOnInit() {

  }

  registerFreel() {
    const freel = {
      email : this.FreelForm1.value.email,
      password : this.FreelForm1.value.password,
      firstName : this.FreelForm2.value.firstName,
      lastName : this.FreelForm2.value.lastName,
      birthDate : this.FreelForm3.value.birthDate,
      phone : this.FreelForm3.value.phone,
      address : this.FreelForm3.value.address,
      role : this.FreelForm4.value.role,
      // profileImage : this.FreelForm4.value.profileImage,
      profileImage : this.fileSelected.name,
      skillsArray : this.FreelForm5.value.skillsArray,
      languagesArray : this.FreelForm5.value.languagesArray,
      linkedIn_link : this.FreelForm6.value.linkedIn_link,
      fb_link : this.FreelForm6.value.fb_link,
      twitter_link : this.FreelForm6.value.twitter_link,
      gitHub_link : this.FreelForm6.value.gitHub_link,
      portFolio_link : this.FreelForm6.value.portFolio_link,
    };
    console.log(freel);
    this.service.registerApiFreel(freel).subscribe((res) => {
      const file = new FormData();
      file.append('profileImage', this.fileSelected);
      this.service.UploadImg(file).subscribe(img => console.log(img));
      this.openSnackBar('Account has created with success', 'close');
      this.router.navigateByUrl('/landingPage/login');
    });
  }

  filechangeEvent(fileInput: any) {
    this.fileSelected = fileInput.target.files[0];
  }

  openSnackBar(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.durationInSeconds * 1000;
    config.panelClass = ['snackBar'];
    this.snackBar.open(message, action, config);
  }

  addSkl(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add our skill
    if ((value || '').trim()) {
      this.skills.push({skill: value.trim()});
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeSkl(skill: Skills): void {
    const index = this.skills.indexOf(skill);
    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  addLgge(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.languages.push({language: value.trim()});
    }
    if (input) {
      input.value = '';
    }
  }

  removeLgge(language: Languages): void {
    const index = this.languages.indexOf(language);
    if (index >= 0) {
      this.languages.splice(index, 1);
    }
  }

  // removeFakePathUrl(f) {
  //   this.fakePath = f.slice(12, f.length);
  //   return this.fakePath;
  // }

  // uploadFile(event) {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   if (event.target.files && event.target.files[0]) {
  //     reader.onload = e => this.imageSrc = reader.result;
  //     reader.readAsDataURL(file);
  //     // this.removeFakePathUrl(file);
  //     this.service.UploadImg(file).subscribe();
  //   }
  //   // const formData = new FormData();
  //   // formData.append('file', this.fileData);
  //   // this.service.UploadImg(formData).subscribe(res => {
  //   //   console.log(res);
  //   // });
  // }

  // object() {
  //   const aa = {
  //     name : this.FG1.FC.Value;
  //   };
  // }

  // skillsForm(): FormGroup {
  //   return new FormGroup({
  //     skill: new FormControl(''),
  //   });
  // }

  // languagesForm(): FormGroup {
  //   return new FormGroup({
  //     language: new FormControl(''),
  //   });
  // }

  // addSkill() {
  //   this.skillsFormArray = this.registerFreelForm.get('skills') as FormArray;
  //   this.skillsFormArray.push(this.skillsForm());
  // }

  // addLanguage() {
  //   this.languagesFormArray = this.registerFreelForm.get('languages') as FormArray;
  //   this.languagesFormArray.push(this.languagesForm());
  // }

  // deleteSkill(index: number) {
  //   const control = this.registerFreelForm.get('skills') as FormArray;
  //   control.removeAt(index);
  // }

  // deleteLanguage(index: number) {
  //   const control = this.registerFreelForm.get('languages') as FormArray;
  //   control.removeAt(index);
  // }

}
