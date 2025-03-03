import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos = ['Acheter du pain', 'Apprendre NgRx', 'Faire du sport'];

  getTodos(): Observable<string[]> {
    return of(this.todos).pipe(delay(1000));
  }
}
