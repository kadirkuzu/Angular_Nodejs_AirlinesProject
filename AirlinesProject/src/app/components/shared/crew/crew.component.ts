import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit {
  @Input() crew:any
  @Input() useFor:any
  personelList:any = []
  firstPersonel = ""
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getPersonels()
    this.firstPersonel = this.useFor == "cabinCrews" ? this.crew.pilotName : this.crew.chiefName
  }

  getPersonels(){
    let name = this.useFor == "cabinCrews" ? "cabin-personels" : "ground-service-personels"
    this.employeeService.getAllByCrewId(name,this.crew.id).subscribe(data=>{
      this.personelList = data
    })
  }

}
