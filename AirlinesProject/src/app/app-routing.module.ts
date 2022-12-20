import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/header/login/login.component';
import { RegisterComponent } from './components/header/register/register.component';
import { AircraftsPageComponent } from './components/pages/aircrafts-page/aircrafts-page.component';
import { AddAirportComponent } from './components/pages/airports-page/add-airport/add-airport.component';
import { AirportDetailComponent } from './components/pages/airports-page/airport-detail/airport-detail.component';
import { AirportsPageComponent } from './components/pages/airports-page/airports-page.component';
import { AddCompanyComponent } from './components/pages/Companies/add-company/add-company.component';
import { AirportManagementsPageComponent } from './components/pages/Companies/airport-managements-page/airport-managements-page.component';
import { CompanyDetailComponent } from './components/pages/Companies/company-detail/company-detail.component';
import { GroundServicesPageComponent } from './components/pages/Companies/ground-services-page/ground-services-page.component';
import { ManufecturersPageComponent } from './components/pages/Companies/manufecturers-page/manufecturers-page.component';
import { PlaneOwnersPageComponent } from './components/pages/Companies/plane-owners-page/plane-owners-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'home',component:HomePageComponent},
  {path:'aircrafts',component:AircraftsPageComponent},
  {path:'airports',component:AirportsPageComponent},
  {path:'add-airport',component:AddAirportComponent},
  {path:'airports/:id',component:AirportDetailComponent},
  {path:'companies/airport-managements',component:AirportManagementsPageComponent},
  {path:'companies/ground-services',component:GroundServicesPageComponent},
  {path:'companies/manufacturers',component:ManufecturersPageComponent},
  {path:'companies/plane-owners',component:PlaneOwnersPageComponent},
  {path:'companies/:companyType/:id',component:CompanyDetailComponent},
  {path:'add-company',component:AddCompanyComponent},
  {path:'company',component:AddCompanyComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
