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
    
    if(id > 0){
      this.personService.getPerson(id)
      .subscribe(person =>{
        this.personUnderEdit = person;
        this.person = person;
      });
    }
    else{
      //Add Scenario
      this.personUnderEdit = new Person();
      this.person = new Person();    
    }
    this.isEdit = true;      
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
    this.personUnderEdit.name = this.personUnderEdit.name.trim();

    if(!this.personUnderEdit.name){return;}

    if (this.personUnderEdit.id){
      this.personService.updatePerson(this.personUnderEdit).subscribe( ()=> this.cancel());
    } 
    else {
      this.personService.addPerson(this.personUnderEdit)
      .subscribe(person => {
        //this.isEdit = false;
        //this.personUnderEdit = person; //to update the id of displayed personE
        console.log('added person' + person);
        this.location.back(); 
      });
        }    
    
    this.onDataSaved.emit(this.personUnderEdit);
  }

  cancel() {
     this.personUnderEdit = null;
     this.isEdit = false;
     //navigates backward one step in the browser's history stack using the Location service
     this.location.back(); 
     //this.person = null; //Lesson Learnt : dont modify input/ouput properties they break the link if input/ouput properties are not objects
  }
}
