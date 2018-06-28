import { Injectable } from '@angular/core';
import {Person} from '../person'
import {Observable,of} from 'rxjs'
import { MessageService } from '../../core/message.service';
import{ HttpClient,HttpHeaders} from'@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  
  private peopleUrl ='api/people'; //url to web api

  constructor(private http:HttpClient,
    private messageService:MessageService) { }
 
   getPeople() : Observable<Person[]> { 
    //  this.messageService.add('PeopleService: TODO:fetch from server');
     return this.http.get<Person[]>(this.peopleUrl)//converting to observable
     .pipe(
      //RxJS tap operator, which looks at the observable values, does something with those values, and passes them along.
      // The tap call back doesn't touch the values themselves.
      tap(heroes => this.log(`fetched heroes`)),      
      
      catchError(this.handleError('getHeroes', []))
    );
   }
  
   getPerson(id:number):Observable<Person>{
     
    const url =`${this.peopleUrl}/${id}`;

    return this.http.get<Person>(url).pipe(
      tap( _ => this.log(`fetched person with id = ${id}`)),
      catchError(this.handleError<Person>(`getPerson id=${id}`))
    );
   }









   private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
