import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Airport } from 'src/app/models/airport';
import { AirportService } from 'src/app/services/airport.service';

@Component({
  selector: 'app-airport-detail',
  templateUrl: './airport-detail.component.html',
  styleUrls: ['./airport-detail.component.scss']
})
export class AirportDetailComponent implements OnInit {
  airport?:Airport
  typeArray:{name:string,value:string}[] = [
    {
      name:"Name",
      value:"name"
    },
    {
      name:"Code",
      value:"code"
    },
    {
      name:"City",
      value:"city"
    },
    {
      name:"Country",
      value:"country"
    },
    {
      name:"Plane Capacity",
      value:"planeCapacity"
    },
    {
      name:"Year Built",
      value:"yearBuilt"
    },
  ]
  constructor(private route:ActivatedRoute,private airportService:AirportService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id']
      this.getAirport(id)
    });
  }

  getAirport(id:string){
    this.airportService.get(id).subscribe(data=>{
      this.airport = data
    })
  }

  updateAirport(airport:Airport){
      this.airport = airport
  }

}
