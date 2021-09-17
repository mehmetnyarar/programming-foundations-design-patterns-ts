import { DuckAdapter } from "./adapters";
import { MallardDuck } from "./duck";

export class TurkeyTestDrive {
  static main() {
    const duck = new MallardDuck();
    const duckAdapter = new DuckAdapter(duck);

    for (let i = 0; i < 10; i++) {
      console.log("The DuckAdapter says...");
      duckAdapter.gobble();
      duckAdapter.fly();
    }
  }
}
