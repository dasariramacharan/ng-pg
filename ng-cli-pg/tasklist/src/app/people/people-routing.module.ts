import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPeopleComponent } from './all-people/all-people.component';
import { PersonComponent } from './person/person.component';
import { PeopleDashboardComponent } from './people-dashboard/people-dashboard.component';

const routes: Routes = [
  //TODO: declare common route as 'people' for all items in this list how??
  //      basically how to do it for child module.. is it as child routes under one root?
  {path : 'people/dashboard', component : PeopleDashboardComponent},
  {path : 'people/all', component: AllPeopleComponent},
  {path : 'people/:id', component : PersonComponent}, //TODO:rename to personDetailComponent
  {path : 'people',redirectTo : 'people/dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
