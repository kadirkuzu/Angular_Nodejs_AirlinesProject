import { Country } from '@angular-material-extensions/select-country';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CabinPersonel } from 'src/app/models/employees';
import { EmployeeService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-cabin-personel',
  templateUrl: './add-cabin-personel.component.html',
  styleUrls: ['./add-cabin-personel.component.scss']
})
export class AddCabinPersonelComponent implements OnInit {
  
  @Input() cabinPersonel?:CabinPersonel

  constructor(private employeeService:EmployeeService,private toastr:ToastrService) { }


  addCabinPersonelForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]),
    name: new FormControl('', [Validators.required]),
    phone : new FormControl('',[Validators.required,Validators.pattern("^[0-9 ()+]+$"), Validators.minLength(5)]),
    dob: new FormControl('', [Validators.required]),
    nationality: new FormControl('TR', [Validators.required]),
    salary: new FormControl(undefined as any, [Validators.required]),
  })

  ngOnInit(): void {
  }
  
  get email() { return this.addCabinPersonelForm.get('email') }
  get name() { return this.addCabinPersonelForm.get('name') }
  get dob() { return this.addCabinPersonelForm.get('dob') }
  get phone() { return this.addCabinPersonelForm.get('phone') }
  get nationality() { return this.addCabinPersonelForm.get('nationality') }
  get salary() { return this.addCabinPersonelForm.get('salary') }

  defaultValue: Country = {
    alpha2Code:"TR",
    alpha3Code: "TUR",
    callingCode: "+90",
    name: "Turkey",
    numericCode: "792"
  };

  onCountrySelected(event:any){
    this.addCabinPersonelForm?.patchValue({nationality:event.alpha2Code})
  }

  discard(){
    this.addCabinPersonelForm.reset({nationality:"TR"})
  }

  add(){
    let cabinPersonel:any = this.addCabinPersonelForm.value
    this.employeeService.add("cabin-personels",cabinPersonel).subscribe({
      next : (data)=>{
        this.toastr.success("Cabin personel added successfully","Successfull")
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
