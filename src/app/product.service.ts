import { Injectable } from '@angular/core';
import { Product } from './product'

const products = [
  {
    id: 1,
    name: 'iPhone',
    price: 650,
  },
  {
    id: 2,
    name: 'Mac',
    price: 1200,
  },
  {
    id: 3,
    name: 'iPad',
    price: 500,
  }
]

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return products;
  }
}

// Is in charge of everything related to getting the list of products
