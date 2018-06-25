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
    { id : 1, name :'Andy' },
    { id : 2, name :'Ben' },
    { id : 3, name :'Chris' },
    { id : 4, name :'Dan' }
  ]; 

}
