import { Country } from '@angular-material-extensions/select-country';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  constructor(private customerService:CustomerService,private toastr:ToastrService) { }

  addCustomerForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]),
    name: new FormControl('', [Validators.required]),
    phone : new FormControl('',[Validators.required,Validators.pattern("^[0-9 ()+]+$"), Validators.minLength(5)]),
    dob: new FormControl('', [Validators.required]),
    nationality: new FormControl('TR', [Validators.required])
  })

  get email() { return this.addCustomerForm.get('email') }
  get name() { return this.addCustomerForm.get('name') }
  get dob() { return this.addCustomerForm.get('dob') }
  get phone() { return this.addCustomerForm.get('phone') }
  get nationality() { return this.addCustomerForm.get('nationality') }

  defaultValue: Country = {
    alpha2Code:"TR",
    alpha3Code: "TUR",
    callingCode: "+90",
    name: "Turkey",
    numericCode: "792"
 };
  
  ngOnInit(): void {
  }

  discard(){
    this.addCustomerForm.reset({nationality:"TR"})
  }

  add(){
    let user:any = this.addCustomerForm.value
    this.customerService.add(user).subscribe({
      next : (data)=>{
        this.toastr.success("Customer added successfully","Successfull")
        this.discard()
      },
      error:(e)=>{
        this.toastr.error(e.error.message,"Error")
      }
    })
  }
  
  onCountrySelected(event:any){
    this.addCustomerForm?.patchValue({nationality:event.alpha2Code})
  }

}
