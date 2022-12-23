import { Country } from '@angular-material-extensions/select-country';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GroundServicePersonel } from 'src/app/models/employees';
import { EmployeeService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-ground-service-personel',
  templateUrl: './add-ground-service-personel.component.html',
  styleUrls: ['./add-ground-service-personel.component.scss']
})
export class AddGroundServicePersonelComponent implements OnInit {

  @Input() groundServicePersonel?:GroundServicePersonel

  constructor(private employeeService:EmployeeService,private toastr:ToastrService) { }

  crewList:any

  addGroundServicePersonelForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]),
    name: new FormControl('', [Validators.required]),
    phone : new FormControl('',[Validators.required,Validators.pattern("^[0-9 ()+]+$"), Validators.minLength(5)]),
    dob: new FormControl('', [Validators.required]),
    nationality: new FormControl('TR', [Validators.required]),
    salary: new FormControl(undefined as any, [Validators.required]),
    crewId: new FormControl(undefined as any, [Validators.required]),
  })

  ngOnInit(): void {
    this.getCrews()
  }
  
  get email() { return this.addGroundServicePersonelForm.get('email') }
  get name() { return this.addGroundServicePersonelForm.get('name') }
  get dob() { return this.addGroundServicePersonelForm.get('dob') }
  get phone() { return this.addGroundServicePersonelForm.get('phone') }
  get nationality() { return this.addGroundServicePersonelForm.get('nationality') }
  get salary() { return this.addGroundServicePersonelForm.get('salary') }
  get crewId() { return this.addGroundServicePersonelForm.get('crewId') }

  defaultValue: Country = {
    alpha2Code:"TR",
    alpha3Code: "TUR",
    callingCode: "+90",
    name: "Turkey",
    numericCode: "792"
  };

  getCrews(){
    this.employeeService.getAll("ground-service-crews").subscribe(data=>{
      this.crewList = data
    })
  }

  onCountrySelected(event:any){
    this.addGroundServicePersonelForm?.patchValue({nationality:event.alpha2Code})
  }

  discard(){
    this.addGroundServicePersonelForm.reset({nationality:"TR"})
  }

  add(){
    let cabinPersonel:any = this.addGroundServicePersonelForm.value
    this.employeeService.add("ground-service-personels",cabinPersonel).subscribe({
      next : (data)=>{
        this.toastr.success("Ground service personel added successfully","Successfull")
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
