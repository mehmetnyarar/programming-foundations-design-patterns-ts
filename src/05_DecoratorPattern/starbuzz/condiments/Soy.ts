import { Beverage } from "../beverages";
import { CondimentDecorator } from "./CondimentDecorator";

export class Soy extends CondimentDecorator {
  private beverage: Beverage;

  constructor(beverage: Beverage) {
    super();

    this.beverage = beverage;
  }

  public getDescription() {
    return this.beverage.getDescription() + ", Soy";
  }

  public cost() {
    return 0.15 + this.beverage.cost();
  }
}
