export interface IProduct {
  getTitle(): string;

  getDescription(): string;
  getPrice(): number;
  getDiscount(): boolean;
  getImageURL(): string;
  getPriceBySale(): number;
  getDateFrom(): Date;
  getDateTo(): Date;

  setTitle(title: string): void;

  setDescription(description: string): void;
  setPrice(price: number): void;
  setDiscount(discount: boolean): void;
  setDateFrom(date: Date): void;
  setDateTo(date: Date): void;
}
