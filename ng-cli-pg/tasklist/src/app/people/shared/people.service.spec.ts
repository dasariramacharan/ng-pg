import { TestBed, inject } from '@angular/core/testing';
import { PeopleService } from './people.service';

import { HttpClientTestingModule ,HttpTestingController} from '@angular/common/http/testing'
import { HttpClient, HttpErrorResponse, HttpResponse  } from '@angular/common/http';
import { MessageService } from '../../core/message.service';
import { Person } from '../person';

describe('PeopleService', () => {
  let httpClient : HttpClient;
  let httpTestingController : HttpTestingController;
  let peopleService : PeopleService;

  beforeEach(() => {
   
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[PeopleService, MessageService] 
    });
  
     httpClient = TestBed.get(HttpClient);
     httpTestingController = TestBed.get(HttpTestingController);
     peopleService = TestBed.get(PeopleService);
  });

 afterEach(()=>{
   // After every test, assert that there are no more pending requests.
       httpTestingController.verify();
 }); 

  it('should be created', inject([PeopleService], (service: PeopleService) => {
    expect(service).toBeTruthy();
  }));
  
    describe('#getPeople',()=>{
      let expectedPeople: Person[];  
      
      beforeEach(()=>{
          peopleService = TestBed.get(PeopleService);
          expectedPeople = [
             { id:1, name:'A'},
             { id:2, name:'B'}
          ] as Person[];
      });

      it(' should return expected people (called once)', ()=>{
        peopleService.getPeople().subscribe(people => { 
          // similarly if it was promise use .then and add your test condition
          expect(people).not.toBe(null);
          expect(people.length).toEqual(2);
          expect(people).toEqual(expectedPeople,'should return expected people');
          },
          //The subscribe() method takes a success (next) and fail (error) callback. 
          //Make sure you provide both callbacks so that you capture errors.
          // Neglecting to do so produces an asynchronous uncaught observable error that the test runner will likely attribute to a completely different test.
        error => fail('error when retriving data for getPeople'));
      
        const req = httpTestingController.expectOne(peopleService.peopleUrl)
        expect(req.request.method).toEqual('GET');
  
        req.flush(expectedPeople); 
      });


      it('should be OK returning no people',()=>{
         peopleService.getPeople()
                      .subscribe(people => expect(people.length).toEqual(0,'should have empty people array'),fail); 

         const req= httpTestingController.expectOne(peopleService.peopleUrl);
         
         req.flush([]); // test response with no people
      });

      

      
    // This service reports the error but finds a way to let the app keep going.
    it('should turn 404 into an empty peoples result', () => {

      peopleService.getPeople().subscribe(
        peoplees => expect(peoplees.length).toEqual(0, 'should return empty peoplees array'),
        fail
      );

      const req = httpTestingController.expectOne(peopleService.peopleUrl);

      // respond with a 404 and the error message in the body
      const msg = 'deliberate 404 error';
      req.flush(msg, {status: 404, statusText: 'Not Found'});
    });
    
    

    it('should return expected people (called multiple times)', () => {

      peopleService.getPeople().subscribe();
      peopleService.getPeople().subscribe();
      peopleService.getPeople().subscribe(
        people => expect(people).toEqual(expectedPeople, 'should return expected people'),
        fail
      );

      const requests = httpTestingController.match(peopleService.peopleUrl);
      expect(requests.length).toEqual(3, 'calls to getPeople()');

      // Respond to each request with different mock person results
      requests[0].flush([]);
      requests[1].flush([{id: 1, name: 'Andrew'}]);
      requests[2].flush(expectedPeople);
    });
  });

  describe('#updatePerson', () => {
    
    //TODO: Why we need below val when not used or how to use it
    // Expecting the query form of URL so should not 404 when id not found
    const makeUrl = (id: number) => `${peopleService.peopleUrl}/?id=${id}`;

    it('should update a person and return it', () => {

      const updatePerson: Person = { id: 1, name: 'A' };

      peopleService.updatePerson(updatePerson).subscribe(
        data => expect(data).toEqual(updatePerson, 'should return the person'),
        fail
      );

      // PersonService should have made one request to PUT person
      const req = httpTestingController.expectOne(peopleService.peopleUrl);
      expect(req.request.method).toEqual('PUT');
      expect(req.request.body).toEqual(updatePerson);

      // Expect server to return the person after PUT
      const expectedResponse = new HttpResponse(
        { status: 200, statusText: 'OK', body: updatePerson });
      req.event(expectedResponse);
    });

    // This service reports the error but finds a way to let the app keep going.
    it('should turn 404 error into return of the update person', () => {
      const updatePerson: Person = { id: 1, name: 'A' };

      peopleService.updatePerson(updatePerson).subscribe(
        data => expect(data).toEqual(updatePerson, 'should return the update person'),
        fail
      );

      const req = httpTestingController.expectOne(peopleService.peopleUrl);

      // respond with a 404 and the error message in the body
      const msg = 'deliberate 404 error';
      req.flush(msg, {status: 404, statusText: 'Not Found'});
    });
  });
  
  describe('#addPerson',()=>{
       
    it('should raise error if error received from server ',()=>{
      const addPerson: Person = {  id:0, name :'duplicate' };
      const emsg = 'deliberate 404 error';

      peopleService.addPerson(addPerson).subscribe(
        data => fail('should have failed with the 404 error'),
        (error: HttpErrorResponse) => {
          expect(error.status).toEqual(404, 'status');
          expect(error.error).toEqual(emsg, 'message');
        }
      );


      const req = httpTestingController.expectOne(peopleService.peopleUrl);

     // Respond with mock error
    req.flush(emsg, { status: 404, statusText: 'Not Found' });

    });

  })

  

   
});

