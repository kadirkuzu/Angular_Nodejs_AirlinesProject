import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Airport } from 'src/app/models/airport';
import { AirportService } from 'src/app/services/airport.service';

@Component({
  selector: 'app-airports-page',
  templateUrl: './airports-page.component.html',
  styleUrls: ['./airports-page.component.scss']
})
export class AirportsPageComponent implements OnInit {
  @ViewChild(MatSort) sort?: MatSort;
  dataSource:any;
  airports?:Airport[]
  displayedColumns: string[] = ['name', 'code', 'city', 'country'];
  constructor(private airportService:AirportService) { }


  ngOnInit(): void {
    this.getAirports()
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.createTable();
  }

  getAirports(){
    this.airportService.getAll().subscribe(data=>{
      this.airports = data
    })
  }
  columnNames = [{
    id: 'position',
    value: 'No.',

  }, {
    id: 'name',
    value: 'Name',
  },
    {
      id: 'weight',
      value: 'Weight',
    },
    {
      id: 'symbol',
      value: 'Symbol',
    }];

  createTable() {
    this.dataSource = new MatTableDataSource(this.airports);
    this.dataSource.sort = this.sort;
  }

}
