import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aircraft } from 'src/app/models/aircraft';
import { AircraftService } from 'src/app/services/aircraft.service';

@Component({
  selector: 'app-aircraft-detail',
  templateUrl: './aircraft-detail.component.html',
  styleUrls: ['./aircraft-detail.component.scss']
})
export class AircraftDetailComponent implements OnInit {

  aircraft?:Aircraft
  typeArray:{name:string,value:string,typeOf?:string}[] = [
    {
      value:'aircraftName',
      name: 'Aircraft Name'
    },
    {
      value:'yearBought',
      name: 'Year Bought',
      typeOf:'number'
    },
    {
      value:'ownerName',
      name: 'Owner Name'
    },
    {
      value:'modelName',
      name: 'Model Name'
    }
  ]
  constructor(private route:ActivatedRoute,private aircraftService:AircraftService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id']
      this.getAircraft(id)
    });
  }

  getAircraft(id:string){
    this.aircraftService.get(id).subscribe(data=>{
      this.aircraft = data
    })
  }

  updateAircraft(aircraft:Aircraft){
      this.aircraft = aircraft
  }

}
