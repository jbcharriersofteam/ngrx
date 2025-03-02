import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignalService {
  products = signal<any[]>([]);
  searchProduct = signal<string>('');
  productsSearched = computed<any[]>(() => {
    const str = this.searchProduct();
    return str === ''
      ? this.products()
      : this.products().filter((product: any) => product.name.includes(str));
  });

  constructor() {}

  setSearchProduct(val: string) {
    this.searchProduct.set(val);
  }

  getAll() {
    this.products.set([
      { name: 'product1' },
      { name: 'product2' },
      { name: 'product3' },
    ]);
  }

  delete(product: any) {
    let newProductList = this.products().filter(
      (item: any) => item.name !== product.name
    );
    this.products.set(newProductList);
  }
}
