import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Aircraft } from 'src/app/models/aircraft';
import { AircraftService } from 'src/app/services/aircraft.service';
import { EmployeeService } from 'src/app/services/employees.service';
import { FlightService } from 'src/app/services/flight.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.scss']
})
export class AddFlightComponent implements OnInit {
  aircrafts:Aircraft[] = []
  cabinCrews:any = []
  groundServicesCrews:any = []
  routes:any = []
  minDate = new Date()

  constructor(private aircraftService:AircraftService,private employeeService:EmployeeService,private routeService:RouteService,
    private toastr: ToastrService,private router:Router,private flightService:FlightService) { }

  addFlightForm = new FormGroup({
    aircraftId: new FormControl(undefined, [Validators.required]),
    CCrewId: new FormControl(undefined, [Validators.required]),
    GSCrewId: new FormControl(undefined,[Validators.required]),
    routeId: new FormControl(undefined,[Validators.required]),
    flightDate: new FormControl(undefined as any,[Validators.required])
  })
  get aircraftId() { return this.addFlightForm.get('aircraftId') }
  get CCrewId() { return this.addFlightForm.get('CCrewId') }
  get GSCrewId() { return this.addFlightForm.get('GSCrewId') }
  get routeId() { return this.addFlightForm.get('routeId') }
  get flightDate() { return this.addFlightForm.get('flightDate') }
 
  
  ngOnInit(): void {
    this.getAllList()
  }

  discard(){
    this.addFlightForm.reset()
  }

  getAllList(){
    this.aircraftService.getAll().subscribe(data=> this.aircrafts = data)
    this.employeeService.getAll("cabin-crews").subscribe(data=> this.cabinCrews = data)
    this.employeeService.getAll("ground-service-crews").subscribe(data=> this.groundServicesCrews = data)
    this.getRoutes()
  }

  getRoutes(){
    this.routeService.getAll().subscribe(data=> this.routes = data)
  }

  add(){
    let flight:any = this.addFlightForm.value
    this.flightService.add(flight).subscribe({
      next : (data)=>{
        this.toastr.success("Flight added successfully","Successfull")
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
