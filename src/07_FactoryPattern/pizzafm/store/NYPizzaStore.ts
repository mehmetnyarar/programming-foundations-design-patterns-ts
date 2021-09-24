import {
  DefaultPizza,
  NYStyleCheesePizza,
  NYStyleClamPizza,
  NYStylePepperoniPizza,
  NYStyleVeggiePizza,
  Pizza,
} from "../pizza";
import { PizzaStore } from "./PizzaStore";

export class NYPizzaStore extends PizzaStore {
  createPizza(item: string): Pizza {
    if (item === "cheese") {
      return new NYStyleCheesePizza();
    } else if (item === "veggie") {
      return new NYStyleVeggiePizza();
    } else if (item === "clam") {
      return new NYStyleClamPizza();
    } else if (item === "pepperoni") {
      return new NYStylePepperoniPizza();
    } else return new DefaultPizza();
  }
}
