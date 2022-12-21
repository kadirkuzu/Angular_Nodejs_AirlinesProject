import { Component, OnInit } from '@angular/core';
import { Pilot } from 'src/app/models/employees';
import { EmployeeService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-pilots-page',
  templateUrl: './pilots-page.component.html',
  styleUrls: ['./pilots-page.component.scss']
})
export class PilotsPageComponent implements OnInit {
  pilots:Pilot[] = []
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
  ];
  isLoading:boolean = true
  constructor(private employeeService:EmployeeService) { }


  ngOnInit(): void {
    this.getPilots()
  }

  getPilots(){
    this.employeeService.getAll("pilots").subscribe(data=>{  
      this.pilots = data
      this.isLoading = false
    })
  }


}
