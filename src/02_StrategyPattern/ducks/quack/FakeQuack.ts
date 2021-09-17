import { QuackBehavior } from "./QuackBehavior";

export class FakeQuack implements QuackBehavior {
  quack() {
    console.log("Qwak");
  }
}
