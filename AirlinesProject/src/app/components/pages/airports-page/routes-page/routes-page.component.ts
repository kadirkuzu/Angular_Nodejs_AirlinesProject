import { Component, OnInit } from '@angular/core';
import { Route } from 'src/app/models/route';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-routes-page',
  templateUrl: './routes-page.component.html',
  styleUrls: ['./routes-page.component.scss']
})
export class RoutesPageComponent implements OnInit {

  routes:Route[] = []
  displayedColumns: {value:string,name:string}[] = [
    {
      value:'departureAirportCode',
      name: 'Departure Airport Code'
    },
    {
      value:'departureAirportName',
      name: 'Departure Airport Name'
    },
    {
      value:'arrivalAirportCode',
      name: 'Arrival Airport Code'
    },
    {
      value:'arrivalAirportName',
      name: 'Arrival Airport Name'
    },
    {
      value:'flightTime',
      name: 'Flight Time'
    }
  ];
  isLoading:boolean = true
  constructor(private routeService:RouteService) { }


  ngOnInit(): void {
    this.getAirports()
  }

  getAirports(){
    this.routeService.getAll().subscribe(data=>{  
      this.routes = data
      this.isLoading = false
    })
  }

}
