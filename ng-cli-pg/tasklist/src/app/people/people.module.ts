import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { AllPeopleComponent } from './all-people/all-people.component';
import { PersonComponent } from './person/person.component';
import { PeopleDashboardComponent } from './people-dashboard/people-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule
  ],
  declarations: [AllPeopleComponent, PersonComponent, PeopleDashboardComponent]
})
export class PeopleModule { }
