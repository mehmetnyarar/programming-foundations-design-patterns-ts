import { QuackBehavior } from "./QuackBehavior";

export class Squeak implements QuackBehavior {
  quack() {
    console.log("Squeak");
  }
}
