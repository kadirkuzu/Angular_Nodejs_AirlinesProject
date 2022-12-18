import { Country } from '@angular-material-extensions/select-country';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {

  companyList = [
    {
      name:"Airport Management",
      value:"AirportManagements"
    },
    {
      name:"Manufacturer",
      value:"Manufacturers"
    },
    {
      name:"Plane Owner",
      value:"PlaneOwners"
    },
    {
      name:"Ground Service",
      value:"GroundServices"
    }
  ]

  constructor(private companyService:CompanyService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  addCompanyForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    city: new FormControl('',[Validators.required]),
    country: new FormControl('TR',[Validators.required]),
    contactName: new FormControl('',[Validators.required]),
    contactNumber: new FormControl('',[Validators.required,Validators.pattern("^[0-9 ()+]+$"), Validators.minLength(5)]),
    companyType: new FormControl('AirportManagements',[Validators.required]),
  })
  get name() { return this.addCompanyForm.get('name') }
  get city() { return this.addCompanyForm.get('city') }
  get country() { return this.addCompanyForm.get('country') }
  get contactName() { return this.addCompanyForm.get('contactName') }
  get contactNumber() { return this.addCompanyForm.get('contactNumber') }

  defaultValue: Country = {
    alpha2Code:"TR",
    alpha3Code: "TUR",
    callingCode: "+90",
    name: "Turkey",
    numericCode: "792"
  };

  discard(){
    this.addCompanyForm.reset({country:"TR"})
  }

  add(){
    let company:any = this.addCompanyForm.value
    this.companyService.add(company).subscribe({
      next : (data)=>{
        this.toastr.success("Company added successfully","Successfull")
        this.discard()
      },
      error:(e)=>{
        this.toastr.error(e.error.message,"Error")
      }
    })
  }

  onCountrySelected(event:any){
    this.addCompanyForm?.patchValue({country:event.alpha2Code})
  }

}
