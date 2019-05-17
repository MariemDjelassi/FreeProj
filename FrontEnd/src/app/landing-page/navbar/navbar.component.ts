import { RegisterComponent } from './../register/register.component';
import { LoginComponent } from './../login/login.component';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';

export interface Skills {
  skill: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {

  // isConnected = false;
  // User;
  // Freelancer;
  // Company;

  skills: Skills[] = [];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor( private router: Router, private auth: AuthService, public dialog: MatDialog) {
  }

  ngOnInit() {
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

  openLogin(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.height = '520px';

    const dialogRef = this.dialog.open(LoginComponent, dialogConfig);
  }

  openRegister() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '330px';
    // dialogConfig.height = '400px';
    const dialogRef = this.dialog.open(RegisterComponent, dialogConfig);
  }

}
