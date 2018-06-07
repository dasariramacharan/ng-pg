import { Task } from './task';
import { TaskStatus } from '../shared/task-status.enum';

describe('Task', () => {
  it('should create an instance', () => {
    expect(new Task()).toBeTruthy();
  });

  it('should accept values in the constructor',()=>{
    let task = new Task({ id: 1, title:'Task 1' , status:TaskStatus.NotStarted});
    expect(task.id).toEqual(1);
    expect(task.title).toEqual('Task 1');
    expect(task.status).toEqual(TaskStatus.NotStarted);
    expect(task.isActive).toEqual(true);   
 });


});
