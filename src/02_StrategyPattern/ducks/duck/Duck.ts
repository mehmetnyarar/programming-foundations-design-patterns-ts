import { FlyBehavior } from "../fly/FlyBehavior";
import { QuackBehavior } from "../quack/QuackBehavior";

export abstract class Duck {
  flyBehavior!: FlyBehavior;
  quackBehavior!: QuackBehavior;

  constructor() {}

  public setFlyBehavior(fb: FlyBehavior) {
    this.flyBehavior = fb;
  }

  public setQuackBehavior(qb: QuackBehavior) {
    this.quackBehavior = qb;
  }

  abstract display(): void;

  public performFly(): void {
    this.flyBehavior.fly();
  }

  public performQuack(): void {
    this.quackBehavior.quack();
  }

  public swim() {
    console.log("All ducks float, even decoys!");
  }
}
