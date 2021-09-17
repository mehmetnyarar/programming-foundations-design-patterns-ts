import { QuackBehavior } from "./QuackBehavior";

export class Quack implements QuackBehavior {
  quack() {
    console.log("Quack");
  }
}
