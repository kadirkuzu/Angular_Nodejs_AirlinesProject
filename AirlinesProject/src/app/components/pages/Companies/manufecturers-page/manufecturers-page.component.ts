import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-manufecturers-page',
  templateUrl: './manufecturers-page.component.html',
  styleUrls: ['./manufecturers-page.component.scss']
})
export class ManufecturersPageComponent implements OnInit {
  isLoading:boolean = true
  manufacturers:Company[] = []
  displayedColumns: {value:string,name:string}[] = [
    {
      value:'name',
      name: 'Name'
    },
    {
      value:'city',
      name: 'City'
    },
    {
      value:'country',
      name: 'Country'
    },
    {
      value:'contactName',
      name: 'Contact Name'
    },
    {
      value:'contactNumber',
      name: 'Contact Number'
    }
  ];
  constructor(private companyService:CompanyService) { }

  ngOnInit(): void {
    this.getAirportManagements()
  }

  getAirportManagements(){
    this.companyService.getAll("Manufacturers").subscribe(data=>{  
      this.manufacturers = data
      this.isLoading = false
    })
  }

}
