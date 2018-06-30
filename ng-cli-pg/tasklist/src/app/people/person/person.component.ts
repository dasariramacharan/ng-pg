import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from '../shared/people.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'rd-person',
  templateUrl: './person.component.html',
  styles: []
})
export class PersonComponent implements OnInit, OnChanges {
  @Input() isEditMode: boolean;
  @Input() person: Person;
  personUnderEdit: Person;
  @Output() onDataSaved = new EventEmitter();
  isEdit: boolean;
  constructor( private route:ActivatedRoute, private personService:PeopleService, private location:Location) { 
    //The location is an Angular service for interacting with the browser.
    //e.g You'll use it to navigate back to the view that navigated here.
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.personService.getPerson(id)
      .subscribe(person =>{
        this.personUnderEdit = person;
        this.person = person;
      }); 
  }

  ngOnChanges() {

    if (this.isEditMode) {
      //create copy of input item to edit
      this.personUnderEdit = { ...this.person };
    }
    else {
      this.personUnderEdit = null;
    }
    this.isEdit = this.isEditMode;
  }

  savePerson() {
    this.onDataSaved.emit(this.personUnderEdit);
  }

  cancel() {
    debugger;
     this.personUnderEdit = null;
     this.isEdit = false;
     //navigates backward one step in the browser's history stack using the Location service
     this.location.back(); //TODO:Rama fix this is not working to go back .
     //this.person = null; //Lesson Learnt : dont modify input/ouput properties they break the link if input/ouput properties are not objects
  }
}
