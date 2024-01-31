import { IProduct } from '../interfaces/IProduct';

export class Product implements IProduct {
  constructor(
    private title: string,

    private description: string,
    private price: number,
    private discount: boolean,
    private imageURL: string,
    private priceBySale: number,
    private fromDate: Date,
    private toDate: Date
  ) {}

  // --- get

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }
  getPrice(): number {
    return this.price;
  }
  getDiscount(): boolean {
    return this.discount;
  }

  getImageURL(): string {
    return this.imageURL;
  }

  getPriceBySale(): number {
    return this.priceBySale;
  }

  getDateFrom(): Date {
    return this.fromDate;
  }
  getDateTo(): Date {
    return this.toDate;
  }

  // --- set
  setTitle(title: string): void {
    this.title = title;
  }

  setDescription(description: string): void {
    this.description = description;
  }
  setPrice(price: number): void {
    this.price = price;
  }
  setDiscount(isDiscount: boolean): void {
    this.discount = isDiscount;
  }

  setImageURL(imageURL: string): void {
    this.imageURL = imageURL;
  }

  setPriceBySale(priceBySale: number): void {
    this.priceBySale = priceBySale;
  }
  setDateFrom(date: Date): void {
    this.fromDate = date;
  }
  setDateTo(date: Date): void {
    this.toDate = date;
  }
}
