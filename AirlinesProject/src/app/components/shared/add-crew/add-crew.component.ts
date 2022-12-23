import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-crew',
  templateUrl: './add-crew.component.html',
  styleUrls: ['./add-crew.component.scss']
})
export class AddCrewComponent implements OnInit {
  @Input() useFor!:string
  firstElemanList?:any
  isLoading = true
  constructor(private employeeService:EmployeeService,private router:Router,private toastr:ToastrService) { }

  addCrewForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    firstElemanId : new FormControl(undefined, [Validators.required]),
  })

  get firstElemanId() { return this.addCrewForm.get('firstElemanId') }
  get name() { return this.addCrewForm.get('name') }

  ngOnInit(): void {
    this.getFirstEleman()
  }

  getFirstEleman(){
    let name = this.useFor == "cabinCrews" ? "pilots" : "ground-service-chiefs"
    this.employeeService.getAll(name).subscribe(data=>{  
      this.firstElemanList = data
      this.isLoading = false
    })
  }

  add(){
    let name = this.useFor == "cabinCrews" ? "cabin-crews" : "ground-service-crews"
    let cabinCrew = {name:this.name?.value , pilotId : this.firstElemanId?.value}
    let groundServiceCrew = {name:this.name?.value , gsCheifId : this.firstElemanId?.value}
    this.employeeService.add(name,this.useFor == "cabinCrews" ? cabinCrew : groundServiceCrew).subscribe({
      next : (data)=>{
        this.toastr.success(`${this.useFor == "cabinCrews" ? "Pilot" : "Chief"} added successfully`,"Successfull")
        this.discard()
      },
      error:(e)=>{
        this.toastr.error(e.error.message,"Error")
      }
    })
  }

  discard(){
    this.addCrewForm.reset()
  }

  navigate(url:string){
    this.router.navigate([url])
  }

}
