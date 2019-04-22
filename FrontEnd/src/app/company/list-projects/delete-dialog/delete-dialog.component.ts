import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ProjectApiService } from './../../../services/project-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  idCurrentProj: any;

  constructor(  public dialogRef: MatDialogRef<DeleteDialogComponent>,  @Inject(MAT_DIALOG_DATA) data,
                private projService: ProjectApiService, private router: Router ) {
    this.idCurrentProj = data.id;
    console.log(this.idCurrentProj);
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteProject(idProj) {
    idProj = this.idCurrentProj;
    console.log(idProj);
    this.projService.deleteProject(idProj).subscribe((res: any) => {
      console.log(res);
    });
    this.dialogRef.close();
    // this.router.navigate(['/company/list-projects']);
  }

}
