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
  displayedColumns: {value:string,name:string}[] = [
    {
      value:'name',
      name: 'Name'
    },
    {
      value:'code',
      name: 'Code'
    },
    {
      value:'city',
      name: 'City'
    },
    {
      value:'country',
      name: 'Country'
    },
    {
      value:'planeCapacity',
      name: 'Plane Capacity'
    },
    {
      value:'yearBuilt',
      name: 'Year Built'
    },
  ];
  isLoading:boolean = true
  constructor(private airportService:AirportService) { }


  ngOnInit(): void {
    this.getAirports()
  }

  getAirports(){
    this.airportService.getAll().subscribe(data=>{  
      this.airports = data
      this.isLoading = false
    })
  }

}
