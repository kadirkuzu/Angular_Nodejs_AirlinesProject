import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable, } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: HttpClient, private router: Router) {}

  getAll(companyType:string): Observable<Company[]> {
    return this.http.get<Company[]>(environment.api + `companies`,{params:{companyType}});
  }

  get(companyType:string,id:string): Observable<Company> {
    return this.http.get<Company>(environment.api + `companies/${companyType}/${id}`);
  }

  add(airportManagement:{name:string,country:string,city:string,contactName:string,contactNumber:string,companyType:string}): Observable<Company> {
    return this.http.post<Company>(environment.api + `companies`,airportManagement);
  }
  
}
