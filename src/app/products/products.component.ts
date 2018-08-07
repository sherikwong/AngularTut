import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[];

  selectedProduct: Product

  constructor(private productService: ProductService) {}

  onSelectProduct(product) {
    this.selectedProduct = product;
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    const products = this.productService.getProducts();
    this.products = products;
  }
}

// This component asks for the products via imported service
