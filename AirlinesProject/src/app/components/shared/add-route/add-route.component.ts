import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Airport } from 'src/app/models/airport';
import { AirportService } from 'src/app/services/airport.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.component.html',
  styleUrls: ['./add-route.component.scss']
})
export class AddRouteComponent implements OnInit {
  airports:Airport[] = []
  constructor(private router:Router,private routeService:RouteService,private toastr:ToastrService,private airportService:AirportService) { }

  addRouteForm = new FormGroup({
    departureAirportId : new FormControl(undefined, [Validators.required]),
    arrivalAirportId : new FormControl(undefined, [Validators.required]),
    hour : new FormControl(undefined,[Validators.required,Validators.min(0)]),
    minute : new FormControl(undefined,[Validators.required,Validators.min(0),Validators.max(59)]),
  })

  get departureAirportId() { return this.addRouteForm.get('departureAirportId') }
  get arrivalAirportId() { return this.addRouteForm.get('arrivalAirportId') }
  get hour() { return this.addRouteForm.get('hour') }
  get minute() { return this.addRouteForm.get('minute') }

  ngOnInit(): void {
    this.getAirports()
  }

  getAirports(){
    this.airportService.getAll().subscribe(data=>{
      this.airports = data
    })
  }

  navigate(){
    this.router.navigate(['add-airport'])
  }

  discard(){
    this.addRouteForm.reset()
  }

  add(){
    let airport:any = {
      departureAirportId:this.departureAirportId?.value,
      arrivalAirportId:this.arrivalAirportId?.value,
      flightTime:(this.hour?.value!)*60 + this.minute?.value!
    }
    this.routeService.add(airport).subscribe({
      next : (data)=>{
        this.toastr.success("Route added successfully","Successfull")
        this.discard()
      },
      error:(e)=>{
        this.toastr.error(e.error.message,"Error")
      }
    })
  }

  isDisabled(){
    return this.addRouteForm.invalid || (this.arrivalAirportId?.value == this.departureAirportId?.value)
  }

}
