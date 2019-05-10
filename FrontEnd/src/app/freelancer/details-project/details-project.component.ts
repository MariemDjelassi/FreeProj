import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { ProjectApiService } from './../../services/project-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { MatInputModule } from '@angular/material/input';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css']
})
export class DetailsProjectComponent implements OnInit {

  project: any;
  idProj: any;
  connectedFreel: any;
  offerForm: FormGroup;
  exist: boolean;
  i: any;

  constructor( private projService: ProjectApiService, private dataRoute: ActivatedRoute, private auth: AuthService ) {
    this.connectedFreel = this.auth.connectedUser;
    this.offerForm = new FormGroup({
      offer : new FormControl(''),
    });
   }

  ngOnInit() {
    this.idProj = this.dataRoute.snapshot.params.id;
    console.log(this.idProj);
    this.projService.getOneProject(this.idProj).subscribe((res: any) => {
      this.project = [res];
      console.log(this.project);
    });
  }

  removeFakePathUrl(file) {
    return file.slice(12, file.length);
  }

  applyProj(form ) {
    this.exist = false;
    const idP = this.idProj;
    const idF = this.connectedFreel.idFreel;
    this.project.forEach(elmt => {
      console.log(elmt);
      if (elmt.status !== 'waiting') {
        alert('you can\'t apply for this project');
      } else {
      // tslint:disable-next-line:no-shadowed-variable
        this.project.forEach(element => {
          element.applied_freelancers.forEach(element2 => {
            if (idF === element2.id_freelancer._id) {
              this.exist = true;
            }
          });
        });
        if (this.exist) {
          console.log('you have already apply for this project.');
          alert('you have already apply for this project.');
        } else {
          this.projService.applyOffer(idP, idF, form.value).subscribe(res => {
            console.log(res);
          });
          this.projService.getOneProject(this.idProj).subscribe((resp: any) => {
            this.project = [resp];
            console.log(this.project);
          });
        }
      }
    });
  }

}
