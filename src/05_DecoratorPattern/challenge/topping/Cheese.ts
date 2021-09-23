import { Pizza } from "../pizza";
import { ToppingDecorator } from "./ToppingDecorator";

export class Cheese extends ToppingDecorator {
  constructor(pizza: Pizza) {
    super();

    this.pizza = pizza;
  }

  public getDescription() {
    return this.pizza.getDescription() + ", Cheese";
  }

  public cost() {
    return this.pizza.cost(); // cheese is free
  }
}
