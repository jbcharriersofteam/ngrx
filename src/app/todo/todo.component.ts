import { CommonModule } from '@angular/common';
import { Component, model, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppState } from '../../ngrx/app.state';
import { Store } from '@ngrx/store';
import * as TodoActions from '../../ngrx/todo.actions';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  todos$: Observable<string[]>;
  newTodo = model('');

  constructor(private store: Store<AppState>){
    this.todos$ = this.store.select((state) => state.todos.todos);
  }

  ngOnInit() {
    this.store.dispatch(TodoActions.loadTodos());
  }

  loadTodos() {
    this.store.dispatch(TodoActions.loadTodos());
  }

  addTodo() {
    if (this.newTodo().trim()) {
      this.store.dispatch(TodoActions.addTodo({ todo: this.newTodo() }));
      this.newTodo.set('');
    }
  }

  removeTodo(todo: string) {
    this.store.dispatch(TodoActions.removeTodo({ todo }));
  }
}
