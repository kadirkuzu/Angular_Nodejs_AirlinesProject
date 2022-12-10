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
    email: new FormControl('', [Validators.required]),
    fullName: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  get email() { return this.registerForm.get('email') }
  get fullName() { return this.registerForm.get('fullName') }
  get age() { return this.registerForm.get('age') }
  get password() { return this.registerForm.get('password') }
  
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

}
