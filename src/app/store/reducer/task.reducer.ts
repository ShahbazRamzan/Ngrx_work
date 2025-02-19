import { createReducer, on } from "@ngrx/store";
import { addTask, deleteTask, getTasksSuccess, updateTask } from "../actions/task.action";
import { Task } from "../task.model";

export interface AppState {
    tasks: Task[];
  }
  
  export const initialState: AppState = {
    tasks: []
  };

  export const taskReducer = createReducer(
    initialState,
  
    on(getTasksSuccess, (state, { tasks }) => ({
      ...state,
      tasks
    })),
  
    on(addTask, (state, { task }) => ({
      ...state,
      tasks: [...state.tasks, task]
    })),
  
    on(updateTask, (state, { task }) => ({
      ...state,
      tasks: state.tasks.map(t => (t.id === task.id ? task : t))
    })),
  
    on(deleteTask, (state, { id }) => ({
      ...state,
      tasks: state.tasks.filter(t => t.id !== id)
    }))
  );
  