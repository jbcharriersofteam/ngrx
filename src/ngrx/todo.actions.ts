import { createAction, props } from '@ngrx/store';

export const loadTodos = createAction('[Todo] load Todos');
export const loadTodosSuccess = createAction(
  '[Todo] Load Todos Success',
  props<{ todos: string[] }>()
);
export const loadTodosFailure = createAction(
  '[Todo] Load Todos Failure',
  props<{ error: string }>()
);
export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ todo: string }>()
);
export const removeTodo = createAction(
  '[Todo] Remove Todo',
  props<{ todo: string }>()
);
