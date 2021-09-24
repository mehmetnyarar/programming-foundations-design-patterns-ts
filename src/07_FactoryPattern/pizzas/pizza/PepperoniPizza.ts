import { Pizza } from "./Pizza";

export class PepperoniPizza extends Pizza {
  constructor() {
    super();

    this.name = "Pepperoni Pizza";
    this.dough = "Crust";
    this.sauce = "Marinara sauce";
    this.toppings.push("Sliced Pepperoni");
    this.toppings.push("Sliced Onion");
    this.toppings.push("Grated parmesan cheese");
  }
}
