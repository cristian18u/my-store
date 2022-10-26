import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, Shipping } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor(private http: HttpClient) {}

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

  getShippingPrice() {
    return this.http.get<Array<Shipping>>('/assets/shipping.json');
  }
}
