import { FlyNoWay } from "../fly";
import { Quack } from "../quack";
import { Duck } from "./Duck";

export class ModelDuck extends Duck {
  constructor() {
    super();

    this.setFlyBehavior(new FlyNoWay());
    this.setQuackBehavior(new Quack());
  }

  display() {
    console.log("I'm a model duck");
  }
}
