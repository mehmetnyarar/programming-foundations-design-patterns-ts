import { Pizza } from "./Pizza";

export class DefaultPizza extends Pizza {
  constructor() {
    super();

    this.name = "Default Pizza";
    this.dough = "Default Crust";
    this.sauce = "No sauce";
  }
}
