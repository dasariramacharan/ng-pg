import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

import { TaskService } from './core/task.service';


@NgModule({
  declarations: [
    AppComponent,
    AllTasksComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
