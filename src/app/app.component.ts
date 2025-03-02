import { Component, effect, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalService } from './services/signal.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommentsComponent } from './comments/comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  productService = inject(SignalService);
  products = this.productService.productsSearched;
  searchInput: FormControl = new FormControl('');
  myTitle: any = {
    name: 'title 1'
  }

  constructor(){
    effect(() => {
      console.log('produit recherché', this.productService.searchProduct());
    })
  }

  ngOnInit() {
    this.productService.getAll();
    this.searchInput.valueChanges.subscribe((value: string) => {
      this.productService.setSearchProduct(value as string);
    });
  }

  removeProduct(product: any) {
    this.productService.delete(product);
  }

  changeTitle(){
    this.myTitle.name = 'title 2';
  }

  printComment(event: number){
    console.log(event);
  }
}
