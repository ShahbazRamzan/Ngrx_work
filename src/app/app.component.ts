import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './store/task.model';
import { AppState } from './store/reducer/task.reducer';
import { addTask, deleteTask, getTasks, updateTask } from './store/actions/task.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
 
  tasks: Task[] = [];

  constructor(private store: Store<AppState>) {
    this.store.select(state => state.tasks).subscribe((tasks) => {
      this.tasks = tasks;
    });
  
    this.store.dispatch(getTasks());

  }

  addNewTask() {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title: 'New Task',
      description: 'This is a new task.'
    };
    this.store.dispatch(addTask({ task: newTask }));
  }

  updateTask(task: Task) {
    const updatedTask: Task = { ...task, title: 'Updated Task', description: 'This task has been updated.' };
    this.store.dispatch(updateTask({ task: updatedTask }));
  }

  deleteTask(id: number) {
    this.store.dispatch(deleteTask({ id }));
  }

}
