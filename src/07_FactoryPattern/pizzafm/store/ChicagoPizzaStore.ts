import {
  Pizza,
  ChicagoStyleCheesePizza,
  ChicagoStyleClamPizza,
  ChicagoStylePepperoniPizza,
  ChicagoStyleVeggiePizza,
  DefaultPizza,
} from "../pizza";
import { PizzaStore } from "./PizzaStore";

export class ChicagoPizzaStore extends PizzaStore {
  createPizza(item: string): Pizza {
    if (item === "cheese") {
      return new ChicagoStyleCheesePizza();
    } else if (item === "veggie") {
      return new ChicagoStyleVeggiePizza();
    } else if (item === "clam") {
      return new ChicagoStyleClamPizza();
    } else if (item === "pepperoni") {
      return new ChicagoStylePepperoniPizza();
    } else return new DefaultPizza();
  }
}
