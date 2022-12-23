import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable, } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Flight } from '../models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  constructor(private http: HttpClient, private router: Router) {}

  getAll(): Observable<Flight[]> {
    return this.http.get<Flight[]>(environment.api + `flights`);
  }

  get(id:number): Observable<Flight> {
    return this.http.get<Flight>(environment.api + `flights/${id}`);
  }

  add(flight:any): Observable<Flight> {
    return this.http.post<Flight>(environment.api + `flights`,flight);
  }
  
}