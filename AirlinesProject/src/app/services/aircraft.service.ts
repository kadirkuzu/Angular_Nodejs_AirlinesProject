import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable, } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AircraftService {
  constructor(private http: HttpClient, private router: Router) {}

  getAll(): Observable<any> {
    return this.http.get<any>(environment.api + `airports`);
  }
  
}
