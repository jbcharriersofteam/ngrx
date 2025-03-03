import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoReducer } from '../ngrx/todo.reducer';
import { TodoEffects } from '../ngrx/todo.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ todos: todoReducer }),
    provideEffects(TodoEffects),
    provideStoreDevtools({ maxAge: 25 }),
  ],
};
