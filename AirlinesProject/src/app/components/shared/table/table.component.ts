import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() list:any[] = []
  @Input() inputColumns:{value:string,name:string,typeOf?:string}[] = []
  @Input() tableName!:string
  @Input() typeName!:string
  @Input() deleteUrl?:string

  columns:string[] = []


  constructor() { }

  ngOnInit(): void {
    if(this.deleteUrl) this.inputColumns.push({value:'delete',name:'delete'})
    for(let i of this.inputColumns) this.columns.push(i.name)    
  }

  getValue(element:any,name:string){
    let valueOfElement = this.inputColumns.find(e=>e.name==name)
    if(valueOfElement?.typeOf=='date'){
      return new Date(element[valueOfElement?.value!]).setHours(24)
    }
    else return element[valueOfElement?.value!]
  }

  isDate(value:any){
    let valueOfElement = this.inputColumns.find(e=>e.name==value)
    return valueOfElement?.typeOf=='date'
  }

  deleteOne(id:string){
    this.list = this.list.filter(data=>data.id!=id)
  }

}
