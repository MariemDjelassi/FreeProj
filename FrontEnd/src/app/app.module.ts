import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { RegisterFreelancerComponent } from './register-freelancer/register-freelancer.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyComponent } from './company/company.component';
import { EditProfilComponent } from './company/edit-profil/edit-profil.component';
import { AddProjectComponent } from './company/add-project/add-project.component';


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
    EditProfilComponent,
    AddProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
