import { Component, OnInit } from '@angular/core';

import { ProductService } from "../../product.service"
import { PRODUCTS } from '../../mock-products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products = PRODUCTS

  ngOnInit() {
  }

}
