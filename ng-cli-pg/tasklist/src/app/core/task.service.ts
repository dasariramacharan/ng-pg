import { Injectable } from '@angular/core';
import { Task } from '../task/task';
import { TaskStatus } from '../shared/task-status.enum';
import { KeyValue } from '../shared/key-value';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  TASKS: Array<Task> = [
    new Task({ id: 1, title: 'Task A', status: TaskStatus.NotStarted }),
    new Task({ id: 2, title: 'Task B', status: TaskStatus.InProgress }),
    new Task({ id: 3, title: 'Task C', status: TaskStatus.Complete }),
    new Task({ id: 4, title: 'Task D', status: TaskStatus.OnHold })
  ];

  constructor() { }

  getTasks() {
    return this.TASKS;
  }

  getActiveTasks() {
    return this.TASKS.filter(t => t.isActive);
  }


  getTaskById(id: number): Task {
    //throw new Error("Method not implemented.");
    return this.TASKS.filter(t => t.id === +id)[0];
  }

  addTask(task: Task) {

    //TODO: add validation

    task.id = this.TASKS.length + 1;
    return this.TASKS.push(task);
  }

  updateTask(task: Task) {
    //TODO: add validation
     console.log(task);
     this.TASKS[task.id] = task;
  }

  removeTask(id: number) {
    this.getTaskById(id).isActive = false;
  }

  unDeleteTask(id: number) {
    this.getTaskById(id).isActive = true;
  }
   
  getTaskStatuses(): KeyValue[] { //TODO: define dictionary of int,string as return type
    var values = Object.keys(TaskStatus) ;
    var items : KeyValue[] = [];
   
    // The options list has the numeric keys, followed by the string keys
    // So, the first half is numeric, the 2nd half is strings
    values = values.splice(values.length/2)
    values.forEach(element => {
      items.push(new KeyValue(+TaskStatus[element],element));
    });
    console.log(items)
    
    return items;
  }
}
