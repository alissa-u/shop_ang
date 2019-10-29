import { Component, OnInit } from '@angular/core';

import { ProductService } from "../product.service"
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }
  
  products = PRODUCTS

  ngOnInit() {
  }

}
