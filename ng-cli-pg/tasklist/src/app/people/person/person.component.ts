import { Component, Input, Output, EventEmitter,
        OnInit, OnChanges,
        OnDestroy, DoCheck, AfterContentInit, AfterViewInit,
        AfterViewChecked, AfterContentChecked, SimpleChanges } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from '../shared/people.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'rd-person',
  templateUrl: './person.component.html',
  styles: []
})
export class PersonComponent implements OnInit, OnChanges, 
DoCheck,
AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked,
OnDestroy  {
  @Input() isEditMode: boolean;
  @Input() person: Person;
  personUnderEdit: Person = new Person();
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

  ngOnChanges(simplechanges : SimpleChanges) {

    if (this.isEditMode) {
      //create copy of input item to edit
      this.personUnderEdit = { ...this.person };
    }
    else {
      this.personUnderEdit = null;
    }
    this.isEdit = this.isEditMode;

    this.logIt("ngOnChanges",simplechanges);
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
        console.log('added person' + JSON.stringify(person)); //Note the usage of json.stringify to show the person info
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

 logIt(message:string, object : any = null){
   if (object != null ){
    console.log(message + JSON.stringify(object));
   }
   else
    console.log(message);
 }

 //Angular life cycle events below besides the regular used oninit and onChanges which are used above
 // Beware! Called frequently!
  ngDoCheck() { this.logIt(`DoCheck : Called in every change detection cycle anywhere on the page`); }

  ngAfterContentInit() { this.logIt(`AfterContentInit`);  }

  // Beware! Called frequently!
  ngAfterContentChecked() { this.logIt(`AfterContentChecked :  Called in every change detection cycle anywhere on the page`); }

  ngAfterViewInit() { this.logIt(`AfterViewInit`); }

  // Beware! Called frequently!
  ngAfterViewChecked() { this.logIt(`AfterViewChecked : Called in every change detection cycle anywhere on the page`); }

  ngOnDestroy() {  console.log('onDestroy called');}

}
