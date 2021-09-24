export class MenuItem {
  private name: string;
  private description: string;
  private vegetarian: boolean;
  private price: number;

  constructor(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    this.name = name;
    this.description = description;
    this.vegetarian = vegetarian;
    this.price = price;
  }

  public getName() {
    return this.name;
  }

  public getDescription() {
    return this.description;
  }

  public getPrice() {
    return this.price;
  }

  public isVegetarian() {
    return this.vegetarian;
  }
}
