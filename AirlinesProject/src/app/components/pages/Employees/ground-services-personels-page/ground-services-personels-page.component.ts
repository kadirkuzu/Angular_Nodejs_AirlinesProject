import { Component, OnInit } from '@angular/core';
import { GroundServicePersonel } from 'src/app/models/employees';
import { EmployeeService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-ground-services-personels-page',
  templateUrl: './ground-services-personels-page.component.html',
  styleUrls: ['./ground-services-personels-page.component.scss']
})
export class GroundServicesPersonelsPageComponent implements OnInit {

  groundServicePersonels:GroundServicePersonel[] = []
  displayedColumns: {value:string,name:string,typeOf?:string}[] = [
    {
      value:'name',
      name: 'Name'
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
    }
  ];
  isLoading:boolean = true
  constructor(private employeeService:EmployeeService) { }


  ngOnInit(): void {
    this.getGroundServicePersonels()
  }

  getGroundServicePersonels(){
    this.employeeService.getAll("ground-service-personels").subscribe(data=>{  
      this.groundServicePersonels = data
      this.isLoading = false
    })
  }

}
