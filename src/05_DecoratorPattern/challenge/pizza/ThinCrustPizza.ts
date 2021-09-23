import { Pizza } from "./Pizza";

export class ThinCrustPizza extends Pizza {
  constructor() {
    super();

    this.description = "Thin crust pizza, with tomato sauce";
  }

  public cost() {
    return 7.99;
  }
}
