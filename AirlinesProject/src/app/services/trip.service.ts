import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable, } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  constructor(private http: HttpClient, private router: Router) {}

  getAll(): Observable<Trip[]> {
    return this.http.get<Trip[]>(environment.api + `trips`);
  }

  add(flight:any): Observable<Trip> {
    return this.http.post<Trip>(environment.api + `trips`,flight);
  }
  
}