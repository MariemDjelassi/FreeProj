import { ProjectSearchPipe } from './project-search.pipe';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { RegisterFreelancerComponent } from './register-freelancer/register-freelancer.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyComponent } from './company/company.component';
import { AddProjectComponent } from './company/add-project/add-project.component';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { EditProfilFreelComponent } from './freelancer/edit-profil-freel/edit-profil-freel.component';
import { EditProfilCompComponent } from './company/edit-profil-comp/edit-profil-comp.component';
import { ListProjectsComponent } from './company/list-projects/list-projects.component';
import { DeleteDialogComponent } from './company/list-projects/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './company/list-projects/edit-dialog/edit-dialog.component';
import { ListAllProjComponent } from './freelancer/list-all-proj/list-all-proj.component';
import { ChangePwrdFreelComponent } from './freelancer/change-pwrd-freel/change-pwrd-freel.component';
import { ChangePwrdCompComponent } from './company/change-pwrd-comp/change-pwrd-comp.component';
import { DetailsProjectComponent } from './freelancer/details-project/details-project.component';
import { ViewProfilCompComponent } from './company/view-profil-comp/view-profil-comp.component';
import { ViewProfilFreelComponent } from './freelancer/view-profil-freel/view-profil-freel.component';
import { ListOffersComponent } from './company/list-offers/list-offers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    RegisterCompanyComponent,
    RegisterFreelancerComponent,
    FooterComponent,
    CompanyComponent,
    AddProjectComponent,
    FreelancerComponent,
    EditProfilFreelComponent,
    EditProfilCompComponent,
    ListProjectsComponent,
    DeleteDialogComponent,
    EditDialogComponent,
    ListAllProjComponent,
    ChangePwrdFreelComponent,
    ProjectSearchPipe,
    ViewProfilFreelComponent,
    ViewProfilCompComponent,
    DetailsProjectComponent,
    ChangePwrdCompComponent,
    ListOffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule,
    MaterialModule,
    NgbModule,
    NgbModule.forRoot()
  ],
  exports: [DeleteDialogComponent, EditDialogComponent],
  entryComponents: [DeleteDialogComponent, EditDialogComponent],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
