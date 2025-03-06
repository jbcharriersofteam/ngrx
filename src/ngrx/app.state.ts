export interface AppState {
  todos: TodoState;
}

export interface TodoState {
  todos: string[];
  loading: boolean;
  error: string | null;
}
