import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'rd-people-dashboard',
  templateUrl: './people-dashboard.component.html',
  styleUrls: ['./people-dashboard.component.css']
})
export class PeopleDashboardComponent implements OnInit {
  selectedPerson: Person;
  isEditModeValue: boolean;

  constructor() { }

  ngOnInit() {
  }
  
  PEOPLE : Person[] =[
    { id : 1, name :'Andy' },
    { id : 2, name :'Ben' },
    { id : 3, name :'Chris' },
    { id : 4, name :'Dan' }
  ]; 


  onPersonSelected(personid){
    this.selectedPerson = this.PEOPLE.filter(p=>p.id==personid)[0];
    this.isEditModeValue = personid > 0; 
    ;
  }

  onDataSaved(person){
    //this.PEOPLE.filter(p=> p.id == person.id)[0] = person;//does not work .. why?
    let itemindex = this.PEOPLE.findIndex(p=>p.id==person.id);
    this.PEOPLE[itemindex] = person;
    
    //check PEOPLE listing updated with above line 
    console.log(person);
    console.log(this.PEOPLE)
  }
}
