import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {
  @Input() id! :string
  @Input() typeName! :string
  @Input() name? :string

  constructor() { }

  ngOnInit(): void { 
  }

}
