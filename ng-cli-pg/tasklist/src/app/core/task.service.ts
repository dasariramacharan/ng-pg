import { Injectable } from '@angular/core';
import { Task } from '../task/task';
import { TaskStatus } from '../shared/task-status.enum';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

   TASKS : Array<Task> =  [
     new Task({ id: 1, title:'Task 1 : not started' , status:TaskStatus.NotStarted}),
     new Task({ id: 1, title:'Task 1 : not started' , status:TaskStatus.NotStarted}),
     new Task({ id: 1, title:'Task 1 : not started' , status:TaskStatus.NotStarted}),
     new Task({ id: 1, title:'Task 1 : not started' , status:TaskStatus.NotStarted})     
  ];

  constructor() { }

  


}
