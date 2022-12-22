import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AircraftsPageComponent } from './components/pages/Aircrafts/aircrafts-page/aircrafts-page.component';
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
import { PilotsPageComponent } from './components/pages/Employees/pilots-page/pilots-page.component';
import { CabinPersonelsPageComponent } from './components/pages/Employees/./cabin-personels-page/cabin-personels-page.component';
import { CabinCrewsPageComponent } from './components/pages/Employees/./cabin-crews-page/cabin-crews-page.component';
import { GroundServicesChiefsPageComponent } from './components/pages/Employees/ground-services-chiefs-page/ground-services-chiefs-page.component';
import { GroundServicesCrewsPageComponent } from './components/pages/Employees/./ground-services-crews-page/ground-services-crews-page.component';
import { GroundServicesPersonelsPageComponent } from './components/pages/Employees/ground-services-personels-page/ground-services-personels-page.component';
import { CustomersPageComponent } from './components/pages/Customers/customers-page/customers-page.component';
import { AddCustomerComponent } from './components/pages/Customers/add-customer/add-customer.component';
import { TripsComponent } from './components/pages/Customers/trips/trips.component';
import { PaymentsComponent } from './components/pages/Customers/payments/payments.component';
import { FlightsComponent } from './components/pages/Customers/flights/flights.component';
import { RoutesPageComponent } from './components/pages/Customers/routes-page/routes-page.component';
import { CustomerDetailComponent } from './components/pages/Customers/customer-detail/customer-detail.component';
import { AddAircraftComponent } from './components/pages/Aircrafts/add-aircraft/add-aircraft.component';
import { AddAircraftModelComponent } from './components/pages/Aircrafts/add-aircraft-model/add-aircraft-model.component';
import { AircraftDetailComponent } from './components/pages/Aircrafts/aircraft-detail/aircraft-detail.component';
import { UpdateAircraftComponent } from './components/pages/Aircrafts/aircraft-detail/update-aircraft/update-aircraft.component';
import { AddEmployeeComponent } from './components/pages/Employees/add-employee/add-employee.component';
import { AddPilotComponent } from './components/pages/Employees/add-employee/add-pilot/add-pilot.component';
import { AddCabinPersonelComponent } from './components/pages/Employees/add-employee/add-cabin-personel/add-cabin-personel.component';
import { AddGroundServicePersonelComponent } from './components/pages/Employees/add-employee/add-ground-service-personel/add-ground-service-personel.component';
import { AddGroundServiceChiefComponent } from './components/pages/Employees/add-employee/add-ground-service-chief/add-ground-service-chief.component';

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
    CompanyDetailComponent,
    PilotsPageComponent,
    CabinPersonelsPageComponent,
    CabinCrewsPageComponent,
    GroundServicesChiefsPageComponent,
    GroundServicesPersonelsPageComponent,
    GroundServicesCrewsPageComponent,
    GroundServicesPersonelsPageComponent,
    CustomersPageComponent,
    AddCustomerComponent,
    TripsComponent,
    PaymentsComponent,
    FlightsComponent,
    RoutesPageComponent,
    CustomerDetailComponent,
    AddAircraftComponent,
    AddAircraftModelComponent,
    AircraftDetailComponent,
    UpdateAircraftComponent,
    AddEmployeeComponent,
    AddPilotComponent,
    AddCabinPersonelComponent,
    AddGroundServicePersonelComponent,
    AddGroundServiceChiefComponent,
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
