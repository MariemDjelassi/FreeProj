import { RegisterComponent } from './../register/register.component';
import { Router } from '@angular/router';
import { UserApiService } from './../../services/user-api.service';
import { FormGroup, FormControl, FormArray, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as libphonenumber from 'google-libphonenumber';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBarConfig } from '@angular/material';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {

  CompForm: FormGroup;
  // CompFormArray: FormArray;
  get CompFormArray(): AbstractControl | null { return this.CompForm.get('CompFormArray'); }

  isOptional = true;

  fileSelected: any;
  message: string;
  imagePath: any;
  imgURL: any;

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: any;

  objComp: any;
  objC: any;
  // formObj: any;

  constructor(private router: Router, private service: UserApiService, private snackBar: MatSnackBar, private fb: FormBuilder,
              public dialogRef: MatDialogRef<RegisterCompanyComponent>,
              public registerRef: MatDialogRef<RegisterComponent>) {
    this.CompForm = this.fb.group({
      CompFormArray: this.fb.array([
        this.fb.group({
          email : ['', [Validators.required, Validators.email,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
          password : ['', [Validators.required, Validators.min(8),
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
        }),
        this.fb.group({
          name : ['', [Validators.required]],
          address : ['', [Validators.required]],
          // tslint:disable-next-line:max-line-length
          phone : ['', [Validators.required,
            // Validators.pattern('\+216([2579][0-9]|[34][012])[0-9]{6}')
            // Validators.pattern('/^(\+216)(?:-[2579][0-9]{7})|(3[012]|4[01]|8[0128])[0-9]{6}|42[16][0-9]{5})$/')
          ]],
        }),
        this.fb.group({
          foundYear : ['', [Validators.pattern('[0-9]*'), Validators.min(1900)]],
          size : [''],
          description : [''],
        }),
        this.fb.group({
          logo : [''],
          role : ['Company']
        }),
        this.fb.group({
          website : [''],
          linkedIn : [''],
          fb_link : [''],
        }),
      ])
    });
    // this.CompForm = new FormGroup({
    //   CompFormArray: new FormArray([this.formArray()])
    // });
    this.durationInSeconds = 4;
  }

  ngOnInit() {
  }

  registerComp(form) {
    console.log(form.value);
    this.objComp = [form.value];
    console.log(this.objComp);
    this.objComp.forEach(e1 => {
      this.objC = e1.CompFormArray;
      console.log(this.objC);
    });
    const file = new FormData();
    file.append('file', this.fileSelected, this.fileSelected.name);
    const formObj = {
      email: this.objC[0].email,
      password: this.objC[0].password,
      name: this.objC[1].name,
      address: this.objC[1].address,
      phone: this.objC[1].phone,
      foundYear: this.objC[2].foundYear,
      size: this.objC[2].size,
      description: this.objC[2].description,
      logo: this.fileSelected.name,
      role: this.objC[3].role,
      website: this.objC[4].website,
      linkedIn: this.objC[4].linkedIn,
      fb_link: this.objC[4].fb_link,
    };
    console.log(formObj);
    this.service.registerApiComp(formObj).subscribe((data) => {
      console.log(data);
      this.service.UploadImg(file).subscribe(img => console.log(img));
      this.openSnackBar('Account has created with success', 'close');
      this.dialogRef.close();
      // this.router.navigateByUrl('/landingPage/login');
      // location.reload();
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

  onNoClick(): void {
    this.dialogRef.close();
  }


}
