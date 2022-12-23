import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,private toastr : ToastrService,private router:Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

  ngOnInit(): void {
  }

  login(){
    this.userService.login(this.email?.value!,this.password?.value!).subscribe({
      next : (data)=>{
        this.toastr.success("Successfully logged in","Successfull",{timeOut:1500})
        this.router.navigate(["/home"])
        localStorage.setItem("loggedInName", String(data.user.name))
        localStorage.setItem("loggedInId", String(data.user.id))
        this.userService.isLoggedIn=true
      },
      error:(e)=>{
        this.toastr.error(e.error.message,"Error")
      }
    })
  }

}


