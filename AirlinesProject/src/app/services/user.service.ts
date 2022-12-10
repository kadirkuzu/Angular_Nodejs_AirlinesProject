import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable, } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  isLoggedIn?:boolean

  login(email:string,password:string): Observable<User> {
    return this.http.post<User>(environment.api + `users/login`,{email,password});
  }

  register(user:any): Observable<User> {
    return this.http.post<User>(environment.api + `users/register`,user);
  }
  
}
