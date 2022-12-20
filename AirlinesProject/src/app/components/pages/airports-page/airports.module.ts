import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from "../../shared/shared.module";
import { AirportsPageComponent } from "./airports-page.component";
import { AddAirportComponent } from "./add-airport/add-airport.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { CommonModule } from "@angular/common";
import { NgxMaskModule } from "ngx-mask";
import { MatSelectCountryModule } from "@angular-material-extensions/select-country";
import { AirportDetailComponent } from './airport-detail/airport-detail.component';
import { UpdateAirportComponent } from './airport-detail/update-airport/update-airport.component';

@NgModule({
  declarations: [
    AirportsPageComponent,
    AddAirportComponent,
    AirportDetailComponent,
    UpdateAirportComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    CommonModule,
    NgxMaskModule,
    MatSelectCountryModule.forRoot('en'),

  ],
  exports: [
    MatTableModule,
    
  ]
})
export class AirportsModule { }
