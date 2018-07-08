import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailsComponent } from './task-details.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { componentFactoryName } from '@angular/compiler';
import { NO_ERRORS_SCHEMA } from '@angular/core';

fdescribe('TaskDetailsComponent', () => {
  let component: TaskDetailsComponent;
  let fixture: ComponentFixture<TaskDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDetailsComponent ],
      imports:[FormsModule,RouterTestingModule],
      schemas: [ NO_ERRORS_SCHEMA ] // ignore unknown directives
    })
    .compileComponents();
  }));

 beforeEach(() => {
    fixture = TestBed.createComponent(TaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});

//prefix with x makes then commented tests
xdescribe('Dummy test',()=>{
   xit('does not run',()=>{
    expect(componentFactoryName).toEqual('expected value'); 
   });



})