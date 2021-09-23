import { Beverage } from "./Beverage";

export class DarkRoast extends Beverage {
  constructor() {
    super();

    this.description = "Dark Roast Coffee";
  }

  public cost() {
    return 0.99;
  }
}
