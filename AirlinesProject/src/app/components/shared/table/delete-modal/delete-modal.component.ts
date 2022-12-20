import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DeleteService } from 'src/app/services/delete.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {
  @Input() id! :string
  @Input() typeName! :string
  @Input() name? :string
  @Input() url! :string
  @Output() deletedId = new EventEmitter<string>();

  constructor(private deleteService:DeleteService,private toastr:ToastrService) { }

  ngOnInit(): void { 
  }

  delete(){
    this.deleteService.delete(this.url,this.id).subscribe({
      next : (data)=>{
        this.deletedId.emit(this.id)
        this.toastr.success(`${this.typeName} deleted successfully`,"Successfull")
      },
      error:(e)=>{
        this.toastr.error(`If you use this ${this.typeName} another page , you can't delete it.`,"Error")
      }
    })
  }
}
