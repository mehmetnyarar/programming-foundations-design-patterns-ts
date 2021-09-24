import { Pizza } from "../Pizza";

export class NYStylePepperoniPizza extends Pizza {
  constructor() {
    super();

    this.name = "NY Style Pepperoni Pizza";
    this.dough = "Thin Crust Dough";
    this.sauce = "Marinara Sauce";
    this.toppings.push("Grated Reggiano Cheese");
    this.toppings.push("Sliced Pepperoni");
    this.toppings.push("Garlic");
    this.toppings.push("Onion");
    this.toppings.push("Mushrooms");
    this.toppings.push("Red Pepper");
  }
}
