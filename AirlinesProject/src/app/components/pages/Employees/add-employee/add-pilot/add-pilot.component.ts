import { Country } from '@angular-material-extensions/select-country';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Pilot } from 'src/app/models/employees';
import { EmployeeService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-pilot',
  templateUrl: './add-pilot.component.html',
  styleUrls: ['./add-pilot.component.scss']
})
export class AddPilotComponent implements OnInit {
  @Input() pilot?:Pilot

  constructor(private employeeService:EmployeeService,private toastr:ToastrService) { }


  addPilotForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]),
    name: new FormControl('', [Validators.required]),
    phone : new FormControl('',[Validators.required,Validators.pattern("^[0-9 ()+]+$"), Validators.minLength(5)]),
    dob: new FormControl('', [Validators.required]),
    nationality: new FormControl('TR', [Validators.required]),
    yearStarted: new FormControl(undefined as any,[Validators.required,Validators.pattern("^[0-9 ()+]+$"),Validators.min(1800),Validators.max(2022)])
  })

  ngOnInit(): void {
  }
  
  get email() { return this.addPilotForm.get('email') }
  get name() { return this.addPilotForm.get('name') }
  get dob() { return this.addPilotForm.get('dob') }
  get phone() { return this.addPilotForm.get('phone') }
  get nationality() { return this.addPilotForm.get('nationality') }
  get yearStarted() { return this.addPilotForm.get('yearStarted') }

  defaultValue: Country = {
    alpha2Code:"TR",
    alpha3Code: "TUR",
    callingCode: "+90",
    name: "Turkey",
    numericCode: "792"
  };

  onCountrySelected(event:any){
    this.addPilotForm?.patchValue({nationality:event.alpha2Code})
  }

  discard(){
    this.addPilotForm.reset({nationality:"TR"})
  }

  add(){
    let pilot:any = this.addPilotForm.value
    this.employeeService.add("pilots",pilot).subscribe({
      next : (data)=>{
        this.toastr.success("Pilot added successfully","Successfull")
        this.discard()
      },
      error:(e)=>{
        this.toastr.error(e.error.message,"Error")
      }
    })
  }

  update(){
    // let airport:any = this.addAirportForm.value
    // this.airportService.update(airport,this.airport?.id!).subscribe({
    //   next : (data)=>{
    //     this.updatedAirport.emit(data.updatedAirport)
    //     this.toastr.success("Airport updated successfully","Successfull")
    //     this.addAirportForm.reset({...data.updatedAirport})
    //   },
    //   error:(e)=>{
    //     this.toastr.error(e.error.message,"Error")
    //   }
    // })
  }


}
