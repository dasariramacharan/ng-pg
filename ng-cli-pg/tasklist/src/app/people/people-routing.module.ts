import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPeopleComponent } from './all-people/all-people.component';
import { PersonComponent } from './person/person.component';
import { PeopleDashboardComponent } from './people-dashboard/people-dashboard.component';

const routes: Routes = [
  {path : 'people', component : PeopleDashboardComponent},
  {path : 'person/:id', component : PersonComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
