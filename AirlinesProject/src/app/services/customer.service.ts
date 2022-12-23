import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable, } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient, private router: Router) {}

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(environment.api + `customers`);
  }

  get(id:number): Observable<Customer> {
    return this.http.get<Customer>(environment.api + `customers/${id}`);
  }

  add(user:any): Observable<Customer> {
    return this.http.post<Customer>(environment.api + `customers`,user);
  }
  
}
