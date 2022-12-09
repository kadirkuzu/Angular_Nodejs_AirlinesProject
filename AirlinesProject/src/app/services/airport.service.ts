import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable, } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Airport } from '../models/airport';

@Injectable({
  providedIn: 'root'
})
export class AirportService {
  constructor(private http: HttpClient, private router: Router) {}

  getAll(): Observable<Airport[]> {
    return this.http.get<Airport[]>(environment.api + `airports`);
  }
  
}
