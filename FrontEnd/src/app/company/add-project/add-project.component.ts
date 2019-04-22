import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { ProjectApiService } from './../../services/project-api.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  projectForm: FormGroup;
  connectedComp: any;

  constructor( private router: Router, private projService: ProjectApiService, private auth: AuthService ) {
    this.connectedComp = this.auth.connectedUser;
    this.projectForm = new FormGroup({
      titleProject: new FormControl('', Validators.required),
      min_offer: new FormControl('', [Validators.required, Validators.min(1)]),
      max_offer: new FormControl('', [Validators.required, Validators.min(1)]),
      start_date: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      file: new FormControl('')
    });
  }

  ngOnInit() {
  }

  postProject(idComp, form) {
    console.log(form.value);
    idComp = this.connectedComp.idComp;
    console.log(idComp);
    this.projService.createProject(idComp, form.value).subscribe((res) => {
      console.log(res);
    });
    this.router.navigateByUrl('/company/ListProjects');
  }

}
