import { QuackBehavior } from "./QuackBehavior";

export class MuteQuack implements QuackBehavior {
  quack() {
    console.log("<< Silence >>");
  }
}
