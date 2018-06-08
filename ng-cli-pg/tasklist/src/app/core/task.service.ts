import { Injectable } from '@angular/core';
import { Task } from '../task/task';
import { TaskStatus } from '../shared/task-status.enum';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

   TASKS : Array<Task> =  [
     new Task({ id: 1, title:'Task 1 : not started' , status:TaskStatus.NotStarted}),
     new Task({ id: 2, title:'Task 2 : not started' , status:TaskStatus.InProgress}),
     new Task({ id: 3, title:'Task 3 : not started' , status:TaskStatus.Complete}),
     new Task({ id: 4, title:'Task 4 : not started' , status:TaskStatus.OnHold})     
  ];

  constructor() { }
  
   getTasks(){
     return this.TASKS.filter(t=>t.isActive);
   }
 
  addTask(task: Task){
      
    //TODO: add validation
    
    task.id = this.TASKS.length + 1;
    return this.TASKS.push(task);
  }

  updateTask(task:Task){
    //TODO: add validation
          
     this.TASKS[task.id] = task;
  }

  removeTask(id:number){
      this.TASKS[id].isActive = false;
  } 




}
