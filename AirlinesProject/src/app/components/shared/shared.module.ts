import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './table/table.component' 
import { NgSelectModule } from "@ng-select/ng-select";
import { DeleteModalComponent } from './table/delete-modal/delete-modal.component';
import { DetailComponent } from './detail/detail.component';
import { AddCrewComponent } from './add-crew/add-crew.component';
import { CrewComponent } from './crew/crew.component';
import { AddRouteComponent } from './add-route/add-route.component';

@NgModule({
  declarations: [
    TableComponent,
    DeleteModalComponent,
    DetailComponent,
    AddCrewComponent,
    CrewComponent,
    AddRouteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatTableModule,
    NgSelectModule
  ],
  exports: [
    MatTableModule,
    TableComponent,
    DetailComponent,
    AddCrewComponent,
    CrewComponent,
    AddRouteComponent
  ]
})
export class SharedModule { }
