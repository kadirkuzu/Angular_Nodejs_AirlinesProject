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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    AirportsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
      positionClass:"toast-top-right"
    }),
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(options),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
