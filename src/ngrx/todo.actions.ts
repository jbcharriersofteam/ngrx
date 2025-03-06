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


// import { createActionGroup, emptyProps, props } from '@ngrx/store';
// import { User } from './user';

// export const usersActions = createActionGroup({
//   source: 'Users',
//   events: {
//     'Get All':  emptyProps(),
//     'Get All Success': props<{ users: User[] }>(),
//     'Get All Failure': props<{ error: any }>()
//   },
// });
