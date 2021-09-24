import { PizzaStore } from "./PizzaStore";
import { SimplePizzaFactory } from "./SimplePizzaFactory";

export class PizzaTestDrive {
  static main() {
    const factory = new SimplePizzaFactory();
    const store = new PizzaStore(factory);

    let pizza = store.orderPizza("cheese");
    console.log(`We ordered a ${pizza.getName()}\n`);
    console.log(pizza);

    pizza = store.orderPizza("veggie");
    console.log(`We ordered a ${pizza.getName()}\n`);
    console.log(pizza);
  }
}
