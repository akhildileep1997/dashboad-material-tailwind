import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  department: string;
  time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Anna', department: 'Pediatrician', time: '11am - 1pm'},
  {position: 2, name: 'Charles', department: 'Cardio', time: '2pm - 6pm'},
  {position: 3, name: 'Sam', department: ' Gastroenterologist', time: '12am - 1pm'},
  {position: 4, name: 'Harry', department: 'Physician', time: '11am - 1pm'},
  {position: 5, name: 'Peter', department: 'Ortho', time: '9am - 1pm'},
  {position: 6, name: 'Anna',department: 'Pediatrician', time: '3pm - 5pm'},

];

@Component({
  selector: 'app-doctor-table',
  templateUrl: './doctor-table.component.html',
  styleUrls: ['./doctor-table.component.css']
})
export class DoctorTableComponent {
  displayedColumns: string[] = ['position', 'name', 'department', 'time'];
  dataSource = ELEMENT_DATA;
}
