import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'rd-people-dashboard',
  templateUrl: './people-dashboard.component.html',
  styleUrls: ['./people-dashboard.component.css']
})
export class PeopleDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  PEOPLE : Person[] =[
    { id : 1, name :'Ram' },
    { id : 2, name :'Ome' },
    { id : 3, name :'Sindhuvu' },
    { id : 4, name :'Jnanatirtha' }
  ]; 

}
