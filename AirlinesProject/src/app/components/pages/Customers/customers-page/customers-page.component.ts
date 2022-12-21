import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.scss']
})
export class CustomersPageComponent implements OnInit {

  customers:Customer[] = []
  displayedColumns: {value:string,name:string,typeOf?:string}[] = [
    {
      value:'name',
      name: 'Name'
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
      value:'nationality',
      name: 'Nationality'
    },
    {
      value:'customerRank',
      name: 'Customer Rank'
    }
  ];
  isLoading:boolean = true
  constructor(private customerService:CustomerService) { }


  ngOnInit(): void {
    this.getAirports()
  }

  getAirports(){
    this.customerService.getAll().subscribe(data=>{  
      this.customers = data
      this.isLoading = false
    })
  }

}
