import { EditProfilCompComponent } from './company/edit-profil-comp/edit-profil-comp.component';
import { EditProfilFreelComponent } from './freelancer/edit-profil-freel/edit-profil-freel.component';
import { ListProjectsComponent } from './freelancer/list-projects/list-projects.component';
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
    },
    {
      path : 'listProjects',
      component : ListProjectsComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
