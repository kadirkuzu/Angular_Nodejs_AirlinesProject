import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AirportService } from 'src/app/services/airport.service';

@Component({
  selector: 'app-add-airport',
  templateUrl: './add-airport.component.html',
  styleUrls: ['./add-airport.component.scss']
})
export class AddAirportComponent implements OnInit {

  constructor(private airportService:AirportService,private toastr: ToastrService) { }

  addAirportForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
    city: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required]),
  })
  get name() { return this.addAirportForm.get('name') }
  get code() { return this.addAirportForm.get('code') }
  get city() { return this.addAirportForm.get('city') }
  get country() { return this.addAirportForm.get('country') }

  ngOnInit(): void {
  }

  discard(){
    this.addAirportForm.reset()
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
}
