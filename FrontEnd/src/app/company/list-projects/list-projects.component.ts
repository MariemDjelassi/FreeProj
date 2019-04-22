import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { ProjectApiService } from './../../services/project-api.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})

// export interface PeriodicElement {
//   titleProject: string;
//   start_date: any;
//   duration: number;
//   status: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { titleProject: projects.titleProject,
//     start_date: projects.start_date,
//     duration: projects.duration,
//     status: projects.status,
//   }
// ];

export class ListProjectsComponent implements OnInit {

  connectedComp: any;
  projects: any;
  idComp: any;

  // displayedColumns = ['titleProject', 'start_date', 'duration', 'status', 'actions'];
  // dataSource = ELEMENT_DATA;

  constructor( private router: Router, private projService: ProjectApiService, private auth: AuthService,
              // tslint:disable-next-line:align
              public dialog: MatDialog ) {
    this.connectedComp = this.auth.connectedUser;
  }

  ngOnInit() {
    this.idComp = this.connectedComp.idComp;
    this.projService.getAllProjByComp(this.idComp).subscribe((data: any) => {
      this.projects = data;
      console.log(this.projects);
    });
  }

  openDeleteDialog(idProj) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: idProj,
    };

    const dialogRef = this.dialog.open(DeleteDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
      console.log('Dialog output:', data);
      // console.log(`Dialog result: ${data}`);
    });
  }

  openEditDialog(idProj) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: idProj,
    };

    const dialogRef = this.dialog.open(EditDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
      console.log('Dialog output:', data);
      // console.log(`Dialog result: ${result}`);
    });
  }

}

