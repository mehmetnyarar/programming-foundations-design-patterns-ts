import { Duck } from "./Duck";

export class MallardDuck implements Duck {
  public quack() {
    console.log("Quack");
  }

  public fly() {
    console.log("I'm flying");
  }
}
