import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Company } from 'src/app/models/company';
import { AircraftService } from 'src/app/services/aircraft.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-add-aircraft-model',
  templateUrl: './add-aircraft-model.component.html',
  styleUrls: ['./add-aircraft-model.component.scss']
})
export class AddAircraftModelComponent implements OnInit {
  manufacturerList:Company[] = []

  constructor(private router:Router,private companyService:CompanyService,private aircraftService:AircraftService,private toastr:ToastrService) { }

  addAircraftModelForm = new FormGroup({
    modelName: new FormControl('', [Validators.required]),
    manufacturerId: new FormControl(undefined as any, [Validators.required]),
    capacity: new FormControl([Validators.required]),
  })

  get modelName() { return this.addAircraftModelForm.get('modelName') }
  get manufacturerId() { return this.addAircraftModelForm.get('manufacturerId') }
  get capacity() { return this.addAircraftModelForm.get('capacity') }


  ngOnInit(): void {
    this.getManufacturers()
  }

  getManufacturers(){
    this.companyService.getAll("Manufacturers").subscribe(data=>{
      this.manufacturerList = data
    })
  }

  navigate(url:string){
    this.router.navigate([url])
  }

  add(){
  let model:any = this.addAircraftModelForm.value
  this.aircraftService.addModel(model).subscribe({
    next : (data)=>{
      this.toastr.success("Model added successfully","Successfull")
      this.discard()
    },
    error:(e)=>{
      console.log(e.error);
      
      this.toastr.error(e.error.message,"Error")
    }
  })
  }

  discard(){
    this.addAircraftModelForm.reset()
  }

}
