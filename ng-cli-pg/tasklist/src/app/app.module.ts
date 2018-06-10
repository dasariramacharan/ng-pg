import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

import { TaskService } from './core/task.service';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { CustomAngularMaterialModule} from './custom-angular-material-module/custom-angular-material.module'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AllTasksComponent,
    TaskDetailsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule, //optional module : dependency to use advanced angular material animations
    CustomAngularMaterialModule // import the custom Angular Material modules after Angular's BrowserModule, 
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
