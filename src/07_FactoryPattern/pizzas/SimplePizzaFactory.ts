import {
  CheesePizza,
  ClamPizza,
  DefaultPizza,
  PepperoniPizza,
  Pizza,
  VeggiePizza,
} from "./pizza";

export class SimplePizzaFactory {
  public createPizza(type: string): Pizza {
    let pizza = null;

    if (type === "cheese") {
      pizza = new CheesePizza();
    } else if (type === "pepperoni") {
      pizza = new PepperoniPizza();
    } else if (type === "clam") {
      pizza = new ClamPizza();
    } else if (type === "veggie") {
      pizza = new VeggiePizza();
    }

    return pizza ?? new DefaultPizza();
  }
}
