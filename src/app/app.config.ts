import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { taskReducer } from './store/reducer/task.reducer';
import { Actions, provideEffects } from '@ngrx/effects';
import { TaskEffects } from './store/effects/task.effects';
import { provideHttpClient } from '@angular/common/http';
import { TaskService } from './services/task.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),  
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
      provideStore({ tasks: taskReducer }) ,
      provideEffects([TaskEffects]),
      TaskService,
      Actions

  ]
};
