import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Person } from '../person';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { PeopleService } from 'src/app/people/shared/people.service';

@Component({
  selector: 'rd-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {

  //A Subject is both a source of observable values and an Observable itself. 
  //You can subscribe to a Subject as you would any Observable
  private searchTerms = new Subject<string>();
  searchResults$: Observable<Person[]>;

  constructor(private peopleService:PeopleService) { }
   
   //push a search term into the observable stream
   search(term: string) :void {
     this.searchTerms.next(term);
   }

  ngOnInit() {
    this.searchResults$ = this.searchTerms.pipe(

      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.peopleService.searchPersons(term)),
    );

  }

  


}
