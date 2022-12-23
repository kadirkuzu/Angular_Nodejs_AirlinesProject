import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-ground-services-crews-page',
  templateUrl: './ground-services-crews-page.component.html',
  styleUrls: ['./ground-services-crews-page.component.scss']
})
export class GroundServicesCrewsPageComponent implements OnInit {
  crewList:any = []
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getCabinCrews()
  }

  getCabinCrews(){
    this.employeeService.getAll("ground-service-crews").subscribe(data=>{
      this.crewList = data
    })
  }

}
