import { Component, Input, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { Flight } from 'src/app/models/flight';
import { Trip } from 'src/app/models/trip';
import { AirportService } from 'src/app/services/airport.service';
import { CustomerService } from 'src/app/services/customer.service';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {
  @Input() trip!:Trip
  @Input() index!:number

  customer?:Customer
  flight?:Flight

  constructor(private flightService:FlightService,private customerService:CustomerService,private airportService:AirportService) { }

  ngOnInit(): void {
    this.customerService.get(this.trip.customerId).subscribe(data=>this.customer = data)
    this.flightService.getAll().pipe().subscribe(data=>{
      this.flight = data.find(data=>data.id == this.trip?.flightId)
      this.getAirports()
    })
  }

  getAirports(){
    this.airportService.get(this.flight!.departureAirportId).subscribe(data=>{
      this.flight!.departureAirportCode = data.code
      this.flight!.departureAirportName = data.name
    })
    this.airportService.get(this.flight!.arrivalAirportId).subscribe(data=>{
      this.flight!.arrivalAirportCode = data.code
      this.flight!.arrivalAirportName = data.name
    })
  }

  getAge(date:any){
    date = new Date(date)
    let m =  new Date (Date.now() - date.getTime())
    let year = m.getUTCFullYear()
    return Math.abs(year-1970)
  }

}
