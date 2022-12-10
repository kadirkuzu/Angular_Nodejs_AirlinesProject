import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private userService:UserService ) { }

  ngOnInit(): void {
  }

  isLogged(){
    return localStorage.getItem("isLoggedIn");
  }

  logOut(){
    localStorage.removeItem("isLoggedIn")
    this.router.navigate(["/login"])
    this.userService.isLoggedIn = false
  }

}
