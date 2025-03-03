import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';

export interface TodoState {
  todos: string[];
  loading: boolean;
  error: string | null;
}

export const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.loadTodos, (state) => ({
    ...state,
    loading: true,
  })),
  on(TodoActions.loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos,
    loading: false,
  })),
  on(TodoActions.loadTodosFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(TodoActions.addTodo, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo],
  })),
  on(TodoActions.removeTodo, (state, { todo }) => ({
    ...state,
    todos: state.todos.filter((t) => t !== todo),
  }))
);
