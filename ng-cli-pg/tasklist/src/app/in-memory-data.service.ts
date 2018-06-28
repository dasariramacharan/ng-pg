import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Person } from './people/person';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const people : Person[] =[
        { id : 1, name :'Andy' },
        { id : 2, name :'Ben' },
        { id : 3, name :'Chris' },
        { id : 4, name :'Dan' }
      ]; 
    
    return {people};
  }
}