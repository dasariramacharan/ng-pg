import { TestBed, inject } from '@angular/core/testing';

import { TaskService } from './task.service';
import { TaskStatus } from '../shared/task-status.enum';
import { Task } from '../task/task';

describe('TaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService]
    });
  });

  it('should be created', inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));  
});

//TODO: write tests similar to tests for service at https://www.sitepoint.com/angular-2-tutorial/ 