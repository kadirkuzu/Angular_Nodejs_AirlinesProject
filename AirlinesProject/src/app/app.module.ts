import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AircraftsPageComponent } from './components/pages/aircrafts-page/aircrafts-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { HeaderComponent } from './components/header/header/header.component';
import { SharedModule } from './components/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AirportsModule } from './components/pages/airports-page/airports.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/header/login/login.component';
import { RegisterComponent } from './components/header/register/register.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { AirportManagementsPageComponent } from './components/pages/Companies/airport-managements-page/airport-managements-page.component';
import { ManufecturersPageComponent } from './components/pages/Companies/manufecturers-page/manufecturers-page.component';
import { AddCompanyComponent } from './components/pages/Companies/add-company/add-company.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { PlaneOwnersPageComponent } from './components/pages/Companies/plane-owners-page/plane-owners-page.component';
import { GroundServicesPageComponent } from './components/pages/Companies/ground-services-page/ground-services-page.component';
import { CompanyDetailComponent } from './components/pages/Companies/company-detail/company-detail.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {
  showMaskTyped: false,
  showTemplate: true,
};
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AircraftsPageComponent,
    NavbarComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    AirportManagementsPageComponent,
    ManufecturersPageComponent,
    AddCompanyComponent,
    PlaneOwnersPageComponent,
    GroundServicesPageComponent,
    CompanyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    AirportsModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
      positionClass:"toast-top-right"
    }),
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(options),
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectCountryModule.forRoot('en'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
