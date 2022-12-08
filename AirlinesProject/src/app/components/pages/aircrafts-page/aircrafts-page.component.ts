import { Component, OnInit } from '@angular/core';
import { AircraftService } from 'src/app/services/aircraft.service';

@Component({
  selector: 'app-aircrafts-page',
  templateUrl: './aircrafts-page.component.html',
  styleUrls: ['./aircrafts-page.component.scss']
})
export class AircraftsPageComponent implements OnInit {

  constructor(private aircraftService:AircraftService) { }

  ngOnInit(): void {
    this.aircraftService.getAll().subscribe(data=>{
      console.log(data);
      
    })
  }

}
