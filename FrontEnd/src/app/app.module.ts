import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { ApplyOfferComponent } from './freelancer/apply-offer/apply-offer.component';
import { EditProfilFreelComponent } from './freelancer/edit-profil-freel/edit-profil-freel.component';
import { EditProfilCompComponent } from './company/edit-profil-comp/edit-profil-comp.component';
import { ListProjectsComponent } from './company/list-projects/list-projects.component';
import { DeleteDialogComponent } from './company/list-projects/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './company/list-projects/edit-dialog/edit-dialog.component';


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
    ApplyOfferComponent,
    EditProfilFreelComponent,
    EditProfilCompComponent,
    ListProjectsComponent,
    DeleteDialogComponent,
    EditDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule,
    MaterialModule
  ],
  exports: [DeleteDialogComponent, EditDialogComponent],
  entryComponents: [DeleteDialogComponent, EditDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
