import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable, } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient, private router: Router) {}

  getAll(workArea:string): Observable<any[]> {
    return this.http.get<any[]>(environment.api + `employees/${workArea}`);
  }

  get(workArea:string,id:string): Observable<any> {
    return this.http.get<any>(environment.api + `employees/${workArea}/${id}`);
  }

  add(workArea:string,employee:any): Observable<any> {
    return this.http.post<any>(environment.api + `employees/${workArea}`,employee);
  }
  
}