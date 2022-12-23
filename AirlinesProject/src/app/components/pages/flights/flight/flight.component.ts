import { Component, Input, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { AirportService } from 'src/app/services/airport.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {
  @Input() flight! : Flight
  @Input() index! : number

  constructor(private airportService:AirportService) { }

  ngOnInit(): void {
    this.getAirports()
  }

  getAirports(){
    this.airportService.get(this.flight.departureAirportId).subscribe(data=>{
      this.flight.departureAirportCode = data.code
      this.flight.departureAirportName = data.name
    })
    this.airportService.get(this.flight.arrivalAirportId).subscribe(data=>{
      this.flight.arrivalAirportCode = data.code
      this.flight.arrivalAirportName = data.name
    })
  }


}
