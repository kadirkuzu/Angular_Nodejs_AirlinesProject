import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftsPageComponent } from './components/pages/aircrafts-page/aircrafts-page.component';
import { AddAirportComponent } from './components/pages/airports-page/add-airport/add-airport.component';
import { AirportsPageComponent } from './components/pages/airports-page/airports-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'home',component:HomePageComponent},
  {path:'aircrafts',component:AircraftsPageComponent},
  {path:'airports',component:AirportsPageComponent},
  {path:'add-airport',component:AddAirportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
