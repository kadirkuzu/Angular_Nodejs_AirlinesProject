import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { Flight } from 'src/app/models/flight';
import { AirportService } from 'src/app/services/airport.service';
import { CustomerService } from 'src/app/services/customer.service';
import { FlightService } from 'src/app/services/flight.service';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.scss']
})
export class AddTripComponent implements OnInit {

  flights:Flight[] = []
  customers:Customer[] = []

  constructor(private airportService:AirportService,private toastr: ToastrService,private router:Router,private flightService:FlightService,private tripService:TripService,private customerService:CustomerService) { }

  addTripForm = new FormGroup({
    flightId: new FormControl(undefined, [Validators.required]),
    customerId: new FormControl(undefined, [Validators.required]),
    tripRating: new FormControl(undefined,[Validators.required,Validators.min(0),Validators.max(5)])
  })

  get flightId() { return this.addTripForm.get('flightId') }
  get customerId() { return this.addTripForm.get('customerId') }
  get tripRating() { return this.addTripForm.get('tripRating') }
 
  
  ngOnInit(): void {
    this.getAllList()
  }

  discard(){
    this.addTripForm.reset()
  }

  getAllList(){
    this.customerService.getAll().subscribe(data => this.customers = data)
    this.flightService.getAll().subscribe(data=>{
      this.flights = data
      this.getAirports()
    })
    this.getAirports()
  }

  getAirports(){
    this.flights.forEach(flight=>{
      this.airportService.get(flight.departureAirportId).subscribe(data=>{
        flight.departureAirportCode = data.code
        flight.departureAirportName = data.name
      })
      this.airportService.get(flight.arrivalAirportId).subscribe(data=>{
        flight.arrivalAirportCode = data.code
        flight.arrivalAirportName = data.name
      })
    })

  }

  add(){
    let trip:any = this.addTripForm.value
    this.tripService.add(trip).subscribe({
      next : (data)=>{
        this.toastr.success("Trip added successfully","Successfull")
        this.discard()
      },
      error:(e)=>{
        this.toastr.error(e.error.message,"Error")
      }
    })
  }

  routeTo(route:string){
    this.router.navigate([route])
  }

}
