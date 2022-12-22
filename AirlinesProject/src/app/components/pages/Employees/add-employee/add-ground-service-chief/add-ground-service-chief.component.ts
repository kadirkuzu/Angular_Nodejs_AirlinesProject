import { Country } from '@angular-material-extensions/select-country';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GroundServiceChief } from 'src/app/models/employees';
import { EmployeeService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-ground-service-chief',
  templateUrl: './add-ground-service-chief.component.html',
  styleUrls: ['./add-ground-service-chief.component.scss']
})
export class AddGroundServiceChiefComponent implements OnInit {

  @Input() groundServiceChief?:GroundServiceChief

  constructor(private employeeService:EmployeeService,private toastr:ToastrService) { }


  addServiceChiefForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]),
    name: new FormControl('', [Validators.required]),
    phone : new FormControl('',[Validators.required,Validators.pattern("^[0-9 ()+]+$"), Validators.minLength(5)]),
    dob: new FormControl('', [Validators.required]),
    nationality: new FormControl('TR', [Validators.required]),
    salary: new FormControl(undefined as any, [Validators.required]),
    yearStarted: new FormControl(undefined as any,[Validators.required,Validators.pattern("^[0-9 ()+]+$"),Validators.min(1800),Validators.max(2022)])
  })

  ngOnInit(): void {
  }
  
  get email() { return this.addServiceChiefForm.get('email') }
  get name() { return this.addServiceChiefForm.get('name') }
  get dob() { return this.addServiceChiefForm.get('dob') }
  get phone() { return this.addServiceChiefForm.get('phone') }
  get nationality() { return this.addServiceChiefForm.get('nationality') }
  get yearStarted() { return this.addServiceChiefForm.get('yearStarted') }
  get salary() { return this.addServiceChiefForm.get('salary') }

  defaultValue: Country = {
    alpha2Code:"TR",
    alpha3Code: "TUR",
    callingCode: "+90",
    name: "Turkey",
    numericCode: "792"
  };

  onCountrySelected(event:any){
    this.addServiceChiefForm?.patchValue({nationality:event.alpha2Code})
  }

  discard(){
    this.addServiceChiefForm.reset({nationality:"TR"})
  }

  add(){
    let serviceChef:any = this.addServiceChiefForm.value
    this.employeeService.add("ground-service-chiefs",serviceChef).subscribe({
      next : (data)=>{
        this.toastr.success("Ground service chief added successfully","Successfull")
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
