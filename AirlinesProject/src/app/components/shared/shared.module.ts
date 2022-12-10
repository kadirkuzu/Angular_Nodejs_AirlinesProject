import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './table/table.component' 
import { NgSelectModule } from "@ng-select/ng-select";

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
  exports: [
    MatTableModule,
    TableComponent
  ]
})
export class SharedModule { }
