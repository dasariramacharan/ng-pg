import { TestBed, inject } from '@angular/core/testing';

import { PeopleService } from './people.service';

describe('PeopleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleService]
    });
  });

  it('should be created', inject([PeopleService], (service: PeopleService) => {
    expect(service).toBeTruthy();
  }));
  
  it('#getPeople should return value from observable',
  inject([PeopleService], 
    (service: PeopleService) => {
    service.getPeople().subscribe(value => {
      expect(value).not.toBe(null);
      });
  })
);


});
