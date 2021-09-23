import { ThinCrustPizza } from "./pizza";
import { Cheese, Olives } from "./topping";

export class PizzaStore {
  static main() {
    const pizza = new ThinCrustPizza();
    const cheesePizza = new Cheese(pizza);
    const greekPizza = new Olives(cheesePizza);

    console.log(`${greekPizza.getDescription()} $${greekPizza.cost()}`);
  }
}
