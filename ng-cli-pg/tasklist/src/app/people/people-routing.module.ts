import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPeopleComponent } from './all-people/all-people.component';

const routes: Routes = [
  {path : 'people', component : AllPeopleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
