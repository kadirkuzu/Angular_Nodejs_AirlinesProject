import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor() { }

  workArea?:string

  workAreas = [
    "Pilot"
  ]

  ngOnInit(): void {
  }


}
