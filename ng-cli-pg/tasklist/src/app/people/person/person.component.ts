import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Person } from '../person';

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
  constructor() { }

  ngOnInit() {
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
     this.personUnderEdit = null;
     this.isEdit = false;
     this.person = null;
  }
}
