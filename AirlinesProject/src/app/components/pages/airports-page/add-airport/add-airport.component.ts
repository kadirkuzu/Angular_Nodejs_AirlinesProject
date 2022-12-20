import { Country } from '@angular-material-extensions/select-country';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Airport } from 'src/app/models/airport';
import { Company } from 'src/app/models/company';
import { AirportService } from 'src/app/services/airport.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-add-airport',
  templateUrl: './add-airport.component.html',
  styleUrls: ['./add-airport.component.scss']
})
export class AddAirportComponent implements OnInit {
  managementList:Company[] = []
  @Input() airport?:Airport
  @Output() updatedAirport = new EventEmitter<Airport>();

  constructor(private airportService:AirportService,private toastr: ToastrService,private companyService:CompanyService,private router:Router) { }

  addAirportForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
    city: new FormControl('',[Validators.required]),
    country: new FormControl('TR',[Validators.required]),
    airportManagementId: new FormControl(undefined as any,[Validators.required]),
    planeCapacity: new FormControl(undefined as any,[Validators.required]),
    yearBuilt: new FormControl(undefined as any,[Validators.required,Validators.pattern("^[0-9 ()+]+$"),Validators.max(2022)]),
  })
  get name() { return this.addAirportForm.get('name') }
  get code() { return this.addAirportForm.get('code') }
  get city() { return this.addAirportForm.get('city') }
  get country() { return this.addAirportForm.get('country') }
  get airportManagementId() { return this.addAirportForm.get('airportManagementId') }
  get planeCapacity() { return this.addAirportForm.get('planeCapacity') }
  get yearBuilt() { return this.addAirportForm.get('yearBuilt') }

  defaultValue: Country = {
    alpha2Code:"TR",
    alpha3Code: "TUR",
    callingCode: "+90",
    name: "Turkey",
    numericCode: "792"
 };
 
  ngOnInit(): void {
    if(this.airport){
      this.addAirportForm.reset({...this.airport})
    }
    this.companyService.getAll("AirportManagements").subscribe(data=>{
      this.managementList = data
    })
  }

  discard(){
    this.addAirportForm.reset({country:"TR"})
  }

  add(){
    let airport:any = this.addAirportForm.value
    this.airportService.add(airport).subscribe({
      next : (data)=>{
        this.toastr.success("Airport added successfully","Successfull")
        this.discard()
      },
      error:(e)=>{
        this.toastr.error(e.error.message,"Error")
      }
    })
  }

  update(){
    let airport:any = this.addAirportForm.value
    this.airportService.update(airport,this.airport?.id!).subscribe({
      next : (data)=>{
        this.updatedAirport.emit(data.updatedAirport)
        this.toastr.success("Airport updated successfully","Successfull")
        this.addAirportForm.reset({...data.updatedAirport})
      },
      error:(e)=>{
        this.toastr.error(e.error.message,"Error")
      }
    })
  }

  addManagement(){
    this.router.navigate(["/add-company"])
  }

  onCountrySelected(event:any){
    this.addAirportForm?.patchValue({country:event.alpha2Code})
  }
}
