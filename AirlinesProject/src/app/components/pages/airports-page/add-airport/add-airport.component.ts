import { Country } from '@angular-material-extensions/select-country';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private airportService:AirportService,private toastr: ToastrService,private companyService:CompanyService,private router:Router) { }

  addAirportForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
    city: new FormControl('',[Validators.required]),
    country: new FormControl('TR',[Validators.required]),
    airportManagementId: new FormControl(undefined,[Validators.required]),
    planeCapacity: new FormControl(undefined,[Validators.required]),
    yearBuilt: new FormControl(undefined,[Validators.required,Validators.pattern("^[0-9 ()+]+$"),Validators.max(2022)]),
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

  addManagement(){
    this.router.navigate(["/add-airport-management"])
  }

  onCountrySelected(event:any){
    this.addAirportForm?.patchValue({country:event.alpha2Code})
  }
}
