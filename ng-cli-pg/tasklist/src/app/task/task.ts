import { TaskStatus } from "../shared/task-status.enum";

export class Task {
    id: number;
    title: string;
    status: TaskStatus;
    isActive: boolean = true;
   
     constructor(values:Object={}){//Note: Passing default value to Object param to allow default constructor with no params
         Object.assign(this,values);
     }
}
