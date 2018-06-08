import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path : 'tasks', component : AllTasksComponent},
  {path :'*' , component : AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
