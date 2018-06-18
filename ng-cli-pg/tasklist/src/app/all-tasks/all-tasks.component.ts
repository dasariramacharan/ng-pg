import { Component, OnInit } from '@angular/core';
import { TaskService } from '../core/task.service';
import { Task } from '../task/task';
import { TaskStatus } from '../shared/task-status.enum';

@Component({
  selector: 'rd-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {
 
  TaskStatus = TaskStatus; // allows you to use TaskStatus in template as TaskStatus[indexNo]
  tasks :Task[];
  
  constructor(private taskService : TaskService) { }

  ngOnInit() {
   this.reloadTasks();
  }

 reloadTasks(){
   this.tasks = this.taskService.getTasks();
 }

 deleteTask(task){
  this.taskService.removeTask(task.id);
  this.reloadTasks();
 }

 unDeleteTask(task){
  this.taskService.unDeleteTask(task.id);
  this.reloadTasks();
}

}
