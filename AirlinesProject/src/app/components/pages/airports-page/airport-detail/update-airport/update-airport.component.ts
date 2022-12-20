import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Airport } from 'src/app/models/airport';

@Component({
  selector: 'app-update-airport',
  templateUrl: './update-airport.component.html',
  styleUrls: ['./update-airport.component.scss']
})
export class UpdateAirportComponent implements OnInit {
  @Input() id!:string
  @Input() airport!:Airport
  @Output() updatedAirport = new EventEmitter<Airport>();

  constructor() { }

  ngOnInit(): void {
  }

  updateAirport(airport:Airport){
    this.updatedAirport.emit(airport)
  }

}
