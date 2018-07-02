import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from '../shared/people.service';

@Component({
  selector: 'rd-all-people',
  templateUrl: './all-people.component.html',
  styles: [`
   .data-style {
      text-decoration: underline;   
    }
  `]
})
export class AllPeopleComponent implements OnInit {
  
  @Input() people : Person[];
  @Output() personSelected = new EventEmitter(); 
  
  selectedPerson: Person;
  
  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
  }

  onSelectPerson(person){
    this.selectedPerson = person; 
    this.personSelected.emit(this.selectedPerson.id); 
  }

  delete(person){
    this.people = this.people.filter(p=>p.id != person.id);
    this.peopleService.deletePerson(person).subscribe();
  }
}
