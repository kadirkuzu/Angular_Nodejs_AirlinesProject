import { Component, OnInit } from '@angular/core';
import { Airport } from 'src/app/models/airport';
import { AirportService } from 'src/app/services/airport.service';

@Component({
  selector: 'app-airports-page',
  templateUrl: './airports-page.component.html',
  styleUrls: ['./airports-page.component.scss']
})
export class AirportsPageComponent implements OnInit {

  airports:Airport[] = []
  displayedColumns: string[] = ['name', 'code', 'city', 'country'];
  constructor(private airportService:AirportService) { }


  ngOnInit(): void {
    this.getAirports()
  }

  getAirports(){
    this.airportService.getAll().subscribe(data=>{  
      this.airports?.forEach((airport)=>this.airports.push({...airport}))
    })
  }

}
