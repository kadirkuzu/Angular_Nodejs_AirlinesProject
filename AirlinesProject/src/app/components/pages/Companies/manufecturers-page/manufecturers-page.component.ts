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
  displayedColumns: string[] = ['name', 'city', 'country','contactName','contactNumber'];

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
