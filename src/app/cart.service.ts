import { Injectable } from '@angular/core';
import { Product, products } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor() {}

  addToCar(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCar() {
    this.items = [];
    return this.items;
  }
}
