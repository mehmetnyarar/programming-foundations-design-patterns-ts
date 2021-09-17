import { FlyBehavior } from "./FlyBehavior";

export class FlyNoWay implements FlyBehavior {
  fly() {
    console.log("I can't fly");
  }
}
