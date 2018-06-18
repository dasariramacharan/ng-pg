import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../core/task.service';
import { Observable  } from 'rxjs'; //TODO: reduce it to import from only required file
import { merge   } from 'rxjs/operators'; //TODO: reduce it
import { TaskStatus } from '../shared/task-status.enum';

@Component({
  selector: 'rd-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  TaskStatusEnum = TaskStatus; // allows you to use TaskStatus in template as TaskStatus[indexNo]

  task :Task;
  taskToSave :Task = new Task();
  constructor(private route:ActivatedRoute, private taskService: TaskService, private router:Router) { }

  ngOnInit() {
     // https://kamranahmed.info/blog/observable2018/02/28/dealing-with-route-params-in-angular-5/
     // Combine them both into a single observable
     var paramInputs  = this.route.params.pipe(merge(this.route.queryParams));   
           
      // Subscribe to the single observable, giving us both
	  paramInputs.subscribe(routeParams => {
        console.log(routeParams);
        this.loadTaskDetail(routeParams.id, routeParams.task);
      });
      
   console.log(this.taskService.getTaskStatuses());

  }

   saveTask(){
     //TODO: validate entity before save and show validation message
     this.taskService.updateTask(this.taskToSave);

     //TODO: on success show this or redirect
     //this.task=this.taskToSave;  
     
     //todo:add toaster/notification
     //alert('saved');
    //on sucessful save close form
    this.router.navigate([{outlets:{details:null}}]);
   }      
  

  private loadTaskDetail(id, taskInfo){
    if(id){
      this.task = this.taskService.getTaskById(id);     
    }
    else if(taskInfo){
      this.task = taskInfo;
    }
  }
}
