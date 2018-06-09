import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { AppComponent } from './app.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

const routes: Routes = [
  {path : 'tasks', component : AllTasksComponent},
  {path : 'task/:id', component : TaskDetailsComponent},  
  {path :'*' , component : AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
