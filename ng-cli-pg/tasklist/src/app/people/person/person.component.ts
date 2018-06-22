import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rd-person',
  templateUrl: './person.component.html',
  styles: []
})
export class PersonComponent implements OnInit {
   
  @Input() person : Person;
  constructor() { }

  ngOnInit() {
  }

}
