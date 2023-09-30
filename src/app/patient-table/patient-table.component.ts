import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.css']
})
export class PatientTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'case', 'consultedBy'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  case: string;
  consultedBy: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Treeza', case: 'Fever', consultedBy: 'Harry'},
  {position: 2, name: 'Sony', case: 'Vomiting', consultedBy: 'Sam'},
  {position: 3, name: 'Ahamed', case: 'Fever', consultedBy: 'Harry'},
  {position: 4, name: 'siny', case: 'Fever', consultedBy: 'Anna'},
  {position: 1, name: 'Treeza', case: 'Fever', consultedBy: 'Harry'},
  {position: 2, name: 'Sony', case: 'Vomiting', consultedBy: 'Sam'},
  {position: 3, name: 'Ahamed', case: 'Fever', consultedBy: 'Harry'},
  {position: 4, name: 'siny', case: 'Fever', consultedBy: 'Anna'},
  {position: 1, name: 'Treeza', case: 'Fever', consultedBy: 'Harry'},
  {position: 2, name: 'Sony', case: 'Vomiting', consultedBy: 'Sam'},
  {position: 3, name: 'Ahamed', case: 'Fever', consultedBy: 'Harry'},
  {position: 4, name: 'siny', case: 'Fever', consultedBy: 'Anna'},
];

