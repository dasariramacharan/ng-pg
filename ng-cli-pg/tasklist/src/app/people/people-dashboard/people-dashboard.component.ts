import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from '../shared/people.service';

@Component({
  selector: 'rd-people-dashboard',
  templateUrl: './people-dashboard.component.html',
  styleUrls: ['./people-dashboard.component.css']
})
export class PeopleDashboardComponent implements OnInit {
  selectedPerson: Person;
  isEditModeValue: boolean;
  people : Person[];

  constructor(private peopleService :PeopleService) {
   }

  ngOnInit() {
   this.getPeople();
  }

  getPeople() :void{

    this.peopleService.getPeople()
                      .subscribe(people => this.people = people.splice(1,5));
  }
  
  onPersonSelected(personid){
    this.selectedPerson = this.people.filter(p=>p.id==personid)[0];
    this.isEditModeValue = personid > 0; 
    ;
  }

  onDataSaved(person){
    //this.PEOPLE.filter(p=> p.id == person.id)[0] = person;//does not work .. why?
    let itemindex = this.people.findIndex(p=>p.id==person.id);
    this.people[itemindex] = person;
    
    //check PEOPLE listing updated with above line 
    console.log(person);
    console.log(this.people)
  }




  

}
