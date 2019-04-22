import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { ProjectApiService } from './../../../services/project-api.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  editProjForm: FormGroup;
  idCurrentProj: any;
  project: any;

  constructor( private router: Router, private projService: ProjectApiService,
               private dialogRef: MatDialogRef<EditDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.idCurrentProj = data.id;
    console.log(this.idCurrentProj);
    this.editProjForm = new FormGroup({
      titleProject: new FormControl(''),
      min_offer: new FormControl(''),
      max_offer: new FormControl(''),
      start_date: new FormControl(''),
      duration: new FormControl(''),
      description: new FormControl(''),
      // file: new FormControl(data.)
    });
  }

  ngOnInit() {
    console.log(this.idCurrentProj);
    this.projService.getOneProject(this.idCurrentProj).subscribe((res: any) => {
      this.project = res;
      console.log(this.project);
      this.editProjForm = new FormGroup({
        titleProject: new FormControl(this.project.titleProject),
        min_offer: new FormControl(this.project.min_offer),
        max_offer: new FormControl(this.project.max_offer),
        start_date: new FormControl(this.project.start_date),
        duration: new FormControl(this.project.duration),
        description: new FormControl(this.project.description),
        // file: new FormControl(data.)
      });
    });
  }

  updateProject(idProj, form) {
    idProj = this.idCurrentProj;
    console.log(idProj);
    this.projService.upDateProject(idProj, form.value).subscribe((res: any) => {
      console.log(res);
    });
    this.dialogRef.close(form.value);
    location.reload();
  }

}
