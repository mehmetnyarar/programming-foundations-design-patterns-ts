import { FlyNoWay } from "../fly";
import { MuteQuack } from "../quack";
import { Duck } from "./Duck";

export class DecoyDuck extends Duck {
  constructor() {
    super();

    this.setFlyBehavior(new FlyNoWay());
    this.setQuackBehavior(new MuteQuack());
  }

  display() {
    console.log("I'm a duck Decoy");
  }
}
