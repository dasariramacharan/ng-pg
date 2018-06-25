import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'rd-person',
  templateUrl: './person.component.html',
  styles: []
})
export class PersonComponent implements OnInit {
  @Input() isEditMode : boolean;
  @Input() person : Person;
  constructor() { }

  ngOnInit() {
  }

}
