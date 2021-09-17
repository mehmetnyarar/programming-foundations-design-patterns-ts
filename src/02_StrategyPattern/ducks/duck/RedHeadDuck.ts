import { FlyWithWings } from "../fly";
import { Quack } from "../quack";
import { Duck } from "./Duck";

export class RedHeadDuck extends Duck {
  constructor() {
    super();

    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }

  display() {
    console.log("I'm a real Red Headed duck");
  }
}
