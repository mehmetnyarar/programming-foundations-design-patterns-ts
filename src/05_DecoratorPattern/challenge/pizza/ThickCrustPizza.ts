import { Pizza } from "./Pizza";

export class ThickCrustPizza extends Pizza {
  constructor() {
    super();

    this.description = "Thick crust pizza, with tomato sauce";
  }

  public cost() {
    return 7.99;
  }
}
