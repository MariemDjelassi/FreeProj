import { DeleteDialogComponent } from './company/list-projects/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './company/list-projects/edit-dialog/edit-dialog.component';
import { ListProjectsComponent } from './company/list-projects/list-projects.component';
import { EditProfilCompComponent } from './company/edit-profil-comp/edit-profil-comp.component';
import { EditProfilFreelComponent } from './freelancer/edit-profil-freel/edit-profil-freel.component';
import { ApplyOfferComponent } from './freelancer/apply-offer/apply-offer.component';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { AddProjectComponent } from './company/add-project/add-project.component';
import { CompanyComponent } from './company/company.component';
import { AuthGuard } from './authenticate/auth.guard';
import { RegisterFreelancerComponent } from './register-freelancer/register-freelancer.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

const routes: Routes = [
  {path : '', pathMatch : 'full', redirectTo : 'home'},
  {path : 'home', component : HomeComponent},
  {path : 'login', component : LoginComponent},
  {path : 'registerCompany', component : RegisterCompanyComponent},
  {path : 'registerFreelancer', component : RegisterFreelancerComponent},
  {path : 'company', component : CompanyComponent,
    children : [
    {
      path : 'editProfilComp',
      component : EditProfilCompComponent,
    },
    {
      path : 'addProject',
      component : AddProjectComponent,
    },
    {
      path : 'ListProjects',
      component : ListProjectsComponent,
      children : [
        {
          path : 'editDialog',
          component : EditDialogComponent,
        },
        {
          path : 'deleteDialog',
          component : DeleteDialogComponent,
        }
      ]
    }]
  },
  {path : 'freelancer', component : FreelancerComponent,
    children : [
    {
      path : 'editProfilFreel',
      component : EditProfilFreelComponent,
    },
    {
      path : 'applyOffer',
      component : ApplyOfferComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
