import { Component, OnInit } from '@angular/core';
import { CabinPersonel } from 'src/app/models/employees';
import { EmployeeService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-cabin-personels-page',
  templateUrl: './cabin-personels-page.component.html',
  styleUrls: ['./cabin-personels-page.component.scss']
})
export class CabinPersonelsPageComponent implements OnInit {
  cabinPersonels:CabinPersonel[] = []
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
    this.getCabinPersonels()
  }

  getCabinPersonels(){
    this.employeeService.getAll("cabin-personels").subscribe(data=>{  
      this.cabinPersonels = data
      this.isLoading = false
    })
  }

}
