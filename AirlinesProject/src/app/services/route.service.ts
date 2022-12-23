import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable, } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Route } from '../models/route';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  constructor(private http: HttpClient, private router: Router) {}

  getAll(): Observable<Route[]> {
    return this.http.get<Route[]>(environment.api + `routes`);
  }

  add(route:any): Observable<Route> {
    return this.http.post<Route>(environment.api + `routes`,route);
  }
  
}