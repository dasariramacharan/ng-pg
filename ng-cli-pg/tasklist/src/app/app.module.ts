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
import { LoginComponent } from './core/login/login.component';
import { PeopleModule } from './people/people.module';
import { MessagesComponent } from './core/messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    AllTasksComponent,
    TaskDetailsComponent,
    NavBarComponent,
    LoginComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, //optional module : dependency to use advanced angular material animations
    CustomAngularMaterialModule, // import the custom Angular Material modules after Angular's BrowserModule, 
    PeopleModule, //TODO: change to lazy loading
    AppRoutingModule, // should be last
    HttpClientModule,
 
  // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
  // and returns simulated server responses.
  // Remove it when a real server is ready to receive requests.
  HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false })

  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
