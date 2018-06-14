import { Injectable } from '@angular/core';
import { Task } from '../task/task';
import { TaskStatus } from '../shared/task-status.enum';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

   
   TASKS : Array<Task> =  [
     new Task({ id: 1, title:'Task 1 : not started' , status:TaskStatus.NotStarted}),
     new Task({ id: 2, title:'Task 2 : in progress' , status:TaskStatus.InProgress}),
     new Task({ id: 3, title:'Task 3 : complete' , status:TaskStatus.Complete}),
     new Task({ id: 4, title:'Task 4 : on hold' , status:TaskStatus.OnHold})     
  ];

  constructor() { }
  
   getTasks(){
     return this.TASKS.filter(t=>t.isActive);
   }
 
  getTaskById(id: number): Task {
    //throw new Error("Method not implemented.");
    return this.TASKS.filter(t=>t.id === +id)[0];
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
    this.getTaskById(id).isActive = false;
  }
  
  unDeleteTask(id:number){
    this.getTaskById(id).isActive = true;
}
  
}
