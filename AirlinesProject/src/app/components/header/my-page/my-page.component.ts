import { Component, OnInit } from '@angular/core';
import { UserInformation } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.scss']
})
export class MyPageComponent implements OnInit {
  userInfo?:UserInformation  
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    let userId = localStorage.getItem("loggedInId")!;
    this.userService.get(+userId).subscribe(data=>{
      this.userInfo = data    
    })
  }

  typeArray:{name:string,value:string,typeOf?:string}[] = [
    {
      name:"Name",
      value:"name"
    },
    {
      name:"Email",
      value:"email"
    },
    {
      name:"Date Of Birth",
      value:"dob",
      typeOf:"date"
    },
    {
      name:"Phone",
      value:"phone"
    },
    {
      name:"Nationality",
      value:"nationality"
    },
  ]

  typeArray2:{name:string,value:string,typeOf?:string}[] = [
    {
      name:"Customers Count",
      value:"customerCount",
      typeOf:"number"
    },
    {
      name:"Most Referenced Customer",
      value:"mostReferencedCustomer"
    },
    {
      name:"Total Payments",
      value:"totalPayments",
      typeOf:"number"
    },
    {
      name:"Trip Count",
      value:"tripCount",
      typeOf:"number"
    },
  ]

}
