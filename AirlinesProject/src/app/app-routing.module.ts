import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/header/login/login.component';
import { RegisterComponent } from './components/header/register/register.component';
import { AddAircraftModelComponent } from './components/pages/Aircrafts/add-aircraft-model/add-aircraft-model.component';
import { AddAircraftComponent } from './components/pages/Aircrafts/add-aircraft/add-aircraft.component';
import { AircraftDetailComponent } from './components/pages/Aircrafts/aircraft-detail/aircraft-detail.component';
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
import { FlightsComponent } from './components/pages/flights/flights.component';
import { RoutesPageComponent } from './components/pages/airports-page/routes-page/routes-page.component';
import { TripsComponent } from './components/pages/Customers/trips/trips.component';
import { AddEmployeeComponent } from './components/pages/Employees/add-employee/add-employee.component';
import { CabinCrewsPageComponent } from './components/pages/Employees/cabin-crews-page/cabin-crews-page.component';
import { CabinPersonelsPageComponent } from './components/pages/Employees/cabin-personels-page/cabin-personels-page.component';
import { GroundServicesChiefsPageComponent } from './components/pages/Employees/ground-services-chiefs-page/ground-services-chiefs-page.component';
import { GroundServicesCrewsPageComponent } from './components/pages/Employees/ground-services-crews-page/ground-services-crews-page.component';
import { GroundServicesPersonelsPageComponent } from './components/pages/Employees/ground-services-personels-page/ground-services-personels-page.component';
import { PilotsPageComponent } from './components/pages/Employees/pilots-page/pilots-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LoginGuard } from './guards/login.guard';
import { LogoutGuard } from './guards/logout.guard';
import { AddFlightComponent } from './components/pages/flights/add-flight/add-flight.component';
import { AddTripComponent } from './components/pages/Customers/trips/add-trip/add-trip.component';
import { MyPageComponent } from './components/header/my-page/my-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'home',component:HomePageComponent},
  {path:'aircrafts',component:AircraftsPageComponent,canActivate:[LoginGuard]},
  {path:'aircrafts/:id',component:AircraftDetailComponent,canActivate:[LoginGuard]},
  {path:'add-aircraft',component:AddAircraftComponent,canActivate:[LoginGuard]},
  {path:'airports',component:AirportsPageComponent,canActivate:[LoginGuard]},
  {path:'add-airport',component:AddAirportComponent,canActivate:[LoginGuard]},
  {path:'airports/:id',component:AirportDetailComponent,canActivate:[LoginGuard]},
  {path:'routes',component:RoutesPageComponent,canActivate:[LoginGuard]},
  {path:'flights',component:FlightsComponent,canActivate:[LoginGuard]},
  {path:'add-flight',component:AddFlightComponent,canActivate:[LoginGuard]},
  {path:'companies/airport-managements',component:AirportManagementsPageComponent,canActivate:[LoginGuard]},
  {path:'companies/ground-services',component:GroundServicesPageComponent,canActivate:[LoginGuard]},
  {path:'companies/manufacturers',component:ManufecturersPageComponent,canActivate:[LoginGuard]},
  {path:'companies/plane-owners',component:PlaneOwnersPageComponent,canActivate:[LoginGuard]},
  {path:'companies/:companyType/:id',component:CompanyDetailComponent,canActivate:[LoginGuard]},
  {path:'add-company',component:AddCompanyComponent,canActivate:[LoginGuard]},
  {path:'add-employee',component:AddEmployeeComponent,canActivate:[LoginGuard]},
  {path:'employees/pilots',component:PilotsPageComponent,canActivate:[LoginGuard]},
  {path:'employees/cabin-personels',component:CabinPersonelsPageComponent,canActivate:[LoginGuard]},
  {path:'employees/cabin-crews',component:CabinCrewsPageComponent,canActivate:[LoginGuard]},
  {path:'employees/ground-services-personels',component:GroundServicesPersonelsPageComponent,canActivate:[LoginGuard]},
  {path:'employees/ground-services-crews',component:GroundServicesCrewsPageComponent,canActivate:[LoginGuard]},
  {path:'employees/ground-services-chiefs',component:GroundServicesChiefsPageComponent,canActivate:[LoginGuard]},
  {path:'customers',component:CustomersPageComponent,canActivate:[LoginGuard]},
  {path:'add-customer',component:AddCustomerComponent,canActivate:[LoginGuard]},
  {path:'customers/trips',component:TripsComponent,canActivate:[LoginGuard]},
  {path:'customers/add-trip',component:AddTripComponent,canActivate:[LoginGuard]},
  {path:'customer/:id',component:CustomerDetailComponent},
  {path:'login',component:LoginComponent,canActivate:[LogoutGuard]},
  {path:'register',component:RegisterComponent,canActivate:[LogoutGuard]},
  {path:'my-page',component:MyPageComponent,canActivate:[LoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
