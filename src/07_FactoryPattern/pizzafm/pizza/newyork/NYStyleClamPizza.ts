import { Pizza } from "../Pizza";

export class NYStyleClamPizza extends Pizza {
  constructor() {
    super();

    this.name = "NY Style Clam Pizza";
    this.dough = "Thin Crust Dough";
    this.sauce = "Marinara Sauce";
    this.toppings.push("Grated Reggiano Cheese");
    this.toppings.push("Fresh Clams from Long Island Sound");
  }
}
