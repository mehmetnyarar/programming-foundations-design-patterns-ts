import { FlyWithWings } from "../fly";
import { Quack } from "../quack";
import { Duck } from "./Duck";

export class MallarDuck extends Duck {
  constructor() {
    super();

    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }

  public display() {
    console.log("I'm a real Mallard duck");
  }
}
