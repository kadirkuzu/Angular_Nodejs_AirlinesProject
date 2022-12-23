import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-cabin-crews-page',
  templateUrl: './cabin-crews-page.component.html',
  styleUrls: ['./cabin-crews-page.component.scss']
})
export class CabinCrewsPageComponent implements OnInit {
  crewList:any = []
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getCabinCrews()
  }

  getCabinCrews(){
    this.employeeService.getAll("cabin-crews").subscribe(data=>{
      this.crewList = data
    })
  }

}
