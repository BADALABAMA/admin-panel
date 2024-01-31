import { Component } from '@angular/core';
import { Product } from '../classes/Product';
import { ProductService } from '../services/product.service';
import {
  MatDatepicker,
  MatDatepickerInputEvent,
} from '@angular/material/datepicker';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  label: string = '';
  description: string = '';
  price: number = 0;
  hasDiscount: boolean = false;
  discount: number = 0;
  dateFrom: any;
  dateTo: any;

  products: Product[] = this.productService.getProducts();

  constructor(private productService: ProductService) {}

  public resetInputs() {
    this.label = '';
    this.description = '';
    this.price = 0;
    this.hasDiscount = false;
    this.discount = 0;
  }

  addProduct(
    label: string,
    description: string,
    price: number,
    hasDiscount: boolean,
    discount: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    console.log(label, price);

    const priceWithDiscount: number = hasDiscount
      ? this.productService.priceByDiscount(price, discount)
      : price;
    if (label && description !== '') {
      const newProduct: Product = new Product(
        label,
        description,
        +price,
        hasDiscount,
        'assets/360_F_525550698_pcSOrKvA81oMHeEgI1e6MJHn1NIzWREd.jpg',
        +priceWithDiscount,
        dateFrom,
        dateTo
      );

      this.productService.addNewProduct(newProduct);
      this.resetInputs();
    }
  }

  onDateFromSelected(event: MatDatepickerInputEvent<Date>): void {
    this.dateFrom = event.value;
  }

  onDateToSelected(event: MatDatepickerInputEvent<Date>): void {
    this.dateTo = event.value;
  }
}
