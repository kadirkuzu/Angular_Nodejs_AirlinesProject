import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Aircraft } from 'src/app/models/aircraft';

@Component({
  selector: 'app-update-aircraft',
  templateUrl: './update-aircraft.component.html',
  styleUrls: ['./update-aircraft.component.scss']
})
export class UpdateAircraftComponent implements OnInit {

  @Input() id!:string
  @Input() aircraft!:Aircraft
  @Output() updatedAircraft = new EventEmitter<Aircraft>();

  constructor() { }

  ngOnInit(): void {
  }

  updateAircraft(aircraft:Aircraft){
    this.updatedAircraft.emit(aircraft)
  }
  

}
