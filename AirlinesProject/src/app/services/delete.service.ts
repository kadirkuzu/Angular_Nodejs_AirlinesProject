import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable, } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {
  constructor(private http: HttpClient) {}

  delete(url:string,id:string): Observable<User> {
    return this.http.delete<User>(environment.api + url+'/'+id);
  }
  
}