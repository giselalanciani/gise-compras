import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }

  addProduct(product: Product) {
    this.items.push(product);
  }

  getProducts(): Product[] {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
}
