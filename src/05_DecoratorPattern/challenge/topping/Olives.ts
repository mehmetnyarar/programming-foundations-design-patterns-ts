import { Pizza } from "../pizza";
import { ToppingDecorator } from "./ToppingDecorator";

export class Olives extends ToppingDecorator {
  constructor(pizza: Pizza) {
    super();

    this.pizza = pizza;
  }

  public getDescription() {
    return this.pizza.getDescription() + ", Olives";
  }

  public cost() {
    return this.pizza.cost() + 0.3;
  }
}
