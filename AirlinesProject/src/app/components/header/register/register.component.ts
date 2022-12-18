import { Country } from '@angular-material-extensions/select-country';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService,private toastr:ToastrService,private router:Router) { }

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]),
    name: new FormControl('', [Validators.required]),
    phone : new FormControl('',[Validators.required,Validators.pattern("^[0-9 ()+]+$"), Validators.minLength(5)]),
    dob: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    nationality: new FormControl('TR', [Validators.required])
  })

  get email() { return this.registerForm.get('email') }
  get name() { return this.registerForm.get('name') }
  get dob() { return this.registerForm.get('dob') }
  get password() { return this.registerForm.get('password') }
  get phone() { return this.registerForm.get('phone') }
  get nationality() { return this.registerForm.get('nationality') }

  defaultValue: Country = {
    alpha2Code:"TR",
    alpha3Code: "TUR",
    callingCode: "+90",
    name: "Turkey",
    numericCode: "792"
 };
  
  ngOnInit(): void {
  }

  register(){
    let user:any = this.registerForm.value
    this.userService.register(user).subscribe({
      next : (data)=>{
        this.toastr.success("User added successfully","Successfull")
        this.router.navigate(["/login"])
      },
      error:(e)=>{
        this.toastr.error(e.error.message,"Error")
      }
    })
  }
  
  onCountrySelected(event:any){
    this.registerForm?.patchValue({nationality:event.alpha2Code})
  }



}
