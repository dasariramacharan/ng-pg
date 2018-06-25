import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Person } from '../person';

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
  
  constructor() { }

  ngOnInit() {
  }

  onSelectPerson(person){
    this.selectedPerson = person; 
    this.personSelected.emit(this.selectedPerson.id); 
  }
}
