import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable, } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aircraft, AircraftModel } from '../models/aircraft';

@Injectable({
  providedIn: 'root'
})
export class AircraftService {
  constructor(private http: HttpClient, private router: Router) {}

  getAll(): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(environment.api + `aircrafts`);
  }

  get(id:string): Observable<Aircraft> {
    return this.http.get<Aircraft>(environment.api + `aircrafts/${id}`);
  }

  addModel(aircraftModel:{manufacturerId:string,modelName:string,capacity:string}): Observable<AircraftModel> {
    return this.http.post<AircraftModel>(environment.api + `aircrafts/model`,aircraftModel);
  }

  add(aircraft:{ownerId:string,modelId:string,aircraftName:string,yearBought:string}): Observable<Aircraft> {
    return this.http.post<Aircraft>(environment.api + `aircrafts`,aircraft);
  }

  getModels(): Observable<AircraftModel[]> {
    return this.http.get<AircraftModel[]>(environment.api + `aircrafts/models`);
  }

  update(aircraft:{ownerId:string,modelId:string,aircraftName:string,yearBought:string},id:string): Observable<{updatedAircraft:Aircraft}> {
    return this.http.put<{updatedAircraft:Aircraft}>(environment.api + `aircrafts/${id}`,aircraft);
  }
  
}
