import { Duck, MallardDuck } from "./duck";
import { TurkeyAdapter } from "./adapters";
import { WildTurkey } from "./turkey";

export class DuckTestDrive {
  static main() {
    const duck = new MallardDuck();

    const turkey = new WildTurkey();
    const turkeyAdapter = new TurkeyAdapter(turkey);

    console.log("The Turkey says...");
    turkey.gobble();
    turkey.fly();

    console.log("\nThe Duck says...");
    DuckTestDrive.testDuck(duck);

    console.log("\nThe TurkeyAdapter says...");
    DuckTestDrive.testDuck(turkeyAdapter);
  }

  static testDuck(duck: Duck) {
    duck.quack();
    duck.fly();
  }
}
