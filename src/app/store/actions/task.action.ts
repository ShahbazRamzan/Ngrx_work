import { createAction, props } from '@ngrx/store';
import { Task } from '../task.model';

// Add Task Actions
export const addTask = createAction('[Task] Add', props<{ task: Task }>());
export const addTaskSuccess = createAction('[Task] Add Success', props<{ task: Task }>());
export const addTaskFailure = createAction('[Task] Add Failed', props<{ error: any }>());

// Delete Task Actions
export const deleteTask = createAction('[Task] Delete', props<{ id: number }>());
export const deleteTaskSuccess = createAction('[Task] Delete Success', props<{ id: number }>());
export const deleteTaskFailure = createAction('[Task] Delete Failed', props<{ error: any }>());

// Update Task Actions
export const updateTask = createAction('[Task] Update', props<{ task: Task }>());
export const updateTaskSuccess = createAction('[Task] Update Success', props<{ task: Task }>());
export const updateTaskFailure = createAction('[Task] Update Failed', props<{ error: any }>());

// Update Task Actions
export const getTasks = createAction('[Task] Load');
export const getTasksSuccess = createAction('[Task] Load Success', props<{ tasks: Task[] }>());
export const getTasksFailure = createAction('[Task] Load Failed', props<{ error: any }>());

