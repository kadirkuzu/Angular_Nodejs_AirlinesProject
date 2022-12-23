import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.scss']
})
export class MyPageComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    let userId = localStorage.getItem("loggedInId")!;
    this.userService.get(+userId).subscribe(data=>{
      console.log(data);      
    })
  }

}
