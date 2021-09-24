import { Pizza } from "./Pizza";

export class VeggiePizza extends Pizza {
  constructor() {
    super();

    this.name = "Veggie Pizza";
    this.dough = "Crust";
    this.sauce = "Marinara sauce";
    this.toppings.push("Shredded mozzarella");
    this.toppings.push("Grated parmesan");
    this.toppings.push("Diced onion");
    this.toppings.push("Sliced mushrooms");
    this.toppings.push("Sliced red pepper");
    this.toppings.push("Sliced black olives");
  }
}
