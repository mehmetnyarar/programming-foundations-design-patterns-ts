import { Beverage } from "./Beverage";

export class Decaf extends Beverage {
  constructor() {
    super();

    this.description = "Decaf Coffee";
  }

  public cost() {
    return 1.05;
  }
}
