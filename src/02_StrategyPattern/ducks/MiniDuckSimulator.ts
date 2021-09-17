import { DecoyDuck, MallarDuck, ModelDuck, RubberDuck } from "./duck";
import { FlyBehavior, FlyRocketPowered } from "./fly";
import { QuackBehavior } from "./quack";

export class MiniDuckSimulator {
  static main() {
    const mallard = new MallarDuck();

    const flyBehavior: FlyBehavior = { fly: () => console.log("I can't fly") };
    const quackBehavior: QuackBehavior = { quack: () => console.log("Squeak") };
    const rubberDuckie = new RubberDuck(flyBehavior, quackBehavior);

    const decoy = new DecoyDuck();
    const model = new ModelDuck();

    mallard.performQuack();
    rubberDuckie.performQuack();
    decoy.performQuack();

    model.performFly();
    model.setFlyBehavior(new FlyRocketPowered());
    model.performFly();
  }
}
