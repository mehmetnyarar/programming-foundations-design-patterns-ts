import { Beverage } from "../beverages";

export abstract class CondimentDecorator extends Beverage {
  public abstract getDescription(): string;
}
