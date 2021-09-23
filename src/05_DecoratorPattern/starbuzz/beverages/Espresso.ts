import { Beverage } from "./Beverage";

export class Espresso extends Beverage {
  constructor() {
    super();

    this.description = "Espresso";
  }

  public cost() {
    return 1.99;
  }
}
