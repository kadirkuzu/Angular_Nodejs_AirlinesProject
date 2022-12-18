import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {
  
  constructor(private route:ActivatedRoute,private companyService:CompanyService) { }

  company?:Company
  companyType?:string

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.companyType = this.getCompanyType(params['companyType'])
      let id = params['id']
      this.getCompany(this.companyType,id)
    });
  }

  getCompany(companyType:string,id:string){
    this.companyService.get(companyType,id).subscribe(data=>{
      this.company = data
    })
  }

  getCompanyType(type:string){
    if(type=="airport-managements") return "AirportManagements"
    else if(type=="manufacturers") return "Manufacturers"
    else if(type=="plane-owners") return "PlaneOwners"
    else if(type=="ground-services") return "GroundServices"
    else return ""
  }

}
