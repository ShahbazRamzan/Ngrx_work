import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TaskService } from '../../services/task.service';
import {
  addTask, addTaskSuccess, addTaskFailure,
  deleteTask, deleteTaskSuccess, deleteTaskFailure,
  updateTask, updateTaskSuccess, updateTaskFailure,
  getTasks,
  getTasksSuccess,
  getTasksFailure
} from '../actions/task.action';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions, private taskService: TaskService) {
    console.log('instance',this.actions$);
    
  }


  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTasks),
      mergeMap(() =>
        this.taskService.getTasks().pipe(
          map((tasks) => getTasksSuccess({ tasks })),
          catchError((error) => of(getTasksFailure({ error })))
        )
      )
    )
  );
  

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTask),
      mergeMap(({ task }) =>
        this.taskService.createTask(task).pipe(
          map((newTask) => addTaskSuccess({ task: newTask })), 
          catchError((error) => of(addTaskFailure({ error }))) 
        )
      )
    )
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTask),
      mergeMap(({ id }) =>
        this.taskService.deleteTask(id).pipe(
          map(() => deleteTaskSuccess({ id })), 
          catchError((error) => of(deleteTaskFailure({ error }))) 
        )
      )
    )
  );

  updateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTask),
      mergeMap(({ task }) =>
        this.taskService.updateTask(task).pipe(
          map((updatedTask) => updateTaskSuccess({ task: updatedTask })), 
          catchError((error) => of(updateTaskFailure({ error }))) 
        )
      )
    )
  );
}
