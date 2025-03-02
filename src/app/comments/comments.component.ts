import { Component, effect, ElementRef, input, InputSignal, model, output, viewChild, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  title: InputSignal<any> = input<any>()
  comment = output<number>();
  text = model('mon texte')

  // viewChild and viewChildren
  buttonElement = viewChild<ElementRef>('buttonEl');
  listElement = viewChildren<ElementRef>('listEl')
  lists: number[] = [];

  constructor(){
    effect(() => {
      console.log('button', this.buttonElement()?.nativeElement);
    });
    effect(() => {
      console.log('list', this.listElement().map((item) => item.nativeElement));
    })
  }

  emitComment(){
    this.comment.emit(Math.random())
  }

  changeText(event: any){
    this.text.set(event.target.value);
  }

  add(){
    this.lists.push(1000);
  }
}
