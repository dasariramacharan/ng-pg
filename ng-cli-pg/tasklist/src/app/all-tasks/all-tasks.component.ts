import { Component, OnInit } from '@angular/core';
import { TaskService } from '../core/task.service';
import { Task } from '../task/task';
import { TaskStatus } from '../shared/task-status.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'rd-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {
 
  TaskStatus = TaskStatus; // allows you to use TaskStatus in template as TaskStatus[indexNo]
  tasks :Task[];
  selectedTask : Task;

  constructor(private taskService : TaskService, private router:Router) { }

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

  addTask(){
  this.router.navigate([{outlets:{details:['task',0]}}])
}

editTask(task :Task){
  this.selectedTask= task;
  this.router.navigate([{outlets:{details:['task', task.id]}}]);
 }

}
