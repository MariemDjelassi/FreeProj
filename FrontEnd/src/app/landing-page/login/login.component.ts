import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { UserApiService } from './../../services/user-api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(  private router: Router, private userService: UserApiService, private authService: AuthService) {
    this.loginForm = new FormGroup ({
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  ngOnInit() {
  }

  login(form) {
    this.userService.loginUser(form.value).subscribe((res: any) => {
      console.log(res);
      if (res.success === 'true') {
        this.authService.setToken(res.access_token);
        this.authService.connectedUser = this.authService.getDecodeToken();
        console.log( this.authService.connectedUser);
        const role = this.authService.connectedUser.role;
        if ( role === 'Freelancer') {
          this.router.navigate(['/freelancer']);
        } else {
          this.router.navigate(['/company']);
        }
      } else {
        console.log('user invalide');
      }
    });
  }

}
