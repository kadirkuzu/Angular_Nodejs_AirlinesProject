import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {

  trips:Trip[] = []

  constructor(private tripService:TripService) { }

  ngOnInit(): void {
    this.tripService.getAll().subscribe(data=>{
      this.trips = data
    })
  }

}
