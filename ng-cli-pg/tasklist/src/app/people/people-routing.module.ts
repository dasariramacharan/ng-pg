import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPeopleComponent } from './all-people/all-people.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {path : 'people', component : AllPeopleComponent},
  {path : 'person/:id', component : PersonComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
