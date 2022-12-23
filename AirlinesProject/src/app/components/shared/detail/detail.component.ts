import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() typeArray!:{name:string,value:string,typeOf?:string}[]
  @Input() element!:any
  @Input() title!:string
  @Input() modalId!:string
  @Input() fullScreen?:boolean
  @Input() col?:string[]
  constructor() { }

  ngOnInit(): void {
  }

}
