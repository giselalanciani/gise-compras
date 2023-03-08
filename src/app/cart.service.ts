import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor() {}

  addProduct(product: Product) {
    this.items.push(product)
  }

  getProducts (): Product[] {
    return this.items;
  }
}
