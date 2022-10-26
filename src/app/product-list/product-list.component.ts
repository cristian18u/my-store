import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;
  constructor() {
    this.products = products;
  }

  ngOnInit(): void {}
  shared() {
    window.alert('product shred');
  }
  onNotify() {
    window.alert('product mayor a 700');
  }
}
