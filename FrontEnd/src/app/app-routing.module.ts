import { AddProjectComponent } from './company/add-project/add-project.component';
import { EditProfilComponent } from './company/edit-profil/edit-profil.component';
import { CompanyComponent } from './company/company.component';
import { AuthGuard } from './authenticate/auth.guard';
import { RegisterFreelancerComponent } from './register-freelancer/register-freelancer.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
// tslint:disable-next-line:max-line-length
import { MatNativeDateModule, MatIconModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatListModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';

const routes: Routes = [
  {path : '', pathMatch : 'full', redirectTo : 'home'},
  {path : 'home', component : HomeComponent},
  {path : 'login', component : LoginComponent},
  {path : 'registerCompany', component : RegisterCompanyComponent},
  {path : 'registerFreelancer', component : RegisterFreelancerComponent},
  {path : 'company', component : CompanyComponent, canActivate : [AuthGuard],
    children : [
    {
      path : 'editProfil',
      component : EditProfilComponent,
    },
    {
      path : 'addProject',
      component : AddProjectComponent,
    }]
  },

];

@NgModule({
  // tslint:disable-next-line:max-line-length
  imports: [RouterModule.forRoot(routes), MatButtonModule, MatToolbarModule, MatNativeDateModule, MatDatepickerModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatRadioModule],
  // tslint:disable-next-line:max-line-length
  exports: [RouterModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatDatepickerModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatRadioModule]
})
export class AppRoutingModule { }
