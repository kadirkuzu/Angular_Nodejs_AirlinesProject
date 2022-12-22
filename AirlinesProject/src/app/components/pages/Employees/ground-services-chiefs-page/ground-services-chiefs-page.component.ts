import { Component, OnInit } from '@angular/core';
import { GroundServiceChief } from 'src/app/models/employees';
import { EmployeeService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-ground-services-chiefs-page',
  templateUrl: './ground-services-chiefs-page.component.html',
  styleUrls: ['./ground-services-chiefs-page.component.scss']
})
export class GroundServicesChiefsPageComponent implements OnInit {

  groundServicesChiefs:GroundServiceChief[] = []

  displayedColumns: {value:string,name:string,typeOf?:string}[] = [
    {
      value:'name',
      name: 'Name'
    },
    {
      value:'yearStarted',
      name: 'Year Started'
    },
    {
      value:'salary',
      name: 'Salary'
    },
    {
      value:'email',
      name: 'Email'
    },
    {
      value:'dob',
      name: 'Date Of Birth',
      typeOf:'date'
    },
    {
      value:'phone',
      name: 'Phone'
    },
    {
      value:'nationality',
      name: 'Nationality'
    },
    {
      value:'crewCount',
      name: 'Crew Count'
    },
  ];
  isLoading:boolean = true
  constructor(private employeeService:EmployeeService) { }


  ngOnInit(): void {
    this.getGroundServicesChiefs()
  }

  getGroundServicesChiefs(){
    this.employeeService.getAll("ground-service-chiefs").subscribe(data=>{  
      this.groundServicesChiefs = data
      this.isLoading = false
    })
  }

}
