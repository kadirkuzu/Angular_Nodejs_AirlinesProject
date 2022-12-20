import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() list:any[] = []
  @Input() columns:any = []
  @Input() tableName!:string
  @Input() typeName!:string
  @Input() deleteUrl?:string

  constructor() { }

  ngOnInit(): void {
    if(this.deleteUrl) this.columns.push('delete')
  }

  deleteOne(id:string){
    this.list = this.list.filter(data=>data.id!=id)
  }

}
