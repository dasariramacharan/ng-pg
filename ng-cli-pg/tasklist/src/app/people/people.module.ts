import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { AllPeopleComponent } from './all-people/all-people.component';
import { PersonComponent } from './person/person.component';
import { PeopleDashboardComponent } from './people-dashboard/people-dashboard.component';
import { FormsModule } from '@angular/forms';
import { PersonSearchComponent } from './person-search/person-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PeopleRoutingModule
  ],
  declarations: [AllPeopleComponent, PersonComponent, PeopleDashboardComponent, PersonSearchComponent]
})
export class PeopleModule { }
