import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-airport-managements-page',
  templateUrl: './airport-managements-page.component.html',
  styleUrls: ['./airport-managements-page.component.scss']
})
export class AirportManagementsPageComponent implements OnInit {
  isLoading:boolean = true
  airportManagements:Company[] = []
  displayedColumns: string[] = ['name', 'city', 'country','contactName','contactNumber'];

  constructor(private companyService:CompanyService) { }

  ngOnInit(): void {
    this.getAirportManagements()
  }

  getAirportManagements(){
    this.companyService.getAll("AirportManagements").subscribe(data=>{  
      this.airportManagements = data
      this.isLoading = false
    })
  }

}
