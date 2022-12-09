import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AircraftsPageComponent } from './components/pages/aircrafts-page/aircrafts-page.component';
import { AirportsPageComponent } from './components/pages/airports-page/airports-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { HeaderComponent } from './components/header/header/header.component';
import { MatTableModule } from '@angular/material/table' 

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AircraftsPageComponent,
    AirportsPageComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
