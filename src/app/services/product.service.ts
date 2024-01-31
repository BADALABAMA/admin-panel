import { Injectable } from '@angular/core';
import { Product } from '../classes/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];
  constructor() {}

  public getProducts() {
    return this.products;
  }

  public addNewProduct(newProduct: Product): void {
    console.log('PRODUCT ADD', newProduct);
    this.products.push(newProduct);
  }

  public priceByDiscount(price: number, discount: number): number {
    const discountedPrice: number = price - price * (discount / 100);
    return discountedPrice;
  }
}
