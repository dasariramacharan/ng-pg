import { Injectable } from '@angular/core';
import {Person} from '../person'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  PEOPLE : Person[] =[
    { id : 1, name :'Andy' },
    { id : 2, name :'Ben' },
    { id : 3, name :'Chris' },
    { id : 4, name :'Dan' }
  ]; 

  constructor() { }
 
   getPeople() : Person[] {
     return this.PEOPLE;
   }


}
