import { ListOffersComponent } from './company/list-offers/list-offers.component';
import { ChangePwrdCompComponent } from './company/change-pwrd-comp/change-pwrd-comp.component';
import { DetailsProjectComponent } from './freelancer/details-project/details-project.component';
import { ViewProfilCompComponent } from './company/view-profil-comp/view-profil-comp.component';
import { ViewProfilFreelComponent } from './freelancer/view-profil-freel/view-profil-freel.component';
import { ListAllProjComponent } from './freelancer/list-all-proj/list-all-proj.component';
import { ChangePwrdFreelComponent } from './freelancer/change-pwrd-freel/change-pwrd-freel.component';
import { DeleteDialogComponent } from './company/list-projects/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './company/list-projects/edit-dialog/edit-dialog.component';
import { ListProjectsComponent } from './company/list-projects/list-projects.component';
import { EditProfilCompComponent } from './company/edit-profil-comp/edit-profil-comp.component';
import { EditProfilFreelComponent } from './freelancer/edit-profil-freel/edit-profil-freel.component';
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
    },
    {
      path : 'viewProfilComp',
      component : ViewProfilCompComponent,
    },
    {
      path : 'changePwrdComp',
      component : ChangePwrdCompComponent,
    },
    {
      path : 'listOffers',
      component : ListOffersComponent,
    }]
  },
  {path : 'freelancer', component : FreelancerComponent,
    children : [
    {
      path : 'editProfilFreel',
      component : EditProfilFreelComponent,
    },
    {
      path : 'viewProfilFreel',
      component : ViewProfilFreelComponent,
    },
    {
      path : 'listAllProj',
      component : ListAllProjComponent,
    },
    {
      path : 'changePwrdFreel',
      component : ChangePwrdFreelComponent,
    },
    {
      path : 'detailsProject/:id',
      component : DetailsProjectComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
