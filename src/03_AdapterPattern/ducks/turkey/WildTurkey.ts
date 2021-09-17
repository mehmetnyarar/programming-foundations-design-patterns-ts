import { Turkey } from "./Turkey";

export class WildTurkey implements Turkey {
  public gobble() {
    console.log("Gobble gobble");
  }

  public fly() {
    console.log("I'm flying a short distance");
  }
}
