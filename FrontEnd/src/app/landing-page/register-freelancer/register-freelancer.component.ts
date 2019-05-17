import { RegisterComponent } from './../register/register.component';
import { UserApiService } from './../../services/user-api.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBarConfig } from '@angular/material';
import { MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatDialogRef } from '@angular/material';
// import * as libphonenumber from 'google-libphonenumber';

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

  // skillsFormArray: FormArray;
  // languagesFormArray: FormArray;

  FreelForm1: FormGroup;
  FreelForm2: FormGroup;
  FreelForm3: FormGroup;
  FreelForm4: FormGroup;
  FreelForm5: FormGroup;
  FreelForm6: FormGroup;

  fileSelected: any;
  message: string;
  imagePath: any;
  imgURL: any;

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
  hide = true;

  constructor(private router: Router, private service: UserApiService, private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<RegisterFreelancerComponent>,
              public registerRef: MatDialogRef<RegisterComponent>) {
    this.durationInSeconds = 4;
    this.FreelForm1 = new FormGroup({
      email : new FormControl('', [Validators.required, Validators.email,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      password : new FormControl('', [Validators.required, Validators.min(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
    });
    this.FreelForm2 = new FormGroup({
      firstName : new FormControl('', [Validators.required, Validators.maxLength(25), Validators.minLength(3),
        Validators.pattern('[A-Z][a-z ]*')]),
      lastName : new FormControl('', [Validators.required, Validators.maxLength(25), Validators.minLength(3),
        Validators.pattern('[A-Z][a-z ]*')]),
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
  }

  registerFreel() {
    const file = new FormData();
    file.append('file', this.fileSelected, this.fileSelected.name);
    const freel = {
      email : this.FreelForm1.value.email,
      password : this.FreelForm1.value.password,
      firstName : this.FreelForm2.value.firstName,
      lastName : this.FreelForm2.value.lastName,
      birthDate : this.FreelForm3.value.birthDate,
      phone : this.FreelForm3.value.phone,
      address : this.FreelForm3.value.address,
      role : this.FreelForm4.value.role,
      profileImage : this.fileSelected.name,
      // skillsArray : this.FreelForm5.value.skillsArray,
      skills : this.skills,
      // languagesArray : this.FreelForm5.value.languagesArray,
      languages : this.languages,
      linkedIn_link : this.FreelForm6.value.linkedIn_link,
      fb_link : this.FreelForm6.value.fb_link,
      twitter_link : this.FreelForm6.value.twitter_link,
      gitHub_link : this.FreelForm6.value.gitHub_link,
      portFolio_link : this.FreelForm6.value.portFolio_link,
    };
    console.log(freel);
    this.service.registerApiFreel(freel).subscribe((res) => {
      this.service.UploadImg(file).subscribe(img => console.log(img));
      this.openSnackBar('Account has created with success', 'close');
      this.dialogRef.close();
      location.reload();
      // this.registerRef.close();
      // this.router.navigateByUrl('/landingPage/login');
    });
    // this.registerRef.close();
  }

  filechangeEvent(fileInput: any) {
    this.fileSelected = fileInput.target.files[0];
  }

  preview(files) {
    // if (files.length === 0) { return; }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }
    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.imgURL = reader.result;
    };
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

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}

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

  // deleteSkill(index: number) {
  //   const control = this.registerFreelForm.get('skills') as FormArray;
  //   control.removeAt(index);
  // }

}
