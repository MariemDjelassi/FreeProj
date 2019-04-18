import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatNativeDateModule, MatIconModule, MatCheckboxModule} from '@angular/material';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatListModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule, MatToolbarModule } from '@angular/material';

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
import { ListProjectsComponent } from './freelancer/list-projects/list-projects.component';
import { EditProfilFreelComponent } from './freelancer/edit-profil-freel/edit-profil-freel.component';
import { EditProfilCompComponent } from './company/edit-profil-comp/edit-profil-comp.component';



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
    ListProjectsComponent,
    EditProfilFreelComponent,
    EditProfilCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    JwtModule,
    MatButtonModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
