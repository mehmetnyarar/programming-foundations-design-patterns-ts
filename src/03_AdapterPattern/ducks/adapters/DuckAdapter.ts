import { random } from "lodash";
import { Duck } from "../duck";
import { Turkey } from "../turkey";

export class DuckAdapter implements Turkey {
  duck!: Duck;

  constructor(duck: Duck) {
    this.duck = duck;
  }

  public gobble() {
    this.duck.quack();
  }

  public fly() {
    if (random(5) === 0) {
      this.duck.fly();
    }
  }
}
