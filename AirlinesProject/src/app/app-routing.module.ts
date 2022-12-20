import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/header/login/login.component';
import { RegisterComponent } from './components/header/register/register.component';
import { AddAircraftModelComponent } from './components/pages/Aircrafts/add-aircraft-model/add-aircraft-model.component';
import { AddAircraftComponent } from './components/pages/Aircrafts/add-aircraft/add-aircraft.component';
import { AircraftsPageComponent } from './components/pages/Aircrafts/aircrafts-page/aircrafts-page.component';
import { AddAirportComponent } from './components/pages/airports-page/add-airport/add-airport.component';
import { AirportDetailComponent } from './components/pages/airports-page/airport-detail/airport-detail.component';
import { AirportsPageComponent } from './components/pages/airports-page/airports-page.component';
import { AddCompanyComponent } from './components/pages/Companies/add-company/add-company.component';
import { AirportManagementsPageComponent } from './components/pages/Companies/airport-managements-page/airport-managements-page.component';
import { CompanyDetailComponent } from './components/pages/Companies/company-detail/company-detail.component';
import { GroundServicesPageComponent } from './components/pages/Companies/ground-services-page/ground-services-page.component';
import { ManufecturersPageComponent } from './components/pages/Companies/manufecturers-page/manufecturers-page.component';
import { PlaneOwnersPageComponent } from './components/pages/Companies/plane-owners-page/plane-owners-page.component';
import { AddCustomerComponent } from './components/pages/Customers/add-customer/add-customer.component';
import { CustomerDetailComponent } from './components/pages/Customers/customer-detail/customer-detail.component';
import { CustomersPageComponent } from './components/pages/Customers/customers-page/customers-page.component';
import { FlightsComponent } from './components/pages/Customers/flights/flights.component';
import { PaymentsComponent } from './components/pages/Customers/payments/payments.component';
import { RoutesPageComponent } from './components/pages/Customers/routes-page/routes-page.component';
import { TripsComponent } from './components/pages/Customers/trips/trips.component';
import { CabinPersonelsPageComponent } from './components/pages/Employees/cabin-personels-page/cabin-personels-page.component';
import { GroundServicesChiefsPageComponent } from './components/pages/Employees/ground-services-chiefs-page/ground-services-chiefs-page.component';
import { PilotsPageComponent } from './components/pages/Employees/pilots-page/pilots-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'home',component:HomePageComponent},
  {path:'aircrafts',component:AircraftsPageComponent},
  {path:'add-aircraft',component:AddAircraftComponent},
  {path:'airports',component:AirportsPageComponent},
  {path:'add-airport',component:AddAirportComponent},
  {path:'airports/:id',component:AirportDetailComponent},
  {path:'companies/airport-managements',component:AirportManagementsPageComponent},
  {path:'companies/ground-services',component:GroundServicesPageComponent},
  {path:'companies/manufacturers',component:ManufecturersPageComponent},
  {path:'companies/plane-owners',component:PlaneOwnersPageComponent},
  {path:'companies/:companyType/:id',component:CompanyDetailComponent},
  {path:'add-company',component:AddCompanyComponent},
  {path:'employees/pilots',component:PilotsPageComponent},
  {path:'employees/cabin-personels',component:CabinPersonelsPageComponent},
  {path:'customers',component:CustomersPageComponent},
  {path:'add-customer',component:AddCustomerComponent},
  {path:'customers/flights',component:FlightsComponent},
  {path:'customers/payments',component:PaymentsComponent},
  {path:'customers/routes',component:RoutesPageComponent},
  {path:'customers/trips',component:TripsComponent},
  {path:'customer/:id',component:CustomerDetailComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
