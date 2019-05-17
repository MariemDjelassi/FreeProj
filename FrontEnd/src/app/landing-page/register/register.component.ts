import { RegisterFreelancerComponent } from './../register-freelancer/register-freelancer.component';
import { RegisterCompanyComponent } from './../register-company/register-company.component';
import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RegisterComponent>, public dialog: MatDialog) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openCompModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '1200px';
    dialogConfig.height = '100%';

    const dialogRef = this.dialog.open(RegisterCompanyComponent, dialogConfig);
    dialogRef.afterClosed();
  }

  openFreelModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '1200px';
    dialogConfig.height = '100%';

    const dialogRef = this.dialog.open(RegisterFreelancerComponent, dialogConfig);
    // dialogRef.afterClosed().subscribe();
    // dialogRef.close();
  }

}
