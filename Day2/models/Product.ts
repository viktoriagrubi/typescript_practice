interface Sellable {
  getPrice(): number;
}

export default class Product implements Sellable {
  public name: string;
  public price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getPrice(): number {
    return this.price;
  }
}
