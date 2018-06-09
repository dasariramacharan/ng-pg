import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../core/task.service';
import { Observable, pipe   } from 'rxjs'; //TODO: reduce it to import from only required file
import { combineLatest , map  } from 'rxjs/operators';

@Component({
  selector: 'rd-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  task :Task;
  constructor(private route:ActivatedRoute, private taskService: TaskService) { }

  ngOnInit() {
 
    // this.activeRoute.queryParams.subscribe(queryParams => {
    //   // do something with the query params
    // });
      
     //TODO: fix below later to use combineLatest from rxjs version 6 things have changed
     // Ref: if we need mix data from differnt input sources
     // https://kamranahmed.info/blog/observable2018/02/28/dealing-with-route-params-in-angular-5/
     // Combine them both into a single observable
     //var paramInputs  = combineLatest(this.route.params, this.route.queryParams).;   
      // const result = paramInputs.pipe(
      // map(([params, queryParams]) => ({...params, ...queryParams}))
      // );
     
      // Subscribe to the single observable, giving us both
	    this.route.params.subscribe(routeParams => {
        console.log(routeParams);
	    	// routeParams containing both the query and route params
        	this.loadTaskDetail(routeParams.id, routeParams.task);
	    });
  }

  loadTaskDetail(id, taskInfo){
   this.task = this.taskService.getTaskById(id);

 //TODO:implement loading task
  }

}
