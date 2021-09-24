import { GenericIterator } from "../iterator";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";

export class PancakeHouseMenu implements Menu {
  private menuItems: Array<MenuItem>;

  constructor() {
    this.menuItems = [];

    this.addItem(
      "K&B's Pancake Breakfast",
      "Pancakes with scrambled eggs, and toast",
      true,
      2.99
    );

    this.addItem(
      "Regular Pancake Breakfast",
      "Pancakes with fried eggs, sausage",
      false,
      2.99
    );

    this.addItem(
      "Blueberry Pancakes",
      "Pancakes made with fresh blueberries, and blueberry syrup",
      true,
      3.49
    );

    this.addItem(
      "Waffles",
      "Waffles, with your choice of blueberries or strawberries",
      true,
      3.59
    );
  }

  public addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    const menuItem = new MenuItem(name, description, vegetarian, price);
    this.menuItems.push(menuItem);
  }

  public getMenuItems() {
    return this.menuItems;
  }

  public createIterator() {
    return new GenericIterator(this.menuItems);
  }
}
