import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-plane-owners-page',
  templateUrl: './plane-owners-page.component.html',
  styleUrls: ['./plane-owners-page.component.scss']
})
export class PlaneOwnersPageComponent implements OnInit {
  isLoading:boolean = true
  planeOwners:Company[] = []
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
    this.companyService.getAll("PlaneOwners").subscribe(data=>{  
      this.planeOwners = data
      this.isLoading = false
    })
  }

}
