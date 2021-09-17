import { FlyBehavior, FlyNoWay } from "../fly";
import { QuackBehavior, Squeak } from "../quack";
import { Duck } from "./Duck";

export class RubberDuck extends Duck {
  constructor(flyBehavior?: FlyBehavior, quackBehavior?: QuackBehavior) {
    super();

    this.flyBehavior = flyBehavior ?? new FlyNoWay();
    this.quackBehavior = quackBehavior ?? new Squeak();
  }

  display() {
    console.log("I'm a rubber duckie");
  }
}
